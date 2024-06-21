# Study Sequence

Once you have defined the components you want to be part of your study, you need to tell reVISit what order to show the components in. This is done by defining a sequence object, which has a variety of powerful options for different randomization types, as well as attention checks, breaks, and advanced skip logic for more complex studies.

## Simple Sequence 

If your study has a set order, creating a sequence is simple. Define the components in the order you want to see them, and set your order to `fixed`

```
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

Many studies will want to randomize the order of some of the components, but not all. You may want every participant to see `introduction` and `consent` first, but then randomize the order they see trials in. To do this, sequences can be nested. Create another object around your trials, and change the order to `random`.

```
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

Studies can be nested as many levels deep as you want. A frequent use case is a within subjects study where you want to randomize the order a participant sees two conditions in, as well as the order of the trials within each condition. That would look like the following. 

```
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

Studies frequently want portions of their trials to be random, but also want to ensure that their trials are not susceptible to ordering effects due to bad luck in the randomization process. A latin square study design is commonly used to combat this, and we have latin squares as a built-in option for randomization. Just change the order to `latinSquare`.

```
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
 
## Number of trials

Studies frequently want to only show a subset of all trials to a single participant. For this, each block in the sequence has a `numSamples`. The following example will show each participant 2 of the 4 trials. `numSamples` works with `latinSquare`, and will ensure that each trial is seen the same amount.

```
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

## Attention Checks + Breaks

To add attention checks or breaks to your study, there is an `interruptions` object, which has its own components. The example below adds two attention checks randomly spaced out between trials 1-4. You are guaranteed that the first component will not be an attention check, and that you wont see two attention checks back to back.

```
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

```
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

## Skip logic

Some studies want more advanced sequencing logic, determined by a participants answers to previous questions. This is possible via the skip object. The example below will jump straight to `end` if the consent is answered incorrectly, meaning the participant did not approve of the consent form. All skip conditions require labeling any components that you want to jump to with your own id, except for they keyword `end`. 

```
 sequence: {
    components: [
        'introduction',
        {
            components: ['consent']
            "skip": {
                "name": "consent",
                "check": "response",
                "responseId": "consentApproval",
                "value": "yes",
                "to": "end"
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

To check if multiple components are correct, for example that all attention checks were correct, you can do the following

```
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
                "name": "myAttentionCheckComponent",
                "check": "responses",
                "to": "end"
            }
        },
        'post-survey'
    ],
    order: 'fixed'
 }
```

You can also wait until multiple attention checks are failed to jump to end 

```
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
                "name": "myAttentionCheckComponent",
                "check": "repeatedComponent",
                "condition": "numIncorrect",
                "value": 2,
                "to": "end"
            }
        },
        'post-survey'
    ],
    order: 'fixed'
 }
```

You can also use `skip` to jump around within your study. The example below skips the block `hardQuestions` if the participant gets both questions wrong in `easyQuestions`.

```
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