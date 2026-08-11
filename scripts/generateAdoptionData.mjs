import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const SOURCE_BIB_PATH = path.resolve("static/adoption.bib");
const OUTPUT_JSON_PATH = path.resolve("src/data/adoption.generated.json");

function normalizeWhitespace(value) {
  return value.replace(/\s+/g, " ").trim();
}

function normalizeAuthors(value) {
  return normalizeWhitespace(value).replace(/\s+and\s+/gi, ", ");
}

function unescapeBibValue(value) {
  return value.replace(/\\([{}"\\])/g, "$1");
}

function findTopLevelComma(text) {
  let depth = 0;
  let inQuote = false;

  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    const prev = text[i - 1];

    if (inQuote) {
      if (ch === '"' && prev !== "\\") {
        inQuote = false;
      }
      continue;
    }

    if (ch === '"') {
      inQuote = true;
      continue;
    }

    if (ch === "{") {
      depth += 1;
      continue;
    }

    if (ch === "}") {
      depth = Math.max(0, depth - 1);
      continue;
    }

    if (ch === "," && depth === 0) {
      return i;
    }
  }

  return -1;
}

function parseBibValue(text, startIndex) {
  let i = startIndex;

  while (i < text.length && /\s/.test(text[i])) {
    i += 1;
  }

  if (i >= text.length) {
    return { value: "", nextIndex: i };
  }

  const startChar = text[i];

  if (startChar === "{") {
    let depth = 0;
    const valueStart = i + 1;

    for (; i < text.length; i += 1) {
      const ch = text[i];
      const prev = text[i - 1];

      if (ch === "{" && prev !== "\\") {
        depth += 1;
      } else if (ch === "}" && prev !== "\\") {
        depth -= 1;
        if (depth === 0) {
          const raw = text.slice(valueStart, i);
          return {
            value: normalizeWhitespace(unescapeBibValue(raw)),
            nextIndex: i + 1,
          };
        }
      }
    }

    throw new Error("Unterminated braced BibTeX value.");
  }

  if (startChar === '"') {
    const valueStart = i + 1;
    i += 1;

    for (; i < text.length; i += 1) {
      const ch = text[i];
      const prev = text[i - 1];
      if (ch === '"' && prev !== "\\") {
        const raw = text.slice(valueStart, i);
        return {
          value: normalizeWhitespace(unescapeBibValue(raw)),
          nextIndex: i + 1,
        };
      }
    }

    throw new Error("Unterminated quoted BibTeX value.");
  }

  const valueStart = i;
  for (; i < text.length; i += 1) {
    if (text[i] === ",") {
      break;
    }
  }

  const raw = text.slice(valueStart, i);
  return {
    value: normalizeWhitespace(unescapeBibValue(raw)),
    nextIndex: i,
  };
}

function parseFields(fieldText) {
  const fields = {};
  let i = 0;

  while (i < fieldText.length) {
    while (i < fieldText.length && /[\s,]/.test(fieldText[i])) {
      i += 1;
    }

    if (i >= fieldText.length) {
      break;
    }

    const nameStart = i;
    while (i < fieldText.length && /[A-Za-z0-9_:-]/.test(fieldText[i])) {
      i += 1;
    }

    const name = fieldText.slice(nameStart, i).toLowerCase();
    if (!name) {
      break;
    }

    while (i < fieldText.length && /\s/.test(fieldText[i])) {
      i += 1;
    }

    if (fieldText[i] !== "=") {
      break;
    }

    i += 1;

    const { value, nextIndex } = parseBibValue(fieldText, i);
    fields[name] = value;
    i = nextIndex;

    while (i < fieldText.length && /\s/.test(fieldText[i])) {
      i += 1;
    }

    if (fieldText[i] === ",") {
      i += 1;
    }
  }

  return fields;
}

function parseBibTeX(input) {
  const entries = [];
  let i = 0;

  while (i < input.length) {
    const atIndex = input.indexOf("@", i);
    if (atIndex === -1) {
      break;
    }

    let cursor = atIndex + 1;
    while (cursor < input.length && /\s/.test(input[cursor])) {
      cursor += 1;
    }

    const typeStart = cursor;
    while (cursor < input.length && /[A-Za-z]/.test(input[cursor])) {
      cursor += 1;
    }

    const type = input.slice(typeStart, cursor).toLowerCase();

    while (cursor < input.length && /\s/.test(input[cursor])) {
      cursor += 1;
    }

    const open = input[cursor];
    if (open !== "{" && open !== "(") {
      i = cursor + 1;
      continue;
    }

    const close = open === "{" ? "}" : ")";
    cursor += 1;

    const bodyStart = cursor;
    let depth = 1;

    while (cursor < input.length && depth > 0) {
      const ch = input[cursor];
      if (ch === open) {
        depth += 1;
      } else if (ch === close) {
        depth -= 1;
      }
      cursor += 1;
    }

    if (depth !== 0) {
      throw new Error(`Unterminated BibTeX entry near index ${atIndex}.`);
    }

    const body = input.slice(bodyStart, cursor - 1);
    const splitIndex = findTopLevelComma(body);
    if (splitIndex === -1) {
      i = cursor;
      continue;
    }

    const key = body.slice(0, splitIndex).trim();
    const fieldText = body.slice(splitIndex + 1);
    const fields = parseFields(fieldText);

    entries.push({
      type,
      key,
      fields,
    });

    i = cursor;
  }

  return entries;
}

function buildAdoptionRecord(entry, originalIndex) {
  const { fields, key } = entry;

  const title = fields.title ?? "";
  const authors = fields.author ? normalizeAuthors(fields.author) : "";
  const year = fields.year ?? "";
  const venue = fields.journal ?? fields.booktitle ?? "";

  return {
    key,
    title,
    authors,
    year,
    paperUrl: fields.url ?? "",
    revisitStudyUrl: fields.studyurl ?? "",
    abstract: fields.abstract ?? "",
    sourceCodeLink: fields.sourcecodelink ?? "",
    revisitVersion: fields.revisitversion ?? "",
    venue,
    doi: fields.doi ?? "",
    initialIndex: originalIndex,
  };
}

function hasRequiredFields(record) {
  return (
    record.title.trim().length > 0 &&
    record.authors.trim().length > 0 &&
    record.year.trim().length > 0
  );
}

async function main() {
  const sourceText = await readFile(SOURCE_BIB_PATH, "utf8");
  const entries = parseBibTeX(sourceText);

  const adoption = [];
  const skipped = [];

  entries.forEach((entry, index) => {
    const record = buildAdoptionRecord(entry, index);
    if (!hasRequiredFields(record)) {
      skipped.push(entry.key || `entry-${index + 1}`);
      return;
    }
    adoption.push(record);
  });

  adoption.sort((a, b) => {
    const yearDiff = Number(b.year) - Number(a.year);
    if (yearDiff !== 0) {
      return yearDiff;
    }
    return b.initialIndex - a.initialIndex;
  });

  const output = adoption.map(({ initialIndex, ...rest }) => rest);

  await mkdir(path.dirname(OUTPUT_JSON_PATH), { recursive: true });
  await writeFile(OUTPUT_JSON_PATH, `${JSON.stringify(output, null, 2)}\n`);

  console.log(
    `Generated ${path.relative(process.cwd(), OUTPUT_JSON_PATH)} with ${output.length} entries from ${entries.length} BibTeX records.`,
  );

  if (skipped.length > 0) {
    console.warn(
      `Skipped ${skipped.length} entries missing required fields (title, author, year): ${skipped.join(", ")}`,
    );
  }
}

main().catch((error) => {
  console.error("Failed to generate adoption data:", error);
  process.exit(1);
});
