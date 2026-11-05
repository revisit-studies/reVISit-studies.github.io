# Declarative Study Design using Factors

Experiments typically involve a mixture of between- and within-subject conditions. In ReVISit version 3, we introduce `factors` to support the declaration of large [sequences](./sequences/study-sequences.md) with between- and within-subject variables using an expressive, declarative syntax. In other words, you can think of factors as building blocks for creating complex experiment designs.


## Declaring Factors

We demonstrate how factors can be used to create experiments by implementing the Stroop experiment. In a [Stroop test](https://en.wikipedia.org/wiki/Stroop_effect), a word for a color (e.g., *blue*, *red* etc.) is shown to a participant using a font color which may or may not be the same as the word (e.g., the word *red* displayed in blue font). In a study testing the Stroop effect, different color words are displayed using either neutral or incongruent font color (the font color is congruent if it matches the word being displayed i.e., the word *red* displayed in red font). Thus, color here is a `factor`, which varies across stimuli in a within-subjects design.

In ReVISit, factors are declared in the top-level `factors` object of the Study Config:

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

Which creates a `factor` with 10 levels: "RED", "ORANGE", "YELLOW", "GREEN", "BLUE","PURPLE", "PINK", "BROWN", "GRAY", "BLACK". Levels can be strings, numbers, or booleans.

A second factor in the Stroop test is whether the font color is *neutral* or *incongruent*. This factor *combines* with `color` to determine the stimuli that is presented to participants. For instance, if `"color": "RED"` and `"congruence": "neutral"` then the font color will also be red; however if `"color": "RED"` and `"congruence": "incongruent"`, then the font color would be any of the other colors besides red.

```json title="public/study-name/config.json"
"factors": {
  "color": [...],
  "congruence": [
    "neutral",
    "incongruent"
  ]
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

The `"cross"` action creates the Cartesian product of two or more `factors`. This results in 10 x 2 = 20 conditions, one for each unique combination of color and congruence. Each condition is a set of named parameters, such as `{ "color": "RED", "congruence": "neutral" }`. By default, each parameter is named after the factor it came from.

The list of possible `actions` include:

1. **cross**: creates a [Cartesian product](https://en.wikipedia.org/wiki/Cartesian_product) of two or more `factors`.
2. **zip**: pairs the levels of multiple factors by position. For example, a `zip` over `"f1": ["x", "y", "z"]` and `"f2": ["1", "2", "3"]` results in three conditions: `{ "f1": "x", "f2": "1" }`, `{ "f1": "y", "f2": "2" }`, and `{ "f1": "z", "f2": "3" }`. If the inputs have different lengths, ReVISit stops after the shortest one and shows a parser warning.
3. **concat**: concatenates the conditions of two or more factors in order. For example, a `concat` over `"f1": ["x", "y", "z"]` and `"f2": ["a", "b", "c"]` results in `{ "f1": "x" }`, `{ "f1": "y" }`, `{ "f1": "z" }`, `{ "f2": "a" }`, `{ "f2": "b" }`, and `{ "f2": "c" }`. Each condition keeps its original parameter names; `concat` does not rename them to the new factor's name.
4. **repeat**: repeats the conditions of the listed `factors` the number of times given by `numRepeats`.
5. **keep** / **remove**: filter the conditions of an existing factor, given in `factor`. `keep` retains only the matching conditions, while `remove` filters them out. Select conditions with `condition`, an object of parameter values to match, or with `items`, a list of complete conditions or another factor expression.
6. **sample**: randomly selects `numSamples` conditions from the listed `factors` for each participant. Set `samplingStrategy` to `withoutReplacement` or `withReplacement`.

For `cross` and `zip`, the optional `as` array renames the output parameters, with one name per input factor. This is required when you combine a factor with itself, as in the [markdown Stroop example](#stroop-color-experiment-using-only-markdown) below.

The `factors` listed in an action can be names of other factors or inline action objects, so actions can be nested. For example, `allPairs` pairs every color word with every ink color, and `incongruentPairs` removes the pairs where `word` and `inkColor` match:

```json title="public/study-name/config.json"
"allPairs": {
  "action": "cross",
  "factors": ["color", "color"],
  "as": ["word", "inkColor"]
},
"incongruentPairs": {
  "action": "remove",
  "factor": "allPairs",
  "items": {
    "action": "zip",
    "factors": ["color", "color"],
    "as": ["word", "inkColor"]
  }
}
```

A factor can also be an object with a `values` list and an optional `order` (for example `"random"`) and `numSamples`. The selected order is chosen once per participant and shared by every reference to that factor in the sequence.


## Binding Factors to Components

In order to actually create experiment designs with different combinations of factors, they need to be "bound" to a component. A sequence block with `"type": "factor"` creates one copy of the listed component(s) for each condition of a factor. Going back to the Stroop test, let's assume that we have a base component `stroopTrial` which renders the stimuli.

```json title="public/study-name/config.json"
"baseComponents": {
  "stroopTrial": {
    "type": "website",
    "path": "study-name/assets/trial.html",
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

`order` controls how the generated trials are ordered, using the same options as other [sequence blocks](./sequences/study-sequences.md). Each generated trial receives its condition as `parameters`, so the values of `color` and `congruence` are available to the component. In Markdown files, instructions, and prompts, use them as [templates](./templating.md), such as `{{color}}`. In HTML stimuli, read them with `Revisit.onDataReceive`, as shown below. See [Designing an HTML Stimulus](./html-stimulus.md) and [Designing a React Stimulus](./react-stimulus.md) for more details.


## Between-subject Factors

So far, we've only seen experiment designs where the factors vary within-subjects (such as the Stroop test, where both color and congruence vary within-subjects). However, in many experiments, we might want different participants to see different stimuli.


For example, consider an alternate version of the Stroop test where a participant is shown the stimuli in either a small font of 24px or large font of 48px, but not both. For such an experiment, the factor `fontSize` needs to vary between-subjects. This is specified with the top-level `betweenSubjects` list:

```json title="public/study-name/config.json"
"factors": {
  ...
  "fontSize": ["24px", "48px"]
},
"betweenSubjects": ["fontSize"],
...
```

Each participant is assigned one level of each between-subjects factor, which is passed to every component as a parameter (here, `{{fontSize}}`).


## Example

For the factors version of the Stroop test experiment, we simply need to display the `word` using a specific color. However, note that in the previous examples, we did not actually specify what the color would be if the stimuli was incongruent. There are two ways to go about this:

1. If the stimuli page is an HTML component, we can randomly select an incongruent color to display. The reason this requires the use of an HTML component is because we are programmatically sampling an incongruent color, which requires JavaScript and cannot be done in markdown.
2. We can modify the factors implementation to create a factor which provides both the word and its ink color, and then pass them as parameters.

We demonstrate both approaches below.

### Stroop Color Experiment using HTML

This version uses the `color`, `congruence`, and `stroopConditions` factors declared above, with a `website` component as the base component:

```json title="public/demo-stroop-html-factors/config.json"
"baseComponents": {
  "stroopTrial": {
    "type": "website",
    "path": "demo-stroop-html-factors/assets/trial.html",
    ...
  }
}
```

```html title="public/demo-stroop-html-factors/assets/trial.html"
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

Unlike HTML, markdown does not allow us to programmatically choose the color based on whether the condition is `neutral` or `incongruent`. Thus, we instead declare a factor which directly provides `word` and `inkColor`, by crossing `color` with itself and naming the two outputs with `as`. This version also uses `fontSize` as a between-subjects factor.

```json title="public/demo-stroop-factors/config.json"
"factors": {
  "color": ["RED", "YELLOW", "GREEN", "BLUE", "BLACK"],
  "fontSize": ["24px", "48px"],
  "stroopConditions": {
    "action": "cross",
    "factors": ["color", "color"],
    "as": ["word", "inkColor"]
  }
},
"betweenSubjects": ["fontSize"],
"baseComponents": {
  "stroopTrial": {
    "type": "markdown",
    "path": "demo-stroop-factors/assets/trial.md",
    ...
  }
},
"sequence": {
  "order": "fixed",
  "components": [
    "introduction",
    {
      "type": "factor",
      "id": "t",
      "factor": "stroopConditions",
      "components": "stroopTrial",
      "order": "random"
    }
  ]
}
```

This creates 5 x 5 = 25 trials: 5 congruent ones, where `word` and `inkColor` match, and 20 incongruent ones. The Markdown file uses the parameters as templates:

```md title="public/demo-stroop-factors/assets/trial.md"
<p style="font-size: {{fontSize}}; color: {{inkColor}}; line-height: 64px; margin: auto"><b>{{word}}</b></p>
```

To use only some of the incongruent conditions, combine `remove` (shown in [Actions](#actions)) to drop the congruent pairs with `sample` to select a subset of the rest.

See the full implementation [here](https://revisit.dev/study/demo-stroop-factors/).

### Incentivized Perception of Correlation

Next, we demonstrate how to declare an experiment with mixed between and within subjects factor in a Perception of Correlation study. In this [study](https://arxiv.org/pdf/2607.07463), participants are shown two scatterplots next to each other, and have to select the one with the greater correlation. There were four factors in this study: incentives (whether participants were given performance based incentives or just a flat payment structure) and the visual representation shown to participants were between-subject factors; the correlations of the two plots (`r1` and `r1 + delta`) were within-subject factors.

This experiment design only investigated a subspace of the correlation stimuli of prior work (see [Harrison et al.](https://www.cs.tufts.edu/~remco/publications/2014/InfoVis2014-JND.pdf) and [Cutler et al.](https://arxiv.org/abs/2508.03876)). Specifically, this study investigated fewer visualizations and only examined the "approach from above" i.e., where the stimuli of the baseline plot (`r = r1`) was always lower than the stimuli of the other plot (`r = r1 + delta` where `delta > 0`). In addition, unlike other studies in this area, this study did not use a staircase procedure.

```json title="public/incentives-corr/config.json"
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
      "type": "website",
      "path": "incentives-corr/assets/05-test.html",
      "stylesheetPath": "incentives-corr/assets/task.css",
      "helpTextPath": "incentives-corr/assets/help-{{vis}}.md",
      "response": [
        {
          "id": "test",
          "prompt": "",
          "required": true,
          "type": "reactive",
          "location": "belowStimulus"
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
        "order": "latinSquare",
        "components": "test"
      }
    ]
  }
```

There are a few things of note here:

First, factor values can be referenced in the `config.json` file itself; here, the `helpTextPath` uses `{{vis}}` so that each visualization condition shows a different help markdown file.

Second, all between-subjects factors are declared as a list; ReVISit automatically performs a cross operation over the levels of the between-subjects factors, so this study has 2 x 2 = 4 between-subjects groups. If you do not want all combinations of levels of the factors, create a composite factor with only the combinations you need (for example, with `zip` or `keep`), and then pass its name to `betweenSubjects` instead.

The HTML component used here receives the factors data, randomizes the order (i.e., whether the stimuli with the higher correlation will be displayed on the left or the right), and then uses javascript query selection to display the stimuli. In addition, in this example, we allow the user to respond to the stimuli both using click or keyboard (left or right arrows) interactions. We use `Revisit.postAnswers()` to record participant responses. The `test` key matches the `reactive` response ID, so its value is checked against the `correctAnswer`; the other keys are saved alongside it. The following is a simplified version of `05-test.html`:

```html title="public/incentives-corr/assets/05-test.html (simplified)"
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
    function submit(selected) {
      const isCorrect = selected == correct;
      Revisit.postAnswers({ "test": isCorrect, "selected": selected, "correct": isCorrect, "corrLeft": corrLeft, "corrRight": corrRight });
    }

    document.querySelectorAll("button").forEach((button) => {
      button.addEventListener('click', (e) => submit(e.target.id.split("-")[1]));
    })

    document.addEventListener('keydown', (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        const selected = e.key.split("Arrow")[1].toLowerCase();
        document.querySelector(`#button-${selected}`).focus();
        submit(selected);
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
    {name: "Stroop Factors using HTML", url: "https://github.com/revisit-studies/study/tree/dev/public/demo-stroop-html-factors"},
    {name: "Correlation", url: "https://github.com/revisit-studies/study/tree/dev/public/incentives-corr"}
  ]}
  referenceLinks={[
    {name: "ReactiveResponse", url: "../../typedoc/interfaces/ReactiveResponse"},
    {name: "Sequence", url: "../../designing-studies/sequences/study-sequences"},
    {name: "WebsiteComponent", url: "../../typedoc/interfaces/WebsiteComponent"},
    {name: "BaseComponents", url: "../../typedoc/type-aliases/BaseComponents/"}
  ]}
/>
