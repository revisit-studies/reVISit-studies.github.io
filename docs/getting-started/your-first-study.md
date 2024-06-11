---
sidebar_position: 3
---

# Setting Up Your First Study


Let's start with setting up a simple questionnaire study.

:::note
It is easiest to best to use an IDE for developing reVISit studies. We suggest something like [VSCode](https://code.visualstudio.com/) since it has JSON autocomplete, which will make it much easier to write a reVISit Spec.
:::

## Setting Up Repos and Files

After cloning your fork of the repository to your computer, you’ll see that the repository consists of many high level directories. For this tutorial, we will solely be working with the `public` directory. Start by making a new directory called `basic-questionnaire-study` in the `public` directory. Inside this folder, create another directory called `assets`. The assets directory will be where all of our various components are held.

Once that is done, we will make an intro markdown component. Create a file `introduction.md` in the `basic-questionnaire-study/assets` folder with the following contents:

```markdown
# Introduction

Welcome to our study. This is a basic questionnaire study. We will only ask you a few questions and then we will be done.
```

Next, let’s create a `help.md` file in the same folder, so that particiapnts during the study are able to get help.

```markdown
# Help

This is a questionnaire. For each question, be sure to provide and answer and then click **Next** when you’re ready to move onto the next question.
```

## Writing a reVISit Spec

Now we are ready to create the configuration file for the study. This configuration defines how our study is laid out, provides some basic information about yourself (the creator), and describes which components will be added to the study. 

Create a new file called `config.json` in `basic-questionnaire-study`. Then, copy and paste the following code into the new file.

```js
{
    "$schema": "https://raw.githubusercontent.com/reVISit-studies/study/main/src/parser/StudyConfigSchema.json",
    "studyMetadata": {
        "title": "Basic Questionnaire Study",
        "version": "pilot",
        "authors": [
            "The reVISit Team"
        ],
        "date": "2024-03-19",
        "description": "A simple questionnaire study",
        "organizations": [
            "University of Utah",
            "WPI",
            "University of Toronto"
        ]
    },
    "uiConfig": {
        "contactEmail": "test@test.com",
        "helpTextPath": "basic-questionnaire-study/assets/help.md",
        "logoPath": "revisitAssets/revisitLogoSquare.svg",
        "withProgressBar": true,
        "autoDownloadStudy": false,
        "sidebar": true
    },
    "components": {
        "introduction": {
            "type": "markdown",
            "path": "basic-questionnaire-study/assets/introduction.md",
            "response": []
        },
        "first-question-set": {
            "type": "questionnaire",
            "response": [
                {
                    "id": "q1",
                    "prompt": "What is your first name?",
                    "required": true,
                    "location": "aboveStimulus",
                    "type": "longText",
                    "placeholder": "Please enter your first name"
                },
                {
                    "id": "q2",
                    "prompt": "What is your favorite color?",
                    "required": true,
                    "location": "aboveStimulus",
                    "type": "dropdown",
                    "placeholder": "Please choose your favorite color",
                    "options": [
                        {
                            "label": "Red",
                            "value": "red"
                        },
                        {
                            "label": "Blue",
                            "value": "blue"
                        },
                        {
                            "label": "My favorite color is not shown here.",
                            "value": "notShown"
                        }
                    ]
                }
            ]
        },
        "second-question-set": {
            "type": "questionnaire",
            "response": [
                {
                    "id": "q1",
                    "prompt": "What would you rate your satisfaction of this survey from 0 (not enjoyable) to 5 (very enjoyable).",
                    "required": true,
                    "location": "aboveStimulus",
                    "type": "likert",
                    "leftLabel": "Not Enjoyable",
                    "rightLabel": "Very Enjoyable",
                    "preset": 5
                }
            ]
        }
    },
    "sequence": {
        "order": "fixed",
        "components": [
            "introduction",
            "first-question-set",
            "second-question-set"
        ]
    }
}
```

The above code uses a [long text input](../typedoc/interfaces/LongTextResponse), a [drop-down input](../typedoc/interfaces/DropdownResponse), and a [likert scale input](../typedoc/interfaces/LikertResponse/). The questions are split up into two “pages”, the `first-question-set` and the `second-question-set`. The sequence is a simple linear sequence showing intro, first question and then second question set.

## Registering the Study

Now, our study is almost set up to view. The last step is to make sure that reVISit knows where to find your study. To do that, you will need to edit the `global.json` file in the `public` directory and add the following code to the `configs` object:

```js
"basic-questionnaire-study": {
	"path": "basic-questionnaire-study/config.json"
},
```

After this, add `basic-questionnaire-study` into the `configsList` list in the same file. Because the configs list is ordered, make sure to put `basic-questionnaire-study` at the top of the list so you can immediately see it. This is what this should look like: 

```js
"configsList": [
    "basic-questionnaire-study",
    "demo-html",
    ...
```

## Running the Server

Now, if you start the server (using `yarn serve` as described in the <a href="#installation">Installation</a> section), you'll be able to navigate to http://localhost:8080/ and view your study in the list of studies. Alternatively, you can navigate to http://localhost:8080/basic-questionnaire-study to enter the study directly.

