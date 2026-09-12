# Templating with Variables

Some text fields in a study config can contain `{{variableName}}` placeholders. When the study runs, each placeholder is replaced with a real value. This lets you reuse one component definition across many trials, and change small details (a name, a country, a number) per trial without copy-pasting the whole component.

This is powered by a templating library **Handlebars**. You don't need to know anything about Handlebars to use the features on this page — just the patterns shown below.

## Where You Can Use It

`{{variable}}` placeholders work in:

- `instruction`
- a response's `prompt`, `secondaryText`, and `infoText`
- the text inside a markdown component's `.md` file
- a markdown component's `path` (so you can pick _which_ `.md` file to load per trial)
- `helpTextPath` content (the text shown when a participant clicks "Help")

:::info
The `path` field on `image`, `video`, `website`, `vega`, and `react-component` components also supports plain `{{variable}}` substitution, but it does **not** support the answer-lookup features described below (`lookupAnswers`/`lookupAnswersRel`). Those only work in the fields listed above.
:::

## The Basics: `{{variable}}`

Every component can have a `parameters` object — plain key/value pairs you define. Anywhere templating is supported, `{{name}}` gets replaced with the value of `name` from that component's `parameters`.

```json title="public/study-name/config.json"
{
  "instruction": "Hello {{name}}!",
  "parameters": {
    "name": "Ada"
  }
}
```

This renders as:

> Hello Ada!

If you misspell a variable name, or forget to add it to `parameters`, it just renders as blank text — participants won't see an error.

This is also how you can reuse one component across several trials. Define the component once with `{{...}}` placeholders, then give each trial its own `parameters`:

```json title="public/study-name/config.json"
{
  "baseComponents": {
    "quizQuestion": {
      "type": "markdown",
      "instruction": "Which city is the capital of {{country}}, in {{continent}}?",
      "path": "myStudy/assets/{{hintFile}}.md"
    }
  },
  "components": {
    "quiz-1": {
      "baseComponent": "quizQuestion",
      "parameters": {
        "country": "France",
        "continent": "Europe",
        "hintFile": "hint-europe"
      }
    },
    "quiz-2": {
      "baseComponent": "quizQuestion",
      "parameters": {
        "country": "Germany",
        "continent": "Europe",
        "hintFile": "hint-europe"
      }
    }
  }
}
```

Note that `path` can be templated too — here, each trial loads a different hint file just by changing one `parameters` value.

## Referencing Answers from Other Trials

Sometimes you want to show a participant something based on how they answered an _earlier_ trial — for example, "you said Paris last time" or "here's a summary of everything you've answered so far." Two helpers do this: `lookupAnswersRel` and `lookupAnswers`. Both take the same two things:

1. Which trial to look at (explained below — this is the part that differs between them)
2. The `id` of the response you want (the `id` field you gave that response in the config)

### `lookupAnswersRel` — N Trials from Here

`lookupAnswersRel` counts relative to **the trial the participant is currently on**.

```
{{lookupAnswersRel -1 "capital-answer"}}
```

This means: "the value the participant entered for the response named `capital-answer`, on the trial **1 step before this one**."

- `-1` = the previous trial
- `-2` = two trials before this one
- Positive numbers (`1`, `2`, ...) = trials _after_ this one — only meaningful if that trial has already been answered (e.g. when reviewing a completed run), since a participant can't have answered a future trial yet

### `lookupAnswers` — Trial Number N in the Whole Study

`lookupAnswers` counts from the **start (or end) of the entire study sequence**, no matter which trial the participant is currently viewing.

```
{{lookupAnswers 1 "capital-answer"}}
```

This means: "the value entered for `capital-answer` on the 2nd trial in the whole study" (counting starts at 0, so `1` is the second trial).

- `0`, `1`, `2`, ... = counting from the very first trial in the study
- `-1` = the very last trial in the study, `-2` = second-to-last, and so on

**The difference in one sentence:** `lookupAnswersRel` always means "relative to where the participant is right now"; `lookupAnswers` always means "this exact trial, wherever the participant currently is."

### What You Can't Look Up

You cannot look up the answer on the **same trial the participant is currently filling out** — it doesn't exist yet until they submit it and move on. Both helpers can only see already-submitted trials.

### Handling "There's Nothing to Look Up Yet"

On the very first trial, there's no previous answer — a lookup like `{{lookupAnswersRel -1 "capital-answer"}}` on trial 1 will just be empty. Wrap it in an `{{#if ...}}` block to only show a sentence when there actually was a previous answer:

```
{{#if (lookupAnswersRel -1 'capital-answer')}}
  Last time, you answered "{{lookupAnswersRel -1 'capital-answer'}}".
{{/if}}
```

If there's no previous answer, this whole sentence is skipped instead of showing `Last time, you answered ""`.

## Showing Different Text Based on a Value: `ifEquals`

A plain `{{variable}}` can only insert a value exactly as it is — it can't swap in a _different sentence_ depending on what that value happens to be. That's what `ifEquals` is for: it compares two values, and shows one block of text if they match, or a fallback block if they don't.

```
{{#ifEquals hintLevel "direct"}}
  This fun fact points straight at the capital — you can probably guess it from that alone.
{{else ifEquals hintLevel "misleading"}}
  Careful: this fun fact might make you think of a different, more famous city than the actual capital.
{{else ifEquals hintLevel "obscure"}}
  This capital isn't the country's most famous city — you may know a bigger city from this country better.
{{else}}
  No hint level set for this trial.
{{/ifEquals}}
```

Read this as a normal "if / else if / else" chain: if `hintLevel` equals `"direct"`, show the first sentence; otherwise if it equals `"misleading"`, show the second; otherwise if it equals `"obscure"`, show the third; otherwise (nothing matched) show the fallback.

You can also combine `ifEquals` with an answer lookup — for example, to congratulate a participant only if they gave a specific answer on the previous trial:

```
{{#ifEquals (lookupAnswersRel -1 'capital-answer') 'Paris'}}
  (You said Paris last time — nice!)
{{/ifEquals}}
```

## A Worked Example

The reVISit repository includes a full runnable example, `demo-templating`, which combines everything above in a six-trial "guess the capital city" quiz: each trial reuses one shared component, loads a per-continent hint file whose wording changes based on `hintLevel` (via `ifEquals`), and references the previous trial's answer (via `lookupAnswersRel`) in the instructions, hints, and help text.

## Common Mistakes

- **Forgetting to add a variable to `parameters`.** `{{name}}` with no matching `parameters.name` renders as blank text — no error is shown to participants.
- **Typos in variable names.** `{{contry}}` instead of `{{country}}` also silently renders blank, for the same reason.
- **Unclosed blocks**, e.g. writing `{{#ifEquals ...}}` without a matching `{{/ifEquals}}`. This does **not** crash the study — the broken template is shown as raw, unrendered text, and the details are logged to the browser's developer console rather than shown to participants.

import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
demoLinks={[
{name: "Templating Demo", url: "https://revisit.dev/study/demo-templating/"}
]}
codeLinks={[
{name: "Templating Code", url: "https://github.com/revisit-studies/study/tree/main/public/demo-templating"}
]}
/>
