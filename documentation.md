---
layout: page_toc
title: Documentation | reVISit
weight: 2
tag: documentation
permalink: /documentation/
---

# Documentation

{% capture path %}{{ site.baseurl }}/assets/images/{% endcapture %}

## The ReVISit DSL

The ReVISit framework uses a declarative DSL (Domain Specific Language) for specifying visualization experiments. The configuration file [**reVISit.spec**]({{ site.repo }}main/public/configs/config-cleveland.hjson) uses HJSON format which compiles into the ReVISit platform. This documentation provides an overview on how to configure a visualization experiment using the ReVISit DSL.

## Study Metadata

The study meta data section consists of a list of key - value pairs for the study, which are detailed below.

Example:

```js
studyMetadata: {
        title: "Cleveland McGill Example"
        version: "Pilot"
        authors: [
            "The ReVISit Team"
        ]
        date: "2023-03-18"
        description: "A replication of the Cleveland McGill study with quiz feedback."
        organizations: [
            "University of Utah"
            "Worcester Polytechnic Institute"
            "University of Toronto"
        ]
    }
```

| studyMetadata   |
| --------------- | ----------- | ------------------------------------- |
| <u>Property</u> | <u>Type</u> | <u>Description</u>                    |
| title           | string      | Title of the study                    |
| version         | string      | Description of Study Type             |
| authors         | array       | A list of authors for the study       |
| date            | string      | Date of Experiment                    |
| organizations   | array[]     | A list of participating organizations |

## User Interface Configuration

The user interface configuration section consists of a list of key - value pairs, which are detailed below.

Example: The example below shows the definition of user interface properties.

```js
uiConfig: {
	contactEmail: "test@test.com";
	helpTextPath: "markdowns/help.md";
	logoPath: "assets/revisitLogoSquare.svg";
	withProgressBar: true;
	autoDownloadStudy: false;
	autoDownloadTime: 5000;
	sidebar: true;
}
```

| uiConfig          |
| ----------------- | ----------- | ---------------------------------------------------------------------------------------------------------------- |
| <u>Property</u>   | <u>Type</u> | <u>Description</u>                                                                                               |
| contactEmail      | string      | Primary contact person                                                                                           |
| helpTextPath      | string      | Link to help markdown                                                                                            |
| logoPath          | string      | Link to user interface logo                                                                                      |
| withProgressBar   | boolean     | **Required**. Hide or Show experiment progress bar. Field values can either be true or false.                    |
| autoDownloadStudy | boolean     | **Required**. Enable or Disable automatic download of experiment data. Field values can either be true or false. |
| autoDownloadTime  | number      | Experiment data download delay in milliseconds                                                                   |
| sidebar           | boolean     | **Required**. Hide or Show side bar. Field values can either be true or false.                                   |

## Experiment Components

This section contains a list of components to be included in the experiment. The list of components can be customized based on the requirements of the experiment.

| Components                      |
| ------------------------------- | --------------------------------------------------------------------- |
| <u>Component</u>                | <u>Description</u>                                                    |
| [Consent](#consent-component)   | A markdown file which contains a consent specification for the study  |
| [Training](#training-component) | A markdown file which contains a training specification for the study |
| [Practice](#practice-component) | A list of practice stimuli for the study                              |
| Attention                       | Include attention checks for the study                                |
| Trials                          | A list of stimuli to be used in the study                             |

### Consent Component

To include a consent component in your experiment, add a consent key to the configuration file.

Example: The example below shows the definition of a consent component.

```js
components {
    consent: {
        type: "consent"
        path: "markdowns/consent.md"
        signature: false
    }
...
}
```

| Property  | Type    | Description                                                                                        |
| --------- | ------- | -------------------------------------------------------------------------------------------------- |
| type      | string  | Specify component type                                                                             |
| path      | string  | **Required**. Specify path to the consent markdown file                                            |
| signature | boolean | **Required**. Hide or Show consent form signature field. Field values can either be true or false. |

### Training Component

To include a training component in your experiment, add a training key to the configuration file.

Example: The example below shows the definition of a training component.

```js
components {
    training: {
        type: "training";
        path: "markdowns/training.md"
    }
    ...
}
```

| Property | Type   | Description                                              |
| -------- | ------ | -------------------------------------------------------- |
| type     | string | Specify component type                                   |
| path     | string | **Required**. Specify path to the training markdown file |

Note: A study can have multiple trainings. To include multiple trainings to an experiment, append an index to the training key. For example:

```js
components {
    training1: {
        type: "training";
        path: "markdowns/training1.md"
    }
    training2: {
        type: "training";
        path: "markdowns/training2.md"
    }
    ...
}
```

### Practice Component

To include a practice component in your experiment, add a practice key to the configuration file.

Example: The example below adds a practice section to the experiment. The practice section contains a bubble chart stimulus which contains a numerical input for the participants response. The bubble chart stimulus is defined in the trials block.

```js
components {
    practice: {
            type: "practice"
            order: ["bubbleChart"]
            randomization-scheme: "latin-square"
            subset-count: 2
            attention-checks: {
                check: "attention"
                pattern: random
                interval: 10
            },
            response:[{
                id: "cm-response"
                type: "numerical"
                prompt: "Your answer!!"
                desc: "Enter your answer here, range from 0 - 100"
                required: true
                max: 100
                min: 0
            }],
            trials: {
                bubbleChart: {
                    description: "A chart with correct answer of 0.66"
                    instruction: "Stimulus Instruction"
                    stimulus: {
                        type: "react-component"
                        path: "./stimuli/BubbleChart.tsx"
                        parameters: {
                            data: [
                                { name: "A", value: "30" }
                                { name: "B", value: "40" }
                                { name: "C", value: "50" }
                                { name: "D", value: "40" }
                                { name: "E", value: "60" }
                            ]
                            selectedIndices: [1, 4]
                            }
                        correctAnswer: 23
                    }
                }
            }
        }
    }
```

<!-- prettier-ignore-start -->

| Practice Component                    |
| ------------------------------------- | ----------- | ------------------------------------------------------------------------ |
| <u>Property</u>                       | <u>Type</u> | <u>Description</u>                                                       |
| type                                  | string      | Component type. Default value: ```practice```.                            |
| order                                 | array[]     | Specifies the stimuli display order. Multiple practice stimuli can be added to an experiment. For example: ``` order: [barChart1, barChart2]``` defines two bar charts with different specification, whereas ``` order: [barChat, bubbleChart]``` defines a barChart and a bubbleChart. |
| randomization-scheme                  | string      | Specifies the stimuli randomization scheme.                              |
| subset-count                          | number      |                                                                          |
| [attention-checks](#attention-checks) | hjson       | The number of a attention checks to be included in the practice section. |
| [response](#stimuli-response)         | array[]     | An array of hjson stimulus response objects. There are 8 stimulus response objects [Numerical](#numerical-input), [Likert Scale](#likert-scale-input), [Radio](#radio-input),  [Check Box](#checkbox-input), [Short Text](#short-text-input), [Long Text](#long-text-input), [Drop down](#dropdown-input) and [Slider Input](#slider-input) |
| [trials](#trials-block)          | hjson       | A list of hjson objects for each stimuli specified in the order field. There are 4 stimuli that can be added to the practice component (Bar Chart, Stacked, Bar Chart 3, Pie Chart 4, Bubble Chart)                                                           |

<!-- prettier-ignore-end -->

#### Attention Checks

#### Stimuli Response

Defines the response type required for the stimmulus. A response type can be either [Numerical](#numerical-input), [Likert Scale](#likert-scale-input), [Radio](#radio-input), [Check Box](#checkbox-input), [Short Text](#short-text-input), [Long Text](#long-text-input), [Drop down](#dropdown-input) or [Slider Input](#slider-input).

Example: This example shows how to define a response object for a stimulus.

```js
practice: {
    response:[{
        id: "cm-response"
        type: "numerical"
        prompt: "Your answer!!"
        desc: "Enter your answer here, range from 0 - 100"
        required: true
        max: 100
        min: 0
        location: aboveStimulus
    }]
 }
```

<!-- prettier-ignore-start -->

| Property      | Type           | Description                                                                                                           |
| ------------- | -------------- | --------------------------------------------------------------------------------------------------------------------- |
| id            | string         | Unique string value for a response object.                                                                            |
| type          | string         | Response Type ([Numerical](#numerical-input), [Likert Scale](#likert-scale-input), [Radio](#radio-input),  [Check Box](#checkbox-input), [Short Text](#short-text-input), [Long Text](#long-text-input), [Drop down](#dropdown-input) or [Slider Input](#slider-input)) |
| prompt        | string         | Text to be displayed above the response object.                                                                       |
| desc          | string         | Placeholder text for the response object.                                                                             |
| required      | boolean        | True or False value. This value will be ```true``` if participants are required to respond and ```false``` otherwise. |
| max           | number         | Max numerical value that can be accepted by the response object.                                                      |
| min           | number         | Min numerical value that can be accepted by the response object.                                                      |
| location      | string         | Sets the location of the response object. Preset locations [```aboveStimulus, belowStimulus, sidebar```]              |

<!-- prettier-ignore-end -->

Note: To include multiple response types to a stimulus, append multiple response object to the array.

Example: This example adds multiple response objects (numerical, long text) to a stimulus.

```js
practice: {
    response:[{
        id: "cm-response-numerical"
        type: "numerical"
        prompt: "Your answer!!"
        desc: "Enter your answer here, range from 0 - 100"
        required: true
        max: 100
        min: 0
        location: belowStimulus
    }
    {
        id: "cm-response-st"
        type: "longText"
        prompt: "Feedback"
        desc: "Enter your feedback here..."
        required: true
        location: belowStimulus
    }]
}
```

#### Numerical Input
Defines a numerical input for a stimulus.

Example: This example defines a numerical response object for a stimulus.

```js
practice: {
    response:[{
        id: "cm-response-numerical"
        type: "numerical"
        prompt: "Your answer!!"
        desc: "Enter your answer here, range from 0 - 100"
        required: true
        max: 100
        min: 0
        locarion: belowStimulus
    }]
 }
```

| Property      | Type           | Description                                                                                                           |
| ------------- | -------------- | --------------------------------------------------------------------------------------------------------------------- |
| id            | string         | Unique string value for a response object.                                                                            |
| type          | string         | Response type                                                                                                         |
| prompt        | string         | Text to be displayed above the response object.                                                                       |
| desc          | string         | Placeholder text for the response object.                                                                             |
| required      | boolean        | True or False value. This value will be ```true``` if participants are required to respond and ```false``` otherwise. |
| max           | number         | Max numerical value that can be accepted by the response object.                                                      |
| min           | number         | Min numerical value that can be accepted by the response object.                                                      |
| location      | string         | Sets the location of the response object. Preset locations [```aboveStimulus, belowStimulus, sidebar```]              |

#### Likert Scale Input
Defines a Likert scale input for a stimulus.

Example: This example defines a likert scale response object for a stimulus.

```js
practice: {
    response:[{
        id: "cm-response-likert"
        type: "likert"
        prompt: "Your answer!!"
        desc: "Enter your likert answer here"
        required: true
        preset: "5"
        location: belowStimulus
    }]
 }
```

| Property      | Type           | Description                                                                                                           |
| ------------- | -------------- | --------------------------------------------------------------------------------------------------------------------- |
| id            | string         | Unique string value for a response object.                                                                            |
| type          | string         | Response type                                                                                                         |
| prompt        | string         | Text to be displayed above the response object.                                                                       |
| desc          | string         | Placeholder text for the response object.                                                                             |
| required      | boolean        | True or False value. This value will be ```true``` if participants are required to respond and ```false``` otherwise. |
| preset        | number         | Number of likert options required                                                                                     |
| location      | string         | Sets the location of the response object. Preset locations [```aboveStimulus, belowStimulus, sidebar```]              |

#### Radio Input

Defines a radio input for a stimulus.

Example: This example defines a radion response object for a stimulus.

```js
practice: {
    response:[{
        id: "cm-response-radio"
        type: "radio"
        prompt: "Rate your experience"
        desc: "Select from range."
        options:[{label:"Bad", value:"Bad"},{label:"Good", value:"Good"}]
        required: true
        location: belowStimulus
    }]
 }
```

| Property      | Type           | Description                                                                                                           |
| ------------- | -------------- | --------------------------------------------------------------------------------------------------------------------- |
| id            | string         | Unique string value for a response object.                                                                            |
| type          | string         | Response type                                                                                                         |
| prompt        | string         | Text to be displayed above the response object.                                                                       |
| desc          | string         | Placeholder text for the response object.                                                                             |
| required      | boolean        | True or False value. This value will be ```true``` if participants are required to respond and ```false``` otherwise. |
| options       | array[]        | Array of hjson objects with key - value pairs for response options.                                                   |
| location      | string         | Sets the location of the response object. Preset locations [```aboveStimulus, belowStimulus, sidebar```]              |

#### Slider Input

Defines a slider input for a stimulus.

Example: This example defines a slider response object for a stimulus.

```js
practice: {
    response:[{
        id: "cm-response-slider"
        type: "slider"
        prompt: "Rate your experience"
        desc: "Range from 0-100"
        options:[{label:"Bad", value:0}, {label:"Good", value:100}]
        required: true
        location: belowStimulus
    }]
 }
```

| Property      | Type           | Description                                                                                                           |
| ------------- | -------------- | --------------------------------------------------------------------------------------------------------------------- |
| id            | string         | Unique string value for a response object.                                                                            |
| type          | string         | Response type                                                                                                         |
| prompt        | string         | Text to be displayed above the response object.                                                                       |
| desc          | string         | Placeholder text for the response object.                                                                             |
| required      | boolean        | True or False value. This value will be ```true``` if participants are required to respond and ```false``` otherwise. |
| options       | array[]        | Array of hjson objects with key - value pairs for response options.                                                   |
| location      | string         | Sets the location of the response object. Preset locations [```aboveStimulus, belowStimulus, sidebar```]              |

#### Checkbox Input

Defines a Checkbox input for a stimulus.

Example: This example defines a checkbox response object for a stimulus.

```js
practice: {
    response:[{
        id: "cm-response-checkbox"
        type: "checkbox"
        prompt: "Rate your experience"
        desc: "Select either good, bad."
        options:[{label:"Bad", value:"bad"},{label:"Good", value:"good"}]
        required: true
        location: belowStimulus
    }]
 }
```

| Property      | Type           | Description                                                                                                           |
| ------------- | -------------- | --------------------------------------------------------------------------------------------------------------------- |
| id            | string         | Unique string value for a response object.                                                                            |
| type          | string         | Response type                                                                                                         |
| prompt        | string         | Text to be displayed above the response object.                                                                       |
| desc          | string         | Placeholder text for the response object.                                                                             |
| required      | boolean        | True or False value. This value will be ```true``` if participants are required to respond and ```false``` otherwise. |
| options       | array[]        | Array of hjson objects with key - value pairs for response options.                                                   |
| location      | string         | Sets the location of the response object. Preset locations [```aboveStimulus, belowStimulus, sidebar```]              |

#### Dropdown Input

Defines a dropdown input for a stimulus.

Example: This example defines a dropdown response object for a stimulus.

```js
practice: {
    response:[{
        id: "cm-response-dd"
        type: "dropdown"
        prompt: "Do you want to take this study again?"
        desc: "Select your preference"
        options:[{label:"Yes", value:"Yes"},{label:"No", value:"No"}]
        required: true
        max: 100
        min: 0
        location: belowStimulus
    }]
 }
```

| Property      | Type           | Description                                                                                                           |
| ------------- | -------------- | --------------------------------------------------------------------------------------------------------------------- |
| id            | string         | Unique string value for a response object.                                                                            |
| type          | string         | Response type                                                                                                         |
| prompt        | string         | Text to be displayed above the response object.                                                                       |
| desc          | string         | Placeholder text for the response object.                                                                             |
| options       | array[]        | Array of hjson objects with key - value pairs for response options.                                                   |
| required      | boolean        | True or False value. This value will be ```true``` if participants are required to respond and ```false``` otherwise. |
| max           | number         | Max numerical value that can be accepted by the response object.                                                      |
| min           | number         | Min numerical value that can be accepted by the response object.                                                      |
| location      | string         | Sets the location of the response object. Preset locations [```aboveStimulus, belowStimulus, sidebar```]              |

#### Short Text Input

Defines a short text input for a stimulus.

Example: This example defines a short text object for a stimulus.

```js
practice: {
    response:[{
        id: "cm-response-st"
        type: "shortText"
        prompt: "Any short comments?"
        desc: "Enter your short comments here"
        required: true
    }]
 }
```

| Property      | Type           | Description                                                                                                           |
| ------------- | -------------- | --------------------------------------------------------------------------------------------------------------------- |
| id            | string         | Unique string value for a response object.                                                                            |
| type          | string         | Response type                                                                                                         |
| prompt        | string         | Text to be displayed above the response object.                                                                       |
| desc          | string         | Placeholder text for the response object.                                                                             |
| required      | boolean        | True or False value. This value will be ```true``` if participants are required to respond and ```false``` otherwise. |

#### Long Text Input

Defines a long text input for a stimulus.

Example: This example defines a long text response object for a stimulus.

```js
practice: {
    response:[{
        id: "cm-response-lt"
        type: "longText"
        prompt: "Any long comments?"
        desc: "Enter your long comments here"
        required: true
    }]
 }
```

| Property      | Type           | Description                                                                                                           |
| ------------- | -------------- | --------------------------------------------------------------------------------------------------------------------- |
| id            | string         | Unique string value for a response object.                                                                            |
| type          | string         | Response type                                                                                                         |
| prompt        | string         | Text to be displayed above the response object.                                                                       |
| desc          | string         | Placeholder text for the response object.                                                                             |
| required      | boolean        | True or False value. This value will be ```true``` if participants are required to respond and ```false``` otherwise. |

#### Trials Block

#### Bar Chart

A component type can either be a [react-component](#react-component), an [image](#image-component), an [existing experiment](#website-component) or [javascript](#javascript-code) code. The default values for component type are ```react-component, image, website and javacript```.              
                                                 
#### Stacked Bar Chart

#### Pie Chart

#### Bubble Chart

#### React Components

#### Image Components

#### Website Components

#### Javascript Code

## Trials Component

To include a trials component in your experiment, add a trials key to the configuration file.

## Survey Component

```js
 post-study-survey: {
    type: "survey"
    response:[{
        id: "Question-1"
        type: "dropdown"
        prompt: "Do you want to take this study again?"
        desc: "Enter your preference"
        options:[{label:"Yes", value:"Yes"},{label:"No", value:"No"}]
        required: true
        location: sideBar
    }]
}
```

## Experiment Sequence

Specifies the order of display for each component. The experiment sequence can be changed based on the requirements of the study.

Example: The example below shows an experiment sequence which will display experiment components in the following order: <br/> Consent, Training, Practice, Attention, Trials, Post Study Survery.

```js
sequence: [
    "consent"
    "training"
    "practice"
    "attention"
    "trials"
    "post-study-survey"
]
```

| Property | Type    | Description                                                               |
| -------- | ------- | ------------------------------------------------------------------------- |
| sequence | array[] | Defines the order in which components will be displayed in the experiment |
