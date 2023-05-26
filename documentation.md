---
layout: page_toc
title: Documentation | reVISit
weight: 2
tag: documentation
permalink: /documentation/
---

# Documentation

{% capture path %}{{ site.baseurl }}/assets/tutorials/{% endcapture %}
{% capture repo %}{{ site.repo }}{% endcapture %}
{% capture code %}{{ site.code}}{% endcapture %}

## The ReVISit DSL

The ReVISit framework uses a declarative DSL (Domain Specific Language) for specifying visualization experiments. The configuration file [**reVISit.spec**]({{ code }}public/configs/config-demo.hjson) uses HJSON format which compiles into the ReVISit platform. This documentation provides an overview on how to configure a visualization experiment using the ReVISit DSL.

# Environment Setup

The ReVISit frameworks provides an environment that allows researchers to build web-based visualization user studies by cloning/forking a github repository. Customizing the properties of the configuration file [**reVISit.spec**]({{ code }}public/configs/config-demo.hjson) allows the specification of desired study components (consent, training, practice, trials, stimuli and survey). This section provides a guideline of how to setup the ReVISit framework.

### Build Instructions

- Clone the [**ReVISit repository**]({{ repo }})
- Run `yarn install`. If you don't have yarn installed, run `npm i -g yarn`.
- To run locally, run `yarn serve`.
- Navigate to http://localhost:8080 to a view demo studies.

**Note:** The ReVISit framework uses [Firebase](http://firebase.google.com) as its default data store. To connect to a Firebase instance:

- Navigate to http://localhost:8080 and click on any demo study
- Press [Ctrl + Shift + i] to view the browser console.
- Copy the debug token from the console.

<img src="{{ path }}console.png" alt="Console" style="border: 2px solid black; border-radius: 5px;">

- Navigate to your firebase instance and add the token as shown below:

<img src="{{ path }}firebase.png" alt="Firebase" style="border: 2px solid black; border-radius: 5px;">

- Clear your broswers cache by closing and re-opening it
- Navigate to http://localhost:8080 and launch on any demo study.

<img src="{{ path }}demo.png" alt="Demo" style="border: 2px solid black; border-radius: 5px;">

# Study Metadata

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
        description: "Study Description"
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

# User Interface Configuration

The user interface configuration section consists of a list of key - value pairs, which are detailed below.

The example below shows the definition of user interface properties.

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

# Experiment Components

Different types of components can be added to an experiment ([React](#react-components), [Image](#image-components), [Markdown](#markdown) and [Website](#website-components) Components). This section details different types of components and how to import them into ReVISit.

#### React Component

Defines a stimulus built with React.

The `path` property defines the path of the react file.

The `parameters` property is sent as Props to the react component.

```js
{
  components: {
    reactComponent: {
        ...
        stimulus: {
            type: "react-component",
            path: "StackedBarChart.tsx",
            parameters: {
                data: [
                    { name: "A", value: "30" },
                    { name: "B", value: "40" },
                    { name: "C", value: "50" },
                    { name: "D", value: "40" },
                    { name: "E", value: "60" }
                ],
                selectedIndices: [1, 4],
            }
        }
        ...
    }
  }
}
```

#### Image Component

Defines a stimulus with Image file.

The `path` property defines the path of the image file.

The `style` property defines the css style that will be attached to the image.

```js
{
    components: {
        imageComponent: {
            ...
            stimulus: {
                type: "image",
                path: "image-demo/uncertainty-1.png",
                style: {
                width: "800px",
                }
            },
            ...
        }
    }
}
```

#### Website Component

Type `website` defines a stimulus with HTML / JS file.

The `path` property defines the path of the html file.

The `style` property defines the css style that will be attached to the iframe containing the html file.

```js
{
    components: {
        websiteComponent: {
            ...
            stimulus: {
                type: "website"
                path: "html-input/bar-chart-interaction.html"
                style: {
                    height: "500px"
                }
            }
            ...
        }
    }
}
```

The website component can be interactive. In such case, participant's answer can be directly sent to the reVISit.

To do so, add the `revisit-communicate.js` script in your html. This file is present in `public/js` folder.

```html
<script src="../js/revisit-communicate.js"></script>
```

Then inform reVISit when the stimuli is ready by calling `postReady`.

```js
// call postReady after the stimuli has been rendered to the user
Revisit.postReady();
```

To post answers to reVISit, call `postAnswers` function with answers as a list:

```js
Revisit.postAnswers([answerQuantative, answerQualitative]);
```

If any custom events need to be tracked, call `postEvent` function with parameters `eventName` and `objectId`:

```js
Revisit.postEvent("mouseHover", "box1");
```

#### Markdown Component

Markdown components can be specified by setting the property type to `markdown`.

The `path` property defines the path of the markdown file.

```js
components {
    markdownComponent: {
       type: 'markdown'
       path: "cleveland/consent-cm.md"
       ...
    }
...
}
```

#### Questionnaire Component

A questionnaire component can be specified by setting the property type to `questionnaire`.

Example: 

```js
 post-study-survey: {
    type: "questionnaire"
    response:[{
        ...
    }
```
See [response types](#response-types) for a list of elements that can be included in a questionnaire.

# Experiment Elements

This section contains a list of elements to be included in the experiment. The list of elements can be customized based on the requirements of the experiment.

| Components                      |
| ------------------------------- | ------------------------------------------------------------------------------ |
| <u>Component</u>                | <u>Description</u>                                                             |
| [Consent](#consent-form)        | A markdown file which contains a consent specification for the study           |
| [Training](#training-page) | A markdown or image file which contains a training specification for the study |
| [Practice](#practice-container) | A list of practice stimuli for the study                                       |
| [Trials](#trials-container)     | A list of stimuli to be used in the study                                      |
| [Questionnaire](#questionnaire) | Post Study Survey                                                              |

### Consent Form

To include a consent form in your experiment, add a consent key to the configuration file.

The example below shows the definition of a consent component.

```js
components {
    consent: {
       type: 'markdown'
       path: "cleveland/consent-cm.md"
       nextButtonText: "Agree"
       response: [
            {
                id: "signature"
                type: "shortText"
                prompt: "Your signature"
                desc: "Please provide your signature"
                required: true
                location: belowStimulus
            }
            ...
       ]
    }
...
}
```

<!-- prettier-ignore-start -->

| Property       | Type    | Description                                                                                        |
| -------------- | ------- | -------------------------------------------------------------------------------------------------- |
| type           | string  | Specify component type                                                                             |
| path           | string  | **Required**. Specify path to the consent markdown file                                            |
| nextButtonText | string  | Specify text to be shown for the next button                                                       |
| [response](#response-types) | array[] | An array of hjson stimulus response objects. There are 8 stimulus response objects [Numerical](#numerical-input), [Likert Scale](#likert-scale-input), [Radio](#radio-input),  [Check Box](#checkbox-input), [Short Text](#short-text-input), [Long Text](#long-text-input), [Drop down](#dropdown-input) |

<!-- prettier-ignore-end -->

### Training Page

To include a training page in your experiment, add a training<id> key to the configuration file. The <id> is a unique numeric identifier for each training component (training1, training2, ...).

The example below shows the definition of a training component.

```js
components {
    training1: {
        type: "image"
        path: "cleveland/cm-training.png",
        style: {
            maxWidth: '1000px'
        }
    }
    ...
}
```

| Property | Type   | Description                                                                        |
| -------- | ------ | ---------------------------------------------------------------------------------- |
| type     | string | Specify component type. A training component can either be an `image or markdown`. |
| path     | string | **Required**. Specify path to the training component                               |
| style    | hjson  | Specify CSS style properties for the training component                            |

Note: A study can have multiple trainings. To include multiple trainings to an experiment, append an index to the training key. For example:

```js
components {
    training1: {
        type: "image"
        path: "cleveland/cm-training1.png",
        style: {
            maxWidth: '1000px'
        }
    }
    training2: {
        type: "markdown"
        path: "cleveland/cm-training2.md",
        style: {
            maxWidth: '1000px'
        }
    }
    ...
}
```

### Practice Container

To include a practice container in your experiment, add a practice<id> key to the configuration file. The <id> is a unique numeric identifier for each practice component (practice1, practice2, ...).

The example below adds a practice container to the experiment. The practice section contains one or more [stimuli](#experiment-stimuli) components, which may contain a numerical input for the participants response.

```js
components {
    practice1: {
            type: "container"
            order: ["bubbleChart"]
            randomization-scheme: "latin-square"
            subset-count: 2
            nextButtonLocation: sidebar
            instructionLocation: sidebar
            response:[{
                id: "cm-response"
                type: "numerical"
                prompt: "Your answer!!"
                desc: "Enter your answer here, range from 0 - 100"
                required: true
                max: 100
                min: 0
            }],
            components: {
                bubbleChart: {
                    "meta": {
                        "difficulty": 5,
                        "chart": "bubble",
                    },
                    description: "A chart with correct answer of 0.66"
                    instruction: "Stimulus Instruction"
                    stimulus: {
                        type: "react-component"
                        path: "BubbleChart.tsx"
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
                        correctAnswer: [{
                            id: "cm-response2"
                            answer: 23
                        }]
                    }
                }
            }
        }
    }
```

<!-- prettier-ignore-start -->

| Practice Container                    |
| ------------------------------------- | ----------- | ------------------------------------------------------------------------ |
| <u>Property</u>                       | <u>Type</u> | <u>Description</u>                                                       |
| type                                  | string      | Component type. Default value: ```container```.                          |
| order                                 | array[]     | Specifies the stimuli display order. Multiple practice stimuli can be added to an experiment. For example: ``` order: [barChart1, barChart2]``` defines two bar charts with different specification, whereas ``` order: [barChat, bubbleChart]``` defines a barChart and a bubbleChart. |
| randomization-scheme                  | string      | Specifies the stimuli randomization scheme.                              |
| subset-count                          | number      |                                                                          |
| nextButtonLocation                    | string      | Specifies the location of the next button relative to the stimulus. Default values: ``` 'sidebar', 'aboveStimulus', 'belowStimulus' ``` |
| instructionLocation                   | string      | Specifies the location of the experiment instruction relative to the stimulus. Default values: ``` 'sidebar', 'aboveStimulus', 'belowStimulus' ``` |
| [response](#response-types)         | array[]       | An array of hjson stimulus response objects. There are 8 stimulus response objects [Numerical](#numerical-input), [Likert Scale](#likert-scale-input), [Radio](#radio-input),  [Check Box](#checkbox-input), [Short Text](#short-text-input), [Long Text](#long-text-input), [Drop down](#dropdown-input) and [Slider Input](#slider-input)  |
| components                           | hjson            | A list of hjson objects for each stimuli specified in the order field. Refer to the [Experiment Stimuli](#experiment-stimuli) for examples.                   |

<!-- prettier-ignore-end -->

Note: A study can have multiple practice containers. To include multiple practice containers to an experiment, append a numerical <id> to the practice key. For example:

```js
components {
    practice1: {
        type: "container"
        ...
    }
    practice2: {
        type: "container"
        ...
    }
    ...
}
```

### Trials Container

To include a trials container to your experiment, add a trials<id> key to the configuration file. The <id> is a unique numeric identifier for each trials component (trials1, trials2, ...).

The example below adds a trial to the experiment. A trial contains one or more [stimuli](#experiment-stimuli) components, which may contain a numerical input for the participants response.

```js
components {
    trials1: {
            type: "container"
            order: ["bubbleChart"]
            randomization-scheme: "latin-square"
            subset-count: 2
            nextButtonLocation: sidebar
            response:[{
                id: "cm-response"
                type: "numerical"
                prompt: "Your answer!!"
                desc: "Enter your answer here, range from 0 - 100"
                required: true
                max: 100
                min: 0
                location: 'sidebar'
            }],
            components: {
                bubbleChart: {
                    "meta": {
                        "difficulty": 5,
                        "chart": "bubble",
                    },
                    description: "A chart with correct answer of 0.66"
                    instruction: "Stimulus Instruction"
                    instructionLocation: "sidebar"
                    stimulus: {
                        type: "react-component"
                        path: "BubbleChart.tsx"
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
                    }
                }
            }
        }
    }
```

<!-- prettier-ignore-start -->

| Trials Container                      |
| ------------------------------------- | ----------- | ------------------------------------------------------------------------ |
| <u>Property</u>                       | <u>Type</u> | <u>Description</u>                                                       |
| type                                  | string      | Component type. Default value: ```trials```.                           |
| order                                 | array[]     | Specifies the stimuli display order. Multiple practice stimuli can be added to an experiment. For example: ``` order: [barChart1, barChart2]``` defines two bar charts with different specification, whereas ``` order: [barChat, bubbleChart]``` defines a barChart and a bubbleChart. |
| randomization-scheme                  | string      | Specifies the stimuli randomization scheme.                              |
| subset-count                          | number      |                                                                          |
| nextButtonLocation                    | string      | Specifies the location of the next button relative to the stimulus. Default values: ``` 'sidebar', 'aboveStimulus', 'belowStimulus' ``` |
| [response](#response-types)         | array[]       | An array of hjson stimulus response objects. There are 8 stimulus response objects [Numerical](#numerical-input), [Likert Scale](#likert-scale-input), [Radio](#radio-input),  [Check Box](#checkbox-input), [Short Text](#short-text-input), [Long Text](#long-text-input), [Drop down](#dropdown-input) and [Slider Input](#slider-input)  |
| components                            | hjson            | A list of hjson objects for each stimuli specified in the order field. Refer to the [Experiment Stimuli](#experiment-stimuli) for examples.                   |

<!-- prettier-ignore-end -->

Note: A study can have multiple trials containers. To include multiple trials containers to an experiment, append a numerical <id> to the trials key. For example:

```js
components {
    practice1: {
        type: "container"
        ...
    }
    practice2: {
        type: "container"
        ...
    }
    ...
}
```

### Questionnaire

To include a questionnaire in your experiment, add a post-study-survey key to the configuration file.

The example below defines a questionnaire component for the experiment.

```js
 post-study-survey: {
    type: "questionnaire"
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

Note: A questionnaire can contain multiple response types ([Numerical](#numerical-input), [Likert Scale](#likert-scale-input), [Radio](#radio-input), [Check Box](#checkbox-input), [Short Text](#short-text-input), [Long Text](#long-text-input), [Drop down](#dropdown-input) or [Slider Input](#slider-input)).

Note: Multiple questions can be added to a questionnaire as shown below:

```js
 post-study-survey: {
    type: "questionnaire"
    response:[{
        id: "Question-1"
        type: "dropdown"
        prompt: "Do you want to take this study again?"
        desc: "Enter your preference"
        options:[{label:"Yes", value:"Yes"},{label:"No", value:"No"}]
        required: true
    }
    {
        id: "Question-2"
        type: "longText"
        prompt: "Any other comments?"
        desc: "Enter your feedback here."
        required: true
    }]
}
```

### Experiment Sequence

Specifies the order of display for each component. The experiment sequence can be changed based on the requirements of the study.

The example below shows an experiment sequence which will display experiment components in the following order: <br/> Consent, Training, Practice, Attention, Trials, Post Study Survery.

```js
sequence: [
    "consent"
    "training"
    "practice"
    "trials"
    "post-study-survey"
]
```

| Property | Type    | Description                                                               |
| -------- | ------- | ------------------------------------------------------------------------- |
| sequence | array[] | Defines the order in which components will be displayed in the experiment |

## Response types

Defines the response type required for a stimulus. A response type can either be [Numerical](#numerical-input), [Likert Scale](#likert-scale-input), [Radio](#radio-input), [Check Box](#checkbox-input), [Short Text](#short-text-input), [Long Text](#long-text-input), [Drop down](#dropdown-input) or [Slider Input](#slider-input).

Example: This example shows how to define a response object for a stimulus.

```js
...
{
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

Note: To include multiple response types to a stimulus, append multiple response objects to the array.

The example below adds multiple response objects (numerical, long text) to a stimulus.

```js
...
{
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

The example below defines a numerical response object for a stimulus.

```js
...
{
    response:[{
        id: "cm-response-numerical"
        type: "numerical"
        prompt: "Your answer!!"
        desc: "Enter your answer here, range from 0 - 100"
        required: true
        max: 100
        min: 0
        location: belowStimulus
    }]
 }
```

| Property | Type    | Description                                                                                                   |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| id       | string  | Unique string value for a response object.                                                                    |
| type     | string  | Response type                                                                                                 |
| prompt   | string  | Text to be displayed above the response object.                                                               |
| desc     | string  | Placeholder text for the response object.                                                                     |
| required | boolean | True or False value. This value will be `true` if participants are required to respond and `false` otherwise. |
| max      | number  | Max numerical value that can be accepted by the response object.                                              |
| min      | number  | Min numerical value that can be accepted by the response object.                                              |
| location | string  | Sets the location of the response object. Preset locations [```aboveStimulus, belowStimulus, sidebar```]      |

#### Likert Scale Input

Defines a Likert scale input for a stimulus.

The example below defines a likert scale response object for a stimulus.

```js
...
{
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

| Property | Type    | Description                                                                                                   |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| id       | string  | Unique string value for a response object.                                                                    |
| type     | string  | Response type                                                                                                 |
| prompt   | string  | Text to be displayed above the response object.                                                               |
| desc     | string  | Placeholder text for the response object.                                                                     |
| required | boolean | True or False value. This value will be `true` if participants are required to respond and `false` otherwise. |
| preset   | number  | Number of likert options required                                                                             |
| location | string  | Sets the location of the response object. Preset locations [```aboveStimulus, belowStimulus, sidebar```]      |

#### Radio Input

Defines a radio input for a stimulus.

The example below defines a radion response object for a stimulus.

```js
...
{
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

| Property | Type    | Description                                                                                                   |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| id       | string  | Unique string value for a response object.                                                                    |
| type     | string  | Response type                                                                                                 |
| prompt   | string  | Text to be displayed above the response object.                                                               |
| desc     | string  | Placeholder text for the response object.                                                                     |
| required | boolean | True or False value. This value will be `true` if participants are required to respond and `false` otherwise. |
| options  | array[] | Array of hjson objects with key - value pairs for response options.                                           |
| location | string  | Sets the location of the response object. Preset locations [```aboveStimulus, belowStimulus, sidebar```]      |

#### Slider Input

Defines a slider input for a stimulus.

The example below defines a slider response object for a stimulus.

```js
...
{
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

| Property | Type    | Description                                                                                                   |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| id       | string  | Unique string value for a response object.                                                                    |
| type     | string  | Response type                                                                                                 |
| prompt   | string  | Text to be displayed above the response object.                                                               |
| desc     | string  | Placeholder text for the response object.                                                                     |
| required | boolean | True or False value. This value will be `true` if participants are required to respond and `false` otherwise. |
| options  | array[] | Array of hjson objects with key - value pairs for response options.                                           |
| location | string  | Sets the location of the response object. Preset locations [```aboveStimulus, belowStimulus, sidebar```]      |

#### Checkbox Input

Defines a Checkbox input for a stimulus.

The example below defines a checkbox response object for a stimulus.

```js
...
{
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

| Property | Type    | Description                                                                                                   |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| id       | string  | Unique string value for a response object.                                                                    |
| type     | string  | Response type                                                                                                 |
| prompt   | string  | Text to be displayed above the response object.                                                               |
| desc     | string  | Placeholder text for the response object.                                                                     |
| required | boolean | True or False value. This value will be `true` if participants are required to respond and `false` otherwise. |
| options  | array[] | Array of hjson objects with key - value pairs for response options.                                           |
| location | string  | Sets the location of the response object. Preset locations [```aboveStimulus, belowStimulus, sidebar```]      |

#### Dropdown Input

Defines a dropdown input for a stimulus.

The example below defines a dropdown response object for a stimulus.

```js
...
{
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

| Property | Type    | Description                                                                                                   |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| id       | string  | Unique string value for a response object.                                                                    |
| type     | string  | Response type                                                                                                 |
| prompt   | string  | Text to be displayed above the response object.                                                               |
| desc     | string  | Placeholder text for the response object.                                                                     |
| options  | array[] | Array of hjson objects with key - value pairs for response options.                                           |
| required | boolean | True or False value. This value will be `true` if participants are required to respond and `false` otherwise. |
| max      | number  | Max numerical value that can be accepted by the response object.                                              |
| min      | number  | Min numerical value that can be accepted by the response object.                                              |
| location | string  | Sets the location of the response object. Preset locations [```aboveStimulus, belowStimulus, sidebar```]      |

#### Short Text Input

Defines a short text input for a stimulus.

The example below defines a short text object for a stimulus.

```js
...
{
    response:[{
        id: "cm-response-st"
        type: "shortText"
        prompt: "Any short comments?"
        desc: "Enter your short comments here"
        required: true
        location: belowStimulus
    }]
 }
```

| Property | Type    | Description                                                                                                   |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| id       | string  | Unique string value for a response object.                                                                    |
| type     | string  | Response type                                                                                                 |
| prompt   | string  | Text to be displayed above the response object.                                                               |
| desc     | string  | Placeholder text for the response object.                                                                     |
| required | boolean | True or False value. This value will be `true` if participants are required to respond and `false` otherwise. |
| location | string  | Sets the location of the response object. Preset locations [```aboveStimulus, belowStimulus, sidebar```]      |

#### Long Text Input

Defines a long text input for a stimulus.

The example below defines a long text response object for a stimulus.

```js
...
{
    response:[{
        id: "cm-response-lt"
        type: "longText"
        prompt: "Any long comments?"
        desc: "Enter your long comments here"
        required: true
        location: belowStimulus
    }]
 }
```

| Property | Type    | Description                                                                                                   |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| id       | string  | Unique string value for a response object.                                                                    |
| type     | string  | Response type                                                                                                 |
| prompt   | string  | Text to be displayed above the response object.                                                               |
| desc     | string  | Placeholder text for the response object.                                                                     |
| required | boolean | True or False value. This value will be `true` if participants are required to respond and `false` otherwise. |
| location | string  | Sets the location of the response object. Preset locations [```aboveStimulus, belowStimulus, sidebar```]      |
