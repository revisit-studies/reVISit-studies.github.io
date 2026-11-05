# StudyRules

Defined in: [parser/types.ts:210](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L210)

The StudyRules are used to define a study's constraints to determine whether a participant can take the study.
If the criteria are not met, a warning message will be displayed.
Below is an example of a StudyRules entry in your study configuration file:
```json
{
  "studyRules": {
    "display": {
      "minHeight": 400,
      "minWidth": 800
    },
    "browsers": {
      "allowed": [
        {
          "name": "chrome",
          "minVersion": 100
        },
        {
          "name": "firefox",
          "minVersion": 100
        },
        {
          "name": "safari",
          "minVersion": 10
        }
      ],
      "blockedMessage": "This study can only run in chrome, firefox, or safari."
    },
    "devices": {
      "allowed": ["tablet", "desktop", "mobile"]
    },
    "inputs": {
      "allowed": ["touch", "mouse"]
    }
  }
}
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="browsers"></a> `browsers?` | [`BrowserRules`](../type-aliases/BrowserRules.md) | Browser constraints | [parser/types.ts:214](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L214) |
| <a id="devices"></a> `devices?` | [`DeviceRules`](../type-aliases/DeviceRules.md) | Browser constraints | [parser/types.ts:216](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L216) |
| <a id="display"></a> `display?` | [`DisplayRules`](../type-aliases/DisplayRules.md) | Display size constraints | [parser/types.ts:212](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L212) |
| <a id="inputs"></a> `inputs?` | [`InputRules`](../type-aliases/InputRules.md) | Input constraints | [parser/types.ts:218](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L218) |
