# replication-config.json

In this part of the tutorial, you will build a [Study Config](../typedoc/interfaces/StudyConfig.md) for a replication study, [`public/tutorial/replication-config.json`](https://github.com/revisit-studies/template/blob/main/public/tutorial/replication-config.json). The completed version is [`public/tutorial/_answers/replication-config.json`](https://github.com/revisit-studies/template/blob/main/public/tutorial/_answers/replication-config.json). Use the completed version to check the step you just finished, not as something to copy all at once.

:::info
Before you start editing tutorial files, complete the [Installation guide](../getting-started/installation.md) using the **Starting from the Template Repository** workflow. If you have not done so already, finish the [`config.json` tutorial](./config.json.md) first, then come back to this page.
:::

In this tutorial, we will build an example that looks more like a real study. The study asks participants to compare two scatterplots and choose which one appears to have the larger correlation.

The study starts with three practice trials so participants can learn the task before the main trials begin. After that, the study uses a [dynamic block sequence](../typedoc/interfaces/DynamicBlock.md): if a participant answers correctly, the next comparison becomes harder; if they answer incorrectly, the next comparison becomes easier. This lets the study adapt to each participant’s performance while it is running.

## Step 1: Run the local server and register the config

Start the local server from the root of your template repository:

```bash
yarn serve
```

Before editing the replication Study Config, open [`public/global.json`](https://github.com/revisit-studies/template/blob/main/public/global.json). Add `tutorial-replication` to `configsList` and `configs`.

```json title="public/global.json"
{
  "$schema": "https://raw.githubusercontent.com/revisit-studies/study/v2.4.3/src/parser/GlobalConfigSchema.json",
  "configsList": [
    "tutorial",
    "tutorial-replication"
  ],
  "configs": {
    "tutorial": {
      "path": "tutorial/config.json"
    },
    "tutorial-replication": {
      "path": "tutorial/replication-config.json"
    }
  }
}
```

Open [http://localhost:8080](http://localhost:8080). You should now see the replication study listed.

![The replication study appears on the local reVISit page](./img/replication-config.json/step1.png)

## Step 2: Add the reusable scatter plot base component

First, navigate to [`src/public/tutorial/assets/replication/`](https://github.com/revisit-studies/template/tree/main/src/public/tutorial/assets/replication) and open [`ScatterWrapper.tsx`](https://github.com/revisit-studies/template/blob/main/src/public/tutorial/assets/replication/ScatterWrapper.tsx). The wrapper component is already provided for this tutorial. It renders two scatter plots side by side so you can focus on wiring the Study Config.

:::note
The scatter plots use pre-generated datasets from [`public/tutorial/assets/datasets/size_100`](https://github.com/revisit-studies/template/tree/main/public/tutorial/assets/datasets/size_100). Each file contains 100 points with a specific correlation value, and the file names follow the pattern `dataset_{correlation}_size_100.csv`.

The individual scatter plot component is also provided in [`Scatter.tsx`](https://github.com/revisit-studies/template/blob/main/src/public/tutorial/assets/replication/Scatter.tsx). `Scatter.tsx` loads one dataset file and renders it as a D3 scatter plot.

`ScatterWrapper.tsx` reads `r1` and `r2` from the component [`parameters`](../typedoc/interfaces/ReactComponent.md#parameters), converts them into dataset file names, and renders two scatter plots side by side.
:::

Now, let's go to [`public/tutorial/replication-config.json`](https://github.com/revisit-studies/template/blob/main/public/tutorial/replication-config.json). 

We have used `components` in `config.json`. In `replication-config.json`, we will learn how to use [`baseComponents`](../typedoc/interfaces/StudyConfig.md#basecomponents) to define reusable component templates and repeat them with different parameters.

Replace the empty `baseComponents` object with `scatterBase`.

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

`baseComponents` are templates. They are not added to the sequence directly. Other components inherit from them via `"baseComponent": "scatterBase"` and override only the fields that change, usually [`parameters`](../typedoc/interfaces/ReactComponent.md#parameters).

## Step 3: Add the first component (practice T1 A:0.3 B:0.7)

Let’s add the first component using `baseComponent`. Replace the empty [`components`](../typedoc/interfaces/StudyConfig.md#components) object with the first practice trial.

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

This trial [inherits](../typedoc/type-aliases/InheritedComponent.md) the stimulus and response from `scatterBase`. The [`parameters`](../typedoc/interfaces/ReactComponent.md#parameters) values tell the React component which correlations to show in the left and right plots.

For this practice trial, `r2` is larger than `r1`, so the correct answer is `"right"`. The `id` in [`correctAnswer`](../typedoc/interfaces/Answer.md) must match the response id from the base component: `buttonsResponse`.

Add the component to the sequence.

```json title="public/tutorial/replication-config.json"
"sequence": {
    "order": "fixed",
    "components": [
      "practice T1 A:0.3 B:0.7"
    ]
  }
```

![The replication study with the first practice trial](./img/replication-config.json/step3.png)

## Step 4: Add the second component (practice T2 A:0.9 B:0.6)

Add a comma after the first component, then add the second component. This time, use `0.9` for `r1` and `0.6` for `r2`.

```json title="public/tutorial/replication-config.json"
"components": {
  "practice T1 A:0.3 B:0.7": { ... },
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
}
```

This trial uses the same base component, but with different correlation values. Here, `r1` is larger than `r2`, so the correct answer is `"left"`.

Add the second practice trial to the same fixed sequence block:

```json title="public/tutorial/replication-config.json"
"sequence": {
    "order": "fixed",
    "components": [
      "practice T1 A:0.3 B:0.7",
      "practice T2 A:0.9 B:0.6"
    ]
  }
```

![The replication study with the first two practice trials](./img/replication-config.json/step4.png)

## Step 5: Add the third component (practice T3 A:0.6 B:0.3)

Add the third component after the second.

```json title="public/tutorial/replication-config.json"
"components": {
  "practice T1 A:0.3 B:0.7": { ... },
  "practice T2 A:0.9 B:0.6": { ... },
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
}
```

Again, this trial inherits from `scatterBase`. The left plot has the higher correlation, so the answer is `"left"`.

Add the third practice trial to the sequence:

```json title="public/tutorial/replication-config.json"
"sequence": {
    "order": "fixed",
    "components": [
      "practice T1 A:0.3 B:0.7",
      "practice T2 A:0.9 B:0.6",
      "practice T3 A:0.6 B:0.3"
    ]
  }
```

All three practice trials use [`provideFeedback`](../designing-studies/answers-trainings.md), so participants can learn what the task is asking before the study moves on to the next section.

![The replication study with all three practice trials](./img/replication-config.json/step5.png)

## Step 6: Add the Dynamic JND Block

This is the exciting part of the tutorial: using a dynamic block in the sequence.

A regular sequence lists every component ahead of time. A [dynamic block](../typedoc/interfaces/DynamicBlock.md) works differently. Instead of listing all trials in the config, it calls a function while the study is running. That function can look at the participant’s previous answers and decide which component should appear next.

In this replication study, the dynamic block will adapt the scatterplot comparison. The participant always sees two scatterplots and chooses which one has the stronger correlation. If they answer correctly, the next comparison becomes harder by making the two correlations more similar. If they answer incorrectly, the next comparison becomes easier.

Navigate to [`src/public/tutorial/assets/replication/`](https://github.com/revisit-studies/template/tree/main/src/public/tutorial/assets/replication) and open [`JNDDynamic.tsx`](https://github.com/revisit-studies/template/blob/main/src/public/tutorial/assets/replication/JNDDynamic.tsx).

The dynamic function is already provided for this tutorial. You will connect it to the Study Config with a dynamic block.

:::note
The dynamic function returns:

- `component`: the component to show next
- `parameters`: the values passed into that trial, such as `r1` and `r2`, which represent the correlation values for the two scatterplots
- `correctAnswer`: the correct button response for the generated trial

This function looks at the participant’s previous answers within the dynamic block. It starts with a large correlation difference, using `0.1` for one scatterplot and `0.9` for the other. If the participant answers correctly, the function makes the lower correlation value a little higher, so the two scatterplots look more similar and the next task becomes harder. The dynamic block stops after nine trials.
:::

Before adding the dynamic block to the sequence, add a reusable dynamic trial component named `trial`. The jump function will return this component each time it generates a new dynamic trial.

```json title="public/tutorial/replication-config.json"
"components": {
  "practice T1 A:0.3 B:0.7": { ... },
  "practice T2 A:0.9 B:0.6": { ... },
  "practice T3 A:0.6 B:0.3": { ... },
  "trial": {
    "baseComponent": "scatterBase"
  }
}
```

The `trial` component inherits from `scatterBase`; the dynamic function will provide its `parameters` and `correctAnswer` while the study is running.

:::warning
Make sure to add the `trial` component. The dynamic block will fail if `trial` is not defined in `components`.
:::

Then, inside the `sequence`, add the [dynamic block](../typedoc/interfaces/DynamicBlock.md) after the three practice trials.

```json title="public/tutorial/replication-config.json"
"sequence": {
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
```

![The replication study with the dynamic JND block](./img/replication-config.json/step6.png)

<!-- Importing links -->
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    codeLinks={[
        {name: "replication-config.json", url: "https://github.com/revisit-studies/template/blob/main/public/tutorial/replication-config.json"},
        {name: "replication-config.json Answer", url: "https://github.com/revisit-studies/template/blob/main/public/tutorial/_answers/replication-config.json"},
        {name: "replication-config assets", url: "https://github.com/revisit-studies/template/tree/main/src/public/tutorial/assets"}
    ]}
    referenceLinks={[
        {name: "Installation", url: "../../getting-started/installation/"}
    ]}
/>
