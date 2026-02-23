# Example 2: Random Sample

In the previous example, we generated 100 trials with varying speeds and organized them into a fixed order sequence. Here, we will modify this click-accuracy test by introducing different colors for the on-screen dot. The new study will still present trials in increasing speed order, with the dot's color randomized for each trial.

Instead of having one component for each speed, we will have five different components for each speed -- each representing a different color. In our sequence, we will have each of these sets fo components as a single random block. Then, we set the number of samples value to 1 so that we will randomly pick one of the colors from the component block to display to the user.

Below is the intended sequence output:

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
    
    ...

```


We will start by generating the trials.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="python" label="Python">


```python
colorList = ['red','blue','green','orange','pink']
# Generate a list of increasing speeds starting at 300 and increasing to 400 with increments of 10.
speedList = [300 + i * 10 for i in range(10)]


def createTrials():
    allTrials = {}
    for s in speedList: 
        # Create a new trial/component for each color in our color list.
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

```js
const colorList = ["red", "blue", "green", "orange", "pink"];
// Generate a list of increasing speeds starting at 300 and increasing to 400 with increments of 10.
const speedList = Array.from({ length: 10 }, (_, i) => 300 + i * 10);

function createTrials() {
  const allTrials = {};
  speedList.forEach((speed) => {
    // Create a new trial/component for each color in our color list.
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

To generate the sequence, we create a random subsequence for each speed where the components are the varying colors at that speed.

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

