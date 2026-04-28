# StudyRules

Defined in: [parser/types.ts:164](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L164)

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
| <a id="browsers"></a> `browsers?` | [`BrowserRules`](../type-aliases/BrowserRules.md) | Browser constraints | [parser/types.ts:168](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L168) |
| <a id="devices"></a> `devices?` | [`DeviceRules`](../type-aliases/DeviceRules.md) | Browser constraints | [parser/types.ts:170](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L170) |
| <a id="display"></a> `display?` | [`DisplayRules`](../type-aliases/DisplayRules.md) | Display size constraints | [parser/types.ts:166](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L166) |
| <a id="inputs"></a> `inputs?` | [`InputRules`](../type-aliases/InputRules.md) | Input constraints | [parser/types.ts:172](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L172) |
