# Example 2: Random Sample

Suppose we are trying to develop a ([VLAT](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7539634&casa_token=9jo2PolUvEQAAAAA:vQJzbp3Sh6FU5TW1uaNyNKzQio6cSyx6-BOKrZ4cbDE6nAYOWFj3NJNecDMQlHg-1beKBM8Ra5I&tag=1))-like experiment.
The original VLAT contains 50+ questions, each trial has a chart type and a task type. The "chart type" refers to the visualization shown and the "task type" is a general category which the question falls into (e.g. 'information retrieval' or 'compare value'). Here, we added an additional dimension -- a "context" for each question.

For this tutorial, we generated a list of questions which correspond to a specific, chart type, task type, and context. From this list of questions, we now want to generate each of the components that are necessary for our configuration file. We named the file for each question as `{chart_type}-{task_type}-{context}`. We put all visualizations in the data/vis folder and all questions in the data/questions folder.

The goal here is to maintain the chart and task type ordering of the original VLAT experiment while having the newly added context be random. To do this, we start by having a fixed order sequence of components. Each component then corresponds to a single chart and task type pairing. However, instead of just directly adding the components to this list, we create nested sequence blocks. For each chart and task type, then, we will have another sequence block. The components of this sequence block will then be the set of questions pertaining to that chart and task type. We can then set the order on each of these sequence blocks as random. Below is the general configuration structure we will design:


```json
{
  "sequence":{
    "order": "fixed",
    "components": [
      {
        // ChartType 1 and taskType 2
        "order":"random",
        "components":[
          "chartType1-taskType1-context1",
          "chartType1-taskType1-context-2",
          ...
          "chartType1-taskType1-contextM"
        ]
      },
      ...
      {
        // ChartType N and taskType N
        "order":"random",
        "components":[
          "chartTypeN-taskTypeN-context1",
          "chartTypeN-taskTypeN-context2",
          ...
          "chartTypeN-taskTypeN-contextM"
        ]
      }
    ]
  }
}
```

This means that each user will see the chart and task type sections in the same ordering, but each individual section will randomly assign the contexts.

Now let's generate the trials first:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="python" label="Python">


```python
def generateTrialData(filename, idx):
    filename_without_extension = os.path.splitext(filename)[0]
    parts = filename_without_extension.split('-')
    chartName = parts[0]
    taskDesc = parts[1]
    category = parts[2]
    # Read the content from the file
    with open(question_folder_path + filename, 'r') as file:
        file_content = [line.strip() for line in file.readlines() if line.strip()]


     # Extracting parts from the file content
    question = get_content_after_colon(file_content[0].strip())  # Remove leading/trailing whitespaces
    if "(A)" in file_content[1]:  # If options are within parentheses
        options = file_content[1].split('(')[1:]
        options = [("(" + item.strip()) for item in options]
    else:
        options = filter_array([option.strip() for option in
                                file_content[1:-1]])  
    correct_answer = trim_text(get_content_after_colon(file_content[-1]))  

    # Creating JSON object
    data = {
        "meta": {
            "chartName": chartName,
            "context": category,
            "task": taskDesc
        },
        "baseComponent": "visTask",
        "instruction": "**" + question + "**",
        "path": "gpt-prolific/" + chartName + "-" + category + ".png",
        "response": [
            {
                "id": "response" + str(idx),
                "prompt": "Your answer",
                "required": True,
                "location": "sidebar",
                "type": "radio",
                "correctAnswer": correct_answer,
                "options": generate_radio_options(options)
            }
        ]
    }
   
    return data

all_trials = {}
questions = sorted(os.listdir(question_folder_path))
i = 1
for filename in questions:
    filename_without_extension = os.path.splitext(filename)[0]
    trialName = filename_without_extension
    try:
        all_trials[filename_without_extension] = generateTrialData(filename, i)
        i = i + 1

    except:
        print(filename_without_extension)

```

</TabItem>

<TabItem value="node" label="Node.js">

```javascript
function generateTrialData(filename, idx, questionFolderPath) {
  const filenameWithoutExtension = path.parse(filename).name;
  const parts = filenameWithoutExtension.split("-");
  const chartName = parts[0];
  const taskDesc = parts[1];
  const category = parts[2];

  // Read the content from the file
  const fileContent = fs
    .readFileSync(path.join(questionFolderPath, filename), "utf8")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line);

  // Extracting parts from the file content
  const question = getContentAfterColon(fileContent[0]);

  let options;
  if (fileContent[1].includes("(A)")) {
    // If options are within parentheses
    options = fileContent[1]
      .split("(")
      .slice(1)
      .map((item) => "(" + item.trim());
  } else {
    options = filterArray(
      fileContent.slice(1, -1).map((option) => option.trim())
    );
  }

  const correctAnswer = trimText(
    getContentAfterColon(fileContent[fileContent.length - 1])
  );

  // Creating JSON object
  const data = {
    meta: {
      chartName: chartName,
      context: category,
      task: taskDesc,
    },
    baseComponent: "visTask",
    instruction: "**" + question + "**",
    path: "gpt-prolific/" + chartName + "-" + category + ".png",
    response: [
      {
        id: "response" + idx,
        prompt: "Your answer",
        required: true,
        location: "sidebar",
        type: "radio",
        correctAnswer: correctAnswer,
        options: generateRadioOptions(options),
      },
    ],
  };

  return data;
}

// Generate trials
const questionFolderPath = "data/questions";
const allTrials = {};
const questions = fs.readdirSync(questionFolderPath).sort();

let i = 1;
questions.forEach((filename) => {
  const filenameWithoutExtension = path.parse(filename).name;

  try {
    allTrials[filenameWithoutExtension] = generateTrialData(
      filename,
      i,
      questionFolderPath
    );
    i++;
  } catch (err) {
    console.error(filenameWithoutExtension, err);
  }
});

```
</TabItem>
</Tabs>


Then we want to generate the sequence. To make our test follow the VLAT sequence but randomize the context.
Now that we have generated all the trials, we want to construct our sequence. As stated previously, we want a fixed order sequence which has nested random order blocks.
<Tabs>
<TabItem value="python" label="Python">


```python
#Context list
contextList = ["economy", "food_and_agriculture", "health", "politics", "education", "innovation",
               "population_and_demography", "weather_and_climate", "energy_and_environment"]
#Chart type sequence
chartsList = ['line_chart', 'line_chart', 'line_chart', 'line_chart', 'line_chart', 'bar_chart', 'bar_chart', 'bar_chart', 'bar_chart', 'stacked_bar_chart', 'stacked_bar_chart', 'stacked_bar_chart', 'stacked_bar_chart', '100_percent_stacked_bar_chart', '100_percent_stacked_bar_chart', '100_percent_stacked_bar_chart', 'pie_chart', 'pie_chart', 'pie_chart', 'histogram', 'histogram', 'histogram', 'scatterplot', 'scatterplot', 'scatterplot', 'scatterplot', 'scatterplot', 'scatterplot', 'scatterplot', 'area_chart', 'area_chart', 'area_chart', 'area_chart', 'stacked_area_chart', 'stacked_area_chart', 'stacked_area_chart', 'stacked_area_chart', 'stacked_area_chart', 'bubble_chart', 'bubble_chart', 'bubble_chart', 'bubble_chart', 'bubble_chart', 'bubble_chart', 'bubble_chart', 'choropleth_map', 'choropleth_map', 'choropleth_map', 'tree_map', 'tree_map', 'tree_map', 'end']
#Task type sequence
tasksList = ['retrieve_value', 'locate_value', 'identify_range', 'describe_trend_or_correlation', 'estimate_the_difference_between_two_values_of_the_same_type', 'retrieve_value', 'locate_value', 'identify_range', 'make_comparisons', 'retrieve_value', 'estimate_the_ratio_of_one_value_to_another_value_of_the_same_type', 'locate_value', 'make_comparisons', 'retrieve_value', 'locate_value', 'make_comparisons', 'retrieve_value', 'locate_value', 'make_comparisons', 'retrieve_value', 'locate_value', 'make_comparisons', 'retrieve_value', 'locate_value', 'identify_range', 'identify_anomalies', 'identify_clusters', 'describe_trend_or_correlation', 'make_comparisons', 'retrieve_value', 'locate_value', 'identify_range', 'describe_trend_or_correlation', 'retrieve_value', 'estimate_the_ratio_of_one_value_to_another_value_of_the_same_type', 'locate_value', 'describe_trend_or_correlation', 'make_comparisons', 'retrieve_value', 'locate_value', 'identify_range', 'identify_anomalies', 'identify_clusters', 'describe_trend_or_correlation', 'make_comparisons', 'retrieve_value', 'locate_value', 'make_comparisons', 'locate_value', 'retrieve_value', 'identify_the_hierarchical_structure']



sequence = {
    "order": "fixed",
    "components": []
}
totalQSeq = 0
counter = 0
component = {
    "order": "random",
    "numSamples": 1,
    "components": [

    ]
}
while counter < len(tasksList):
    chart = chartsList[counter]
    task = tasksList[counter]

    for context in contextList:
        newChart = chart
        trialName = chart + "-" + task + "-" + context
        fileName = question_folder_path + chart + "-" + task + "-" + context + ".txt"
        if os.path.exists(fileName):
            component["components"].append(chart + "-" + task + "-" + context)
            totalQSeq += 1
        else:
            print("missing file:" + fileName)

    sequence["components"].append(component)
    component = {
        "order": "random",
        "numSamples": 1,
        "components": [

        ]
    }


# This is optional, you can insert attention check questions in this pattern.
    if (counter == 12):
        sequence["components"].append("at1")
    if (counter == 24):
        sequence["components"].append("at2")
    if (counter == 36):
        sequence["components"].append("at3")

    counter += 1

```

</TabItem>
<TabItem value="node" label="Node.js">

```javascript

const fs = require('fs');
const path = require('path');

// Context list
const contextList = ["economy", "food_and_agriculture", "health", "politics", "education", "innovation", "population_and_demography", "weather_and_climate", "energy_and_environment"];
// Chart type sequence
const chartsList = ['line_chart', 'line_chart', 'line_chart', 'line_chart', 'line_chart', 'bar_chart', 'bar_chart', 'bar_chart', 'bar_chart', 'stacked_bar_chart', 'stacked_bar_chart', 'stacked_bar_chart', 'stacked_bar_chart', '100_percent_stacked_bar_chart', '100_percent_stacked_bar_chart', '100_percent_stacked_bar_chart', 'pie_chart', 'pie_chart', 'pie_chart', 'histogram', 'histogram', 'histogram', 'scatterplot', 'scatterplot', 'scatterplot', 'scatterplot', 'scatterplot', 'scatterplot', 'scatterplot', 'area_chart', 'area_chart', 'area_chart', 'area_chart', 'stacked_area_chart', 'stacked_area_chart', 'stacked_area_chart', 'stacked_area_chart', 'stacked_area_chart', 'bubble_chart', 'bubble_chart', 'bubble_chart', 'bubble_chart', 'bubble_chart', 'bubble_chart', 'bubble_chart', 'choropleth_map', 'choropleth_map', 'choropleth_map', 'tree_map', 'tree_map', 'tree_map', 'end'];
// Task type sequence
const tasksList = ['retrieve_value', 'locate_value', 'identify_range', 'describe_trend_or_correlation', 'estimate_the_difference_between_two_values_of_the_same_type', 'retrieve_value', 'locate_value', 'identify_range', 'make_comparisons', 'retrieve_value', 'estimate_the_ratio_of_one_value_to_another_value_of_the_same_type', 'locate_value', 'make_comparisons', 'retrieve_value', 'locate_value', 'make_comparisons', 'retrieve_value', 'locate_value', 'make_comparisons', 'retrieve_value', 'locate_value', 'identify_range', 'identify_anomalies', 'identify_clusters', 'describe_trend_or_correlation', 'make_comparisons', 'retrieve_value', 'locate_value', 'identify_range', 'describe_trend_or_correlation', 'retrieve_value', 'estimate_the_ratio_of_one_value_to_another_value_of_the_same_type', 'locate_value', 'describe_trend_or_correlation', 'make_comparisons', 'retrieve_value', 'locate_value', 'identify_range', 'identify_anomalies', 'identify_clusters', 'describe_trend_or_correlation', 'make_comparisons', 'retrieve_value', 'locate_value', 'make_comparisons', 'locate_value', 'retrieve_value', 'identify_the_hierarchical_structure'];

// Initialize sequence and components
let sequence = {
    order: "fixed",
    components: [],
};

let totalQSeq = 0;
let counter = 0;
let component = {
    order: "random",
    numSamples: 1,
    components: [],
};

while (counter < tasksList.length) {
    const chart = chartsList[counter];
    const task = tasksList[counter];

    contextList.forEach((context) => {
        const trialName = `${chart}-${task}-${context}`;
        const fileName = path.join(
            questionFolderPath,
            `${chart}-${task}-${context}.txt`
        );

        // Check if the file exists
        if (fs.existsSync(fileName)) {
            component["components"].push(`${chart}-${task}-${context}`);
            totalQSeq++;
        } else {
            console.log("missing file: " + fileName);
        }
    });

    // Append component to sequence and reset for the next iteration
    sequence["components"].push(component);
    component = {
        order: "random",
        numSamples: 1,
        components: [],
    };

    // Optional: Insert attention check questions at specific position
    if (counter === 12) sequence["components"].push("at1");
    if (counter === 24) sequence["components"].push("at2");
    if (counter === 36) sequence["components"].push("at3");

    counter++;
}

```

</TabItem>

</Tabs>

You can check the complete code and output at CodeSandbox using the link below:
- [Python](https://codesandbox.io/p/devbox/config-gen-demo2-ywf9rw)
- [Node](https://codesandbox.io/p/devbox/config-gen-demo2-js-rrk8p7)
