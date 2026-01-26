#!/usr/bin/env python3
import argparse
import json
from pathlib import Path

from query import hybrid_search, load_chunks
import faiss
from sentence_transformers import SentenceTransformer


def main() -> None:
    parser = argparse.ArgumentParser(description="Run a small query set to spot retrieval issues.")
    parser.add_argument("--index", default="rag-data", help="Index directory.")
    parser.add_argument("--queries", default="rag/eval_queries.json", help="Query set JSON.")
    parser.add_argument("--top-k", type=int, default=5, help="Number of results to show.")
    parser.add_argument("--alpha", type=float, default=0.6, help="Weight for vector vs BM25 scores.")
    args = parser.parse_args()

    index_dir = Path(args.index)
    chunks = load_chunks(index_dir / "chunks.jsonl")
    index = faiss.read_index(str(index_dir / "index.faiss"))
    model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

    with open(args.queries, "r", encoding="utf-8") as file:
        queries = json.load(file)["queries"]

    for query in queries:
        print("=" * 80)
        print(f"Query: {query}")
        results = hybrid_search(query, chunks, index, model, args.top_k, args.alpha)
        for rank, (doc_id, score) in enumerate(results, start=1):
            chunk = chunks[doc_id]
            print(f"{rank}. score={score:.3f} | {chunk['path']} | {chunk.get('heading', 'root')}")


if __name__ == "__main__":
    main()
