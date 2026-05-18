# config.json

In this part of the tutorial, you will build the [Study Config](../typedoc/interfaces/StudyConfig.md), [`public/tutorial/config.json`](https://github.com/revisit-studies/template/blob/main/public/tutorial/config.json). The completed version is [`public/tutorial/_answers/config.json`](https://github.com/revisit-studies/template/blob/main/public/tutorial/_answers/config.json). Use the completed version to check the step you just finished, not as something to copy all at once.

:::info
Before you start editing tutorial files, complete the [Installation guide](../getting-started/installation.md) using the **Starting from the Template Repository** workflow.
:::

## Step 1: Run the local server

Start the local server from the root of your template repository:

```bash
yarn serve
```

Before editing the tutorial Study Config, open [`public/global.json`](https://github.com/revisit-studies/template/blob/main/public/global.json). This file follows the [Global Config](../typedoc/interfaces/GlobalConfig.md) schema. The template already registers the tutorial config. You should see `tutorial` listed in both `configsList` and `configs`.

```json title="public/global.json"
{
  "$schema": "https://raw.githubusercontent.com/revisit-studies/study/v2.4.2/src/parser/GlobalConfigSchema.json",
  "configsList": ["tutorial"],
  "configs": {
    "tutorial": {
      "path": "tutorial/config.json"
    }
  }
}
```

Open [http://localhost:8080](http://localhost:8080). You should see the tutorial study listed. 

![The tutorial study appears on the local reVISit page with an empty sequence warning.](./img/config.json/step1.png)

:::warning
At this point, the tutorial config should show a warning that the sequence is empty. You can ignore this warning for now. It is intentional because `public/tutorial/config.json` currently has an empty [`sequence.components`](../typedoc/interfaces/Sequence.md#components) array. If you enter the study now, reVISit may go directly to the study end page because no components have been added to the sequence yet.
:::

## Step 2: Add the welcome component

If you go into the tutorial study right now, you will be directed straight to the end page, which should look like this.

![The tutorial study with the end page](./img/config.json/step2-1.png)

Inside the empty `components` object, add a basic [Markdown component](../typedoc/interfaces/MarkdownComponent.md) named `welcome`.

```json title="public/tutorial/config.json"
"components": {
  "welcome": {
    "type": "markdown",
    "path": "tutorial/assets/welcome.md",
    "response": []
  }
}
```

This component displays the Markdown file at [`public/tutorial/assets/welcome.md`](https://github.com/revisit-studies/template/blob/main/public/tutorial/assets/welcome.md).

Now add `welcome` to the sequence:

```json title="public/tutorial/config.json"
"sequence": {
  "order": "fixed",
  "components": [
    "welcome"
  ]
}
```

Because this is a [fixed sequence](../designing-studies/sequences/study-sequences.md#simple-sequence), participants see the component names in this array from top to bottom.

Refresh the local study or click "Next participant" to reload the Study Config and start a fresh preview. You should now see the welcome page.


![The tutorial study with the welcome page](./img/config.json/step2-2.png)

:::warning
A common mistake is to add the component but forget the sequence entry. If the component exists in `components` but is not listed in `sequence.components`, the component will not show up.
:::


## Step 3: Add the consent component

Add a comma after the `welcome` component, then add a second Markdown component named `consent`.

```json title="public/tutorial/config.json"
"components": {
  "welcome": { ... },
  "consent": {
    "type": "markdown",
    "path": "tutorial/assets/consent.md",
    "nextButtonText": "I agree",
    "response": []
  }
}
```

This component displays [`public/tutorial/assets/consent.md`](https://github.com/revisit-studies/template/blob/main/public/tutorial/assets/consent.md). The `nextButtonText` field changes the text on the next button, which is useful for consent pages because the button can say exactly what the participant is agreeing to.

Add `consent` after `welcome` in the sequence:

```json title="public/tutorial/config.json"
"sequence": {
  "order": "fixed",
  "components": [
    "welcome",
    "consent"
  ]
}
```

Refresh the study or click "Next participant". You should see the welcome page first, then the consent page with an "I agree" button.

![The tutorial study with the consent page with I agree button](./img/config.json/step3.png)

## Step 4: Add demographics with several form elements

Add a questionnaire component named `demographics`. A [`questionnaire`](../typedoc/interfaces/QuestionnaireComponent.md) component is used to collect form-based answers from the participant, such as demographic information, survey responses, or post-task feedback.

ReVISit supports many [form response types](../designing-studies/forms.md) inside a questionnaire, including numerical inputs, Likert scales, dropdowns, checkboxes, sliders, dividers, and matrix questions. For the full list of available response types, see the [Response reference](../typedoc/type-aliases/Response.md).

```json title="public/tutorial/config.json"
"components": {
  "welcome": { ... },
  "consent": { ... },
  "demographics": {
    "type": "questionnaire",
    "response": [
      {
        "id": "age",
        "type": "numerical",
        "prompt": "What is your age?"
      },
      {
        "id": "health",
        "type": "likert",
        "prompt": "How would you rate your overall health?",
        "secondaryText": "1 being the worst health and 5 being the best health",
        "numItems": 5,
        "rightLabel": "Best health",
        "leftLabel": "Worst health"
      },
      {
        "id": "dividerResponse",
        "type": "divider",
        "location": "belowStimulus"
      },
      {
        "id": "fruits",
        "type": "matrix-checkbox",
        "prompt": "Which of these fruits do you like at each time of day?",
        "answerOptions": ["Breakfast", "Lunch", "Dinner"],
        "questionOptions": ["Banana", "Apple", "Orange", "Grapes", "Strawberry"]
      },
      {
        "id": "q-short-text",
        "type": "shortText",
        "prompt": "What is your favorite sports team?",
        "placeholder": "Enter your team here"
      },
      {
        "id": "operating-systems",
        "type": "checkbox",
        "prompt": "Which of these operating systems do you use?",
        "minSelections": 1,
        "maxSelections": 2,
        "options": ["Windows", "macOS", "Linux"],
        "withOther": true
      },
      {
        "id": "q-slider",
        "type": "slider",
        "prompt": "How would you rate this tutorial so far?",
        "secondaryText": "Your answer is not legally binding.",
        "startingValue": 50,
        "options": [
          { "label": "Bad", "value": 0 },
          { "label": "Alright", "value": 50 },
          { "label": "Good", "value": 100 }
        ]
      }
    ]
  }
}
```

This one component introduces several form elements: [numerical input](../typedoc/interfaces/NumericalResponse.md), [Likert scale](../typedoc/interfaces/LikertResponse.md), [divider](../typedoc/interfaces/DividerResponse.md), [matrix checkbox](../typedoc/interfaces/MatrixCheckboxResponse.md), [short text](../typedoc/interfaces/ShortTextResponse.md), [checkbox](../typedoc/interfaces/CheckboxResponse.md), and [slider](../typedoc/interfaces/SliderResponse.md).


Add `demographics` to the sequence:

```json title="public/tutorial/config.json"
"sequence": {
  "order": "fixed",
  "components": [
    "welcome",
    "consent",
    "demographics"
  ]
}
```

Click "Next participant" and confirm that the demographics page appears after consent.

![The tutorial study with demographics](./img/config.json/step4.png)

## Step 5: Add training with feedback

Add a questionnaire component named `trainingWithFeedback`.

```json title="public/tutorial/config.json"
"components": {
  "welcome": { ... },
  "consent": { ... },
  "demographics": { ... },
  "trainingWithFeedback": {
    "type": "questionnaire",
    "response": [
      {
        "id": "training",
        "type": "radio",
        "prompt": "Yes is the correct answer, click it",
        "options": ["Yes", "No"]
      }
    ],
    "correctAnswer": [
      {
        "id": "training",
        "answer": "Yes"
      }
    ],
    "provideFeedback": true,
    "trainingAttempts": 2,
    "allowFailedTraining": false,
    "nextButtonDisableTime": 5000
  }
}
```

- [`correctAnswer`](../typedoc/interfaces/Answer.md) says which answer is correct. The `id` must match the response id, `training`.
- `provideFeedback: true` tells to show feedback after the participant answers.
- `trainingAttempts: 2` gives the participant two attempts.
- `allowFailedTraining: false` prevents the participant from continuing after failing the allowed attempts.
- `nextButtonDisableTime: 5000` disables the next button after 5 seconds.

Add `trainingWithFeedback` to the sequence after `demographics`.

```json title="public/tutorial/config.json"
"sequence": {
  "order": "fixed",
  "components": [
    "welcome",
    "consent",
    "demographics",
    "trainingWithFeedback"
  ]
}
```

When you preview this page, the next button becomes a **Check answer** button. If the participant answers incorrectly twice, reVISit stops them from continuing. If they answer correctly, they can move forward.

![The tutorial study with the training with feedback page](./img/config.json/step5.png)

## Step 6: Add the coin image component

Add an [image component](../typedoc/interfaces/ImageComponent.md) named `coinImage`.

```json title="public/tutorial/config.json"
"components": {
  "welcome": { ... },
  "consent": { ... },
  ...,
  "trainingWithFeedback": { ... },
  "coinImage": {
    "type": "image",
    "path": "tutorial/assets/coins.png",
    "nextButtonLocation": "sidebar",
    "response": [
      {
        "id": "cost-effective",
        "type": "radio",
        "prompt": "Which coin is most effective to produce?",
        "location": "sidebar",
        "options": ["Penny", "Nickel", "Dime", "Quarter", "Half Dollar"]
      },
      {
        "id": "cost-ineffective",
        "type": "dropdown",
        "prompt": "Which coin is least cost effective to produce?",
        "location": "sidebar",
        "options": ["Penny", "Nickel", "Dime", "Quarter", "Half Dollar"]
      }
    ]
  }
}
```

This component displays [`public/tutorial/assets/coins.png`](https://github.com/revisit-studies/template/blob/main/public/tutorial/assets/coins.png) and places the questions in the sidebar.
Add `coinImage` to the sequence after `trainingWithFeedback`.

```json title="public/tutorial/config.json"
"sequence": {
  "order": "fixed",
  "components": [
    "welcome",
    "consent",
    "demographics",
    "trainingWithFeedback",
    "coinImage"
  ]
}
```

![The tutorial study with the coin image and sidebar questions](./img/config.json/step6.png)

## Step 7: Add Vega components

Add [`vegaPath`](../typedoc/interfaces/VegaComponentPath.md), which loads a Vega chart from a separate file.

```json title="public/tutorial/config.json"
"components": {
  "welcome": { ... },
  "consent": { ... },
  ...,
  "coinImage": { ... },
  "vegaPath": {
    "type": "vega",
    "path": "tutorial/assets/simpleChart.json",
    "response": [
      {
        "id": "simple-vega",
        "type": "radio",
        "prompt": "What is the value of bar A?",
        "options": ["10", "28", "50"]
      }
    ]
  }
}
```

Then add [`vegaConfig`](../typedoc/interfaces/VegaComponentConfig.md), which puts the Vega-Lite chart definition directly in the Study Config.

```json title="public/tutorial/config.json"
"components": {
  "welcome": { ... },
  "consent": { ... },
  ...,
  "vegaPath": { ... },
  "vegaConfig": {
    "type": "vega",
    "config": {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "description": "A simple bar chart with embedded data.",
      "data": {
        "values": [
          { "category": "A", "value": 28 },
          { "category": "B", "value": 55 },
          { "category": "C", "value": 43 }
        ]
      },
      "mark": "bar",
      "encoding": {
        "x": {
          "field": "category",
          "type": "nominal",
          "axis": { "labelAngle": 0 }
        },
        "y": {
          "field": "value",
          "type": "quantitative"
        }
      }
    },
    "response": [
      {
        "id": "dynamic-vega",
        "type": "radio",
        "prompt": "What is the value of bar A?",
        "options": ["10", "28", "50"]
      }
    ]
  }
}
```

:::note
There are two ways of defining Vega components in reVISit. If you'd like to learn more, visit [Vega stimulus docs](../designing-studies/vega-stimulus.md). Use `path` when the visualization specification is easier to maintain as its own file. Use `config` when the chart is small enough to keep inside the Study Config.
:::
Add `vegaPath` and `vegaConfig` to the sequence.

```json title="public/tutorial/config.json"
"sequence": {
  "order": "fixed",
  "components": [
    "welcome",
    "consent",
    "demographics",
    "coinImage",
    "vegaPath",
    "vegaConfig"
  ]
}
```

![The tutorial study with the Vega chart components](./img/config.json/step7.png)

## Step 8: Add reactive Vega

Add `reactiveVega`.

```json title="public/tutorial/config.json"
"components": {
  "welcome": { ... },
  "consent": { ... },
  ...,
  "vegaConfig": { ... },
  "reactiveVega": {
    "type": "vega",
    "path": "tutorial/assets/reactive.json",
    "response": [
      {
        "id": "reactiveResponse",
        "type": "reactive",
        "prompt": "What is the value of bar A? Click it to show here"
      }
    ]
  }
}
```

A [reactive response](../typedoc/interfaces/ReactiveResponse.md) records an interaction from the visualization itself. In this example, the participant clicks a mark in the Vega chart and that interaction becomes the response.

Add `reactiveVega` to the sequence.

```json title="public/tutorial/config.json"
"sequence": {
  "order": "fixed",
  "components": [
    ...,
    "vegaConfig",
    "reactiveVega"
  ]
}
```

![The tutorial study with the reactive Vega chart](./img/config.json/step8.png)

## Step 9: Add website components

First, add a simple [website component](../typedoc/interfaces/WebsiteComponent.md). This embeds a web page in the study as an iframe.

```json title="public/tutorial/config.json"
"components": {
  "welcome": { ... },
  "consent": { ... },
  ...,
  "reactiveVega": { ... },
  "website": {
    "type": "website",
    "path": "https://revisit.dev",
    "response": []
  }
}
```

This is useful when a study asks participants to inspect a website or web-based visualization. The empty `response` array means the page is shown without collecting a form response.

Add `website` to the sequence.


```json title="public/tutorial/config.json"
"sequence": {
  "order": "fixed",
  "components": [
    ...,
    "reactiveVega",
    "website"
  ]
}
```

![The tutorial study with the embedded website](./img/config.json/step9.png)

Next, add a reactive website named `reactiveWebsite`.

```json title="public/tutorial/config.json"
"components": {
  "welcome": { ... },
  "consent": { ... },
  ...,
  "website": { ... },
  "reactiveWebsite": {
    "type": "website",
    "path": "tutorial/assets/bar-chart-interaction.html",
    "instructionLocation": "aboveStimulus",
    "description": "A trial for the user to click the largest bar",
    "instruction": "Click on the largest bar",
    "response": [
      {
        "id": "barChart",
        "prompt": "Your selected answer:",
        "location": "sidebar",
        "type": "reactive"
      }
    ],
    "parameters": {
      "barData": [0.32, 0.01, 1.2, 1.3, 0.82, 0.4, 0.3]
    }
  }
}
```

This component loads a local HTML page and passes `barData` into it through [`parameters`](../typedoc/interfaces/WebsiteComponent.md#parameters). The page can render a different chart based on those values. The response is `reactive`, so the HTML page can send the participant's selection back to reVISit.

Add `reactiveWebsite` to the sequence after `website`.


```json title="public/tutorial/config.json"
"sequence": {
  "order": "fixed",
  "components": [
    ...,
    "website",
    "reactiveWebsite"
  ]
}
```

![The tutorial study with the reactive website bar chart](./img/config.json/step9-2.png)

## Step 10: Add reactExampleCars

Add the first [React component](../typedoc/interfaces/ReactComponent.md) trial.

```json title="public/tutorial/config.json"
"components": {
  "welcome": { ... },
  "consent": { ... },
  ...,
  "reactiveWebsite": { ... },
  "reactExampleCars": {
    "type": "react-component",
    "path": "tutorial/assets/ReactExample.tsx",
    "instruction": "How many cars from Japan have a Miles Per Gallon value greater than 35?",
    "response": [
      {
        "id": "response",
        "prompt": "Answer:",
        "location": "sidebar",
        "type": "numerical",
        "max": 100,
        "min": 0
      }
    ],
    "correctAnswer": [
      {
        "id": "response",
        "answer": 17
      }
    ],
    "parameters": {
      "dataset": "cars",
      "x": "Miles per Gallon",
      "y": "Weight (lbs)",
      "category": "Origin",
      "ids": "id",
      "brushType": "Rectangular Selection"
    }
  }
}
```

This component renders [`ReactExample.tsx`](https://github.com/revisit-studies/template/blob/main/src/public/tutorial/assets/ReactExample.tsx). The [`parameters`](../typedoc/interfaces/ReactComponent.md#parameters) object tells the React component which dataset and fields to use.


:::info
[React component](../designing-studies/react-stimulus.md) paths are relative to `src/public/`, not the root `public/` folder. The path `tutorial/assets/ReactExample.tsx` points to `src/public/tutorial/assets/ReactExample.tsx`.
:::

Add `reactExampleCars` to the sequence.

```json title="public/tutorial/config.json"
"sequence": {
  "order": "fixed",
  "components": [
    ...,
    "reactiveWebsite",
    "reactExampleCars"
  ]
}
```

![The tutorial study with the reactExampleCars trial](./img/config.json/step10.png)

## Step 11: Add reactExamplePenguins

Add a second React component trial that uses the same React file with different parameters.

```json title="public/tutorial/config.json"
"components": {
  "welcome": { ... },
  "consent": { ... },
  ...,
  "reactExampleCars": { ... },
  "reactExamplePenguins": {
    "type": "react-component",
    "path": "tutorial/assets/ReactExample.tsx",
    "instruction": "Consider only cars that have a miles per gallon value greater than 30 AND weigh more than 2000 pounds. Which country or region produces the most and the least of these cars?",
    "response": [
      {
        "id": "response",
        "prompt": "Answer:",
        "location": "sidebar",
        "type": "numerical",
        "max": 100,
        "min": 0
      }
    ],
    "correctAnswer": [
      {
        "id": "response",
        "answer": 15
      }
    ],
    "parameters": {
      "dataset": "penguin",
      "x": "Body Mass (g)",
      "y": "Flipper Length (mm)",
      "category": "Species",
      "ids": "id",
      "brushType": "Slider Selection"
    }
  }
}
```

This step shows why parameters are useful. The Study Config can reuse the same React component while changing the task, dataset, fields, and interaction style.

Add `reactExamplePenguins` to the sequence.

```json title="public/tutorial/config.json"
"sequence": {
  "order": "fixed",
  "components": [
    ...,
    "reactExampleCars",
    "reactExamplePenguins"
  ]
}
```

![The tutorial study with the reactExamplePenguins trial](./img/config.json/step11.png)

## Step 12: Add example1 and example2

Add two simple questionnaire components.

```json title="public/tutorial/config.json"
"components": {
  "welcome": { ... },
  "consent": { ... },
  ...,
  "reactExamplePenguins": { ... },
  "example1": {
    "type": "questionnaire",
    "response": [
      {
        "id": "q-example-1",
        "type": "shortText",
        "prompt": "Example question"
      }
    ]
  },
  "example2": {
    "type": "questionnaire",
    "response": [
      {
        "id": "q-example-2",
        "type": "dropdown",
        "prompt": "Example question",
        "options": ["Option 1", "Option 2"]
      }
    ]
  }
}
```

These components are intentionally simple. You will reuse them in the interruption examples in the next step.

## Step 13: Add attention checks and interruptions

[Attention checks and interruptions](../designing-studies/sequences/study-sequences.md#attention-checks-and-breaks) help you add quality-control moments without rewriting the main study flow. An attention check can catch participants who are not reading carefully, while an interruption can insert a check, break, or reminder between normal tasks.

A [sequence block](../typedoc/interfaces/ComponentBlock.md) can be `fixed`, `random`, or `latinSquare`. A fixed block shows components in the order you list them. A random block shuffles the components for each participant. A Latin square block balances ordering across participants. See the [study sequence guide](../designing-studies/sequences/study-sequences.md) for more sequence patterns.

:::info
You can also nest sequence blocks. For example, the following sequence keeps `welcome` and `consent` fixed, then randomizes later tasks:

```json title="public/tutorial/config.json"
"sequence": {
  "order": "fixed",
  "components": [
    "welcome",
    "consent",
    {
      "id": "randomizedTasks",
      "order": "random",
      "components": [
        "coinImage",
        "vegaPath",
        "reactiveVega"
      ]
    }
  ]
}
```
:::

First, add an `attentionCheck` component.

```json title="public/tutorial/config.json"
"components": {
  "welcome": { ... },
  "consent": { ... },
  ...,
  "example2": { ... },
  "attentionCheck": {
    "type": "questionnaire",
    "response": [
      {
        "id": "q-example-2",
        "type": "dropdown",
        "prompt": "Attention check question",
        "options": ["Option 1", "Option 2"]
      }
    ]
  }
}
```

Then add a [deterministic interruption](../typedoc/interfaces/DeterministicInterruption.md) block to the sequence:

```json title="public/tutorial/config.json"
"sequence": {
  "order": "fixed",
  "components": [
    "welcome",
    "consent",
    ...,
    {
      "id": "attentionDeterministic",
      "order": "fixed",
      "components": [
        "example1",
        "example2",
        "example1",
        "example2"
      ],
      "interruptions": [
        {
          "firstLocation": 0,
          "spacing": 2,
          "components": [
            "attentionCheck"
          ]
        }
      ]
    }
  ]
}
```

This is deterministic because the attention check appears at a predictable spacing.

Now add a [random interruption](../typedoc/interfaces/RandomInterruption.md) block:

```json title="public/tutorial/config.json"
"sequence": {
  "order": "fixed",
  "components": [
    "welcome",
    "consent",
    ...,
    {
      "id": "attentionRandom",
      "order": "fixed",
      "components": [
        "example1",
        "example2",
        "example1",
        "example2"
      ],
      "interruptions": [
        {
          "spacing": "random",
          "numInterruptions": 3,
          "components": [
            "attentionCheck"
          ]
        }
      ]
    }
  ]
}
```

## Step 14: Add skip logic

[Skip logic](../designing-studies/sequences/study-sequences.md#skip-logic) lets a study respond to a participant's answer. You can use it to branch around questions that do not apply, end a block when someone fails an attention check, or send participants to a follow-up task. The exact skip condition shapes are listed in [`SkipConditions`](../typedoc/type-aliases/SkipConditions.md).

First, add `exampleWithAnswer`.

```json title="public/tutorial/config.json"
"components": {
  "welcome": { ... },
  "consent": { ... },
  ...,
  "attentionCheck": { ... },
  "exampleWithAnswer": {
    "type": "questionnaire",
    "response": [
      {
        "id": "q-example-1",
        "type": "numerical",
        "prompt": "What is 2 + 2?"
      }
    ]
  }
}
```

Then add a [`skip`](../typedoc/type-aliases/SkipConditions.md) block to the sequence:

```json title="public/tutorial/config.json"
"sequence": {
  "order": "fixed",
  "components": [
    "welcome",
    "consent",
    ...,
    {
      "id": "skipResponse",
      "order": "fixed",
      "components": [
        "exampleWithAnswer",
        "example1"
      ],
      "skip": [
        {
          "name": "exampleWithAnswer",
          "check": "response",
          "responseId": "q-example-1",
          "value": 4,
          "comparison": "notEqual",
          "to": "end"
        }
      ]
    }
  ]
}
```

This block asks the participant `What is 2 + 2?`. If the response is not equal to `4`, reVISit skips to the end of this nested block. If the response is `4`, the participant continues to `example1`.

The `responseId` must match the response id inside `exampleWithAnswer`.

## Step 15: Add the microphone library and audio settings

Finally, add the [microphone check library](../designing-studies/plugin-libraries.md) and turn on [audio recording](../designing-studies/think-aloud.md) for the study.

Add [`importedLibraries`](../typedoc/interfaces/StudyConfig.md#importedlibraries) after `studyMetadata`:

```json title="public/tutorial/config.json"
"importedLibraries": [
  "mic-check"
],
```

Then add [`recordAudio`](../typedoc/interfaces/UIConfig.md#recordaudio) to [`uiConfig`](../typedoc/interfaces/UIConfig.md):

```json title="public/tutorial/config.json"
"uiConfig": {
  "recordAudio": true,
  "contactEmail": "contact@revisit.dev",
  "helpTextPath": "tutorial/assets/help.md",
  "logoPath": "revisitAssets/revisitLogoSquare.svg",
  "withProgressBar": true,
  "autoDownloadStudy": false,
  "withSidebar": true
}
```

Add the microphone check component to the sequence after `consent`:

```json title="public/tutorial/config.json"
"sequence": {
  "order": "fixed",
  "components": [
    "welcome",
    "consent",
    "$mic-check.components.audioTest",
    "demographics",
    ...
  ]
}
```

:::note
The `${library}.components.X` syntax references a component defined in an imported library. The `$` prefix tells reVISit to look up the component in the library namespace rather than in your local `components` object. The same syntax works for sequences (`${library}.sequences.X`).
:::

Because `uiConfig.recordAudio` enables audio recording for the study, turn audio recording off for the welcome and consent pages:

```json title="public/tutorial/config.json"
"components": {
  "welcome": {
    "type": "markdown",
    "recordAudio": false,
    "path": "tutorial/assets/welcome.md",
    "response": []
  },
  "consent": {
    "type": "markdown",
    "recordAudio": false,
    "path": "tutorial/assets/consent.md",
    "nextButtonText": "I agree",
    "response": []
  },
  ...
}
```


<!-- Importing links -->
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    codeLinks={[
        {name: "config.json", url: "https://github.com/revisit-studies/template/blob/main/public/tutorial/config.json"},
        {name: "config.json Answer", url: "https://github.com/revisit-studies/template/blob/main/public/tutorial/_answers/config.json"}
    ]}
    referenceLinks={[
        {name: "Installation", url: "../../getting-started/installation/"}
    ]}
/>
