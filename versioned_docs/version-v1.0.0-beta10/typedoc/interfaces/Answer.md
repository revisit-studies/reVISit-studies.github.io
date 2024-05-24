---
sidebar_position: 1
displayed_sidebar: docs
---

# Answer

The Answer interface is used to define the properties of an answer. Answers are used to define the correct answer for a task. These are generally used in training tasks or if skip logic is required based on the answer.

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `acceptableHigh?` | `number` | The acceptable high value for the answer. This is used to define a range of acceptable answers. |
| `acceptableLow?` | `number` | The acceptable low value for the answer. This is used to define a range of acceptable answers. |
| `answer` | `any` | The correct answer to the question. |
| `id` | `string` | The id of the answer. This is used to identify the answer in the data file. |
