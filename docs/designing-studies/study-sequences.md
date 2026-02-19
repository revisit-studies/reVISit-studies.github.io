# Study Sequence

Once you have defined the components you want to be part of your study, you need to tell reVISit what order to show the components in. This is done by defining a sequence object in the reVISit Spec, which has a variety of powerful options for different randomization types, as well as attention checks, breaks, and advanced skip logic for more complex studies.

ReVISit also always injects a special `end` component at the very end of the study, at which point the data is uploaded and the participant is instructed that they can safely close the window. Other blocks can also optionally be given `id`, which can then be used to jump to them.

## Simple Sequence

If your study has a set order, creating a sequence is simple. Define the components in the order you want to see them, and set your order to `fixed`.

```json
"sequence": {
  "order": "fixed",
  "components": [
    "introduction",
    "consent",
    "trial1",
    "trial2",
    "post-survey"
  ]
}
```

## Nested Sequence

Many studies need to randomize the order of some of the components, but not all. You may want every participant to see `introduction` and `consent` first, but then randomize the order they see trials in. To do this, sequences can be nested. Create another object around your trials, and change the order to `random`.

```json
 "sequence": {
  "order": "fixed",
  "components": [
    "introduction",
    "consent",
    {
      "order": "random",
      "components": [
        "trial1",
        "trial2"
      ]
    },
    "post-survey"
  ]
 }
```

In this case all participants will first see `introduction` and `consent`, and then randomly either `trial1` or `trial2` first, and then the other trial second, followed by the `post-survey` for everyone.

Studies can be nested to arbitrary depths. A frequent use case is a within subjects study where you want to randomize the order a participant sees two conditions in, and then also randomize the order of the trials within each condition. That would look like the following. 

```json
"sequence": {
  "order": "fixed",
  "components": [
    "introduction",
    "consent",
    {
      "order": "random",
      "components": [
        {
          "order": "random",
          "components": [
            "ConditionA-1",
            "ConditionA-2"
          ]
        },
        {
          "order": "random",
          "components": [
            "ConditionB-1",
            "ConditionB-2"
          ]
        },
      ]
    },
    "post-survey"
  ]
}
```

## Latin Square

Studies frequently want portions of their trials to be random, but also want to ensure that their trials are not susceptible to ordering effects due to bad luck in the randomization process. A [latin square study design](https://en.wikipedia.org/wiki/Latin_square) is commonly used to combat this, and we have latin squares as a built-in option for randomization. Just change the order to `latinSquare`.

```json
"sequence": {
  "order": "fixed",
  "components": [
  "introduction",
  "consent",
  {
    "order": "latinSquare",
    "components": [
      "trial1",
      "trial2"
    ]
  },
  "post-survey"
  ]
}
```

This option will create a latin square for any block using one behind the scenes, iterate through the latin square as new participants request sequences, and refill it when empty.

:::warning
The Latin square theoretically ensures proper balance between conditions, however the balance is only guaranteed if all participants complete the study, which is frequently not the case in online studies. If a participant doesn't complete the study and should be discarded, that “draw” from the latin square is used up, which could lead to inconsistencies (e.g., if more participants don't complete one condition of the study more often than others). You can counter that effect by `rejecting` participants via the [data dashboard](../../analysis/study-summary/). When a participant is rejected, their data gets flagged (but not deleted), and the sequence they had is returned to the sequence pool. This ensures that participants that start a study but do not complete it or are stopped before completing it (failed attention check, refused consent form, etc.) do not use up a row of any generated latin squares.

In practice, it is useful to recruit participant in batches and reject incomplete participants before starting a new batch, to ensure that the latin square remains balanced. 

For other ways to ensure balance in your study design, please review this [FAQ item](../faq.md#q-how-can-i-ensure-balanced-numbers-of-participants-between-conditions-in-my-study-design).
:::

## Dynamic Blocks

Some studies require knowledge of the participant's responses to previous questions to determine the next component that is shown. For example, if a participant answers a question incorrectly, they may be shown a simpler task next. This can be achieved with [dynamic blocks](./dynamic-blocks.md).

## Showing a Subset of All Trials

Studies frequently want to only show a subset of all trials to a single participant. For this, each block in the sequence has a `numSamples` variable. The following example will show each participant 2 of the 4 trials. `numSamples` works with all sequence orders, but is likely only useful in combination with `random` and `latinSquare`. If used with `latinSquare`, choosing a `numSamples` will ensure that each trial is seen the same amount.

```json
"sequence": {
  "order": "fixed",
  "components": [
      "introduction",
      "consent",
      {
        "order": "latinSquare",
        "numSamples": 2,
        "components": [
          "trial1",
          "trial2",
          "trial3",
          "trial4"
        ]
      },
      "post-survey"
  ]
}
```

## Attention Checks and Breaks

To add attention checks or breaks to your study, there is an `interruptions` object, which has its own components. The example below adds two attention checks randomly spaced out between trials 1-4. You are guaranteed that the first component will not be an attention check, and that you won't see two attention checks back to back.

```json
"sequence": {
  "order": "fixed",
  "components": [
    "introduction",
    "consent",
    {
      "order": "latinSquare",
      "components": [
        "trial1",
        "trial2",
        "trial3",
        "trial4"
      ],
      "interruptions": [
        {
          "spacing": "random",
          "numInterruptions": 2,
          "components": ["myAttentionCheckComponent"]
        }
      ]
    },
    "post-survey"
  ]
}
```

You can also add `interruptions` deterministically at set intervals. The example below will put an attention check after the first and third trial.

```json
"sequence": {
  "order": "fixed",
  "components": [
    "introduction",
    "consent",
    {
      "order": "latinSquare",
      "components": [
        "trial1",
        "trial2",
        "trial3",
        "trial4"
      ],
      "interruptions": [
        {
          "spacing": 2,
          "firstLocation": 1,
          "components": ["myAttentionCheckComponent"]
        }
      ]
    },
    "post-survey"
  ]
}
```

## Skip Logic

Some studies need more advanced sequencing logic, based on a participant's response to previous questions. For example, a participant should only be shown a second, simpler task if they got a first, difficult task wrong. This is possible to implement in reVISit sequences with the `skip` object.

The example below will jump straight to `end` if the consent form is answered with anything but `yes` to the field `consentApproval`, meaning the participant did not approve of the consent form. All skip conditions require labeling any components that you want to jump to with your own id, except for the keyword `end`, which always jumps to the default final component of the study. 

```json
"sequence": {
  "order": "fixed",
  "components": [
    "introduction",
    {
    "order": "fixed",
    "components": ["consent"],
    "skip": [
      {
        "name": "consent",
        "check": "response",
        "responseId": "consentApproval",
        "value": "yes",
        "to": "end"
      }
    ]
    },
    "trial1",
    "trial2",
    "trial3",
    "trial4",
    "post-survey"
  ]
}
```

To check if multiple components are correct, for example that all attention checks were correct, you can do the following:

```json
"sequence": {
  "order": "fixed",
  "components": [
    "introduction",
    "consent",
    {
      "order": "latinSquare",
      "components": [
        "trial1",
        "trial2",
        "trial3",
        "trial4"
      ],
      "interruptions": [
        {
          "spacing": 2,
          "firstLocation": 1,
          "components": ["myAttentionCheckComponent"]
        }
      ],
      "skip": [
        {
          "name": "myAttentionCheckComponent",
          "check": "responses",
          "to": "end"
        }
      ]
    },
    "post-survey"
  ]
}
```
This example will go through every component named `myAttentionCheckComponent`, and if any response is incorrect, jump immediately to end.

You can also wait until multiple attention checks have been answered incorrectly to jump to end with the `repeatedComponent` check.

```json
"sequence": {
  "order": "fixed",
  "components": [
    "introduction",
    "consent",
    {
      "order": "latinSquare",
      "components": [
        "trial1",
        "trial2",
        "trial3",
        "trial4"
      ],
      "interruptions": [
        {
          "spacing": 2,
          "firstLocation": 1,
          "components": ["myAttentionCheckComponent"]
        }
      ],
      "skip": [
        {
          "name": "myAttentionCheckComponent",
          "check": "repeatedComponent",
          "condition": "numIncorrect",
          "value": 2,
          "to": "end"
        }
      ]
    },
    "post-survey"
  ]
}
```

You can also use `skip` to jump around within your study. The example below skips the block `hardQuestions` if the participant gets both questions wrong in `easyQuestions`.

```json
"sequence": {
  "order": "fixed",
  "components": [
    "introduction",
    "consent",
    {
      "id": "easyQuestions",
      "order": "latinSquare",
      "components": [
        "trial1",
        "trial2"
      ],
      "skip": [
        {
        "check": "block",
        "condition": "numIncorrect",
        "value": 2,
        "to": "moreEasyQuestions"
        }
      ]
    },
    {
      "id": "hardQuestions",
      "order": "latinSquare",
      "components": [
        "trial3",
        "trial4"
      ]
    },
    {
      "id": "moreEasyQuestions",
      "order": "latinSquare",
      "components": [
        "trial5",
        "trial6"
      ]
    },
    "post-survey"
  ]
}
```

After jumping to `moreEasyQuestions`, the sequence will continue as if you had gotten there naturally, so will continue on to `post-survey` afterwards.

<!-- Importing links -->
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
  demoLinks={[
    {name: "Randomization Demo", url: "https://revisit.dev/study/test-randomization"},
    {name: "Dynamic Block Demo", url: "https://revisit.dev/study/demo-dynamic"},
    {name: "Step Logic Demo", url: "https://revisit.dev/study/test-step-logic"},
    {name: "Skip Logic Demo", url: "https://revisit.dev/study/test-skip-logic"}
  ]}
  codeLinks={[
    {name: "Randomization Code", url: "https://github.com/revisit-studies/study/blob/main/public/test-randomization"},
    {name: "Dynamic Block Code", url: "https://github.com/revisit-studies/study/blob/main/public/demo-dynamic"},
    {name: "Step Logic Code", url: "https://github.com/revisit-studies/study/blob/main/public/test-step-logic"},
    {name: "Skip Logic Code", url: "https://github.com/revisit-studies/study/blob/main/public/test-skip-logic"}
  ]}
  referenceLinks={[
    {name: "ComponentBlock", url: "../../typedoc/interfaces/ComponentBlock/"},
    {name: "DynamicBlock", url: "../../typedoc/interfaces/DynamicBlock/"},
    {name: "InterruptionBlock", url: "../../typedoc/type-aliases/InterruptionBlock/"},
    {name: "RandomInterruption", url: "../../typedoc/interfaces/RandomInterruption/"},
    {name: "DeterministicInterruption", url: "../../typedoc/interfaces/DeterministicInterruption/"},
    {name: "SkipConditions", url: "../../typedoc/type-aliases/SkipConditions/"}
  ]}
/>