---
sidebar_position: 1
displayed_sidebar: reference
---

# RepeatedComponentBlockCondition

Defined in: [parser/types.ts:1062](https://github.com/revisit-studies/study/blob/79149c8bf8bccdc63f81d04e34de6bd5b26d533d/src/parser/types.ts#L1062)

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
| <a id="check"></a> `check` | `"repeatedComponent"` | The check we'll perform. | [parser/types.ts:1066](https://github.com/revisit-studies/study/blob/79149c8bf8bccdc63f81d04e34de6bd5b26d533d/src/parser/types.ts#L1066) |
| <a id="condition"></a> `condition` | `"numCorrect"` \| `"numIncorrect"` | The condition to check. | [parser/types.ts:1068](https://github.com/revisit-studies/study/blob/79149c8bf8bccdc63f81d04e34de6bd5b26d533d/src/parser/types.ts#L1068) |
| <a id="name"></a> `name` | `string` | The name of the repeated component to check (e.g. attentionCheck). | [parser/types.ts:1064](https://github.com/revisit-studies/study/blob/79149c8bf8bccdc63f81d04e34de6bd5b26d533d/src/parser/types.ts#L1064) |
| <a id="to"></a> `to` | `string` | The id of the component or block to skip to | [parser/types.ts:1072](https://github.com/revisit-studies/study/blob/79149c8bf8bccdc63f81d04e34de6bd5b26d533d/src/parser/types.ts#L1072) |
| <a id="value"></a> `value` | `number` | The number of correct or incorrect responses to check for. | [parser/types.ts:1070](https://github.com/revisit-studies/study/blob/79149c8bf8bccdc63f81d04e34de6bd5b26d533d/src/parser/types.ts#L1070) |
