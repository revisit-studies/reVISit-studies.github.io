---
name: write-documentation
description: Create ReVISit user documentation or update existing documentation for a pull request, using its description, linked issues, and supporting code and schemas. Use for user guides and configuration examples.
---

# Write Documentation

Help ReVISit users complete a concrete task with accurate explanations and usable examples. This skill contains the project's documentation context and working rules. Read applicable repository instructions when present, and honor the user's explicit task instructions.

## Project context

ReVISit helps researchers design, deploy, conduct, and analyze user studies involving interactive data visualizations. It supports complex interactions and study data while aiming to make these studies accessible to researchers beyond the visualization community. Documentation should help Study Designers configure studies, support Participants' study experience, and help Analysts understand collected data.

The project's documented technology baseline is:

- Documentation: Docusaurus and Vite.
- Study application: Yarn, React 18, TypeScript, Vite, and Mantine UI.
- Storage and database backends: Firebase or Supabase, selected through `.env` configuration.

Study Configs are schema-backed configurations, commonly written in JSON, that define study components, tasks, data sources, and study flow. Start at the study repository's `src/parser/parser.ts` and follow imports and exports to the actual type definitions and validation schema for the documentation target version.

## Terminology

Use these terms consistently in prose while preserving exact identifiers and labels in code and UI references:

| Term           | Meaning                                                                                |
| -------------- | -------------------------------------------------------------------------------------- |
| Study Designer | The individual who creates and configures the user study.                              |
| Participant    | The user who takes part in the study.                                                  |
| Analyst        | The individual who reviews and analyzes collected data, in the platform or externally. |
| Study Config   | The configuration file defining the parameters and settings of a user study.           |

## Purpose and scope

- The primary tasks are creating new user documentation and updating existing documentation to reflect a PR's changes.
- Identify the requested deliverable. Edit documentation files when requested; keep draft-only requests as drafts. Describe the resulting user workflow rather than retelling the PR's implementation history.
- Write only user-facing documentation for the requested work. Do not add internal development or architecture documents, or modify application implementation as part of a documentation task.

## Working boundaries

- Do not run Git commands unless the user asks for them. This includes read-only Git commands as well as branch changes, commits, and pushes.
- The default deliverable is local documentation edits in the user's current working folder and branch, preserving existing changes. A documentation request alone does not authorize commits, pushes, PR creation, branch changes, or worktree creation. These boundaries apply equally to commands, tools, and APIs. An explicit instruction such as "do not push" remains in effect until the user changes it.
- Read relevant GitHub PRs and linked issues to gather evidence, but do not create or modify PRs or issues, post comments, or change their state as part of this workflow.
- TypeDoc is generated from the study application for each release and included as reference material. Assume that process is handled separately: do not generate, add, or edit TypeDoc output. Link to relevant reference entries instead, and state this assumption in the completion report when the change relies on updated TypeDoc material.

## Audience

- Write for ReVISit users, primarily researchers and Study Designers, including people without a computer science background.
- Basic familiarity with JSON or editing a website is a reasonable starting point, but do not equate it with programming expertise. Provide enough context and examples for readers with less development experience to follow the task.
- Use plain language and concrete steps. Do not assume familiarity with React, programming jargon, or development workflows.

## Documentation principles

Apply these principles when deciding what to include and how to organize it. They guide individual pages without requiring a repository-wide restructuring or a fixed page template.

| Principle                                       | Writing rule                                                                                                                                                                                                                                                                         |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Start with the reader's purpose                 | Identify whether the page primarily supports learning through practice (tutorial), completing a specific task (how-to), looking up precise definitions (reference), or understanding concepts (explanation). Keep that purpose clear and link to other kinds of content when needed. |
| Enable the reader to finish the task            | Provide the prerequisites, concrete actions, and expected results needed to complete the documented workflow. Show readers how to recognize successful progress.                                                                                                                     |
| Be simple and precise                           | Explain necessary technical terms in plain language while preserving exact UI labels, configuration keys, and code identifiers. Do not shorten instructions by omitting steps the audience needs.                                                                                    |
| Make information easy to find                   | Use descriptive headings, put the main point early in each paragraph, and use meaningful link text that identifies the destination instead of "here" or "this page".                                                                                                                 |
| Use examples for representative tasks           | Start with common use cases and focused examples. Do not enumerate every possible combination of options in a guide; link to reference material for exhaustive definitions.                                                                                                          |
| Link details while preserving necessary context | Avoid duplicating long explanations. Repeat short prerequisites or critical warnings when readers need them at the point of action, so following the task does not require constant navigation between pages.                                                                        |

These principles adapt selected guidance from [Diátaxis](https://diataxis.fr/), [Diátaxis tutorials](https://diataxis.fr/tutorials/), [Google's documentation style guide](https://developers.google.com/style/highlights), [Microsoft's style and voice guide](https://learn.microsoft.com/en-us/style-guide/top-10-tips-style-voice), and [Write the Docs documentation principles](https://www.writethedocs.org/guide/writing/docs-principles/). Use the concrete rules above; these references do not require adopting every convention in those guides.

## Inputs and evidence

- Start with the supplied PR link, PR description, or related issue. Read the linked issue when available to understand the user's problem and intended behavior. Accept pasted descriptions as input; a PR link is not required.
- Read related existing documentation to understand the current explanation and conventions. For example, before documenting a new component type, read the guides for other component types.
- If the PR or issue does not provide enough detail, inspect the relevant implementation in the ReVISit study repository. Select the source branch using the release and version mapping below. Do not combine behavior from different branches into one example.
- When creating documentation or changing configuration properties, defaults, or examples in existing documentation, start at `src/parser/parser.ts` on the selected study branch. For example, use `https://raw.githubusercontent.com/revisit-studies/study/main/src/parser/parser.ts` for released behavior or the equivalent URL with `dev` for development behavior. Follow imports and exports to the actual type definitions and locate the validation schema; do not assume the entry file contains all definitions or that their paths stay fixed. Use the target version's types, schema, and relevant implementation to verify configuration names, supported values, defaults, and behavior; do not rely on old examples alone.
- When a PR changes documented behavior, update the affected explanations, examples, warnings, and links together. Replace obsolete instructions rather than leaving them alongside an appended correction. If migration guidance needs to describe earlier behavior, identify the versions it applies to and preserve older-version documentation within its intended scope.
- Select evidence according to the fact being documented:
  - Actual behavior: implementation on the target version, supported by tests or observed execution for that version and relevant conditions. A single observation may reflect an environment difference or a bug; it does not automatically establish intended or supported behavior.
  - Accepted configuration structure and types: the target version's schema and type definitions. Check implementation for runtime defaults and effects.
  - Change intent and background: merged PR descriptions and related issue discussions. Never present proposed issue behavior as implemented without evidence.
  - Existing explanations and writing conventions: existing documentation, which may be outdated.
- If only existing documentation is outdated and the target implementation and schema agree, correct it without asking the user to resolve that discrepancy. If implementation, schema, or same-version observations conflict in a way that changes the documented contract, do not choose an interpretation by assumption.
- If an ambiguity would change documented behavior, target version, file location, or task scope, stop the affected part and ask the user a specific question. Continue only work that is independent of that ambiguity; do not complete dependent content until it is resolved.

## Documentation version and working branch

- Determine the release status and version being documented from the user's request and available PR or release context. A PR's original base branch alone does not establish whether its changes have since been released.
- For changes already released on `study/main`, use `study/main` as the code and schema source; the corresponding documentation release is normally maintained on the documentation repository's `main` branch.
- For development changes on `study/dev`, identify the corresponding upcoming documentation version, such as `3.0`, and use `study/dev` as the code and schema source. `3.0` is an example, not a permanent default.
- Distinguish the documentation version from the working branch. A version request such as "3.0" selects the behavior, schema, and examples to document; make the edits in the user's current working folder and branch unless the user explicitly requests a different working location. A version request alone does not authorize switching branches or creating a worktree.
- Follow an explicitly requested version or working branch when supplied. If the release status or documentation version is unclear, ask the user rather than defaulting to `dev` or inventing a version. Do not ask merely because the current working branch has a different name from the documentation version.
- Keep the documented behavior, implementation, schema, and examples aligned with the same release, regardless of the working branch's name. Follow the working boundaries above for any repository operation.

## Location and structure

- Use the related documentation reviewed during evidence gathering to choose the page's location and structure. Extend an existing page when it serves the task better than a new page.
- Confirm which documentation directory should receive the target version's edits in the current working folder. Do not copy changes into `versioned_docs/` unless the request includes those older versions. Creating a documentation version is a separate task requiring a user request.
- When adding a page, inspect the applicable sidebar configuration and related index pages. Update navigation entries where needed so readers can find it. This repository's `sidebars.ts` explicitly lists many guide pages, while some reference categories are autogenerated; do not assume adding a file always adds it to navigation. Necessary documentation navigation edits are within this skill's scope.

## Writing

- Use the language and terminology of the surrounding documentation.
- Prefer active voice and address the reader directly in procedures. Name the actor when explaining system behavior, and put conditions before the actions they govern. For example, write "If you use Firebase, ..." before the relevant instruction.
- Apply the audience guidance and documentation principles above. Avoid implementation details that do not help the reader complete or understand the task.
- Keep required steps and essential explanations in the main text rather than only in callouts or linked pages.
- When readers must choose between supported approaches, explain the relevant support, limitations, and trade-offs. Include an internal design rationale only when it helps them use the feature or make that choice.
- When a PR, issue, implementation, or observed execution establishes a problem relevant to the task, explain the symptom, cause or diagnostic check, and remedy in that order. Keep troubleshooting proportional to the task; do not invent "common errors" or require a troubleshooting section on every page.

## Accessibility

- Use a logical heading hierarchy that reflects the content structure; do not skip levels to obtain a visual style.
- Identify UI controls by visible labels or verified accessible names. Position, color, and icon appearance can supplement identification but must not be the only way to locate a control.
- Document verified keyboard-specific behavior when it matters to the workflow. Do not invent shortcuts or imply keyboard support that has not been confirmed.
- Write image alt text to convey the information the image is intended to teach, rather than merely listing visible objects. Keep essential instructions and results in text so a screenshot is not required to complete the task.

## Code blocks

- Every code block must have a descriptive title and an appropriate language identifier.
- In Docusaurus, use fence metadata such as `title="public/study-name/config.json"`. In other documentation systems, use the supported equivalent for a visible code-block title.
- For a file or a partial excerpt from a file, use only the actual filename or path as the title. Put explanations such as "Entry inside components" in the surrounding prose, not in the title. For commands or snippets without an associated file, use a short purpose-based title. Avoid vague titles such as "Code" or "Example".
- Keep examples minimal and consistent with the current schema and surrounding instructions. Say whether an example is a complete file or a partial snippet, and identify where it belongs.
- For examples presented as runnable, include the necessary imports, variable definitions, setup requirements, and execution location. Explicitly link to earlier steps when they supply that context. A focused partial example is appropriate for a small change when its insertion point is clear; do not expand every snippet into a complete application.
- Clearly identify values readers must replace. Do not present pseudocode or incomplete JSON as a directly usable configuration.

## Admonitions

Use four admonition types for new or rewritten content: `note`, `info`, `warning`, and `danger`. In Docusaurus, use the corresponding `:::note`, `:::info`, `:::warning`, or `:::danger` blocks. Choose by the information's purpose and the consequence of missing it.

| Format    | When to use it                                                                                                                                                                                     |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Main text | Required steps, prerequisites, and essential explanations.                                                                                                                                         |
| `note`    | Background, terminology clarification, or sources that explain context rather than guide an action. Preserve `:::note[Reference]` for paper citations.                                             |
| `info`    | Supplementary practical guidance: what behavior to expect, an optional alternative, or a shortcut that makes the task easier. Essential behavior and required steps still belong in the main text. |
| `warning` | A concrete condition that can cause a configuration error, failed task, or misleading result.                                                                                                      |
| `danger`  | A concrete risk of serious harm, such as permanent data loss, unauthorized access, or disclosure of research data.                                                                                 |

- Distinguish `note` from `info` by purpose: background or attribution belongs in `note`; practical usage guidance belongs in `info`. If neither needs a separate callout, use the main text.
- Do not introduce `tip` or `caution`. When revising an existing block, move optional tips to `info`, required instructions to the main text, and cautions to `warning` or `danger` based on the actual consequence. Intentional omission of an incomplete response is not automatically equivalent to permanently deleting collected data.
- Apply these conventions within the requested changes. Do not reclassify unrelated existing blocks or perform a repository-wide cleanup.
- Use admonitions only when they serve one of these purposes; a page does not need any.
- Do not use warnings merely to emphasize an important sentence.
- Prefer descriptive warning titles that identify the consequence or preventive action, rather than a generic title such as "Warning".
- For `warning` and `danger`, explain the triggering condition, consequence, and how to prevent or avoid it. Place the warning before the relevant action.
- Avoid redundant repetition between adjacent prose and an admonition. Repeat a short critical warning at the relevant action when readers may have skipped or entered after an earlier explanation.

## StructuredLinks

- Use the existing `StructuredLinks` component to collect relevant demos, demo source code, and references for a feature page when those resources exist. Update an existing block instead of adding another one.
- Import it once with `import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';`. Follow the existing feature-page convention of placing the component block at the end of the document. Insert it as MDX, not as a fenced code example.
- Each link entry has a descriptive `name` and a `url`. Use these categories:
  - `demoLinks`: the public demo for the documented feature, using the canonical URL convention below.
  - `codeLinks`: the corresponding demo's source file or directory, rather than an unrelated repository homepage.
  - `referenceLinks`: relevant TypeDoc types and authoritative external references, such as the CSS property reference for a styling guide.
- Include only relevant resources whose paths are grounded in the repository or deployment structure. All three props are optional; omit categories without links, and omit the component if none exist. Do not invent demo URLs or add placeholders to fill categories. A known public destination awaiting release is allowed as described below.
- Keep demo and code names concise and clearly paired: use "<Feature> Demo" and "<Feature> Code", such as "Form Elements Demo" and "Form Elements Code". Do not add "Development" for unreleased features. Name type references using their actual type names, such as "UIConfig".
- In reader-facing documentation, use canonical public demo URLs without `/dev/`, such as `https://revisit.dev/study/demo-form-elements`, and GitHub source links on `main`, such as `https://github.com/revisit-studies/study/blob/main/public/demo-form-elements/`. Apply this convention to StructuredLinks and inline links, even when the documented change has not yet merged into `main`. Do not substitute development URLs for these published links.
- Keep published link destinations separate from evidence gathering: inspect and test the code, schema, and development demo matching the target documentation version. Check the public destinations too, but do not claim the documented feature is already available there if it is not. Report any merge or deployment still needed for those links to demonstrate the feature as pending in the completion report; retain the canonical public URLs.
- Resolve relative reference URLs from the rendered documentation page, accounting for its nesting and version. The component uses ordinary anchor `href` values; do not assume a Markdown source-file path will be rewritten automatically. Follow nearby working examples and check destinations when a preview is available.
- StructuredLinks must never be the sole location of prerequisites or task-critical information. Keep necessary links and instructions in the relevant prose as well.
- Continue using `note[Reference]` for paper citations. A StructuredLinks reference list does not replace the citation itself.

## Image paths

- Store new page-specific images in `img/<document-basename>/` under the document's own directory. Use the source filename without `.md` or `.mdx`, not the page title or URL slug.
- For example, images for `docs/designing-studies/applying-style.md` belong in `docs/designing-studies/img/applying-style/`. The `img` directory is a sibling of the document; `applying-style` is a subdirectory within it.
- Reference images with document-relative paths, such as `![Study with custom button colors](./img/applying-style/button-colors.png)`. Use descriptive filenames and alt text identifying the relevant content.
- Do not relocate unrelated existing images merely to enforce this convention. When relocating an image within the requested scope, check and update all affected references, including any shared uses.

## Screenshot handoff

- When a screenshot would help readers locate a control, understand a UI state, or recognize a result, leave a TODO comment at the relevant position for the `update-screenshots` skill. Do not add screenshots merely for decoration.
- This skill owns the editorial intent: decide what the screenshot should explain and whether visual emphasis is needed. `update-screenshots` implements that intent, captures the image, and replaces the completed TODO. This skill does not need to capture screenshots or invoke the screenshot skill automatically.
- Use an HTML comment such as `<!-- TODO: Screenshot — Show [screen] with [UI state]; include [relevant control or result]. -->`. If the page requires MDX comment syntax, use the equivalent `{/* TODO: Screenshot — ... */}` so the page remains valid.
- Give enough information to capture the image: the screen or route when known, the required state and actions, the relevant framing, and what the image should help the reader understand. Identify an existing image to replace when applicable. Do not invent unknown routes or states.
- When emphasis helps readers, specify its target and form in the TODO, such as a border and arrow around a named button or numbered callouts for several controls. Include any desired callout wording and explicit style preferences; otherwise let the capture skill match nearby annotated images. Omit annotations when the screenshot is clear on its own. Pixel coordinates and drawing-tool instructions are not required.
- Specify the intended image description when it is not clear from the reader purpose. Markdown uses `![alt text](image-path)`: the brackets contain accessible alternative text, and the parentheses contain the asset path. Alt text is not a visible caption. Write essential explanations in the surrounding prose; request a visible caption only when it adds context. Keep capture instructions and drawing directions in the hidden TODO, not in reader-facing alt text or captions.
- Include the intended `./img/<document-basename>/<image-name>` destination in each new screenshot TODO so the screenshot skill knows where to save the asset.
- Keep the comment hidden from the rendered page and do not add a broken image reference for an asset that does not exist yet.

For example, after verifying the named screen and control, a handoff can be:

```mdx title="Screenshot TODO — Highlight the next participant control"
{/* TODO: Screenshot — Show Study Browser open. Emphasize the Next Participant button with an orange border and arrow so readers can locate it. Alt: Next Participant button at the top of Study Browser. Save to ./img/study-browser/next-participant.png. */}
```

## Definition of done

Before reporting a documentation task as complete, check the following within the requested scope. Review technical accuracy and usability separately; this does not require separate agents or report files.

- Documented behavior, defaults, and limitations match the selected release and the evidence rules above. Behavior-changing ambiguities are resolved.
- Configuration examples match the target schema, and runnable examples have the required execution context.
- A first-time reader in the intended audience can identify prerequisites, actions, and expected results without unexplained setup or undefined example values. The accessibility rules above are satisfied.
- Code-block titles, language identifiers, admonitions, and Markdown/MDX syntax have been checked.
- Changed links, image references, and navigation have been checked. Check internal links against target files, rendered routes, headings, and anchors separately from the build; inspect the target branch's configuration for link failures it ignores or reports only as warnings. Verify that new pages appear in the intended sidebar or autogenerated category.
- Required screenshot TODOs include the capture details and destination. Recording an accurate TODO completes this skill's screenshot handoff; capture can remain pending for `update-screenshots`.
- Relevant available documentation checks or builds have been run when warranted. Do not add tests that merely assert prose wording, and do not treat build success as proof of every link or UI instruction.
- Performed and unperformed validation, remaining handoffs, and unresolved decisions are reported separately.

If a behavior-changing decision remains unresolved, report a draft or partial completion and identify the affected content. If a relevant check cannot run, state what remains unverified and why; do not claim full verification. Screenshot capture pending after a complete handoff does not by itself block completion of the writing task.

## Completion report

Keep the report concise and distinguish these categories. Omit empty categories, but never omit a relevant verification limitation.

- **Changed:** files or pages modified and the resulting documentation change.
- **Verified:** schema, implementation, example, build, link, navigation, or rendering checks actually performed, with their results. Report failed checks as failed.
- **Pending:** screenshot TODOs, unresolved user decisions, or other scoped follow-ups.
- **Unverified:** relevant checks that were not run and the reason.
