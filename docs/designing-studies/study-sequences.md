# Study Sequence

import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    referenceLinks={
      [
        {name: "Component Block", url:"../../typedoc/interfaces/ComponentBlock/"},
        {name: "Dynamic Block", url:"../../typedoc/interfaces/DynamicBlock/"},
         {name: "Random Interruption", url:"../../typedoc/interfaces/RandomInterruption/"},
        {name: "Deterministic Interruption", url:"../../typedoc/interfaces/DeterministicInterruption/"},
         {name: "Skip Conditions", url:"../../typedoc/type-aliases/SkipConditions/"}
      ]
    }
/>

Once you have defined the components you want to be part of your study, you need to tell reVISit what order to show the components in. This is done by defining a sequence object in the reVISit Spec, which has a variety of powerful options for different randomization types, as well as attention checks, breaks, and advanced skip logic for more complex studies.

ReVISit also always injects a special `end` component at the very end of the study, at which point the data is uploaded and the participant is instructed that they can safely close the window. Other components can also optionally be given `id`, which can then be used to jump to them. 

## Simple Sequence 

If your study has a set order, creating a sequence is simple. Define the components in the order you want to see them, and set your order to `fixed`

```js
 sequence: {
    components: [
        'introduction',
        'consent',
        'trial1',
        'trial2',
        'post-survey'
    ],
    order: 'fixed'
 }
```

## Nested Sequence

Many studies need to randomize the order of some of the components, but not all. You may want every participant to see `introduction` and `consent` first, but then randomize the order they see trials in. To do this, sequences can be nested. Create another object around your trials, and change the order to `random`.

```js
 sequence: {
    components: [
        'introduction',
        'consent',
        {
            components: [
                'trial1',
                'trial2',
            ],
            order: 'random'
        },
        'post-survey'
    ],
    order: 'fixed'
 }
```

In this case all participants will first see `introduction` and `consent`, and then randomly either `trial1` or `trial2` first, and then the other trial second, followed by the `post-survey` for everyone. 


Studies can be nested to arbitrary depths. A frequent use case is a within subjects study where you want to randomize the order a participant sees two conditions in, and then also randomize the order of the trials within each condition. That would look like the following. 

```js
 sequence: {
    components: [
        'introduction',
        'consent',
        {
            components: [
                {
                    components: [
                        'ConditionA-1',
                        'ConditionA-2',
                    ],
                    order: 'random'
                },
                {
                    components: [
                        'ConditionB-1',
                        'ConditionB-2',
                    ],
                    order: 'random'
                },
            ],
            order: 'random'
        },
        'post-survey'
    ],
    order: 'fixed'
 }
```

## Latin Square

Studies frequently want portions of their trials to be random, but also want to ensure that their trials are not susceptible to ordering effects due to bad luck in the randomization process. A [latin square study design](https://en.wikipedia.org/wiki/Latin_square) is commonly used to combat this, and we have latin squares as a built-in option for randomization. Just change the order to `latinSquare`.

```js
 sequence: {
    components: [
        'introduction',
        'consent',
        {
            components: [
                'trial1',
                'trial2',
            ],
            order: 'latinSquare'
        },
        'post-survey'
    ],
    order: 'fixed'
 }
```

This option will create a latin square for any block using one behind the scenes, iterate through the latin square as new participants request sequences, and refill it when empty. 

To further ensure consistency in the latin square, participants may be `rejected` via the [data dashboard](../../analysis/study-card). When a participant is rejected, their data gets flagged (but not deleted), and the sequence they had is returned to the sequence pool. This ensures that participants that start a study but do not complete it or are stopped before completing it (failed attention check, refused consent form, etc) do not use up a row of any generated latinSquares.


## Dynamic Blocks

Some studies require knowledge of the participant's responses to previous questions to determine the next component that is shown. For example, if a participant answers a question incorrectly, they may be shown a simpler task next. This can be achieved with [dynamic blocks](./dynamic-blocks.md). 


 
## Showing a Subset of All Trials

Studies frequently want to only show a subset of all trials to a single participant. For this, each block in the sequence has a `numSamples` variable. The following example will show each participant 2 of the 4 trials. `numSamples` works with all sequence orders, but is likely only useful in combination with `random` and `latinSquare`. If used with `latinSquare`, choosing a `numSamples` will ensure that each trial is seen the same amount.

```js
 sequence: {
    components: [
        'introduction',
        'consent',
        {
            components: [
                'trial1',
                'trial2',
                'trial3',
                'trial4'
            ],
            order: 'latinSquare',
            numSamples: 2
        },
        'post-survey'
    ],
    order: 'fixed'
 }
```

## Attention Checks and Breaks

To add attention checks or breaks to your study, there is an `interruptions` object, which has its own components. The example below adds two attention checks randomly spaced out between trials 1-4. You are guaranteed that the first component will not be an attention check, and that you won't see two attention checks back to back.

```js
 sequence: {
    components: [
        'introduction',
        'consent',
        {
            components: [
                'trial1',
                'trial2',
                'trial3',
                'trial4'
            ],
            order: 'latinSquare',
            interruptions: {
                spacing: 'random',
                numInterruptions: 2,
                components: ['myAttentionCheckComponent']
            }
        },
        'post-survey'
    ],
    order: 'fixed'
 }
```

You can also add `interruptions` deterministically at set intervals. The example below will put an attention check after the first and third trial. 

```js
 sequence: {
    components: [
        'introduction',
        'consent',
        {
            components: [
                'trial1',
                'trial2',
                'trial3',
                'trial4'
            ],
            order: 'latinSquare',
            interruptions: {
                spacing: 2,
                firstLocation: 1,
                components: ['myAttentionCheckComponent']
            }
        },
        'post-survey'
    ],
    order: 'fixed'
 }
```

## Skip Logic

Some studies need more advanced sequencing logic, based on a participant's response to previous questions. For example, a participant should only be shown a second, simpler task if they got a first, difficult task wrong. This is possible to implement in reVISit sequences with the `skip` object. 

The example below will jump straight to `end` if the consent form is answered with anything but `yes` to the field `consentApproval`, meaning the participant did not approve of the consent form. All skip conditions require labeling any components that you want to jump to with your own id, except for they keyword `end`, which always jumps to the default final component of the study. 

```js
 sequence: {
    components: [
        'introduction',
        {
            components: ['consent']
            'skip': {
                'name': 'consent',
                'check': 'response',
                'responseId': 'consentApproval',
                'value': 'yes',
                'to': 'end'
            }
            order: 'fixed'
        }
        'trial1',
        'trial2',
        'trial3',
        'trial4',
        'post-survey'
    ],
    order: 'fixed'
 }
```

To check if multiple components are correct, for example that all attention checks were correct, you can do the following:

```js
 sequence: {
    components: [
        'introduction',
        'consent',
        {
            components: [
                'trial1',
                'trial2',
                'trial3',
                'trial4'
            ],
            order: 'latinSquare',
            interruptions: {
                spacing: 2,
                firstLocation: 1,
                components: ['myAttentionCheckComponent']
            }, 
            skip: {
                'name': 'myAttentionCheckComponent',
                'check': 'responses',
                'to': 'end'
            }
        },
        'post-survey'
    ],
    order: 'fixed'
 }
```
This example will go through every component named `myAttentionCheckComponent`, and if any response is incorrect, jump immediately to end. 

You can also wait until multiple attention checks have been answered incorrectly to jump to end with the `repeatedComponent` check.

```js
 sequence: {
    components: [
        'introduction',
        'consent',
        {
            components: [
                'trial1',
                'trial2',
                'trial3',
                'trial4'
            ],
            order: 'latinSquare',
            interruptions: {
                spacing: 2,
                firstLocation: 1,
                components: ['myAttentionCheckComponent']
            }, 
            skip: {
                'name': 'myAttentionCheckComponent',
                'check': 'repeatedComponent',
                'condition': 'numIncorrect',
                'value': 2,
                'to': 'end'
            }
        },
        'post-survey'
    ],
    order: 'fixed'
 }
```

You can also use `skip` to jump around within your study. The example below skips the block `hardQuestions` if the participant gets both questions wrong in `easyQuestions`.

```js
 sequence: {
    components: [
        'introduction',
        'consent',
        {
            components: [
                'trial1',
                'trial2',
            ],
            order: 'latinSquare',
            id: 'easyQuestions'
            skip: {
                check: 'block',
                condition: 'numIncorrect',
                value: 2,
                to: 'moreEasyQuestions'
            }
        },
        {
            components: [
                'trial3',
                'trial4'
            ],
            order: 'latinSquare',
            id: 'hardQuestions'
        },
        {
            components: [
                'trial5',
                'trial6',
            ],
            order: 'latinSquare',
            id: 'moreEasyQuestions'
        },
        'post-survey'
    ],
    order: 'fixed'
 }
```

After jumping to `moreEasyQuestions`, the sequence will continue as if you had gotten there naturally, so will continue on to `post-survey` afterwards. 
