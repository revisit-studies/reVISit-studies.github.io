---
sidebar_position: 1
displayed_sidebar: docs
---

# ComponentBlockCondition

The ComponentBlockCondition interface is used to define a SkipCondition based on the number of correct or incorrect components in a block. All answers on all components in the block are checked.

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `check` | `"block"` | The check we'll perform. |
| `condition` | `"numCorrect"` \| `"numIncorrect"` | The condition to check. |
| `to` | `string` | The id of the component or block to skip to |
| `value` | `number` | The number of correct or incorrect responses to check for. |
