# ReVISit Docusaurus conventions

Follow patterns from neighboring pages before applying these defaults.

## Structure and accessibility

- Use descriptive headings in logical order, meaningful links, active voice, and exact UI labels or verified accessible names.
- Do not rely on screenshot color or positioning as the sole way to communicate an instruction.
- Describe keyboard behavior only when verified. Keep essential information in text; add purposeful alt text to images.
- When adding a page, inspect sidebar configuration and nearby indexes. Make the new guide discoverable.

## Code examples

- Use fenced blocks with a correct language identifier. For snippets from files, use Docusaurus fence metadata such as `title="public/study-name/config.json"`.
- Provide necessary imports, prerequisites, and setup for runnable examples; say when a snippet is partial.
- Mark placeholder values clearly. Verify keys, types, and defaults against the target version's schema and runtime implementation.

## Admonitions

Use only when the added prominence improves comprehension. Do not bury required steps inside admonitions.

- `note`: background or terminology. Preserve `:::note[Reference]` for paper citations.
- `info`: helpful defaults, expected behavior, limitations, or alternatives.
- `warning`: tangible errors, failed tasks, or misleading results; state cause, consequence, and mitigation.
- `danger`: serious or hard-to-reverse harm, including permanent data loss, unauthorized access, or disclosure of research data.

Avoid warning/danger for mere emphasis. Put warnings before risky steps.

## StructuredLinks

At the end of relevant feature pages, use the existing `StructuredLinks` component to gather verified links. Update an existing block rather than adding a duplicate. Import once when needed:

```tsx
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';
```

Use `demoLinks` for public demos, `codeLinks` for corresponding source, and `referenceLinks` for TypeDoc or authoritative external references. Prefer canonical public demo URLs such as `https://revisit.dev/study/demo-form-elements` and canonical GitHub links on `main` for published source destinations; verify each actual URL. Match pairs as `<Feature> Demo` / `<Feature> Code` where appropriate. Omit empty categories and the entire component if no verified links exist. Confirm relative links resolve from the rendered page. Do not place prerequisites or essential instructions only inside `StructuredLinks`.

## Images

Save new page-specific images in `img/<document-basename>/` alongside the documentation file, e.g. `docs/designing-studies/img/applying-style/button-colors.png` for `docs/designing-studies/applying-style.md`. Reference relatively: `![Study with custom button colors](./img/applying-style/button-colors.png)`. Do not reference an image before it exists.
