# Designing Forms

Form elements are essential for most studies to capture user [responses](../typedoc/interfaces/BaseResponse.md). ReVISit provides rich form elements, such as [sliders](../typedoc/interfaces/SliderResponse.md), [checkboxes](../typedoc/interfaces/CheckboxResponse.md), text fields, etc., so that you can efficiently design your forms.

This tutorial does not give a comprehensive introduction into all form elements. For this, refer to the demo and other links in the relevant links panel. Instead, we introduce some high-level principles that apply to all form elements.

## Principles

Form elements are components of type `questionnaire`. Here is a simple example with a drop-down element:

```js
"components": {
  "survey": {
    "type": "questionnaire",
    "response": [
      {
        "id": "q-dropdown",
        "prompt": "Dropdown example – which chart do you like best?",
        "secondaryText": "You can specify secondary text to clarify your question.",
        "infoText": "Select the chart type you prefer from the dropdown menu.",
        "location": "aboveStimulus",
        "type": "dropdown",
        "placeholder": "Enter your preference",
        "options": [
          "Bar",
          "Bubble",
          "Pie",
          "Stacked Bar"
        ]
      }
    ]
  }
}
```

This renders like that:

![A dropdown box with secondary text](img/form-dropdown.png)

In this example, the drop-down is rendered in the main window, as indicated by the `"location": "aboveStimulus"` line. As documented in the [`BaseResponse`](../../typedoc/interfaces/BaseResponse/), the other options are `sidebar` and `belowStimulus`.

Form elements can be placed either in a sidebar, or as the main content of a study page. The sidebar version is useful if you're showing another kind of stimulus in the main part of the window. The main page location is useful for stand-alone survey questions, or if you want to integrate your response with your stimulus.

Because form elements are so commonly combined with other stimuli, a standalone questionnaire component as shown above is just a stripped down component with “only” a response.

:::note
You can also add form-based responses to all other stimuli using exactly the same syntax!
:::

## Notable Features

Below we list some notable features that apply to all or most form elements.

### Prompts and Descriptions

Each form element requires a `prompt` that introduces the question. You can also provide a more detailed description in `secondaryText` that is shown below the prompt; both are demonstrated in the above example.

### Additional Descriptions

The `infoText` allows you to provide additional description for survey questions that appears when participants hover over an information icon. This helps clarify questions or scales while keeping the `prompt` simple.
![A likert with info text](img/form-info-text.png)

### Required Fields

You can make a field required, in which case a red star is rendered (see above) and it is necessary that a response is given before the “Next” button is activated and the participant can proceed. Required is the default, set `"required": false` if an answer is optional.

### “Don't Know” Option

You can explicitly allow participants to state that they don't know the response with a dedicated checkbox:
![A numerical input example with a don't know option.](img/form-dont-know.png)

To achieve that, add the `"withDontKnow": true` option to your form element.

### Dividers

You can structure your forms by adding a divider between form elements. To add a divider, add `"withDivider": true` to the question that you want the divider to appear after. In the following figure, there's a divider added between question 1 and 2.

![Two questions separated by a divider.](img/form-divider.png)

### Enumerating Questions

You can automatically number questions by setting `"enumerateQuestions": true`. This will prepend each question with its index number (starting from 1). This feature should only be used when all questions are in the same location (e.g., all questions are in the sidebar).

![Enumerate questions](img/form-enumerate-questions.png)

### Radio and Checkbox Features

Radio buttons and checkboxes have some shared noteworthy features. Here is an example showing different configurations of radio buttons:

![Two radio button questions, one horizontal, one vertical. One of them has an "other" option.](img/form-radio.png)

#### Vertical and Horizontal Layouts

Radios and checkboxes can be rendered either vertically (the default) or horizontally. The above figure shows radios for both. Set `"horizontal": true` to get the horizontal version.

#### “Other” Option

You can allow an “other” option for radios and checkboxes, as shown for the first radio group above. To enable that, set `"withOther": true`.

### Matrix Features
Matrix questions let you ask several questions at the same time, using the same set of answer choices. You can either provide your own custom answers or use our built-in answer options.

Built-in options include:

- `likely5` or `likely7`: ranges from Highly Unlikely to Highly Likely
- `satisfaction5` or `satisfaction7`: ranges from Highly Unsatisfied to Highly Satisfied

Here is an example of Matrix Radio questions using `"answerOptions": "likely7"` and `"answerOptions": "satisfaction5"`.

![Matrix Radio examples with likely7 and satisfaction5 answer options](img/form-matrix-answer-options.png)

### Dropdown Features
A dropdown allows participants to choose one or more from a list. By default, they can only pick one item. If you want to allow multiple selections, add `minSelections` or `maxSelections` and the dropdown will then automatically become a multiselect dropdown.

![A multiselect dropdown](img/form-dropdown-multiselect.png)

### Likert Features
A Likert response allows participants to rate something on a scale. You can customize the scale in several ways -- you can set where the scale starts, how large the steps between values are, and how many options it has.

For example, here is a Likert example with `"start": 1`, `"spacing": 2`, and `"numItems": 10`.

![A likert response with spacing 2](img/form-likert.png)

### Slider Features
A slider response lets participants pick a value by moving a handle on a line. You can change how the slider works by setting where it starts, how big each step is, and how far apart the tick marks are.
Here is a slider example with `"step": 10` and `"spacing": 10`.

![Slider example with step 10 and spacing 10](img/form-slider.png)

You can also hide the label above the handle by using `snap`, and choose whether to show the bar with `withBar`.
The example below shows a slider with `"snap": true` and `"withBar": false`.

![Slider example with snap true and with bar false](img/form-slider-snap.png)

### Ranking Widget Features

A ranking widget allows participants to order or group items rather than simply selecting them. They are useful when you want to capture relative preferences, priorities, or categories of interest.

#### The "numItems" option

For sublist and categorical rankings, you can use the `numItems` option to control how many items participants must assign:

- In a sublist, `numItems` sets how many items they have to rank (e.g., top 2 out of 5).
- In a categorical ranking, `numItems` can limit how many items may be placed in each category (e.g., only 3 items per category).  

:::note
The `numItems` option cannot be used in pairwise rankings, since their purpose is to compare and rank items by pairs.
:::

This option is useful when you want participants to focus on their strongest preferences rather than distributing all items.

![Examples of ranking widgets](img/form-ranking.png)

## Randomization of form elements
Randomizing the order of answers or questions can help reduce bias and improve the quality of your study results. ReVISit allows you to shuffle options within a question, or even the order of entire questions on a page.

A dice icon is shown in the sidebar to indicate that at least one item on this page has a randomized order.

![Randomize options icon](img/form-random-option-icon.png)

Each participant will see their own consistent order during the study, and the same order is recorded and shown in the replay, so you can always see exactly what they saw.

### Randomizing Matrix Checkbox, Matrix Radio
For matrix questions (e.g., matrix radio or matrix checkbox), you can randomize the questions. Set `"questionOrder": "random"` to randomize questions.

Here is an example to show how to set up questions in random order:

```js
"response": [
  {
    "id": "5items-response",
    "prompt": "To what extent do you agree that this visual representation is...?",
    "location": "belowStimulus",
    "type": "matrix-radio",
    "answerOptions": "satisfaction5",
    "questionOrder": "random", //set randomization here
    "questionOptions": [
        "enjoyable",
        "likable",
        "pleasing",
        "nice",
        "appealing"
    ]
  }
]
```

![Randomization of question order](./img/form-random-question.png)

### Randomizing Checkbox, Radio, Button
To shuffle the options in a radio, checkbox, or button question, set `"optionOrder": "random"`.

Here is an example to show how to set up options in random order:

```js
"response": [
  {
    "id": "fruitPreference",
    "prompt": "What’s your favorite fruit?",
    "location": "aboveStimulus",
    "type": "radio",
    "optionOrder": "random", //set randomization here
    "options": [
        "Apple",
        "Banana",
        "Grape"
    ]
  }
]
```

![Randomization of option order](./img/form-random-option.png)

### Randomizing form elements in a single page
You can also randomize the order of multiple questions that appear on the same page. To do so, apply `"responseOrder": "random"`, which will shuffle the order in which the form elements themselves appear on the page.

Here is an example to show how to set up responses in random order:

```js
"survey_randomized_form": {
  "type": "questionnaire",
  "responseOrder": "random", //set randomization here
  "response": [
    {
      "id": "favoriteFeature",
      "prompt": "What's your favorite feature?",
      "type": "shortText",
      "placeholder": "Enter your answer"
    },
    {
      "id": "recommend",
      "prompt": "Would you recommend our app?",
      "type": "dropdown",
      "options": [
        "Yes",
        "No"
      ]
    }
  ]
}
```
If the form is randomized, a dice icon will appear in the sidebar to indicate that the response order is random.

![Randomization of form elements](./img/form-random-response.png)

## Sidebar Configuration

The sidebar is a left panel that can be used to display form elements alongside your stimulus. This is particularly useful when you want participants to see both the stimulus and the questions simultaneously.

### Enabling the Sidebar

To use the sidebar, you must set `"withSidebar": true` in your component or globally in the `uiConfig`. The sidebar is required if any of your responses have `"location": "sidebar"`.

```js
"components": {
  "survey": {
    "type": "questionnaire",
    "withSidebar": true,
    "response": [
      {
        "id": "q-sidebar",
        "prompt": "Rate this visualization",
        "location": "sidebar",
        "type": "likert",
        "numItems": 5
      }
    ]
  }
}
```

### Sidebar Width

You can customize the width of the sidebar by setting `"sidebarWidth"` (in pixels). The default width is 300 pixels. This can be set globally in `uiConfig` or overridden on individual components.

```js
"components": {
  "survey": {
    "type": "questionnaire",
    "withSidebar": true,
    "sidebarWidth": 400,
    "response": [
      {
        "id": "q-sidebar",
        "prompt": "Rate this visualization",
        "location": "sidebar",
        "type": "likert",
        "numItems": 5
      }
    ]
  }
}
```

For more details on sidebar configuration, see the [`UIConfig`](../../typedoc/interfaces/UIConfig/) and [`BaseIndividualComponent`](../../typedoc/interfaces/BaseIndividualComponent/) documentation.

<!-- Importing links -->
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
  demoLinks={[
    {name: "Survey Demo", url: "https://revisit.dev/study/demo-survey"}
  ]}
  codeLinks={[
    {name: "Survey Code", url: "https://github.com/revisit-studies/study/blob/main/public/demo-survey"}
  ]}
  referenceLinks={[
    {name: "BaseResponse", url: "../../typedoc/interfaces/BaseResponse"}
  ]}
/>