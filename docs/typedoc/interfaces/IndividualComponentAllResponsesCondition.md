---
sidebar_position: 1
displayed_sidebar: docs
---

# IndividualComponentAllResponsesCondition

The IndividualComponentAllResponsesCondition interface is used to define a SkipCondition based on all answers to a specific component. If the component is repeated within the block, this condition will only check the first instance of the component once the order is flattened. If you need to check all instances of a repeated component, you should use the RepeatedComponentBlockCondition.

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `check` | `"responses"` | The check we'll perform. |
| `name` | `string` | The name of the component to check. |
| `to` | `string` | The id of the component or block to skip to |
