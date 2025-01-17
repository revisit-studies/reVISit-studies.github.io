# Designing a VEGA Stimulus

[Vega](https://vega.github.io/vega/) and [Vega-Lite](https://vega.github.io/vega-lite/) are popular visualization grammars for creating visualizations. 

With Vega, you can describe the visual appearance and interactive behavior of a visualization in a JSON format, and generate web-based views using Canvas or SVG.

Here we will show how you can integrate a vega based component into reVISit.


There are two ways you can add a vega component

1. Add vega specs within the reVISit config
2. Link a vega specs in the reVISit config

## Add Vega Specs within reVISit Config

To add a vega specs directly into reVISit config, set `type` to `vega` and add your vega specs inside `config`.

```json
{
  ...
  "components": {
    ...
    "type": "vega",
    "config": {... your vega config...}
    ...
  },
  ...
}
```

ReVISit will then take your vega specs and display the visualization.

However, vega can be interactive. For example, you may ask your participants to interact with the stimuli you have. In that case, may can directly send the participant's answer to reVISit.

To do so, we take advantage of the [Vega signals](https://vega.github.io/vega/docs/signals/) with reserved name of "revisitAnswer".

```json
{
  "name": "revisitAnswer",
  "value": {},
  "on": [
    {
      "events": "rect:click",
      "update": "{responseId: 'vegaDemoResponse1', response: datum.category}"
    }
  ]
}
```

With the signal in place inside your vega specs, you can add your response with type `iframe`. This way, the signal from your vega component is captured and sent to the reVISit platform.

```json
{
  ...
  "response": [
    {
      "id": "vegaDemoResponse1",
      "prompt": "You selected:",
      "location": "sidebar",
      "type": "iframe"
    }
  ]
  ...
}
```

Below is an example config of a bar chart with a complete vega specs where the participants are asked to select the highest bar. Clicking on the bar sends the response to reVISit.

```json
{
  ...
  "components: {
    "vegademo1": {
      "meta": {
        "metadata": 1
      },
      "description": "Select the highest bar.",
      "instruction": "Click on the bar with the highest value.",
      "type": "vega",
      "config": {
        "$schema": "https://vega.github.io/schema/vega/v5.json",
        "width": 400,
        "height": 200,
        "padding": {
          "left": 5,
          "right": 5,
          "top": 5,
          "bottom": 5
        },
        "data": [
          {
            "name": "table",
            "values": [
              {
                "category": "A",
                "amount": 28
              },
              {
                "category": "B",
                "amount": 55
              },
              {
                "category": "C",
                "amount": 43
              },
              {
                "category": "D",
                "amount": 91
              },
              {
                "category": "E",
                "amount": 81
              },
              {
                "category": "F",
                "amount": 53
              },
              {
                "category": "G",
                "amount": 19
              },
              {
                "category": "H",
                "amount": 87
              }
            ]
          }
        ],
        "config": {
          "signals": [
            {
              "name": "tooltip",
              "value": {},
              "on": [
                {
                  "events": "rect:mouseover",
                  "update": "datum"
                },
                {
                  "events": "rect:mouseout",
                  "update": "{}"
                }
              ]
            },
            {
              "name": "revisitAnswer",
              "value": {},
              "on": [
                {
                  "events": "rect:click",
                  "update": "{responseId: 'vegaDemoResponse1', response: datum.category}"
                }
              ]
            }
          ]
        },
        "scales": [
          {
            "name": "xscale",
            "type": "band",
            "domain": {
              "data": "table",
              "field": "category"
            },
            "range": "width"
          },
          {
            "name": "yscale",
            "domain": {
              "data": "table",
              "field": "amount"
            },
            "nice": true,
            "range": "height"
          }
        ],
        "axes": [
          {
            "orient": "bottom",
            "scale": "xscale"
          },
          {
            "orient": "left",
            "scale": "yscale"
          }
        ],
        "marks": [
          {
            "type": "rect",
            "from": {
              "data": "table"
            },
            "encode": {
              "enter": {
                "x": {
                  "scale": "xscale",
                  "field": "category",
                  "offset": 1
                },
                "width": {
                  "scale": "xscale",
                  "band": 1,
                  "offset": -1
                },
                "y": {
                  "scale": "yscale",
                  "field": "amount"
                },
                "y2": {
                  "scale": "yscale",
                  "value": 0
                }
              },
              "update": {
                "fill": [
                  {
                    "test": "datum.category === tooltip.category",
                    "value": "red"
                  },
                  {
                    "value": "steelblue"
                  }
                ]
              }
            }
          },
          {
            "type": "text",
            "encode": {
              "enter": {
                "align": {
                  "value": "center"
                },
                "baseline": {
                  "value": "bottom"
                },
                "fill": {
                  "value": "#333"
                }
              },
              "update": {
                "x": {
                  "scale": "xscale",
                  "signal": "tooltip.category",
                  "band": 0.5
                },
                "y": {
                  "scale": "yscale",
                  "signal": "tooltip.amount",
                  "offset": -2
                },
                "text": {
                  "signal": "tooltip.category"
                },
                "fillOpacity": [
                  {
                    "test": "datum.category === tooltip.category",
                    "value": 0
                  },
                  {
                    "value": 1
                  }
                ]
              }
            }
          }
        ]
      },
      "nextButtonLocation": "sidebar",
      "response": [
        {
          "id": "vegaDemoResponse1",
          "prompt": "You selected:",
          "location": "sidebar",
          "type": "iframe"
        },
        {
          "id": "vegaDemoConfidence1",
          "prompt": "How confident are you with your answer?",
          "location": "sidebar",
          "type": "slider",
          "options": [
            {
              "label": "Low",
              "value": 0
            },
            {
              "label": "High",
              "value": 100
            }
          ]
        }
      ]
    },
  }
}
```


## Link a vega specs in the reVISit config

When you put the vega specs inside reVISit config, the size of the config may be too large, or you may just want a separate file for the vega specs.

You can easily point to an existing vega specs as below.
In this case, the type is still `vega` but instead of `config`, we have `path` to the vega specs.

```json
{
  ...
  "components: {
    "vegademo2": {
      "meta": {
        "metadata": 1
      },
      "description": "Select the highest value.",
      "instruction": "Select the movie with highest World Wide Gross.",
      "type": "vega",
      "path": "demo-vega/specs/vegademo2.specs.json",
      "nextButtonLocation": "sidebar",
      "response": [
        {
          "id": "vegaDemoResponse1",
          "prompt": "You selected:",
          "location": "sidebar",
          "type": "iframe"
        }
      ]
    }
  }
  ...
}
```
