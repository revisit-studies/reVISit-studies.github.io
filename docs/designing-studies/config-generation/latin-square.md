# Example 3: Latin Square

When we randomized the trials in the previous section, we placed no restrictions on what colors were seen by the user -- only that they received exactly one color at each speed. Thus, it is possible that some users always see red, or some all pink, or some just never see the color green. 

Suppose that, instead, we wanted to make sure that the randomization is "balanced". In other words, if one speed and color combination is seen N times, then each other speed and color combination should also be seen N times. To achieve this, we can use the 'latinSquare' order. Consider a scenario with 12 different speeds and 5 different colors at each speed. If the user receives 4 random speeds for each color, then we would only need 3 participants to ensure that all color and speed combinations are seen exactly one time. This design ensures balanced task distribution while minimizing redundancy. You can read more about the latin square study design [here]((https://en.wikipedia.org/wiki/Latin_square)).



Below is the intended sequence output:
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
        {
      "order": "latinSquare",
      "numSamples": 4,
      "components": [
        "trial_300_pink",
        "trial_310_pink",
        "trial_320_pink",
        "trial_330_pink",
        "trial_340_pink",
        "trial_350_pink",
        "trial_360_pink",
        "trial_370_pink",
        "trial_380_pink",
        "trial_390_pink",
        "trial_400_pink",
        "trial_410_pink"
      ]
    },
    ......
    }

```

We will skip the trial generation and move directly to generating the sequence since the trial generation is the same as the previous example. See [here](./random-sample.md) for generating the individual components.


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

