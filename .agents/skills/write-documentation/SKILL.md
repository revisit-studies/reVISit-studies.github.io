---
name: write-documentation
description: Create ReVISit user documentation or update existing documentation for a pull request, using its description, linked issues, and supporting code and schemas. Use for user guides and configuration examples.
---

# Write Documentation

Create accurate, usable documentation that helps ReVISit users complete concrete tasks. This skill contains the project's documentation context and working rules. Read applicable repository instructions when present.

## Project context

ReVISit helps researchers design, deploy, conduct, and analyze user studies involving interactive data visualizations. It supports complex interactions and study data while aiming to make these studies accessible to researchers beyond the visualization community. Documentation should help Study Designers configure studies, support Participants' study experience, and help Analysts understand collected data.

The project's documented technology baseline is:

- Documentation: Docusaurus.
- Study application: Yarn, React 19, TypeScript, Vite, and Mantine UI.
- Storage and database backends: Firebase or Supabase, selected through `.env` configuration.

Study Configs are schema-backed configurations, commonly written in JSON, that define study components, tasks, data sources, and study flow.

## Terminology

Use these terms consistently in prose while preserving exact identifiers and labels in code and UI references:

| Term | Meaning |
| --- | --- |
| Study Designer | The individual who creates and configures the user study. |
| Participant | The user who takes part in the study. |
| Analyst | The individual who reviews and analyzes the data collected from the study, both in the platform and externally. |
| Study Config | The configuration file that defines the parameters and settings of a user study. |

## Purpose and scope

- The primary tasks are creating new user documentation and updating existing documentation to reflect a PR's changes.
- Identify the requested deliverable. Describe the resulting user workflow rather than retelling the PR's implementation history.
- Write only user-facing documentation. Do not add internal development or architecture documentation or modify application code.

## Working boundaries

- Do not run Git commands unless the user asks for them. This includes read-only commands, commits, pushes, branch changes, and worktree creation.
- Make documentation changes in the user's current working folder and branch, preserving existing changes. Do not commit, push, create pull requests, or change branches unless explicitly requested.
- Read relevant GitHub PRs and linked issues to gather evidence, but do not create or modify PRs or issues, post comments, or change their state unless explicitly requested.
- TypeDoc is generated from the study application for each release and included as reference material. Do not generate, add, or edit TypeDoc output as part of a documentation task; link to relevant TypeDoc references when appropriate.

## Audience

- Write for ReVISit users, primarily researchers and Study Designers, including people without a computer science background.
- Basic familiarity with JSON is a reasonable starting point, but do not assume programming expertise. Provide enough context and examples for readers with less development experience to follow the task.
- Use plain language and concrete steps. Do not assume familiarity with React, programming jargon, or development workflows.

## Documentation principles

Apply these principles when deciding what to include and how to organize documentation. Follow the structure and conventions of related existing pages rather than imposing a fixed template.

| Principle | Writing rule |
| --- | --- |
| Focus on the reader's task | Organize documentation around what the reader needs to accomplish or understand. Keep the page focused on that purpose and link to related documentation when additional context is needed. |
| Enable the reader to finish the task | Provide the prerequisites, concrete actions, and expected results needed to complete the documented workflow. Show readers how to recognize successful progress. |
| Be simple and precise | Explain necessary technical terms in plain language while preserving exact UI labels, configuration keys, and code identifiers. Do not omit steps the intended audience needs. |
| Make information easy to find | Use descriptive headings, put important information early, and use meaningful link text that identifies the destination instead of phrases such as "here" or "this page." |
| Use focused examples | Prefer common use cases and minimal examples that demonstrate the documented behavior. Link to reference material for exhaustive configuration options and definitions. |
| Avoid unnecessary duplication | Link to existing explanations instead of repeating them. Repeat short prerequisites or critical warnings when readers need them at the point of action. |

## Inputs and evidence

- Start with the supplied PR link, PR description, related issue, or pasted description. Read linked issues when available to understand the problem and intended behavior.
- Read related existing documentation to understand the current explanation, structure, and conventions. For example, before documenting a new component type, read the guides for related component types.
- Inspect the relevant implementation when needed to verify documented behavior. Use the source branch that matches the target documentation version, and do not combine behavior from different versions in one example.
- When documenting configuration properties, defaults, or examples, verify them against the target version's types, schema, and relevant implementation. Use `src/parser/types.ts` for configuration definitions and `src/parser/parser.ts` when parser or validation behavior is relevant.
- When a PR changes documented behavior, update affected explanations, examples, warnings, and links together. Replace obsolete instructions rather than appending contradictory information.

Select evidence according to the fact being documented:

- **Actual behavior:** Use the implementation for the target version, supported when relevant by tests or observed execution.
- **Configuration structure and types:** Use the target version's schema and type definitions, and check the implementation for runtime defaults and effects.
- **Change intent and background:** Use PR descriptions and related issue discussions. Do not present proposed behavior as implemented without supporting implementation evidence.
- **Existing explanations and conventions:** Use existing documentation for context and style, but verify technical claims that may be outdated.

If sources for the same version conflict in a way that affects the documentation, ask the user rather than resolving the conflict by assumption.

## Documentation version and working branch

- Determine the documentation version and release status from the user's request and available PR or release context. Do not assume that a PR's original base branch represents its current release status.
- For released behavior, use the corresponding released study code and schema as the source. For unreleased behavior, use the development code and schema that correspond to the target documentation version.
- Before editing, verify that the target documentation version is available in the current working folder and branch. Follow an explicitly requested version or working branch when provided. If the target version is unavailable or cannot be determined from the available context, ask the user how to proceed rather than guessing or creating it.

## Location and structure

- Use related existing documentation to determine the appropriate location and structure. Extend an existing page when it serves the task better than creating a new page.
- Make changes only to the documentation for the target version. Do not modify `versioned_docs/` or create a new documentation version unless explicitly requested.
- When adding a new page, check the applicable sidebar configuration and related index pages, and update navigation when needed so the page is discoverable. Do not assume that adding a file automatically adds it to the documentation navigation.

## Writing

- Use the language and terminology of the surrounding documentation.
- Prefer active voice and address the reader directly in procedures. Put conditions before the actions they affect.
- Keep required steps and essential explanations in the main text rather than only in callouts or linked pages.
- When readers must choose between supported approaches, explain the relevant differences, limitations, and trade-offs.
- When troubleshooting is relevant, explain the symptom, cause or diagnostic check, and remedy. Do not invent common errors or add troubleshooting sections without evidence that they are needed.

## Accessibility

- Use a logical heading hierarchy that reflects the content structure; do not skip heading levels for visual styling.
- Identify UI controls by visible labels or verified accessible names. Do not rely only on position, color, or icon appearance to identify a control.
- Document keyboard behavior only when relevant and verified; do not invent shortcuts or unsupported interactions.
- Write image alt text to convey the information the image is intended to communicate. Keep essential instructions and results in text so screenshots are not required to complete the task.

## Code blocks

- Give code blocks an appropriate language identifier. Use a descriptive title when it provides useful context; code blocks that are clear without a title may omit one.
- For code from a file, use the actual filename or path as the title with Docusaurus fence metadata, such as `title="public/study-name/config.json"`.
- For commands or standalone snippets that benefit from a title, use a short purpose-based title.
- Keep examples minimal and consistent with the target version's schema and surrounding instructions. Make clear whether an example is a complete file or a partial snippet and where it belongs.
- Runnable examples must include or reference the context needed to use them, such as required imports, variables, or setup.
- Clearly identify values readers must replace. Do not present pseudocode or incomplete configuration as directly usable.

## Admonitions

Actively use admonitions to separate contextual, practical, or risk-related information from the main documentation flow. When writing or revising a section, consider whether information would be easier to notice and understand as a `note`, `info`, `warning`, or `danger` block rather than ordinary prose. Prefer an admonition when a useful clarification, limitation, default, alternative, or risk could otherwise be easily missed.

Keep required steps, prerequisites, and essential instructions in the main text. Use admonitions to provide additional context or draw attention to information readers should notice while completing those steps.

| Format | When to use it |
| --- | --- |
| Main text | Required steps, prerequisites, and essential instructions readers must follow to complete the task. |
| `note` | Background, terminology clarification, context, or references that help readers understand the documentation but do not require an action. Preserve `:::note[Reference]` for paper citations. |
| `info` | Practical information that helps readers use the feature correctly, such as expected behavior, useful defaults, optional alternatives, shortcuts, or details that may prevent confusion. |
| `warning` | A condition or action that may cause a configuration error, failed task, unexpected behavior, or misleading result. |
| `danger` | A condition or action that may cause serious or difficult-to-reverse harm, such as permanent data loss, unauthorized access, or disclosure of research data. |

- Do not move required actions entirely into an admonition; keep the procedure understandable from the main text.
- Do not use `warning` or `danger` merely for emphasis; there must be a concrete consequence or risk.
- For `warning` and `danger`, explain what creates the risk, what can happen, and how to avoid it. Place the admonition before the relevant action.
- Use a descriptive title when it helps readers quickly understand the purpose of the admonition.

## StructuredLinks

Use the existing `StructuredLinks` component at the end of a feature page to collect relevant demos, demo source code, and references. Update an existing `StructuredLinks` block rather than adding another one.

Import the component once when needed:

```tsx
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';
```

Use the following categories:

- `demoLinks`: public demos for the documented feature.
- `codeLinks`: source code for the corresponding demos.
- `referenceLinks`: relevant TypeDoc entries or authoritative external references.

Include only links that are relevant and whose destinations can be verified. Omit categories with no relevant links, and omit `StructuredLinks` entirely when there are none. Do not invent URLs or add placeholder links.

- Use concise, descriptive names. Pair demo and code links as `<Feature> Demo` and `<Feature> Code` when applicable, and use actual type names for TypeDoc references.
- Use canonical public demo URLs, such as `https://revisit.dev/study/demo-form-elements`, and canonical GitHub source links on `main` for reader-facing documentation. Do not use development URLs as published destinations.
- Verify that relative links resolve from the rendered documentation page when applicable.
- Do not place prerequisites or task-critical instructions only in `StructuredLinks`; keep them in the relevant documentation as well.
- Continue using `:::note[Reference]` for paper citations; `StructuredLinks` does not replace citations.

## Image paths

- Store new page-specific images in `img/<document-basename>/` under the document's own directory. Use the source filename without `.md` or `.mdx`, not the page title or URL slug.
- For example, images for `docs/designing-studies/applying-style.md` belong in `docs/designing-studies/img/applying-style/`. The `img` directory is a sibling of the document; `applying-style` is a subdirectory within it.
- Reference images with document-relative paths, such as `![Study with custom button colors](./img/applying-style/button-colors.png)`. Use descriptive filenames and alt text identifying the relevant content.

## Screenshot handoff

When a screenshot would help readers locate a control, understand a UI state, or recognize a result, leave a screenshot TODO at the relevant position for the `update-screenshots` skill. Do not add screenshots only for decoration.

`write-documentation` defines the purpose and visual intent of the screenshot. `update-screenshots` reproduces the requested UI state, captures the image, applies the requested annotations, saves the asset, and replaces the completed TODO.

Each screenshot TODO should specify, when applicable:

- The screen or route to capture.
- The UI state and actions needed to reproduce it.
- What the screenshot should help the reader understand.
- The controls, values, results, or other UI elements that must be visible.
- The desired framing or portion of the interface to capture.
- Any visual annotations needed to direct the reader's attention.
- The intended alt text and any visible caption when needed.
- The intended `./img/<document-basename>/<image-name>` destination.
- The existing image to replace when refreshing a screenshot.

### Visual annotations

Use annotations when a screenshot contains several elements or when the reader may not immediately recognize the control or result discussed in the documentation.

- For a single UI element that needs emphasis, use the existing ReVISit documentation annotation style: a `#FFBD59` orange border or highlight with a matching `#FFBD59` arrow pointing to the relevant element.
- Use numbered callouts when several elements must be identified or explained in a specific order.
- Keep annotations visually consistent with nearby ReVISit documentation screenshots when an established style exists.
- Specify the exact UI element to emphasize and the intended annotation in the TODO. Do not require pixel coordinates.
- Do not add annotations when the relevant element is already obvious from the screenshot and surrounding text.
- Keep arrows, borders, highlights, numbers, and labels from covering control labels, values, results, or other relevant interface content.
- Annotations should direct attention without changing or misrepresenting the underlying UI.

Use a hidden HTML or MDX comment appropriate for the page. Do not invent unknown routes, UI states, or controls, and do not add an image reference before the asset exists.

For example:

```mdx title="Screenshot TODO — Highlight the Analyze & Manage Study button"
{/* TODO: Screenshot — Show the study card in the Study Browser with the Analyze & Manage Study button visible. Highlight the button with a #FFBD59 border and matching arrow pointing to the button. Keep the full study card visible for context. Alt: Study card with the Analyze & Manage Study button highlighted. Save to ./img/study-browser/analyze-manage-study.png. */}
```

For a screenshot that does not need emphasis:

```mdx title="Screenshot TODO — Show the completed study view"
{/* TODO: Screenshot — Show the completed study view after data collection has ended. Include the study status and available actions. No annotation is needed. Alt: Completed study showing its status and available actions. Save to ./img/study-browser/completed-study.png. */}
```

## Definition of done

Before reporting a documentation task as complete, verify that:

- Documented behavior, configuration, examples, and limitations match the target version and supporting evidence.
- The documentation provides the prerequisites, actions, and expected results needed for the intended reader to complete the task.
- Markdown/MDX syntax, links, image references, and navigation affected by the changes are valid.
- Required screenshot TODOs contain enough information for `update-screenshots` to complete the handoff.
- Relevant documentation checks or builds have been run when available.

If a relevant issue remains unresolved or a required check cannot be completed, report it rather than claiming the task is fully verified. Pending screenshot capture does not prevent the documentation writing task from being complete when the screenshot handoff is complete.

## Completion report

Keep the completion report concise and omit empty categories.

- **Changed:** Files or pages modified and the resulting documentation changes.
- **Verified:** Relevant checks performed and their results, including any failures.
- **Pending:** Remaining screenshot handoffs, unresolved decisions, or other follow-up work.
- **Unverified:** Relevant checks that could not be performed and why.
