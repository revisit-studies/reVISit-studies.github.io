# Screenshot handoff to update-screenshots

The `write-documentation` skill specifies the screenshot's documentation purpose and desired presentation. The `update-screenshots` skill reproduces the state, captures/annotates the asset, saves it, and replaces the TODO.

Add a hidden HTML or MDX comment at the place the screenshot belongs only when it helps the user recognize a control, state, or result. Do not invent routes, controls, or UI states. Do not insert a nonexistent image link.

A useful TODO identifies, as applicable:

1. Route/screen, exact state, and steps to reproduce.
2. Reader purpose and controls/values/results that must be visible.
3. Framing and any annotations.
4. Intended alt text/caption.
5. `./img/<document-basename>/<image-name>` destination and existing image to replace, if any.

Example:

```mdx
{/* TODO: Screenshot — On the Study Browser, show the study card with the Analyze & Manage Study button visible. Highlight that button with a #FFBD59 border and matching arrow; keep the entire study card in frame. Alt: Study card with Analyze & Manage Study highlighted. Save to ./img/study-browser/analyze-manage-study.png. */}
```

## Annotations

- For one ambiguous target, use the established ReVISit orange `#FFBD59` border/highlight and matching arrow.
- Use numbered callouts for multiple elements that must be explained in sequence.
- Match nearby documentation style. Do not demand pixel coordinates or obscure labels and results.
- Skip annotations if the intended element is already obvious.
- Never change the underlying UI content or misrepresent the state.

A completed TODO handoff can count as completion of documentation writing even if capturing the screenshot remains pending. Report the pending handoff explicitly.
