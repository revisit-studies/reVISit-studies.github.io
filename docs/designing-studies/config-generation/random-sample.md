# Example 2: Random Sample

Suppose we are trying to develop a ([VLAT](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7539634&casa_token=9jo2PolUvEQAAAAA:vQJzbp3Sh6FU5TW1uaNyNKzQio6cSyx6-BOKrZ4cbDE6nAYOWFj3NJNecDMQlHg-1beKBM8Ra5I&tag=1))-like experiment.
The original VLAT contains 50+ questions, each trial has a chart type and a task type.

For each chart type and task combination, we developed multiple questions with different context.
So, we want our test to follow the original VLAT sequence (same chart type and task type in each trial), but the context will be randomly selected.

We put all visualizations in the data/vis folder and all questions in the data/questions folder.
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
i = 1;
for filename in questions:
    filename_without_extension = os.path.splitext(filename)[0]
    trialName = filename_without_extension
    try:
        all_trials[filename_without_extension] = generateTrialData(filename, i)
        i = i + 1

    except:
        print(filename_without_extension)

#Wirte trial data to file
with open('out/trials-prolific.json', 'w') as outfile:
    json.dump(all_trials, outfile, indent=4)

```

</TabItem>

<TabItem value="node" label="Node.js">
```javascript
const fs = require('fs');
const path = require('path');

function generateTrialData(filename, idx, questionFolderPath) {
const filenameWithoutExtension = path.parse(filename).name;
const parts = filenameWithoutExtension.split('-');
const chartName = parts[0];
const taskDesc = parts[1];
const category = parts[2];

    // Read the content from the file
    const fileContent = fs.readFileSync(path.join(questionFolderPath, filename), 'utf8')
        .split('\n')
        .map(line => line.trim())
        .filter(line => line);

    // Extracting parts from the file content
    const question = getContentAfterColon(fileContent[0]);

    let options;
    if (fileContent[1].includes('(A)')) { // If options are within parentheses
        options = fileContent[1].split('(').slice(1).map(item => '(' + item.trim());
    } else {
        options = filterArray(fileContent.slice(1, -1).map(option => option.trim()));
    }

    const correctAnswer = trimText(getContentAfterColon(fileContent[fileContent.length - 1]));

    // Creating JSON object
    const data = {
        meta: {
            chartName: chartName,
            context: category,
            task: taskDesc
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
                options: generateRadioOptions(options)
            }
        ]
    };

    return data;
}

// Generate trials
const questionFolderPath = './path/to/question_folder';  // Specify your question folder path
const allTrials = {};
const questions = fs.readdirSync(questionFolderPath).sort();  // Sorting filenames

let i = 1;
questions.forEach(filename => {
const filenameWithoutExtension = path.parse(filename).name;

    try {
        allTrials[filenameWithoutExtension] = generateTrialData(filename, i, questionFolderPath);
        i++;
    } catch (err) {
        console.error(filenameWithoutExtension, err);
    }
});

// Write trial data to a file
fs.writeFileSync('out/trials-prolific.json', JSON.stringify(allTrials, null, 4));

```
</TabItem>
</Tabs>


Then we want to generate the sequence. To make our test follow the VLAT sequence but randomize the context.
We want to make questions with same chart type and task type a block, the sequence inside the block is random, and the sequence of block is fixed

<Tabs>
<TabItem value="python" label="Python">


```python
#seq1: suppose we are trying to replicate the VLAT, each question should have same chart type and task type, but randomly pick a context 

contextList = ["economy", "food_and_agriculture", "health", "politics", "education", "innovation",
               "population_and_demography", "weather_and_climate", "energy_and_environment"]
chartsList = ['line_chart', 'line_chart', 'line_chart', 'line_chart', 'line_chart', 'bar_chart', 'bar_chart', 'bar_chart', 'bar_chart', 'stacked_bar_chart', 'stacked_bar_chart', 'stacked_bar_chart', 'stacked_bar_chart', '100_percent_stacked_bar_chart', '100_percent_stacked_bar_chart', '100_percent_stacked_bar_chart', 'pie_chart', 'pie_chart', 'pie_chart', 'histogram', 'histogram', 'histogram', 'scatterplot', 'scatterplot', 'scatterplot', 'scatterplot', 'scatterplot', 'scatterplot', 'scatterplot', 'area_chart', 'area_chart', 'area_chart', 'area_chart', 'stacked_area_chart', 'stacked_area_chart', 'stacked_area_chart', 'stacked_area_chart', 'stacked_area_chart', 'bubble_chart', 'bubble_chart', 'bubble_chart', 'bubble_chart', 'bubble_chart', 'bubble_chart', 'bubble_chart', 'choropleth_map', 'choropleth_map', 'choropleth_map', 'tree_map', 'tree_map', 'tree_map', 'end']

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

#Write sequence to file
print(str( len(sequence["components"])) +" blocks(vis)")
with open('out/seq-balancedsample.json', 'w') as outfile:
    json.dump(sequence, outfile, indent=4)

```

</TabItem>

<TabItem value="node" label="Node.js">
```javascript

const fs = require('fs');
const path = require('path');

// Define your lists
const contextList = ["economy", "food_and_agriculture", "health", "politics", "education", "innovation", "population_and_demography", "weather_and_climate", "energy_and_environment"];

const chartsList = ['line_chart', 'line_chart', 'line_chart', 'line_chart', 'line_chart', 'bar_chart', 'bar_chart', 'bar_chart', 'bar_chart', 'stacked_bar_chart', 'stacked_bar_chart', 'stacked_bar_chart', 'stacked_bar_chart', '100_percent_stacked_bar_chart', '100_percent_stacked_bar_chart', '100_percent_stacked_bar_chart', 'pie_chart', 'pie_chart', 'pie_chart', 'histogram', 'histogram', 'histogram', 'scatterplot', 'scatterplot', 'scatterplot', 'scatterplot', 'scatterplot', 'scatterplot', 'scatterplot', 'area_chart', 'area_chart', 'area_chart', 'area_chart', 'stacked_area_chart', 'stacked_area_chart', 'stacked_area_chart', 'stacked_area_chart', 'stacked_area_chart', 'bubble_chart', 'bubble_chart', 'bubble_chart', 'bubble_chart', 'bubble_chart', 'bubble_chart', 'bubble_chart', 'choropleth_map', 'choropleth_map', 'choropleth_map', 'tree_map', 'tree_map', 'tree_map', 'end'];

const tasksList = ['retrieve_value', 'locate_value', 'identify_range', 'describe_trend_or_correlation', 'estimate_the_difference_between_two_values_of_the_same_type', 'retrieve_value', 'locate_value', 'identify_range', 'make_comparisons', 'retrieve_value', 'estimate_the_ratio_of_one_value_to_another_value_of_the_same_type', 'locate_value', 'make_comparisons', 'retrieve_value', 'locate_value', 'make_comparisons', 'retrieve_value', 'locate_value', 'make_comparisons', 'retrieve_value', 'locate_value', 'identify_range', 'identify_anomalies', 'identify_clusters', 'describe_trend_or_correlation', 'make_comparisons', 'retrieve_value', 'locate_value', 'identify_range', 'describe_trend_or_correlation', 'retrieve_value', 'estimate_the_ratio_of_one_value_to_another_value_of_the_same_type', 'locate_value', 'describe_trend_or_correlation', 'make_comparisons', 'retrieve_value', 'locate_value', 'identify_range', 'identify_anomalies', 'identify_clusters', 'describe_trend_or_correlation', 'make_comparisons', 'retrieve_value', 'locate_value', 'make_comparisons', 'locate_value', 'retrieve_value', 'identify_the_hierarchical_structure'];

// Initialize sequence and components
let sequence = {
"order": "fixed",
"components": []
};

let totalQSeq = 0;
let counter = 0;
let component = {
"order": "random",
"numSamples": 1,
"components": []
};

// Set the path to your question folder
const questionFolderPath = './path/to/question_folder/';

// Main logic for generating the sequence
while (counter < tasksList.length) {
const chart = chartsList[counter];
const task = tasksList[counter];

contextList.forEach(context => {
const trialName = `${chart}-${task}-${context}`;
const fileName = path.join(questionFolderPath, `${chart}-${task}-${context}.txt`);

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
"order": "random",
"numSamples": 1,
"components": []
};

// Optional: Insert attention check questions at specific position
if (counter === 12) sequence["components"].push("at1");
if (counter === 24) sequence["components"].push("at2");
if (counter === 36) sequence["components"].push("at3");

counter++;
}

// Write to file
console.log(sequence["components"].length + " blocks (vis)");
fs.writeFileSync('out/seq-balancedsample.json', JSON.stringify(sequence, null, 4));


```
</TabItem>

</Tabs>


You can check the code and output [here](https://codesandbox.io/p/devbox/config-gen-demo2-ywf9rw?file=%2Fmain.py%3A77%2C1-138%2C1)