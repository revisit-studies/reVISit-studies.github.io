# Answer

Defined in: [parser/types.ts:1332](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L1332)

The Answer interface is used to define the properties of an answer. Answers are used to define the correct answer for a task. These are generally used in training tasks or if skip logic is required based on the answer.

Answers are used to defined correct answers for a task. These are generally used in training tasks or if skip logic is required based on the answer. The answer field is used to define the correct answer to the question. The acceptableLow and acceptableHigh fields are used to define a range of acceptable answers (inclusive, also used for skip logic and analysis). For example, if the correct answer is 5, and the acceptableLow is 4 and the acceptableHigh is 6, then any answer between 4 and 6 will be considered correct.

Here's an example of how to use the Answer interface to define the correct answer to a question:

```json
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
  ],
  "correctAnswer": [{
      "id": "response1",
      "answer": 4
    }]
  }
```

In this example, the correct answer to the question "What is 2 + 2?" is 4. If the participant answers 4, they will be considered correct. If they answer anything other than 4, they will be considered incorrect.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="acceptableanswers"></a> `acceptableAnswers?` | `any`[] | Accepted complete answers, usable on their own or in addition to answer. Each entry is a complete value, such as a checkbox selection array or a ranking value-to-position object. | [parser/types.ts:1346](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L1346) |
| <a id="acceptablehigh"></a> `acceptableHigh?` | `number` | The acceptable high value for the answer. This is used to define a range of acceptable answers. | [parser/types.ts:1341](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L1341) |
| <a id="acceptablelow"></a> `acceptableLow?` | `number` | The acceptable low value for the answer. This is used to define a range of acceptable answers. | [parser/types.ts:1339](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L1339) |
| <a id="answer"></a> `answer?` | `any` | The exact or preferred answer. Optional when acceptableAnswers or a numeric bound defines accepted answers. | [parser/types.ts:1337](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L1337) |
| <a id="casesensitive"></a> `caseSensitive?` | `boolean` | Whether textual answers must match letter case. Defaults to true. | [parser/types.ts:1348](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L1348) |
| <a id="correctnessthreshold"></a> `correctnessThreshold?` | `number` | Minimum score from 0 to 1 required for this answer to be considered correct. Defaults to 1. **Minimum** 0 **Maximum** 1 | [parser/types.ts:1343](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L1343) |
| <a id="feedback"></a> `feedback?` | [`ResponseFeedback`](ResponseFeedback.md) | Customize correct and incorrect feedback and hints for this response. | [parser/types.ts:1350](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L1350) |
| <a id="id"></a> `id` | `string` | The id of the answer. This is used to identify the answer in the data file. | [parser/types.ts:1334](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L1334) |
