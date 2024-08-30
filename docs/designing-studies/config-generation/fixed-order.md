# Example 1: Fixed Order

Suppose we have a base component which allows the parameters `speed` and `taskid` and metadata fields `nr-dots` and `speed`. Now, suppose we want many exact copies of this base component except that we want different speeds. In this example, we'll create a configuration file with 100 copies of the same base component with increasing speeds.

We'll start by creating an Object containing the base components with variable speed.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="python" label="Python">

```python
def createTrials():
    allTrials = {}
    for i in range(100):
        allTrials["trial-" + str(i)] = {
            "baseComponent": "trial",
            "meta": {
                "nr-dots": 1,
                "speed": 300 + i
            },
            "parameters": {
                "speed": 300 + i,
                "taskid": "accuracy"
            }
        }
    return allTrials
```

</TabItem>
<TabItem value="node" label="Node.js">

```javascript
function createTrials() {
  const allTrials = {};
  for (let i = 0; i < 100; i++) {
    allTrials[`trial-${i}`] = {
      baseComponent: "trial",
      meta: {
        "nr-dots": 1,
        speed: 300 + i,
      },
      parameters: {
        speed: 300 + i,
        taskid: "accuracy",
      },
    };
  }
  return allTrials;
}
```

</TabItem>
</Tabs>

After we create the components, we also need to specify where they are in the sequence. In this fixed order example, we will just list them as they appear in the sequence.

<Tabs>
<TabItem value="python" label="Python">

```python
def createFixedOrder(allTrials):
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
```

</TabItem>
<TabItem value="node" label="Node.js">

```javascript
function createFixedOrder(allTrials) {
  const trialKeys = Object.keys(allTrials);

  const sequence = {
    sequence: {
      order: "fixed",
      components: ["introduction", ...trialKeys],
    },
  };
  return sequence;
}
```

</TabItem>
</Tabs>

Then, we can write our output to a JSON file.

<Tabs>
<TabItem value="python" label="Python">

```python
import json

with open('config.json', 'w') as outfile:
    json.dump(allTrials, outfile, indent=4)
```

</TabItem>
<TabItem value="node" label="Node.js">

```javascript
const fs = require("fs");
const jsonData = JSON.stringify(seq, null, 2);

fs.writeFile("config.json", jsonData, (err) => {
  if (err) {
    console.error("Error writing to file", err);
  }
});
```

</TabItem>
</Tabs>

Combining everything together, we get the following:

<Tabs>
<TabItem value="python" label="Python">

```python
initialConfig = {
    "$schema": "https://raw.githubusercontent.com/revisit-studies/study/v1.0.2/src/parser/StudyConfigSchema.json",
    "studyMetadata": {
      "title": "Dynamic React Stimuli and Provenance Tracking",
      "version": "pilot",
      "authors": [
        "The reVISit Team"
      ],
      "date": "2023-06-15",
      "description": "A demo of using dynamic React stimuli and using provenance tracking with the trrack library for data collection.",
      "organizations": [
        "University of Utah",
        "WPI",
        "University of Toronto"
      ]
    },
    "uiConfig": {
      "contactEmail": "contact@revisit.dev",
      "helpTextPath": "demo-click-accuracy-test/assets/help.md",
      "logoPath": "revisitAssets/revisitLogoSquare.svg",
      "withProgressBar": True,
      "autoDownloadStudy": False,
      "sidebar": True
    },
    "baseComponents": {
      "trial": {
        "description": "try to click on the center of the moving dot",
        "instruction": "Click on the moving dot",
        "type": "react-component",
        "path": "demo-click-accuracy-test/assets/ClickAccuracyTest.tsx",
        "nextButtonLocation": "sidebar",
        "response": [
          {
            "id": "accuracy",
            "prompt": "Your click distance to circle center",
            "required": True,
            "location": "sidebar",
            "type": "iframe"
          }
        ]
      },

    },
    "components": {},
    "sequence": {}
  }


def createTrials():
    allTrials = {}
    for i in range(100):
        allTrials["trial-" + str(i)] = {
            "baseComponent": "trial",
            "meta": {
                "nr-dots": 1,
                "speed": 300 + i
            },
            "parameters": {
                "speed": 300 + i,
                "taskid": "accuracy"
            }
        }
    return allTrials


# Create fixed order
def createFixedOrder(allTrials):
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


allTrials = createTrials()
seq = createFixedOrder(allTrials)

# Set Components
initialConfig['components'] = allTrials

# Set Sequence
initialConfig['sequence'] = seq

import json

with open('config.json', 'w') as outfile:
    json.dump(initialConfig, outfile, indent=4)
```

</TabItem>
<TabItem value="node" label="Node.js">

```javascript
const initialConfig = {
  $schema:
    "https://raw.githubusercontent.com/revisit-studies/study/v1.0.2/src/parser/StudyConfigSchema.json",
  studyMetadata: {
    title: "Dynamic React Stimuli and Provenance Tracking",
    version: "pilot",
    authors: ["The reVISit Team"],
    date: "2023-06-15",
    description:
      "A demo of using dynamic React stimuli and using provenance tracking with the trrack library for data collection.",
    organizations: ["University of Utah", "WPI", "University of Toronto"],
  },
  uiConfig: {
    contactEmail: "contact@revisit.dev",
    helpTextPath: "demo-click-accuracy-test/assets/help.md",
    logoPath: "revisitAssets/revisitLogoSquare.svg",
    withProgressBar: true,
    autoDownloadStudy: false,
    sidebar: true,
  },
  baseComponents: {
    trial: {
      description: "try to click on the center of the moving dot",
      instruction: "Click on the moving dot",
      type: "react-component",
      path: "demo-click-accuracy-test/assets/ClickAccuracyTest.tsx",
      nextButtonLocation: "sidebar",
      response: [
        {
          id: "accuracy",
          prompt: "Your click distance to circle center",
          required: true,
          location: "sidebar",
          type: "iframe",
        },
      ],
    },
  },
  components: {},
  sequence: {},
};

// Create trials
function createTrials() {
  const allTrials = {};
  for (let i = 0; i < 100; i++) {
    allTrials[`trial-${i}`] = {
      baseComponent: "trial",
      meta: {
        "nr-dots": 1,
        speed: 300 + i,
      },
      parameters: {
        speed: 300 + i,
        taskid: "accuracy",
      },
    };
  }
  return allTrials;
}

// Create fixed order
function createFixedOrder(allTrials) {
  const trialKeys = Object.keys(allTrials);

  const sequence = {
    sequence: {
      order: "fixed",
      components: ["introduction", ...trialKeys],
    },
  };
  return sequence;
}

// Call 'createTrials' function
const allTrials = createTrials();
// Pass in the trials to the 'createFixedOrder' function to get full sequence
const seq = createFixedOrder(allTrials);

// Set Components
initialConfig.components = allTrials;

// Set Sequence
initialConfig.sequence = seq;

const fs = require("fs");
const jsonData = JSON.stringify(seq, null, 2);

// Output to JSON file
fs.writeFile("config.json", jsonData, (err) => {
  if (err) {
    console.error("Error writing to file", err);
  }
});
```

</TabItem>
</Tabs>

You can check the code and output [here](https://codesandbox.io/p/devbox/config-gen-demo1-cgzlg5?file=%2Fmain.py%3A9%2C2-24%2C15)
