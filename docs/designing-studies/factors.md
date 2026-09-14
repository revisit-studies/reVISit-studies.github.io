# Declarative Study Design using Factors

Experiments typically involve a mixture of between- and within-subject conditions. In ReVISit version 3, we introduce `factors` to support the declaration of large [sequences](./sequences/study-sequences.md) with between- and within-subject variables using an expressive, declarative syntax. In other words, you can think of factors as building blocks for creating complex experiment designs.


## Declaring Factors

We demonstrate how factors can be used to create experiments by implementing the Stroop experiment. In a [Stroop test](https://en.wikipedia.org/wiki/Stroop_effect), a word for a color (e.g., *blue*, *red* etc.) is shown to a participant using a font color which may or may not be the same as the word (e.g., the word *red* displayed in blue font). In a study testing the Stroop effect, different color words are displayed using either neutral or incongruent font color (the font color is congruent if it matches the word being displayed i.e., the word *red* displayed in red font). Thus, color here is a `factor`, which varies across stimuli in a within-subjects design.

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

Which creates a `factor` with 10 levels: "RED", "ORANGE", "YELLOW", "GREEN", "BLUE","PURPLE", "PINK", "BROWN", "GRAY", "BLACK".

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
    "path": "study-name/assets/trial.md",
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

This is demonstrated using an *actual* experiment in Correlations study (second) example below.


## Example

For the factors version of the Stroop test experiment, we simply need to display the `word` using a specific `color` (./react-stimulus.md). However, note that in the previous examples, we did not actually specify what the color would be if the stimuli was incongruent. There are two ways to go about this:

1. If the stimuli page is an HTML component, we can randomly select an incongruent color to display.
2. We can modify the factors implementation to create a factor which is a color tuple that we can then pass as parameters.

We demonstrate both approaches below.

### Stroop Color Experiment using HTML

```ts title="src/public/demo-stroop-factors/assets/trial.md"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Stroop test</title>
    <!-- Load revisit-communicate to be able to send data to reVISit -->
    <script src="../../revisitUtilities/revisit-communicate.js"></script>
    <script>
      let inkColor;
      let word;
      const colors = ["RED", "ORANGE", "YELLOW", "GREEN", "BLUE", "PURPLE", "PINK", "BROWN", "GRAY", "BLACK"]
      const idx = Math.floor(Math.random() * (colors.length - 1));

      // Get data from the config file
      Revisit.onDataReceive((data) => {
        word = data.color;
        inkColor = data.congruence == "neutral" ? word : colors.filter(d => d != word)[idx];
        
        const stimuli = document.querySelector("p#stimuli");
        stimuli.innerHTML = word;
        stimuli.style.color = inkColor;
      })
    </script>
  </head>

  <body>
    <p id="stimuli"></p>
  </body>
</html>
```

The HTML component above defines two variables `word` and `inkColor` which are then used to create the stimuli. The `word` is the text that is displayed, and `inkColor` is the color the word is displayed in. The factors declaration in the `config.json` file can remain as is.

### Stroop Color Experiment using *only* Markdown

Unlike HTML, markdown does not allows us to programmatically declare the color based on whether the condition is `neutral` or `incongruent`. Thus, we instead need to create an alternative factor declaration which directly provides `word` and `inkColor`.

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
  "stroopCross": {
      "action": "cross",
      "factors": ["color", "color"],
      "as": ["word", "inkColor"]
  },
  "stroopCongruent": {
    "action": "zip",
    "factors": ["color", "color"],
    "as": ["word", "inkColor"]
  },
  // sample one value for each color (each value of word)
  "stroopIncongruent": {
    "action": "sample",
    "numSamples": 1,
    "samplingStrategy": "withoutReplacement",
    "groupedBy": "word",
    "factors": [{
      // remove the congruent stimuli from the cartesian of 
      "action": "remove",
      "factor": "stroopCross",
      "items": {
        "action": "zip",
        "factors": ["color", "color"]
      }
    }]
  },
  "stroopConditions": {
    "action": "concat",
    "factors": ["stroopCongruent", "stroopIncongruent"]
  }
},
"baseComponents": {
  "stroopTrial": {
    "type": "react-component",
    "path": "demo-stroop-factors/assets/trial.md",
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

As mentioned previously, specifying the Stroop experiment without using any programming logic is a bit challenging; however, the factors syntax is expressive enough to let you achieve it. The code above creates two sequences separately for congruent and incongruent stimuli. Congruent stimuli is quite straightforward as it basically involves the same color as both `word` and `inkColor`. To declare the incongruent stimuli, we first take the cartesian product (every pair) of colours, then remove the congruent stimuli (i.e., where the `word` and `inkColor` are the same) from the cartesian product, and then we sample one value for each value of word using `"groupBy": "word"`.


### Incentivized Perception of Correlation