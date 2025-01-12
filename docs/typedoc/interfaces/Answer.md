---
sidebar_position: 1
displayed_sidebar: reference
---

# Answer

The Answer interface is used to define the properties of an answer. Answers are used to define the correct answer for a task. These are generally used in training tasks or if skip logic is required based on the answer.

Answers are used to defined correct answers for a task. These are generally used in training tasks or if skip logic is required based on the answer. The answer field is used to define the correct answer to the question. The acceptableLow and acceptableHigh fields are used to define a range of acceptable answers (these are currently only used for training). For example, if the correct answer is 5, and the acceptableLow is 4 and the acceptableHigh is 6, then any answer between 4 and 6 will be considered correct.

Here's an example of how to use the Answer interface to define the correct answer to a question:

```js
{
 "type": "markdown",
 "path": "<study-name>/assets/question.md",
 "response": [
   {
     "id": "response1",
     "prompt": "What is 2 + 2?",
     "location": "belowStimulus",
     "type": "numerical"
   }
 ]
 "correctAnswer": [{
   "id": "response1",
   "answer": 4
 }]
}
```

In this example, the correct answer to the question "What is 2 + 2?" is 4. If the participant answers 4, they will be considered correct. If they answer anything other than 4, they will be considered incorrect.

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `acceptableHigh?` | `number` | The acceptable high value for the answer. This is used to define a range of acceptable answers. |
| `acceptableLow?` | `number` | The acceptable low value for the answer. This is used to define a range of acceptable answers. |
| `answer` | `any` | The correct answer to the question. |
| `id` | `string` | The id of the answer. This is used to identify the answer in the data file. |
