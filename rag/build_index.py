#!/usr/bin/env python3
import argparse
import json
import os
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable, List, Dict, Any, Tuple

import faiss
from sentence_transformers import SentenceTransformer


@dataclass
class Chunk:
    text: str
    path: str
    heading: str


def load_config(path: str) -> Dict[str, Any]:
    with open(path, "r", encoding="utf-8") as file:
        return json.load(file)


def normalize_path(path: str) -> str:
    return path.replace("\\", "/")


def is_hidden(path: Path) -> bool:
    return any(part.startswith(".") for part in path.parts)


def should_exclude(path: Path, exclude_paths: List[str]) -> bool:
    normalized = normalize_path(str(path))
    return any(normalized.startswith(normalize_path(exclude)) for exclude in exclude_paths)


def iter_files(root: Path, include_paths: List[str], exclude_paths: List[str], extensions: List[str]) -> Iterable[Path]:
    for rel in include_paths:
        target = root / rel
        if target.is_file():
            if target.suffix in extensions:
                yield target
            continue
        if not target.exists():
            continue
        for path in target.rglob("*"):
            if not path.is_file():
                continue
            if is_hidden(path):
                continue
            if path.suffix not in extensions:
                continue
            rel_path = path.relative_to(root)
            if should_exclude(rel_path, exclude_paths):
                continue
            yield path


def read_text(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return path.read_text(encoding="latin-1")


def split_markdown(text: str, max_chars: int, overlap_chars: int) -> List[Tuple[str, str]]:
    sections: List[Tuple[str, str]] = []
    current_heading = "root"
    buffer: List[str] = []
    for line in text.splitlines():
        if re.match(r"^#{1,6}\\s+", line):
            if buffer:
                sections.append((current_heading, "\n".join(buffer).strip()))
                buffer = []
            current_heading = line.strip()
        buffer.append(line)
    if buffer:
        sections.append((current_heading, "\n".join(buffer).strip()))

    chunks: List[Tuple[str, str]] = []
    for heading, section_text in sections:
        chunks.extend(split_text(section_text, max_chars, overlap_chars, heading))
    return chunks


def split_text(text: str, max_chars: int, overlap_chars: int, heading: str) -> List[Tuple[str, str]]:
    if len(text) <= max_chars:
        return [(heading, text)]
    chunks = []
    start = 0
    while start < len(text):
        end = min(len(text), start + max_chars)
        chunk = text[start:end].strip()
        if chunk:
            chunks.append((heading, chunk))
        if end == len(text):
            break
        start = max(0, end - overlap_chars)
    return chunks


def chunk_file(path: Path, max_chars: int, overlap_chars: int) -> List[Chunk]:
    text = read_text(path)
    if not text.strip():
        return []
    if path.suffix in {".md", ".mdx"}:
        heading_chunks = split_markdown(text, max_chars, overlap_chars)
    else:
        heading_chunks = split_text(text, max_chars, overlap_chars, "root")
    rel_path = normalize_path(str(path))
    return [Chunk(text=chunk, path=rel_path, heading=heading) for heading, chunk in heading_chunks]


def build_index(chunks: List[Chunk], model_name: str) -> Tuple[faiss.IndexFlatIP, List[List[float]]]:
    model = SentenceTransformer(model_name)
    embeddings = model.encode([chunk.text for chunk in chunks], convert_to_numpy=True, show_progress_bar=True)
    faiss.normalize_L2(embeddings)
    index = faiss.IndexFlatIP(embeddings.shape[1])
    index.add(embeddings)
    return index, embeddings.tolist()


def save_output(output_dir: Path, index: faiss.IndexFlatIP, chunks: List[Chunk]) -> None:
    output_dir.mkdir(parents=True, exist_ok=True)
    faiss.write_index(index, str(output_dir / "index.faiss"))
    with open(output_dir / "chunks.jsonl", "w", encoding="utf-8") as file:
        for chunk in chunks:
            file.write(json.dumps({
                "path": chunk.path,
                "heading": chunk.heading,
                "text": chunk.text
            }) + "\n")


def main() -> None:
    parser = argparse.ArgumentParser(description="Build a local RAG index for the ReVISit docs.")
    parser.add_argument("--config", default="rag/config.json", help="Path to RAG config JSON.")
    parser.add_argument("--output", default="rag-data", help="Directory to write index files.")
    parser.add_argument("--model", default="sentence-transformers/all-MiniLM-L6-v2", help="Embedding model name.")
    args = parser.parse_args()

    config = load_config(args.config)
    root = Path(config.get("projectRoot", ".")).resolve()
    include_paths = config.get("includePaths", [])
    exclude_paths = config.get("excludePaths", [])
    if config.get("includeVersionedDocs"):
        include_paths = include_paths + ["versioned_docs"]
    extensions = config.get("extensions", [".md", ".ts"])
    chunk_cfg = config.get("chunk", {})
    max_chars = int(chunk_cfg.get("maxChars", 4000))
    overlap_chars = int(chunk_cfg.get("overlapChars", 400))

    files = list(iter_files(root, include_paths, exclude_paths, extensions))
    chunks: List[Chunk] = []
    for path in files:
        chunks.extend(chunk_file(path, max_chars, overlap_chars))

    if not chunks:
        raise SystemExit("No chunks found; check your config include/exclude paths.")

    index, _ = build_index(chunks, args.model)
    save_output(Path(args.output), index, chunks)
    print(f"Indexed {len(chunks)} chunks into {args.output}.")


if __name__ == "__main__":
    main()
