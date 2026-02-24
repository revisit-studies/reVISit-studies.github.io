# StudyRules

Defined in: [parser/types.ts:155](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L155)

The StudyRules are used to define a study's constraints to determine whether a participant can take the study.
If the criteria are not met, a warning message will be displayed.
Below is an example of a StudyRules entry in your study configuration file:

```js
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
     "blockedMessage": "This study can only run in chrome, firefox, or safari. (<-- if blockedMesage is not set, a default message is displayed)"
   },
   "devices": {
     "allowed": ["tablet", "desktop", "mobile"],
     "blockedMessage": "... (<-- if blockedMesage is not set, a default message is displayed)"
   },
   "inputs": {
     "allowed": ["touch", "mouse"],
     "blockedMessage": "... (<-- if blockedMesage is not set, a default message is displayed)"
   }
 }
}
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="browsers"></a> `browsers?` | [`BrowserRules`](../type-aliases/BrowserRules.md) | Browser constraints | [parser/types.ts:159](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L159) |
| <a id="devices"></a> `devices?` | [`DeviceRules`](../type-aliases/DeviceRules.md) | Browser constraints | [parser/types.ts:161](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L161) |
| <a id="display"></a> `display?` | [`DisplayRules`](../type-aliases/DisplayRules.md) | Display size constraints | [parser/types.ts:157](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L157) |
| <a id="inputs"></a> `inputs?` | [`InputRules`](../type-aliases/InputRules.md) | Input constraints | [parser/types.ts:163](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L163) |
