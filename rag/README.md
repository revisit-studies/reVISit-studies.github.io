# Local RAG (ReVISit Docs)

This folder contains a simple, local RAG pipeline for answering code-level questions
using the documentation and site source in this repo.

## Setup
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r rag/requirements.txt
```

## Build the index
```bash
python rag/build_index.py --config rag/config.json --output rag-data
```

## Query the index
```bash
python rag/query.py "How do I add a new doc page?" --index rag-data
```

## Generate an answer with Ollama
Prereqs:
```bash
ollama serve
ollama pull gemma3
```

Run with answer mode:
```bash
python rag/query.py "How do I add a new doc page?" --index rag-data --answer
```

## Evaluate retrieval
```bash
python rag/eval.py --index rag-data --queries rag/eval_queries.json
```

## Notes
- By default, the index includes only current docs in `docs/` plus key site files.
- To include historical docs, set `includeVersionedDocs` to `true` in `rag/config.json`.
