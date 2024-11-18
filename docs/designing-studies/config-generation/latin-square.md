# Example 3: Latin Square

The 'random' order does not guarantee that each task is assigned an equal number of times across participants.
To ensure that each task is performed the same number of times, we can use the 'latinSquare' order.

For instance, consider a scenario with 12 speed and 5 color combinations. 
Each participant will complete all colors, and for each color, they will perform only 4 trials. 
By employing a Latin square design, we need just 3 participants to ensure that every speed and color combination is covered exactly once by a participant. 
This design ensures balanced task distribution while minimizing redundancy.

This is the anticipated output of sequecne:
```json
{
  "order": "fixed",
  "components": [
    "introduction",
    {
      "order": "latinSquare",
      "numSamples": 4,
      "components": [
        "trial_300_red",
        "trial_310_red",
        "trial_320_red",
        "trial_330_red",
        "trial_340_red",
        "trial_350_red",
        "trial_360_red",
        "trial_370_red",
        "trial_380_red",
        "trial_390_red",
        "trial_400_red",
        "trial_410_red"
      ]
    },
    ......
    }

```

We will skip the trial generation since it is same as the previous example.

Here we will generate the sequence: 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="python" label="Python">

```python
def createOrder():  
    components = ["introduction"]  
    # Create the sequence structure
    sequence = {
        "order": "fixed",  
    }

    for color in colorList:
        subComponent = {
            "order": "latinSquare",
            "numSamples": 4,
            "components": []
        }
        for speed in speedList:
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

  colorList.forEach((color) => {
    const subComponent = {
      order: "latinSquare",
      numSamples: 4,
      components: [],
    };
    speedList.forEach((speed) => {
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

You can check the complete code and output at Codesandbox using the link below:
- [Python](https://codesandbox.io/p/devbox/stupefied-wescoff-znppwr)
- [Node](https://codesandbox.io/p/devbox/tcl5yw)

