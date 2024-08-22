---
sidebar_position: 4
---

# Config File Generation

In some cases, you may encounter the problem that your experiments may include hundreds or even thousands of trials, and it is not feasible to write them all by hand. 
reVISit provides the [`BaseComponents`](/docs/typedoc/type-aliases/BaseComponents/) that you can reuse to reduce redundence in config file, but it still quite a effort to write trials and sequence manually.

In this case, we recommand to use a script to generate the config file. 
This tutorial will guide you through the process of generating a config file for your experiments by 3 demo use cases.

**Example 1** generates 100 trials for the click accuracy test with fixed order.

**Example 2** is generating config file for a VLAT-like experiment([VLAT](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7539634&casa_token=9jo2PolUvEQAAAAA:vQJzbp3Sh6FU5TW1uaNyNKzQio6cSyx6-BOKrZ4cbDE6nAYOWFj3NJNecDMQlHg-1beKBM8Ra5I&tag=1)). Each trial contains of a chart, a question and a few options. However, for each chart type and task combination, we have different questions with various context. 
We will generate a VLAT-like experiment, the chart type and task will be identical with the original VLAT, but the context is randomly selected. 

**Example 3** is using the same trials from Example 2, we picked a set of questions from the pool and want to ask expert to review them, but it takes too much time for one person to review all of them. 
In this case, we want to each expert can review a certain amount of questions, and we want to each question be reviewed at balanced times. In this case, we will use the Latin Square randomization.


## Example 1: Fixed Order
In this example, we will generate 100 trials for the click accuracy test first. Since we have basecomponent in the config file, we won't need to write common features repeatly. 

```python
allTrials = {}
def createTrials():
   for i in range(300, 401): 
    allTrials["trial" + str(i)] = {  
        "baseComponent": "trial",
        "meta": {
            "nr-dots": 1,
            "speed": i
        },
        "parameters": {
            "speed": i,
            "taskid": "t" + str(i)
        }
    }

createTrials()
```
Then, we can write the trials into a json file. 
```python
with open('out/trial-click-accuracy.json', 'w') as outfile:
    json.dump(allTrials, outfile, indent=4)
```

Now we can generated fixed order sequence based on trial names. 
```python
#Create fixed order
def createFixedOrder():
    trial_keys = [key for key in allTrials]
    
    # Create the sequence structure
    sequence = {
        "sequence": {
            "order": "fixed",
            "components": [
                "introduction"
            ] + trial_keys  # Append the trial keys
        }
    }
    return sequence

seq = createFixedOrder()
print(seq)
with open('out/seq-fixed-order.json', 'w') as outfile:
        json.dump(seq, outfile, indent=4)
```

You can run the script from [here](https://codesandbox.io/p/devbox/config-gen-demo1-cgzlg5?file=%2Fmain.py%3A9%2C2-24%2C15)


## Example 2: Random Sample

We are trying to develop a VLAT-like experiment. We extract chart type and task type for each trial in the original VLAT, and we developed many questions with different context. 
So we want to this test follow the VLAT sequence (same chart type and task type in each trial), but the context will be randomly selected. 

Suppose we put all visualizations in the data/vis folder and all questions in the data/questions folder.
Now let's generate the trials first:

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

Then we want to generate the sequence. To make our test follow the VLAT sequence but randomize the context.
We want to make questions with same chart type and task type a block, the sequence inside the block is random, and the sequence of block is fixed
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

You can check the code and output [here](https://codesandbox.io/p/devbox/config-gen-demo2-ywf9rw?file=%2Fmain.py%3A77%2C1-138%2C1)


## Example 3: Latin Square