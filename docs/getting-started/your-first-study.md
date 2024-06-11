---
sidebar_position: 3
---

# Setting Up Your First Study


Let's start with setting up a simple questionnaire study.

:::note
It is easiest to perform the following tutorial with an IDE. We suggest something like [VSCode](https://code.visualstudio.com/) since it has JSON autocomplete, which will make it much easier to write a reVISit Spec.
:::

After cloning your fork of the repository to your computer, you’ll see that the repository consists of many high level directories. For this tutorial, we will solely be working with the `public` directory. Start by making a new directory called “basic-questionnaire-study” in the "public" directory. Inside this folder, create another directory called "assets". The assets directory will be where all of our various components are held.

Once that is done, we will make an “introduction” markdown file. This will be used as the introduction to the study for your users.

Create a file with the following contents:

```markdown
# Introduction

Welcome to our study. This is a basic questionnaire study. We will only ask you a few questions and then we will be done.
```

Save this file as “introduction.md in the “basic-questionnaire-study/assets” directory. Next, let’s create a “help” file. This will be used so that any user who needs help during the study will be able to read this markdown page.

```markdown
# Help

This is a questionnaire. For each question, be sure to provide and answer and then click **Next** when you’re ready to move onto the next question.
```
Save this file as “help.md in the “basic-questionnaire-study/assets” directory.

Now we are ready to create the configuration file for the study. This configuration defines how our study is laid out, provides some basic information about yourself (the creator), and describes which components will be added to the study. 

Create a new file called “config.json”. Then, copy and paste the following json into the new file.

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
                    "prompt": "What would you rate your satisfaction of this survey? 0 being very un-enjoyable, 5 being very enjoyable.",
                    "required": true,
                    "location": "aboveStimulus",
                    "type": "numerical",
                    "min": 0,
                    "max": 5
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
Save this file in the “basic-questionnaire-study” directory -- one level above the "basic-questionnaire-study/assets" directory.

Now, our study is almost set up to view. The last step is to make sure that the “global.json” file is set to find this new study. Open the "global.json" file in the "public" directory.

Add the following code to the “configs” object:

```js
“basic-questionnaire-study”: {
	“path”: ”basic-questionnaire-study/config.json”
}
```
After this, add “basic-questionnaire-study” into the “configsList” list in the same file. It does not matter where "basic-questionnaire-study" appears in the configs list. Because the configs list is ordered, however, placing "basic-questionnaire-study" at the bottom of the list will mean that the study will show up at the bottom of the list of studies in the UI.

Now, if you start the server (using `yarn serve` as described in the <a href="#installation">Installation</a> section), you'll be able to navigate to "http://localhost:8080/" and view your study in the list of studies. Alternatively, you can navigate to "http://localhost:8080/basic-questionnaire-study" to enter the study directly.

## Adding custom HTML

Now, we will take the study we just created and add another component based on a user-created HTML file. This allows for some additional customization of the component. 

The HTML code below uses the extensive D3.js library. It renders a simple, horizontal bar chart. Copy and paste this HTML into a document called “bar-chart.html” in the “basic-questionnaire-study/assets” directory.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>D3 Nice Axes</title>
    <script src="https://d3js.org/d3.v7.js"></script>
    <!-- Load revisit-communicate to be able to send data to reVISit -->
    <script src="../../revisitUtilities/revisit-communicate.js"></script>
  </head>

  <body>
    <svg></svg>
  </body>

  <script>
    // Get data from the config file
    Revisit.onDataReceive((data) => {
      const barData = data['barData']
      const taskID = 'barChart';
      const loc = 'belowStimulus';
      height = 400;
      width = 750;
      padding = 25;
      svg = d3.select('svg');
      svg
        .attr('width', width + 2 * padding)
        .attr('height', height + 2 * padding);

      let spacing = height / barData.length;

      let min = d3.min(barData);
      let max = d3.max(barData);

      let xScale = d3.scaleLinear().domain([min, max]).range([0, width]).nice();

      let color = d3
        .scaleLinear()
        .domain([min, 0, max])
        .range(['darkred', 'lightgray', 'steelblue']);

      let xAxis = d3.axisBottom();
      xAxis.scale(xScale);

      svg
        .selectAll('.bar')
        .data(barData)
        .join('rect')
        .classed('bar', true)
        .attr('transform', 'translate(' + padding + ',' + padding + ')')
        .attr('x', (d) => xScale(Math.min(0, d)))
        .attr('y', (d, i) => i * spacing + 5)
        .attr('width', (d) => Math.abs(xScale(d) - xScale(0)))
        .attr('height', 20)
        .style('fill', (d) => color(d))

        // Post answer from the html to reVISit platform
        .on('click', (e, d) => {
          Revisit.postAnswers({
            [taskID]: d,
          });
        });

      svg
        .append('g')
        .attr(
          'transform',
          'translate(' + padding + ',' + (height + padding) + ')'
        )
        .call(xAxis);
    });
  </script>
</html>
```

One of the interesting pieces of the above code is that this HTML document interacts with reVISit in a two-way fashion. Firstly, note that the script to render the bar chart is wrapped in the “Revisit.onDataReceive” function. This listens for data that is passed to the HTML document via the "parameters" key in the configuration of the component. You will see shortly how we can use this HTML document as a template for multiple components with different datasets.

Furthermore, you’ll see that we have also created an “onClick” function and attached it to each of the bars in the bar graph. This click function uses the “Revisit.postAnswers” method to send information back to reVISit. 

Now that we have this HTML document in our study directory, we are ready to adjust our “config.json” file to account for these new components.

In your “config.json” document, create new new key called “baseComponents” as a sibling to the keys “uiConfig”, “components”, “sequence”, etc. In this newly created key, paste the code below:

```js
    "baseComponents": {
        "bar-chart": {
            "type": "website",
            "response": [
                {
                    "id": "barChart",
                    "prompt": "Your selected answer:",
                    "required": true,
                    "location": "belowStimulus",
                    "type": "iframe"
                }
            ],
            "path": "basic-questionnaire-study/assets/bar-chart.html",
            "instructionLocation": "aboveStimulus"
        
        }
    }
```
This creates a component that new components can be based off of. Each component using the “bar-chart” as the value to the “baseComponent” key will now automatically have the above key-value pairs included. In other words, there is no need to specify the type, response, path, or instruction location when creating these next components.

In the components section, add the following objects:

```js
...
"bar-chart-1":{
    "baseComponent": "bar-chart",
    "description": "A trial for the user to click the largest bar",
    "instruction": "Click on the largest bar",
    "parameters": {
        "barData": [0.32, 0.01, 1.2, 1.3, 0.82, 0.4, 0.3]
    }
},
"bar-chart-2":{
    "baseComponent": "bar-chart",
    "description": "A trial for the user to click the smallest bar",
    "instruction": "Click on the smallest bar",
    "parameters": {
        "barData": [1.2, 1.2, 1.2, 1.3, 0.82, 0.4, 0.3]
    }
}
...
```
The "parameters" key is a dynamically valued key which is used to pass data to your components. When you add the "parameters" key, any data contained within the objet will be sent via the event bus as a message to the component. Since we designed the HTML above to listen for this message, we were able to parse these parameters and use them as variables to control the sizes of the various bar charts. 

To finish this tutorial, add these two components ("bar-chart-1" and "bar-chart-2" to the sequence in config.json). 

:::warning
In order for reVISit to properly identify users without a server and/or an authentication process, it relies on caching the data for a user in that user's browser. Because of this, the new configuration can only be seen when the user clears their browser cache. Whenever you make an update to the configuration file, make sure to clear your cache so that you can view the updated study
:::