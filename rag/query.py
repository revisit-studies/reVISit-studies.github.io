#!/usr/bin/env python3
import argparse
import json
import os
import re
import urllib.request
from pathlib import Path
from typing import Dict, List, Tuple, Any

import faiss
from rank_bm25 import BM25Okapi
from sentence_transformers import SentenceTransformer


def load_chunks(path: Path) -> List[Dict[str, Any]]:
    chunks = []
    with open(path, "r", encoding="utf-8") as file:
        for line in file:
            if line.strip():
                chunks.append(json.loads(line))
    return chunks


def tokenize(text: str) -> List[str]:
    return re.findall(r"[a-zA-Z0-9_]+", text.lower())


def normalize_scores(scores: List[float]) -> List[float]:
    if len(scores) == 0:
        return []
    min_s = min(scores)
    max_s = max(scores)
    if max_s - min_s < 1e-9:
        return [0.0 for _ in scores]
    return [(score - min_s) / (max_s - min_s) for score in scores]


def hybrid_search(
    query: str,
    chunks: List[Dict[str, Any]],
    index: faiss.IndexFlatIP,
    model: SentenceTransformer,
    top_k: int,
    alpha: float
) -> List[Tuple[int, float]]:
    query_vec = model.encode([query], convert_to_numpy=True)
    faiss.normalize_L2(query_vec)
    vec_scores, vec_ids = index.search(query_vec, top_k)
    vec_scores = vec_scores[0].tolist()
    vec_ids = vec_ids[0].tolist()

    tokenized = [tokenize(chunk["text"]) for chunk in chunks]
    bm25 = BM25Okapi(tokenized)
    bm25_scores = bm25.get_scores(tokenize(query))

    vec_norm = normalize_scores(vec_scores)
    bm25_norm = normalize_scores(bm25_scores)

    combined_scores: Dict[int, float] = {}
    for idx, score in enumerate(bm25_norm):
        combined_scores[idx] = (1 - alpha) * score
    for local_rank, doc_id in enumerate(vec_ids):
        if doc_id < 0:
            continue
        combined_scores[doc_id] = combined_scores.get(doc_id, 0.0) + alpha * vec_norm[local_rank]

    ranked = sorted(combined_scores.items(), key=lambda item: item[1], reverse=True)
    return ranked[:top_k]


def format_result(chunk: Dict[str, Any], max_chars: int) -> str:
    text = chunk["text"].strip().replace("\n", " ")
    snippet = text[:max_chars] + ("..." if len(text) > max_chars else "")
    heading = chunk.get("heading", "root")
    return f"{chunk['path']} | {heading}\n  {snippet}"

def build_prompt(query: str, chunks: List[Dict[str, Any]]) -> str:
    sources = []
    for idx, chunk in enumerate(chunks, start=1):
        heading = chunk.get("heading", "root")
        sources.append(f"[{idx}] {chunk['path']} | {heading}\n{chunk['text'].strip()}")
    sources_block = "\n\n".join(sources)
    return (
        "You are a helpful assistant for the ReVISit docs.\n"
        "Answer using only the provided sources. If the answer is not in the sources, say so.\n"
        "Cite sources like [1], [2] in your answer.\n\n"
        f"Question: {query}\n\n"
        f"Sources:\n{sources_block}\n"
    )


def ollama_generate(prompt: str, model: str, base_url: str, temperature: float) -> str:
    payload = {
        "model": model,
        "prompt": prompt,
        "stream": False,
        "options": {
            "temperature": temperature
        }
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        url=f"{base_url.rstrip('/')}/api/generate",
        data=data,
        headers={"Content-Type": "application/json"},
        method="POST"
    )
    with urllib.request.urlopen(req, timeout=300) as response:
        body = response.read().decode("utf-8")
    result = json.loads(body)
    return result.get("response", "").strip()


def main() -> None:
    parser = argparse.ArgumentParser(description="Query a local RAG index for ReVISit docs.")
    parser.add_argument("query", help="User question.")
    parser.add_argument("--index", default="rag-data", help="Index directory.")
    parser.add_argument("--model", default="sentence-transformers/all-MiniLM-L6-v2", help="Embedding model name.")
    parser.add_argument("--ollama-model", default=os.getenv("OLLAMA_MODEL", "gemma3"), help="Ollama model name.")
    parser.add_argument("--ollama-url", default=os.getenv("OLLAMA_URL", "http://localhost:11434"), help="Ollama base URL.")
    parser.add_argument("--temperature", type=float, default=0.2, help="Ollama temperature.")
    parser.add_argument("--top-k", type=int, default=5, help="Number of results to show.")
    parser.add_argument("--alpha", type=float, default=0.6, help="Weight for vector vs BM25 scores.")
    parser.add_argument("--max-chars", type=int, default=260, help="Snippet length.")
    mode_group = parser.add_mutually_exclusive_group()
    mode_group.add_argument("--search", action="store_true", help="Retrieve chunks only (default).")
    mode_group.add_argument("--answer", action="store_true", help="Generate an answer with Ollama.")
    args = parser.parse_args()

    index_dir = Path(args.index)
    chunks = load_chunks(index_dir / "chunks.jsonl")
    index = faiss.read_index(str(index_dir / "index.faiss"))
    model = SentenceTransformer(args.model)

    results = hybrid_search(args.query, chunks, index, model, args.top_k, args.alpha)
    selected_chunks = [chunks[doc_id] for doc_id, _ in results]

    if args.answer:
        prompt = build_prompt(args.query, selected_chunks)
        answer = ollama_generate(prompt, args.ollama_model, args.ollama_url, args.temperature)
        print(f"Question: {args.query}\n")
        print("Answer:")
        print(answer)
        print("\nSources:")
        for idx, chunk in enumerate(selected_chunks, start=1):
            print(f"[{idx}] {chunk['path']} | {chunk.get('heading', 'root')}")
    else:
        print(f"Query: {args.query}\n")
        for rank, (doc_id, score) in enumerate(results, start=1):
            chunk = chunks[doc_id]
            print(f"{rank}. score={score:.3f}")
            print(format_result(chunk, args.max_chars))
            print()


if __name__ == "__main__":
    main()
