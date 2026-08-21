import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import parser from "bibtex-parser";

const SOURCE_BIB_PATH = path.resolve("static/adoption.bib");
const OUTPUT_JSON_PATH = path.resolve("src/data/adoption.generated.json");

function normalizeWhitespace(value) {
  return value.replace(/\s+/g, " ").trim();
}

function normalizeAuthors(value) {
  return normalizeWhitespace(value).replace(/(?:,\s*)?\s+and\s+/gi, ", ");
}

function parseBibTeX(input) {
  const parsed = parser(input);
  const entries = [];

  Object.entries(parsed).forEach(([key, entry]) => {
    const fields = {};
    const normalizedType = (entry.entryType ?? "unknown").toLowerCase();
    const type =
      normalizedType === "article"
        ? "article"
        : normalizedType === "inproceedings"
          ? "inproceedings"
          : normalizedType;

    Object.entries(entry).forEach(([name, value]) => {
      if (name === "entryType") {
        return;
      }

      if (typeof value === "string") {
        fields[name.toLowerCase()] = normalizeWhitespace(value);
      } else if (Array.isArray(value)) {
        fields[name.toLowerCase()] = value.join(", ");
      } else if (value && typeof value === "object") {
        fields[name.toLowerCase()] = value.value ?? "";
      } else {
        fields[name.toLowerCase()] = value ?? "";
      }
    });

    fields.author = fields.author ? normalizeAuthors(fields.author) : "";

    entries.push({
      type,
      key,
      fields,
    });
  });

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
    osfLink: fields.osflink ?? "",
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
    record.year.trim().length > 0 &&
    record.abstract.trim().length > 0
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
      `Skipped ${skipped.length} entries missing required fields (title, author, year, abstract): ${skipped.join(", ")}`,
    );
  }
}

main().catch((error) => {
  console.error("Failed to generate adoption data:", error);
  process.exit(1);
});

export { parseBibTeX, buildAdoptionRecord, hasRequiredFields };
