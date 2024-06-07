---
sidebar_position: 1
displayed_sidebar: docs
---

# RepeatedComponentBlockCondition

The RepeatedComponentBlockCondition interface is used to define a SkipCondition based on the number of correct or incorrect repeated components. You might use this if you need to check if an attention check was failed multiple times. This is similar to the [ComponentBlockCondition](./ComponentBlockCondition), but it only checks a specific repeated component.

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

| Property | Type | Description |
| :------ | :------ | :------ |
| `check` | `"repeatedComponent"` | The check we'll perform. |
| `condition` | `"numCorrect"` \| `"numIncorrect"` | The condition to check. |
| `name` | `string` | The name of the repeated component to check (e.g. attentionCheck). |
| `to` | `string` | The id of the component or block to skip to |
| `value` | `number` | The number of correct or incorrect responses to check for. |
