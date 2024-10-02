---
sidebar_position: 1
displayed_sidebar: reference
---

# IndividualComponentAllResponsesCondition

The IndividualComponentAllResponsesCondition interface is used to define a SkipCondition based on all answers to a specific component. The skip logic will be checked for every component in the block that has the specified name.

:::info

If you need to check all instances of a repeated component, you should use the RepeatedComponentBlockCondition.

:::

Here's an example of how to use the IndividualComponentAllResponsesCondition:

```js
{
 ...
 "skip": [
   {
     "name": "attentionCheck",
     "check": "responses",
     "to": "end"
   }
 ]
 ...
}
```

In this example, if all responses to the component with the ID "attentionCheck" are correct, the participant will be redirected to the end of the study. If any response is incorrect, the participant will continue to the next component in the sequence.

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `check` | `"responses"` | The check we'll perform. |
| `name` | `string` | The name of the component to check. |
| `to` | `string` | The id of the component or block to skip to |
