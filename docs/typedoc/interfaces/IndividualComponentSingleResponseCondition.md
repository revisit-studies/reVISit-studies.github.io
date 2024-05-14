---
sidebar_position: 1
displayed_sidebar: docs
---

# IndividualComponentSingleResponseCondition

The IndividualComponentSingleResponseCondition interface is used to define a SkipCondition based on a single answer to a specific component. If the component is repeated within the block, this condition will only check the first instance of the component once the order is flattened.

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `check` | `"response"` | The check we'll perform. |
| `name` | `string` | The name of the component to check. |
| `responseId` | `string` | The response id to check. |
| `to` | `string` | The id of the component or block to skip to |
| `value` | `string` \| `number` | The value to check. |
