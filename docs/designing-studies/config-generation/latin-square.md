# Example 3: Latin Square

From the trial pool we generated in Example 2, we want to ask experts to review some of them.
Suppose we selected 13 task types, we want each expert could review 4 questions for each task type, and we want each question be reviewed at balanced times.

If we use the approach in Example 2, it will not garantee every question can be reviewd since it will randomly pick questions inside a block.
In this case, we can use the Latin Square randomization to generate the sequence. It will require the minimum number of expert to review all selected trials.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="python" label="Python">

```python
#List of tasks
tasks = [
    "make comparisons",
    "identify range",
    "retrieve value",
    "locate value",
    "identify labels of scales",
    "describe the topic of the visualization",
    "estimate the difference between two values of the same type",
    "estimate the ratio of one value to another value of the same type",
    "estimate the average of multiple values of the same type",
    "describe trend or correlation",
    "describe the characteristics of an alternative chart type",
    "judge which visualization design is more appropriate for a task",
    "judge which task this visualization design best supports"
]
# Create a task map and initialize it

task_map = {}
for task in tasks:
    # Initialize an empty array for each task key
    task_map[task.replace(' ', '_')] = []

# Create a sequence object for each task

sequence = []
for key, value in task_map.items():
    seq = {
                "order": "latinSquare",
                "numSamples": 4,
                "components": value
            }
    sequence.append(seq)

```
</TabItem>
<TabItem value="node" label="Node.js">
```javascript
const tasks = [
  "make comparisons",
  "identify range",
  "retrieve value",
  "locate value",
  "identify labels of scales",
  "describe the topic of the visualization",
  "estimate the difference between two values of the same type",
  "estimate the ratio of one value to another value of the same type",
  "estimate the average of multiple values of the same type",
  "describe trend or correlation",
  "describe the characteristics of an alternative chart type",
  "judge which visualization design is more appropriate for a task",
  "judge which task this visualization design best supports",
];

const taskMap = {};
tasks.forEach((task) => {
    taskMap[task.replace(" ", "_")] = [];
});
//sequence
const seq = tasks.map((task) => {
    const key = task.replace(" ", "_");
    return {
    order: "latinSquare",
    numSamples: 4,
    components: taskMap[key],
    };
});

const sequence = {
    order: "fixed",
    components: seq,
};


```

</TabItem>
</Tabs>

You can check the complete code and output at Codesandbox using the link below:
- [Python](https://codesandbox.io/p/devbox/config-gen-demo3-cqdqtt)
- [Node](https://codesandbox.io/p/devbox/config-gen-demo3-js-xnt3tn)

