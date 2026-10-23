# Reuse Study Content with Templates

ReVISit can fill Handlebars placeholders such as `{{country}}` with values from a component's `parameters`. This is useful when several tasks share the same structure but use different instructions, response text, or stimulus data. It also lets later tasks refer to answers from earlier tasks.

## Use component parameters

Add `parameters` to a component, then use those names in its `instruction`, response `prompt`, `secondaryText`, and response-option `label` or `infoText`. For option objects, ReVISit templates the displayed label and hover information; the option `value` saved in participant data stays unchanged. Markdown files are also compiled as templates, including help text and templated paths.

```json title="public/study-name/config.json"
{
  "type": "markdown",
  "path": "study-name/assets/{{hintFile}}.md",
  "instruction": "Which city is the capital of {{country}}?",
  "parameters": {
    "country": "France",
    "wrongCity": "Lyon",
    "hintFile": "europe-hint"
  },
  "response": [
    {
      "id": "capital",
      "type": "radio",
      "prompt": "Choose the capital of {{country}}.",
      "options": [
        { "label": "{{wrongCity}}", "value": "lyon" },
        { "label": "{{country}}'s capital", "value": "paris", "infoText": "Choose {{country}}'s capital." },
        { "label": "Marseille", "value": "marseille" }
      ]
    }
  ],
  "correctAnswer": [{ "id": "capital", "answer": "paris" }]
}
```

The Markdown file at `study-name/assets/europe-hint.md` can use the same `{{country}}` parameter. The example is a component fragment; place it under a component ID in the Study Config. Parameters also come from [factor-based designs](./sequences/factors.md).

The Help button uses `uiConfig.helpTextPath` by default. Set `helpTextPath` on an individual component to show task-specific help; the component setting overrides the study-wide path. Both the selected help path and the Markdown help content can use the current component's parameters, so a path such as `study-name/assets/help-{{audience}}.md` can load different guidance for different conditions. See [Setting Up Your First Study](../getting-started/your-first-study.md) for the study-wide help setting.

## Refer to earlier answers and parameters

Use Handlebars helpers to look up information from another task in the Participant's sequence:

- `lookupAnswersRel offset responseId` reads an answer relative to the current task. `-1` means the previous task that has an answer record.
- `lookupParametersRel offset name` reads a parameter from a relative task.
- `lookupCorrectAnswerRel offset responseId` reads a configured correct answer from a relative task.
- `lookupAnswers index responseId`, `lookupParameters index name`, and `lookupCorrectAnswer index responseId` use an absolute, zero-based position in the answer-bearing sequence. Negative indexes count from the end.

The non-`Rel` helpers use absolute, zero-based positions; negative indexes count from the end. If the referenced task or value does not exist, the placeholder renders empty. You can use Handlebars `if` blocks to show text only when a lookup returns a value:

```text
{{#if (lookupAnswersRel -1 "capital")}}
Last time, you answered {{lookupAnswersRel -1 "capital"}}.
{{/if}}
```

The `ifEquals` helper compares two values and supports an `else` branch. Standard Handlebars control blocks such as `if` are also available.

## Template an HTML stimulus

For an HTML file in your study's `public` folder, set `templated` to `true` on a `website` component. ReVISit substitutes component parameters into the file before displaying it:

```json title="public/study-name/config.json"
{
  "type": "website",
  "path": "study-name/assets/capital-picker.html",
  "templated": true,
  "parameters": { "country": "Canada" },
  "response": []
}
```

```html title="public/study-name/assets/capital-picker.html"
<h1>Choose the capital of {{country}}</h1>
```

The template is compiled once when the task loads. It does not update as answers change. Relative image, script, and stylesheet paths continue to resolve from the HTML file's folder. `templated` does not work for external websites because ReVISit cannot fetch and rewrite their HTML. For templated local files, load the shared `revisit-communicate.js` utility from `revisitUtilities/` if the page sends answers or provenance to ReVISit.

Templated HTML also has access to runtime values under `REVISIT`. For example, `{{REVISIT.currentStep}}` renders the current zero-based sequence step. The same answer, parameter, and correct-answer lookup helpers described above are available in the HTML template.

Handlebars escapes inserted values in HTML by default. Triple braces, such as `{{{value}}}`, insert unescaped content; only use them for trusted, Study Designer-controlled values. Do not insert Participant answers as unescaped HTML.

import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
  demoLinks={[
    {name: "Templating Demo", url: "https://revisit.dev/study/demo-templating/"}
  ]}
  codeLinks={[
    {name: "Templating Demo Code", url: "https://github.com/revisit-studies/study/tree/main/public/demo-templating"}
  ]}
/>
