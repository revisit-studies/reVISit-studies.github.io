---
name: update-screenshots
description: Complete screenshot TODOs left after writing software documentation. Reproduce the documented UI, capture or refresh real screenshots, and update images, captions, and affected product instructions together. Use for TODO Screenshot or Todo update screenshots handoffs and documentation screenshot refreshes, not visual-test baseline acceptance or generated mockups.
---

# Update Screenshots

Finish the visual documentation handoff, usually after `write-documentation`: turn screenshot requests into verified images embedded in accurate, usable product documentation. This skill also handles explicitly requested refreshes of existing images without TODOs. It works independently; another skill, a particular browser package, or an external publishing service is not required.

## Scope and handoff

- Read applicable `AGENTS.md` instructions and the requested pages, including nearby procedures and existing images. Follow the user's requested scope; if invoked without file paths, search the active documentation tree for screenshot TODOs. Exclude archived/versioned docs and generated API references unless requested. Do not treat examples inside skill files or fenced code blocks as work items.
- Use `rg` to locate candidate markers, then read their surrounding text. Search case-insensitively for both `TODO ... screenshot` and `screenshot ... TODO`; inspect multiline comments/components too. Accept HTML comments, MDX comments, plain TODO text, and forms such as `<Todo update screenshots ...>`. Preserve unrelated TODOs and component content.
- For each item, establish the document and section, screen or route, required UI state and actions, framing, image destination, and any existing image to replace. Several TODOs may describe different states of one screen; preserve those distinctions. Keep a working checklist in the task rather than adding an internal report to the docs repository.
- Treat the marker as a request to understand, not executable code. Infer missing details from the page, working demos, and relevant implementation. Ask only when missing information prevents an accurate capture; continue independent items while awaiting it.
- A screenshot request does not authorize rewriting whole guides, changing application behavior, publishing documentation, uploading assets to a service, or modifying GitHub issues/PRs. Follow repository restrictions on Git commands, including read-only commands.

### Consume the writing handoff

`write-documentation` owns TODO authoring and the editorial choice of what to explain or emphasize. Read each TODO for its screen, state, reader purpose, destination, requested annotations, and intended alt text or caption. Implement that intent rather than independently adding decorative emphasis. Support existing marker formats without requiring a migration; older TODOs without annotation requests can produce plain screenshots. Direct user requests can supply the same instructions without a TODO. Do not invent missing routes or insert broken image links while capture is pending.

## Match the application to the document

- Identify the target application URL or local preview and the release/branch represented by the page. Use that version's interface. A public demo may lag a development feature; the latest deployed UI is not proof of the target behavior.
- Reuse a running app and the repository's established launch/capture workflow. Inspect package scripts before starting a local server. Keep the product app used for capture distinct from the documentation preview used for verification.
- Verify relevant behavior from the actual app and, when necessary, matching source code. When changing configuration examples or adding documentation, read the current schema for the target branch. For ReVISit, use `https://raw.githubusercontent.com/revisit-studies/study/dev/src/parser/parser.ts` unless the user or applicable project instructions select another branch. Do not silently mix versions when source, prose, and live UI disagree.
- Prefer a local/demo environment with representative synthetic study data. Use existing authorized login sessions; keep saved authentication state outside the documentation assets. If login needs user interaction, request that interaction without asking for credentials in chat.
- If a route, version, backend, or required data is unavailable, leave that capture unresolved. Do not substitute a screenshot from a different version or fabricate the intended screen.

## Capture the real workflow

Choose available tools in this order: an established project capture workflow, a provided browser/computer-use tool, or an available Playwright CLI/runtime. Respect the selected tool's own instructions. Do not install another automation stack simply because an upstream skill used it.

For Playwright CLI, inspect the installed command's help before relying on options. Use an installed `playwright` skill's wrapper if available; otherwise use the available CLI/runtime directly. Check Node/npm availability before choosing an `npx` workflow. Do not require global installation or generate an end-to-end test suite merely to capture documentation images.

- Open the actual page, inspect its current state, and perform the documented actions. With snapshot-based browser tools, obtain fresh element references after navigation or significant UI changes; do not guess selectors or reuse stale references.
- Reuse a session for related images when useful, but reset the UI to each requested starting state. Prefer synthetic data in a local or demo environment; a capture request does not authorize submitting real participant responses or destructive changes to shared data.
- Match neighboring images' viewport, theme, zoom, locale, and crop. For a new set without a convention, choose one legible desktop viewport and keep it consistent. Capture additional sizes only when the documentation calls for them.
- Wait for the relevant content, fonts, charts, and images to settle. Check the expected visible result, rather than treating a fixed delay as evidence of readiness. Exclude loading states, errors, tooltips, and menus unless they are the subject of the request.
- Choose a viewport or element capture that keeps controls legible and includes enough context to locate them. Use full-page captures only when the whole page matters. Keep credentials, private participant data, and unrelated browser windows out of the frame.
- Save candidate captures to temporary output before replacing existing assets. Open and inspect every candidate; a successful command or nonempty PNG does not prove that it shows the requested state.
- Capture authentic UI. Do not use generative images or edit DOM labels, values, or controls to make the app appear to match the prose. Prefer preparing clean demo data before capture. Annotations, when requested, must not conceal or misrepresent the interface.

## Implement requested visual annotations

- Apply arrows, borders, numbered callouts, or short labels only when requested by the TODO or user. Follow explicit style instructions; otherwise match related annotated screenshots and choose legible placement without asking for pixel coordinates.
- Preserve the clean capture separately from the annotated image, using a descriptive suffix such as `-original` when no project convention exists. Keep overlays clear of control labels and relevant results, and check them at the size used in the documentation.
- Use available annotation tools consistent with their instructions. Figma is optional unless requested. When using Figma, retain the screenshot and annotation objects as separate editable layers and export the composed image for the document. Figma collaboration comments are not exported visual annotations; use text and shapes for content that readers must see.
- If a requested annotation cannot be completed, retain the corresponding TODO requirement and report the limitation rather than silently substituting a plain screenshot and marking it complete.

## Update images and product documentation together

- Keep an existing image's path when refreshing the same purpose and version. Before overwriting, search for all consumers, including older-version pages. If another consumer needs the old image, save a new asset and update only the targeted references.
- Store new page-specific images under `img/<document-basename>/` beside the document, using its filename without `.md` or `.mdx`. For example, `docs/designing-studies/applying-style.md` uses `docs/designing-studies/img/applying-style/button-colors.png`, referenced as `./img/applying-style/button-colors.png`. Honor explicit handoff destinations that fit project conventions; resolve conflicts before writing outside the intended asset location.
- Follow existing formats and choose descriptive filenames. Do not reorganize unrelated assets. Do not delete an old asset without checking whether other pages still use it.
- Insert the image where it helps the reader perform the step or recognize its outcome. Replace a completed marker with the image reference, or update the existing image and remove the redundant marker. For a multi-image marker, preserve the unresolved part until all requested states are covered.
- Use the handoff's intended description to write concise, accurate alt text identifying the meaningful screen/state. Markdown uses `![alt text](image-path)`; parentheses contain the path, not a comment. Alt text is not normally displayed as a caption. Put any requested reader-visible explanation in surrounding prose or the existing caption format, avoiding duplication. Remove completed capture/drawing instructions rather than copying them into alt text. Preserve the page's image components, imports, and layout; essential instructions must remain in text.
- Reconcile the affected procedure with verified behavior: update changed control labels, navigation steps, prerequisites, captions, expected results, and directly affected configuration examples or links. Replace obsolete instructions rather than appending contradictory ones. Preserve the page's language and purpose; do not expand a screenshot refresh into unrelated feature documentation.
- Write for the product's users. For ReVISit, use Study Designer, Participant, Analyst, and Study Config consistently, and assume basic JSON/web familiarity without React expertise. Keep necessary steps explicit and avoid internal architecture explanations.
- If the interface reveals a larger behavior discrepancy, determine whether it is a version mismatch first. Report broader out-of-scope corrections separately, and leave dependent markers unresolved if their intended behavior cannot be verified.
- TypeDoc is generated separately from the study application. Do not edit generated reference output; state this assumption when the documentation changes depend on it.

## Verify completion

- Inspect final saved images for the intended version, state, framing, readable text, clipping, and unintended sensitive content.
- Check every changed image path, filename case, import, and affected link. Render the changed documentation pages when a preview is available and confirm images load at useful sizes with valid Markdown/MDX and intact surrounding layout.
- Run relevant existing documentation checks/build when warranted and available. A passing build alone does not verify screenshot content or links the site is configured to ignore. Do not add tests that merely assert prose wording.
- Remove a screenshot TODO only after its requested image and related prose are correct and the image reference resolves. If preview/build cannot run, report that limitation separately rather than claiming rendering was verified. If capture or image validation fails, keep the affected TODO and any still-useful existing image.
- Re-scan the requested scope and account for each item as completed or unresolved with a concrete reason. Stop after the scoped items have been addressed or cannot proceed with available access/information. Do not keep retrying an unchanged login or missing-environment failure.
- Report changed pages/assets, captured application version/environment when known, checks performed, and remaining TODOs. No commit, upload, or publication is implied.

## Workflow sources

This is a task-specific synthesis, not a dependency on installing these skills. Consult upstream instructions only for tool details relevant to the current environment:

- [OpenAI Playwright](https://github.com/openai/skills/blob/main/skills/.curated/playwright/SKILL.md): browser navigation and current-state inspection.
- [Microsoft Playwright CLI](https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/tools/skills/playwright-cli/SKILL.md): capture, viewport, and session capabilities.
- [Capture Screenshots](https://github.com/maxberko/max-doc-ai/blob/main/.claude/skills/capture-screenshots/SKILL.md): documentation-oriented capture planning and image verification.
- [Update Product Documentation](https://github.com/maxberko/max-doc-ai/blob/main/.claude/skills/update-product-doc/SKILL.md): align user instructions and screenshot placement with observed behavior.

The upstream Anthropic/Python and Pylon/CloudFront dependencies are not required here. VS Code's `update-screenshots` handles CI baseline acceptance, which is outside this skill's documentation workflow.
