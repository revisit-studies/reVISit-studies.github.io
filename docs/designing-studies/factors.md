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


For example, consider an alternate version of the Stroop test where a participant is shown the stimuli in either a small font of 24px or large font of 48px, but not both. For such an experiment, the factor `fontSize` needs to vary between-subjects. This is directly specified:

```json title="public/study-name/config.json"
"factors": {
  ...
  "fontSize": ["24px", "48px"]
},
"betweenSubject": ["fontSize"],
...
```


## Example

For the factors version of the Stroop test experiment, we simply need to display the `word` using a specific `color` (./react-stimulus.md). However, note that in the previous examples, we did not actually specify what the color would be if the stimuli was incongruent. There are two ways to go about this:

1. If the stimuli page is an HTML component, we can randomly select an incongruent color to display. The reason this requires the use of an HTML component is because we are programmatically sampling an incongruent color, which requires JavaScript and cannot be done in markdown.
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
        inkColor = data.congruence == "neutral" ? word : colors.filter(d => d != word)[idx]; // randomly selects the inkColor
        
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

See the full implementation [here](https://revisit.dev/study/demo-stroop-html-factors/).

### Stroop Color Experiment using *only* Markdown

Unlike HTML, markdown does not allows us to programmatically declare the color based on whether the condition is `neutral` or `incongruent`. Thus, we instead need to create an alternative factor declaration which directly provides `word` and `inkColor`.

```json title="public/demo-stroop-factors/config.json"
"factors": {
  "color": [
    "RED",
    "YELLOW",
    "GREEN",
    "BLUE",
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

See the full implementation [here](https://revisit.dev/study/demo-stroop-factors/).

### Incentivized Perception of Correlation

Next, we demonstrate how to declare an experiment with mixed between and within subjects factor in a Perception of Correlation study. In this [study](https://arxiv.org/pdf/2607.07463), participants are shown to scatterplots next to each other, and have to select the one with the greater correlation. There were four factors in this study: incentives (whether participants were given performance based incentives or just a flat payment structure) and the visual representation shown to participants were between-subject factors; the correlations of the two plots (`r1` and `r1 + delta`) were within-subject factors.

This experiment design only investigated a subspace of the correlation stimuli of prior work (see [Harrison et al.](https://www.cs.tufts.edu/~remco/publications/2014/InfoVis2014-JND.pdf) and [Cutler et al.](https://arxiv.org/abs/2508.03876)). Specifically, this study investigated fewer visualizations and only examined the "approach from above" i.e., where the stimuli of the baseline plot (`r = r1`) was always lower than the stimuli of the other plot (`r = r1 + delta` where `delta > 0`). In addition, unlike other studies in this area, this study did not use a staircase procedure.

```json title="public/demo-corr-factors/config.json"
"factors": {
  "incentive": ["base", "inc"],
  "vis": ["pcp", "scatter"],
  "r1": [0.3, 0.4, 0.5, 0.6, 0.7],
  "delta": [0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.12, 0.14, 0.18, 0.22, 0.26],
  "testTrials": {
    "action": "cross",
    "factors": ["r1", "delta"]
  }
},
"baseComponents": {
    "test": {
      "type": "react-component",
      "path": "incentives-corr/assets/Task.tsx",
      "stylesheetPath": "incentives-corr/assets/task.css",
      "helpTextPath": "incentives-corr/assets/help-{{vis}}.md",
      "response": [
        {
          "id": "test",
          "prompt": "",
          "required": true,
          "type": "buttons",
          "options": ["false", "true"],
          "location": "belowStimulus",
          "hidden": true
        }
      ],
      "correctAnswer": [
        {
          "id": "test",
          "answer": true
        }
      ]
    }
  },
  ...
  "betweenSubjects": ["incentive", "vis"],
  "sequence": {
    "order": "fixed",
    "components": [
      "introduction",
      "consent",
      "tutorial",
      ...
      "task-details",
      {
        "type": "factor",
        "id": "test",
        "factor": "testTrials",
        "order": "random",
        "components": "test"
      }
    ]
  }
```

There are a few things of note here:

First, we allow users to reference factors in the `config.json` file itself; here, the `help` file is different for different visualization conditions, and thus are separate markdown files.

Second, by default, we allow users to declare all between-subjects factors as a list; doing so will automatically perform a cross operation over the levels of the between-subjects factors. If the user does not want to all combinations of levels of the factors, then they should create a composite factor with the required number of levels (as was shown previously for the Stroop example), and then pass it as an argument to `betweenSubjects`. The html component used here receives the factors data, randomizes the order (i.e., whether the stimuli with the higher correlation will be displayed on the left or the right), and then uses javascript query selection to display the stimuli. In addition, in this example, we allow the user to respond to the stimuli both using click or keyboard (left or right arrows) interactions. We use `Revisit.postAnswers()` to record participant responses, as well as correctness. 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Perception of Correlation</title>
    <!-- Load revisit-communicate to be able to send data to reVISit -->
    <script src="../../revisitUtilities/revisit-communicate.js"></script>
    <script>
      window.focus();

      let correct, corrLeft, corrRight;
      // Get data from the config file
      Revisit.onDataReceive((data) => {
        const r1 = Math.round(data.r1 * 100) / 100;
        const r2 = Math.round((data.r1 + data.delta)*100) / 100;
        
        const randomize = Math.round(Math.random());
        const order = randomize ? ["r1", "r2"] : ["r2", "r1"];
        
        correct = randomize ? 'right' : 'left'; // r2 > r1 always
        corrLeft = randomize ? r1 : r2;
        corrRight = randomize ? r2 : r1;

        const imgLeftURL = `./img/stimuli/${data.vis}-${order[0]}-${r1}_${r2}-size_100.jpg`;
        const imgRightURL = `./img/stimuli/${data.vis}-${order[1]}-${r1}_${r2}-size_100.jpg`;

        document.getElementById("stimuli-left").src = imgLeftURL; // set left image
        document.getElementById("stimuli-right").src = imgRightURL; // set right image
      })
    </script>
  </head>
  
  <body>
    <p>
      <span class="questionPrompt">Please select the visualization that appears to have a larger correlation.</span>
      <span class="requiredQuestion">*</span>
      <br/>
      <span class="questionSecondaryText">Click A or B, or use the left and right arrow keys.</span>
    </p>
    <!-- Instead of declaring the buttons in the config file, we declare the buttons here (see explanation above) -->
    <div class="stimuliContainer">
      <div id="option-left" class="imgContainer">
        <img id="stimuli-left"/>
        <button id="button-left">A</button>
      </div>
      <div id="option-right" class="imgContainer">
        <img id="stimuli-right"/>
        <button id="button-right">B</button>
      </div>
    </div>
  </body>

  <script>
    const buttons = document.querySelector("button")

    document.addEventListener('click', (e) => {
      const selected = e.target.id.split("-")[1];
      const isCorrect = selected == correct;

      Revisit.postAnswers({ "selected": selected, "correct": isCorrect, "corrLeft": corrLeft, "corrRight":  corrRight });
    })

    document.addEventListener('keydown', (e) => {
      if (e.key.includes("Arrow")) {
        const selected = e.key.split("Arrow")[1].toLowerCase();
        const isCorrect = selected == correct;

        document.querySelector(`#button-${selected}`).focus();

        console.log(selected, isCorrect);
        Revisit.postAnswers({ "selected": selected, "correct": isCorrect, "corrLeft": corrLeft, "corrRight":  corrRight });
      }      
    })
  </script>
</html>
```

import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
  demoLinks={[
    {name: "Stroop Factors using only Markdown", url: "https://revisit.dev/study/demo-stroop-factors/"},
    {name: "Stroop Factors using HTML", url: "https://revisit.dev/study/demo-stroop-html-factors/"},
    {name: "Correlation", url: "https://revisit.dev/study/incentives-corr"}
  ]}
  codeLinks={[
    {name: "Stroop Factors using only Markdown", url: "https://github.com/revisit-studies/study/tree/dev/public/demo-stroop-factors"},
    {name: "Stroop Factors using HTML", url: "https://github.com/revisit-studies/study/tree/dev/public/demo-stroop-thml-factors"},
    {name: "Correlation", url: "https://github.com/revisit-studies/study/tree/dev/public/incentives-corr"}
  ]}
  referenceLinks={[
    {name: "ButtonsResponse", url: "../../typedoc/interfaces/ButtonsResponse"},
    {name: "Sequence", url: "../../designing-studies/sequences/study-sequences"},
    {name: "WebsiteComponent", url: "../../typedoc/interfaces/WebsiteComponent"},
    {name: "BaseComponents", url: "../../typedoc/type-aliases/BaseComponents/"}
  ]}
/>