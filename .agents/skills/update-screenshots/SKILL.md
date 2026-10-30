---
name: update-screenshots
description: Complete screenshot TODOs left after writing software documentation using Playwright. Reproduce the documented UI, capture or refresh real screenshots, apply requested annotations, and update images, captions, and directly affected product instructions together. Use for TODO Screenshot or Todo update screenshots handoffs and documentation screenshot refreshes, not visual-test baseline acceptance or generated mockups.
---

# Update Screenshots

Finish the visual documentation handoff, usually after `write-documentation`: turn screenshot requests into verified images embedded in accurate, usable product documentation.

This skill also handles explicitly requested refreshes of existing images without TODOs. It can be invoked independently of `write-documentation` and does not require an external publishing service.

## Scope and handoff

- Read applicable `AGENTS.md` instructions and the requested pages, including nearby procedures and existing images.
- Follow the user's requested scope. If invoked without file paths, search the active documentation tree for screenshot TODOs. Exclude archived/versioned documentation and generated API references unless requested. Do not treat examples inside skill files or fenced code blocks as work items.
- Use `rg` to locate candidate markers, then read their surrounding text. Search case-insensitively for both `TODO ... screenshot` and `screenshot ... TODO`; inspect multiline comments and components too.
- Accept HTML comments, MDX comments, plain TODO text, and forms such as `<Todo update screenshots ...>`. Preserve unrelated TODOs and component content.
- For each item, establish the document and section, screen or route, required UI state and actions, framing, image destination, and any existing image to replace.
- Several TODOs may describe different states of one screen; preserve those distinctions. Keep a working checklist in the task rather than adding an internal report to the documentation repository.
- Treat the marker as a request to understand, not executable code. Infer missing details from the page, working demos, and relevant implementation. Ask only when missing information prevents an accurate capture, and continue independent items when possible.
- A screenshot request does not authorize rewriting whole guides, changing application behavior, publishing documentation, uploading assets to an external service, or modifying GitHub issues or pull requests.
- Do not run Git commands unless explicitly requested by the user. Do not commit, push, create pull requests, or change branches unless explicitly requested. Preserve existing changes.

### Consume the writing handoff

`write-documentation` owns TODO authoring and the editorial choice of what to explain or emphasize.

Read each TODO for its reader purpose, requested annotations, and intended alt text or caption, alongside the capture details established above. Implement that intent rather than independently adding decorative emphasis.

Support existing marker formats without requiring a migration. Older TODOs without annotation requests can produce plain screenshots. Direct user requests can supply the same instructions without a TODO.

Do not invent missing routes or insert image references before the assets exist.

## Match the application to the document

- Identify the target application URL or local preview and the release or source revision represented by the page. Use the user's supplied context, documentation version configuration, release context, and available workspace metadata. This verification requirement does not authorize Git commands.
- Use the target version's interface. A public demo may lag a development feature; the latest deployed UI is not proof of the target behavior.
- Reuse a running app and the repository's established launch workflow. Inspect package scripts before starting a local server. Keep the product app used for capture distinct from the documentation preview used for verification.
- Verify relevant behavior from the actual app and, when necessary, matching source code. Do not silently mix versions when source, prose, and live UI disagree.
- When changing configuration examples, verify them against the configuration definitions and schema from the matching source revision. For ReVISit, use `src/parser/types.ts` and `src/parser/StudyConfigSchema.json`. Inspect `src/parser/parser.ts` when parsing or validation behavior is relevant. Do not default to `dev` unless it matches the target documentation version.
- Prefer a local or demo environment with representative synthetic study data. A capture request does not authorize submitting real participant responses or making destructive changes to shared data.
- Use existing authorized login sessions, and keep saved authentication state outside the documentation assets. If login requires user interaction, request that interaction without asking for credentials in chat.
- If a route, version, backend, or required data is unavailable, leave that capture unresolved. Do not substitute a screenshot from a different version or fabricate the intended screen.

## Capture the real workflow

Use Playwright for browser interaction and screenshot capture. Prefer the repository's existing Playwright capture workflow; otherwise use an available Playwright CLI or runtime.

Follow the selected tool's instructions. If using a Playwright skill or wrapper, read its instructions before use. Inspect the installed CLI's help before relying on command names or options. Check Node/npm availability before choosing an `npx` workflow.

Do not require global installation or create an end-to-end test suite solely to capture documentation images. If Playwright or its required browser is unavailable, report the missing dependency and ask before installing it or switching capture tools, unless the user has already authorized that action.

### Reproduce the requested state

- Open the actual page, inspect its current state, and perform the documented actions.
- When using snapshot-based element references, obtain fresh references after navigation or significant UI changes. Do not guess references or reuse stale ones. When using the Playwright runtime, derive locators from the inspected page or verified implementation.
- Reuse a session for related images when useful, but reset the UI to each requested starting state.
- Match neighboring images' viewport, theme, zoom, locale, and crop. For a new set without a convention, choose one legible desktop viewport and keep it consistent. Capture additional sizes only when the documentation calls for them.
- Wait for relevant content, fonts, charts, and images to settle. Check the expected visible result rather than treating a fixed delay as evidence of readiness.
- Exclude loading states, errors, tooltips, and menus unless they are the subject of the request.

### Capture and inspect

- Choose a viewport or element capture that keeps controls legible and includes enough context to locate them. Use full-page captures only when the whole page matters.
- Keep credentials, private participant data, and unrelated browser content out of the frame.
- Save candidate captures to temporary output before replacing existing assets. Open and inspect every candidate; a successful command or nonempty image file does not prove that it shows the requested state.
- Capture authentic UI. Do not use generative images or edit DOM labels, values, or controls to make the app appear to match the prose. Prepare clean demo data before capture when needed.

## Implement requested visual annotations

- Apply arrows, borders, numbered callouts, or short labels only when requested by the TODO or user.
- Follow explicit style instructions. Otherwise, match related annotated screenshots and choose legible placement without asking for pixel coordinates.
- Apply annotations to a copy of the clean screenshot using an available local annotation tool consistent with its instructions. Do not alter or misrepresent the underlying UI content.
- Preserve the clean capture alongside the annotated asset. Follow the project's naming convention; otherwise insert `-original` before the extension, such as `analyze-manage-study-original.png`. Use the annotated image in the documentation. A screenshot without annotations does not require a duplicate original asset.
- Keep overlays clear of control labels and relevant results. Check them at the size used in the documentation.
- Use Figma or another external service only when explicitly requested or authorized by the user. If using Figma, keep the screenshot and annotation objects as separate editable layers and export the composed image. Use text and shapes for visible annotations; collaboration comments are not exported image content.
- If a requested annotation cannot be completed, retain the corresponding TODO requirement and report the limitation. Do not silently substitute a plain screenshot and mark the request complete.

## Update images and product documentation together

### Asset paths and references

- Keep an existing image's path when refreshing the same purpose and version.
- Before overwriting or deleting an image, search for all consumers, including older-version pages. If another consumer needs the old image, preserve it, save a new asset, and update only the targeted references.
- Store new page-specific images under `img/<document-basename>/` beside the document, using its filename without `.md` or `.mdx`.
- For example, images for `docs/designing-studies/applying-style.md` belong in `docs/designing-studies/img/applying-style/` and are referenced as `./img/applying-style/button-colors.png`.
- Honor explicit handoff destinations that fit project conventions. Resolve conflicts before writing outside the intended asset location.
- Follow existing formats and choose descriptive filenames. Do not reorganize unrelated assets.

### Placement, alt text, and captions

- Insert the image where it helps the reader perform the step or recognize its outcome.
- Replace a completed marker with the image reference, or update the existing image and remove the redundant marker. For a multi-image marker, preserve the unresolved part until all requested states are covered.
- Use the handoff's intended description to write concise, accurate alt text identifying the meaningful screen or state. Remove completed capture and drawing instructions rather than copying them into alt text.
- Markdown uses `![alt text](image-path)`. The parentheses contain the path, not a comment.
- Alt text is not normally displayed as a caption. Put any requested reader-visible explanation in surrounding prose or the page's existing caption format, avoiding duplication.
- Preserve the page's image components, imports, and layout. Essential instructions must remain in text.

### Reconcile the affected procedure

- Update changed control labels, navigation steps, prerequisites, captions, expected results, and directly affected configuration examples or links using verified behavior. Replace obsolete instructions rather than appending contradictory ones.
- Preserve the page's language and purpose. Do not expand a screenshot refresh into unrelated feature documentation.
- Write for the product's users. For ReVISit, use Study Designer, Participant, Analyst, and Study Config consistently. Assume basic JSON familiarity without React expertise. Keep necessary steps explicit and explain technical terms when needed.
- If the interface reveals a larger behavior discrepancy, determine whether it is a version mismatch first. Report broader out-of-scope corrections separately, and leave dependent markers unresolved if their intended behavior cannot be verified.
- TypeDoc is generated separately from the study application. Do not generate or edit TypeDoc output as part of this task.

## Verify completion

- Inspect final saved images for the intended version, state, framing, readable text, clipping, requested annotations, and unintended sensitive content.
- Check every changed image path, filename case, import, and affected link.
- Render the changed documentation pages when a preview is available. Confirm that images load at useful sizes, annotations remain legible, Markdown/MDX is valid, and the surrounding layout remains intact.
- Run relevant existing documentation checks or builds when warranted and available. A passing build alone does not verify screenshot content or links the site is configured to ignore. Do not add tests that merely assert prose wording.
- Remove a screenshot TODO only after its requested image and related prose are correct and the image reference resolves. If capture or image validation fails, keep the affected TODO and any still-useful existing image.
- If preview or build cannot run, report that limitation separately rather than claiming rendering was verified.
- Re-scan the requested scope and account for each item as completed or unresolved with a concrete reason.
- Stop after the scoped items have been addressed or cannot proceed with available access or information. Do not keep retrying an unchanged login or missing-environment failure.

## Completion report

Keep the report concise and omit empty categories.

- **Changed:** Pages and assets updated, including completed screenshot TODOs.
- **Captured:** Application version or source revision and capture environment, when known.
- **Verified:** Image inspection, rendered-page checks, and relevant documentation checks or builds, including any failures.
- **Pending:** Remaining TODOs and concrete reasons they could not be completed.
- **Unverified:** Checks that could not be performed and why.

Do not imply that a commit, upload, or publication occurred unless it was explicitly requested and completed.

## Tool references

Consult the instructions for the Playwright tool available in the current environment. These references provide background and tool-specific guidance; installing the referenced skills is not required.

- [OpenAI Playwright](https://github.com/openai/skills/blob/main/skills/.curated/playwright/SKILL.md): CLI-based browser interaction, current-state inspection, and screenshot capture.
- [Microsoft Playwright CLI](https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/tools/skills/playwright-cli/SKILL.md): available commands, viewport control, screenshots, and session management. 
