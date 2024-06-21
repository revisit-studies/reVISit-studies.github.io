---
sidebar_position: 1
displayed_sidebar: reference
---

# IndividualComponentSingleResponseCondition

The IndividualComponentSingleResponseCondition interface is used to define a SkipCondition based on a single answer to a specific component. The skip logic will be checked for every component in the block that has the specified name.

:::info

If you need to check all instances of a repeated component, you should use the RepeatedComponentBlockCondition.

:::

For example, if you want to skip to a different component based on a response to a specific component, you would use the IndividualComponentSingleResponseCondition. Here's an example of how to use the IndividualComponentSingleResponseCondition:

```js
{
 ...
 "skip": [
   {
     "name": "attentionCheck",
     "check": "response",
     "responseId": "attentionCheckResponse",
     "value": "the right answer",
     "to": "end"
   }
 ]
 ...
}
```

In this example, we assign our skip logic to the component whose ID is "attentionCheck". If the answer given to the response "attentionCheckResponse" is equal to "the right answer", then the user will be redirected to the end of the study. If the response is _not_ equal to "the right answer", then the participant will continue to the next component in the sequence.

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `check` | `"response"` | The check we'll perform. |
| `name` | `string` | The name of the component to check. |
| `responseId` | `string` | The response id to check. |
| `to` | `string` | The id of the component or block to skip to |
| `value` | `string` \| `number` | The value to check. |
