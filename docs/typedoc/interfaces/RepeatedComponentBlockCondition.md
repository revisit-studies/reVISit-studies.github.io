# RepeatedComponentBlockCondition

Defined in: [parser/types.ts:1482](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1482)

The RepeatedComponentBlockCondition interface is used to define a SkipCondition based on the number of correct or incorrect repeated components. You might use this if you need to check if an attention check was failed multiple times. This is similar to the [ComponentBlockCondition](../ComponentBlockCondition), but it only checks a specific repeated component.

Here's an example of how to use the RepeatedComponentBlockCondition:

```js
{
 ...
 "skip": [
   {
     "name": "attentionCheck",
     "check": "repeatedComponent",
     "condition": "numIncorrect",
     "value": 2,
     "to": "end"
   }
 ]
 ...
}
```

In this example, when the number of incorrect responses to the repeated component with the name "attentionCheck" is two, the participant will be redirected to the end of the study. If the number of incorrect responses is less than two, the participant will continue to the next component in the sequence.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="check"></a> `check` | `"repeatedComponent"` | The check we'll perform. | [parser/types.ts:1486](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1486) |
| <a id="condition"></a> `condition` | `"numCorrect"` \| `"numIncorrect"` | The condition to check. | [parser/types.ts:1488](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1488) |
| <a id="name"></a> `name` | `string` | The name of the repeated component to check (e.g. attentionCheck). | [parser/types.ts:1484](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1484) |
| <a id="to"></a> `to` | `string` | The id of the component or block to skip to | [parser/types.ts:1492](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1492) |
| <a id="value"></a> `value` | `number` | The number of correct or incorrect responses to check for. | [parser/types.ts:1490](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1490) |
