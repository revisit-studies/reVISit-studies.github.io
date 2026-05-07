---
title: replication-config.json
description: Step-by-step guide for building the replication study Study Config from the template repository.
---

# replication-config.json

In this part of the tutorial, you will build [`public/tutorial/replication-config.json`](https://github.com/revisit-studies/template/blob/main/public/tutorial/replication-config.json). The starter file already has study metadata, UI settings for a Prolific-style study, empty `baseComponents`, empty `components`, and an empty fixed-order sequence.

The completed version is [`public/tutorial/_answers/replication-config.json`](https://github.com/revisit-studies/template/blob/main/public/tutorial/_answers/replication-config.json). Use it as the reference after each step.

:::info
This exercise shows how to make a reusable base component, create several practice trials from it, and then hand off to a dynamic block that chooses later trials.
:::

## Starting point

The starter file ends with:

```json title="public/tutorial/replication-config.json"
"baseComponents": {},
"components": {},
"sequence": {
  "order": "fixed",
  "components": []
}
```

You will fill these sections in order:

1. Add a reusable `scatterBase` component to `baseComponents`.
2. Add practice and trial components to `components`.
3. Add those components to the sequence.
4. Add the dynamic sequence block.

## Step 1: Add the reusable scatter plot base component

Replace the empty `baseComponents` object with `scatterBase`:

```json title="public/tutorial/replication-config.json"
"baseComponents": {
  "scatterBase": {
    "type": "react-component",
    "path": "tutorial/assets/replication/ScatterWrapper.tsx",
    "response": [
      {
        "id": "buttonsResponse",
        "type": "buttons",
        "prompt": "Choose the plot with the higher correlation:",
        "required": true,
        "location": "belowStimulus",
        "options": [
          {
            "label": "Left Plot",
            "value": "left"
          },
          {
            "label": "Right Plot",
            "value": "right"
          }
        ]
      }
    ]
  }
}
```

This base component defines the stimulus once. It points to the React component that renders the scatter plots and defines the response Participants will use for every trial.

The response uses `buttons` because Participants choose between two clear options. The stored values are `left` and `right`, which you will use in `correctAnswer` later.

## Step 2: Add the first practice trial

Replace the empty `components` object with the first practice trial:

```json title="public/tutorial/replication-config.json"
"components": {
  "practice T1 A:0.3 B:0.7": {
    "baseComponent": "scatterBase",
    "parameters": {
      "r1": 0.3,
      "r2": 0.7
    },
    "correctAnswer": [
      {
        "id": "buttonsResponse",
        "answer": "right"
      }
    ],
    "provideFeedback": true
  }
}
```

This trial inherits the stimulus and response from `scatterBase`. The `parameters` values tell the React component which correlations to show in the left and right plots.

For this practice trial, `r2` is larger than `r1`, so the correct answer is `"right"`. The `id` in `correctAnswer` must match the response id from the base component: `buttonsResponse`.

## Step 3: Add the second practice trial

Add a comma after the first practice trial, then add:

```json title="public/tutorial/replication-config.json"
"practice T2 A:0.9 B:0.6": {
  "baseComponent": "scatterBase",
  "parameters": {
    "r1": 0.9,
    "r2": 0.6
  },
  "correctAnswer": [
    {
      "id": "buttonsResponse",
      "answer": "left"
    }
  ],
  "provideFeedback": true
}
```

This trial uses the same base component, but with different correlation values. Here, `r1` is larger than `r2`, so the correct answer is `"left"`.

This is the main benefit of `baseComponents`: the shared stimulus and response are written once, and each trial only provides the values that change.

## Step 4: Add the third practice trial

Add the third practice trial after the second:

```json title="public/tutorial/replication-config.json"
"practice T3 A:0.6 B:0.3": {
  "baseComponent": "scatterBase",
  "parameters": {
    "r1": 0.6,
    "r2": 0.3
  },
  "correctAnswer": [
    {
      "id": "buttonsResponse",
      "answer": "left"
    }
  ],
  "provideFeedback": true
}
```

Again, this trial inherits from `scatterBase`. The left plot has the higher correlation, so the answer is `"left"`.

All three practice trials use `provideFeedback: true` so Participants can learn what the task is asking before the study moves into the dynamic trial section.

## Step 5: Add the reusable trial component

Add one more component after the practice trials:

```json title="public/tutorial/replication-config.json"
"trial": {
  "baseComponent": "scatterBase"
}
```

This component also inherits from `scatterBase`, but it does not define fixed parameters or a fixed correct answer. The dynamic block will provide those values while the study runs.

Use this pattern when many trials share the same display and response format, but the exact trial values are generated or selected dynamically.

## Step 6: Add the fixed practice sequence

Replace the empty top-level sequence with a fixed block:

```json title="public/tutorial/replication-config.json"
"sequence": {
  "order": "fixed",
  "components": [
    {
      "order": "fixed",
      "components": [
        "practice T1 A:0.3 B:0.7",
        "practice T2 A:0.9 B:0.6",
        "practice T3 A:0.6 B:0.3"
      ]
    }
  ]
}
```

This shows the three practice trials in order. The component names in this sequence must exactly match the keys you added in `components`.

At this point, the Study Config has a complete practice section.

## Step 7: Add the dynamic JND block

Inside the nested fixed block, add the dynamic block after the three practice trials:

```json title="public/tutorial/replication-config.json"
{
  "order": "dynamic",
  "id": "steppedSequence",
  "functionPath": "tutorial/assets/replication/JNDDynamic.tsx",
  "parameters": {}
}
```

The full nested sequence should now look like this:

```json title="public/tutorial/replication-config.json"
"sequence": {
  "order": "fixed",
  "components": [
    {
      "order": "fixed",
      "components": [
        "practice T1 A:0.3 B:0.7",
        "practice T2 A:0.9 B:0.6",
        "practice T3 A:0.6 B:0.3",
        {
          "order": "dynamic",
          "id": "steppedSequence",
          "functionPath": "tutorial/assets/replication/JNDDynamic.tsx",
          "parameters": {}
        }
      ]
    }
  ]
}
```

The dynamic block calls the function at `tutorial/assets/replication/JNDDynamic.tsx`. That function decides what trial comes next and can pass parameters into the reusable `trial` component.

The `id` gives the dynamic block a stable name in the study sequence. The empty `parameters` object is still included so the block has the same shape as dynamic blocks that do receive custom settings.

## Step 8: Compare with the completed config

Open [`public/tutorial/_answers/replication-config.json`](https://github.com/revisit-studies/template/blob/main/public/tutorial/_answers/replication-config.json) and check:

- `baseComponents.scatterBase` defines the React stimulus and the shared button response.
- Each practice component uses `"baseComponent": "scatterBase"`.
- Each practice component passes `r1` and `r2` through `parameters`.
- Each practice component has a `correctAnswer` that uses `buttonsResponse`.
- `trial` inherits from `scatterBase` without fixed parameters.
- The sequence shows three practice trials before the dynamic block.
- The dynamic block uses `functionPath: "tutorial/assets/replication/JNDDynamic.tsx"`.

When those pieces match, the replication Study Config is complete.

<!-- Importing links -->
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    codeLinks={[
        {name: "Starter replication-config.json", url: "https://github.com/revisit-studies/template/blob/main/public/tutorial/replication-config.json"},
        {name: "Completed replication-config.json", url: "https://github.com/revisit-studies/template/blob/main/public/tutorial/_answers/replication-config.json"},
        {name: "Replication Assets", url: "https://github.com/revisit-studies/template/tree/main/public/tutorial/assets/replication"}
    ]}
    referenceLinks={[
        {name: "Pre Tutorial", url: "../tutorial/"},
        {name: "config.json Tutorial", url: "../config.json/"},
        {name: "Dynamic Blocks", url: "../../designing-studies/sequences/dynamic-blocks/"}
    ]}
/>
