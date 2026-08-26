# Declarative Study Design using Factors

Experiments typiccally involve a mixture of between- and within-subject conditions. In ReVISit version 2.5, we introduce `factors` to support the declaration of large [sequences](./sequences/study-sequences.md) with between- and within-subject factors using an expressive, declarative syntax. In other wors, you can think of factors as building blocks for creating complex experiment designs.


## Declaring Factors

In a [Stroop test](https://en.wikipedia.org/wiki/Stroop_effect), a word for a color (e.g., *blue*, *red* etc.) is shown to a participant using a font color which may or may not be the same as the word (e.g., the word *red* displayed in blue font). In a study testing the Stroop effect, different color words are displayed using either neutral or incongruent font color (the font color is congruent if it matches the word being displayed i.e., the word *red* displayed in red font). Thus, color here is a `factor`, which varies across stimuli in a within-subjects design.

In ReVISit, factors can be declared as:

```json title="public/study-name/config.json"
"factors": {
  "color": [
    "RED",
    "ORANGE",
    "YELLOW",
    "GREEN",
    "BLUE",
    "PURPLE",
    "PINK",
    "BROWN",
    "GRAY",
    "BLACK"
  ]
}
```

Which creates a `factor` with 10 levels: "RED", "ORANGE","YELLOW","GREEN", "BLUE","PURPLE", "PINK","BROWN", "GRAY",  "BLACK".

A second factor in the Stroop test is whether the font color is *neutral* or *incongruent*. This factor *combines* with `color` to determine the stimuli that is presented to participants. For instance, if `"color": "RED"` and `"congruence": "neutral"` then the font color will also be red; however if `"color": "RED"` and `"congruence": "incongruent"`, then the font color would be any of the other colors besides red.

```json title="public/study-name/config.json"
"factors": {
  "color": [...],
  "congruence": [
    "neutral",
    "incongruent"
  ],
  "stroopConditions": {
    "action": "cross",
    "factors": ["color", "congruence"]
  }
}
```

## Actions

In the previous step, we declared all the necessary factors for the experiment. However, we did not provide details on how the `factors` combine with each other. This is done by creating a new factor which is a result of an operation (`action`) performed on previously declared factor(s):

```json title="public/study-name/config.json"
"factors": {
  "color": [...],
  "congruence": [...],
  "stroopConditions": {
    "action": "cross",
    "factors": ["color", "congruence"]
  }
}
```

The `"cross"` action creates the Cartesian product of two or more `factors`. This results in a sequence of 10 x 2 = 20 conditions, one for each unique combination of color and congruence.

The list of possible `actions` include:

1. **cross**: creates a [Cartesian product](https://en.wikipedia.org/wiki/Cartesian_product) of two or more `factors`.
2. **zip**: the zip function aggregates multiple factors into a single factor (of the same length) containing elements from the factors at the same position. For example, if we perform a `zip` over two factors `"f1": ["x", "y", "z"]` and `"f2": ["1", "2", "3"]`, the result would be: `[["x", "1"], ["y", "2"], ["z", "3"]]`.
3. **concat**: The concat action allows users to concatenate two or more factors together. . For example, if we perform a `concat` over two factors `"f1": ["x", "y", "z"]` and `"f2": ["a", "b", "c"]`, the result would be: `["x", "y", "z", "a", "b", "c]`.
4. **repeat**: Repeat allows users to repeat the same factor multiple times (specified using a `numRepeats` argument).
5. **keep** / **remove**: These `actions` allow finer control over the sequences that have been generated using the other operations. These actions can only be performed on a previously declared factor. `keep` retains only the levels of a `factor` which are specified using the `items` argument, while `remove` filters out only the levels of a `factor` which are specified using the `items` argument. See lines 38-43 [here](https://github.com/revisit-studies/study/blob/dev/public/demo-stroop-factors/config.json) for an implementation.
6. **sample**: This allows the user to sample, with or without replacement, levels from an existing factor.


## Binding Factors to Components

In order to actually create experiment designs which different combinations of factors, they need to "bound" to a component. This will generate sequences of the component for each level of a `factor`. Going back to the Stroop test, let's assume that we have a react component `StroopTrial.tsx` which renders the stimuli.

```json title="public/study-name/config.json"
"baseComponents": {
  "stroopTrial": {
    "type": "react-component",
    "path": "study-name/assets/StroopTrial.tsx",
    ...
  }
},
"sequence": {
    "order": "fixed",
    "components": [
      "introduction",
      {
        "type": "factor",
        "id": "stroopTrials",
        "factor": "stroopConditions",
        "components": "stroopTrial",
        "order": "random"
      }
    ]
  }
```

In `StroopTrial.tsx`, the values of `color` and `congruence` can be accessed as parameters. See [Designing a React Stimulus](./react-stimulus.md) for more details.


## Between-subject Factors

So far, we've only seen experiment designs where the factors vary within-subjects (such as the Stroop test, where both color and congruence vary within-subjects). However, in many experiments, we might want different participants to see different stimuli. 


For example, consider an alternate version of the Stroop test where a participant is shown either the neutral or incongruent stimuli, but not both. For such an experiment, the factor `congruence` needs to vary between-subjects. This is directly specified:

```json title="public/study-name/config.json"
"betweenSubject": ["congruence"]
```

## Examples

### Stroop Color Experiment

For the factors version of the Stroop test experiment, we need to make some changes to the [react component](./react-stimulus.md). 

```ts title="src/public/demo-stroop-factors/assets/StroopTrial.tsx"
import { useCallback, useRef, useState,} from 'react';
import { Button, Center, Group, Stack, Text } from '@mantine/core';
import { StimulusParams } from '../../../store/types';

const COLOR_NAMES = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'PURPLE', 'PINK', 'BROWN', 'GRAY', 'BLACK',] as const;

type ColorName = typeof COLOR_NAMES[number];

interface StroopTrialParameters {
  word: ColorName;
  inkColor: ColorName;
}

const COLOR_VALUES: Record<ColorName, string> = {
  RED: '#c92a2a',
  ORANGE: '#e8590c',
  ...
};

function StroopTrial({
  parameters,
  setAnswer,
}: StimulusParams<StroopTrialParameters>) {
  const { word, inkColor } = parameters;
  const trialStartedAt = useRef(Date.now());
  const responded = useRef(false);
  const [selectedColor, setSelectedColor] = useState<ColorName | null>(null);

  const respond = useCallback((response: ColorName) => {
    responded.current = true;
    const correct = response === inkColor;
    setSelectedColor(response);
    setAnswer({
      status: true,
      answers: {
        response,
        correct,
        congruent: word === inkColor,
        reactionTimeMs: Date.now() - trialStartedAt.current,
      },
    });
  }, [inkColor, setAnswer, word]);

  // displaying the stimulus and response interface
  return (
    <Stack align="center" gap="xl">
      <Center mih={180}>
        <Text
          data-ink-color={inkColor}
          data-stroop-condition={`${word}-${inkColor}`}
          fw={800}
          size="4rem"
          style={{ color: COLOR_VALUES[inkColor], letterSpacing: '0.08em' }}
        >
          {word}
        </Text>
      </Center>
      <Group justify="center">
        {COLOR_NAMES.map((color, index) => (
          <Button
            color="gray"
            disabled={selectedColor !== null}
            key={color}
            onClick={() => respond(color)}
            variant="light"
          >
            {`${index === 9 ? 0 : index + 1}. ${color}`}
          </Button>
        ))}
      </Group>
      <Text c="dimmed" size="sm">
        {selectedColor ? 'Response recorded' : ''}
      </Text>
    </Stack>
  );
}
```

The key aspects to note here is that `word` and `inkColor` are parameters to the react component, and determined by levels of a factor. Below, is a minimal config file:

```json title="public/demo-stroop-factors/config.json"
"factors": {
  "color": [
    "RED",
    "ORANGE",
    "YELLOW",
    "GREEN",
    "BLUE",
    "PURPLE",
    "PINK",
    "BROWN",
    "GRAY",
    "BLACK"
  ],
  "stroopConditions": {
    "action": "cross",
    "factors": ["color", "color"],
    "as": ["word", "inkColor"]
  },
  "stroopWithFilter": {
    "action": "remove",
    "factor": "stroopConditions",
    "items": {
      "action": "zip",
      "factors": ["color", "color"]
    }
  }
},
"baseComponents": {
  "stroopTrial": {
    "type": "react-component",
    "path": "demo-stroop-factors/assets/StroopTrial.tsx",
    ...
  }
},
"components": {
  "introduction": {
    "type": "markdown",
    "path": "demo-stroop-factors/assets/introduction.md",
    "response": []
  }
},
"sequence": {
  "order": "fixed",
  "components": [
    "introduction",
    {
      "type": "factor",
      "id": "stroopTrials",
      "factor": "stroopWithFilter",
      "components": "stroopTrial",
      "order": "random"
    }
  ]
}
```

### Incentivized Perception of Correlation