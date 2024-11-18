# Example 2: Random Sample

In a previous study, we generated 100 trials with varying speeds and organized them into a fixed order sequence.
In this example, we will modify this click-accuracy test by introducing different colors for the on-screen dot. 
The new study will still present trials in increasing speed order, with the dot's color randomized for each trial.

This is the anticipated output of sequecne: 
```json
{
  "order": "fixed",
  "components": [
    "introduction",
    {
      "order": "random",
      "numSamples": 1,
      "components": [
        "trial_300_red",
        "trial_300_blue",
        "trial_300_green",
        "trial_300_orange",
        "trial_300_pink"
      ]
    },
    {
      "order": "random",
      "numSamples": 1,
      "components": [
        "trial_310_red",
        "trial_310_blue",
        "trial_310_green",
        "trial_310_orange",
        "trial_310_pink"
      ]
    },
    {
      "order": "random",
      "numSamples": 1,
      "components": [
        "trial_320_red",
        "trial_320_blue",
        "trial_320_green",
        "trial_320_orange",
        "trial_320_pink"
      ]
    },
    ......

```


Now let's generate the trials first, we append color to the trial name:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="python" label="Python">


```python
colorList = ['red','blue','green','orange','pink']
speedList = [300 + i * 10 for i in range(10)]


def createTrials():
    allTrials = {}
    for s in speedList: 
        for c in colorList:
            allTrials["trial_" + str(s) + '_' + c] = {  
                "baseComponent": "trial",
                "meta": {
                    "nr-dots": 1,
                    "speed": s,
                    "color": c,
                },
                "parameters": {
                    "speed": s,
                    "color": c,
                    "taskid": "accuracy"
                }
            }
    return allTrials

trials = createTrials()

```

</TabItem>

<TabItem value="node" label="Node.js">

```javascript
const colorList = ["red", "blue", "green", "orange", "pink"];
const speedList = Array.from({ length: 10 }, (_, i) => 300 + i * 10);

function createTrials() {
  const allTrials = {};
  speedList.forEach((speed) => {
    colorList.forEach((color) => {
      allTrials[`trial_${speed}_${color}`] = {
        baseComponent: "trial",
        meta: {
          "nr-dots": 1,
          speed: speed,
          color: color,
        },
        parameters: {
          speed: speed,
          color: color,
          taskid: "accuracy",
        },
      };
    });
  });
  return allTrials;
}
trials = createTrials()

```
</TabItem>
</Tabs>

Next, we will generate the sequence, we will add a sub-sequence with random order of different colors for each speed:

<Tabs>
<TabItem value="python" label="Python">


```python

def createOrder():  
    components = ["introduction"]  
    # Create the sequence structure
    sequence = {
        "order": "fixed",  
    }

    for speed in speedList:
        subComponent = {
            "order": "random",
            "numSamples": 1,
            "components": []
        }
        for color in colorList:
            subComponent["components"].append("trial_" + str(speed) + '_' + color)
        components.append(subComponent)
    
    sequence["components"] = components
    return sequence


seq = createOrder()
```

</TabItem>
<TabItem value="node" label="Node.js">

```javascript
function createOrder() {
  const components = ["introduction"];
  const sequence = {
    order: "fixed",
  };

  speedList.forEach((speed) => {
    const subComponent = {
      order: "random",
      numSamples: 1,
      components: [],
    };
    colorList.forEach((color) => {
      subComponent.components.push(`trial_${speed}_${color}`);
    });
    components.push(subComponent);
  });

  sequence.components = components;
  return sequence;
}

const seq = createOrder();

```

</TabItem>

</Tabs>

You can check the complete code and output at CodeSandbox using the link below:
- [Python](https://codesandbox.io/p/devbox/festive-vaughan-ggl46v)
- [Node](https://codesandbox.io/p/devbox/tg3st5)
