# ComponentBlockCondition

Defined in: [parser/types.ts:1555](https://github.com/revisit-studies/study/blob/72b8e5c4fa403736be782c35d94c86b3f785e056/src/parser/types.ts#L1555)

The ComponentBlockCondition interface is used to define a SkipCondition based on the number of correct or incorrect components in a block. All answers on all components in the block are checked.

Answers are checked against the correct answers defined in the IndividualComponent's [CorrectAnswer](../Answer). If no correct answers are defined, the component is considered correct by default.

You might use this if a participant answers two questions in a block incorrectly. Here's an example of how to use the ComponentBlockCondition:

```json
{
  ...
  "skip": [
    {
      "check": "block",
      "condition": "numIncorrect",
      "value": 2,
      "to": "end"
    }
  ]
  ...
}
```

In this example, when the number of components with incorrect responses in the block is two, the participant will be redirected to the end of the study. If the number of incorrect responses is less than two, the participant will continue to the next component in the sequence.

When the condition is met, the participant will immediately be redirected to the component or block specified in the `"to"` property. If no conditions are met, the participant will continue to the next component in the sequence.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="check"></a> `check` | `"block"` | The check we'll perform. | [parser/types.ts:1557](https://github.com/revisit-studies/study/blob/72b8e5c4fa403736be782c35d94c86b3f785e056/src/parser/types.ts#L1557) |
| <a id="condition"></a> `condition` | `"numCorrect"` \| `"numIncorrect"` | The condition to check. | [parser/types.ts:1559](https://github.com/revisit-studies/study/blob/72b8e5c4fa403736be782c35d94c86b3f785e056/src/parser/types.ts#L1559) |
| <a id="to"></a> `to` | `string` | The id of the component or block to skip to | [parser/types.ts:1563](https://github.com/revisit-studies/study/blob/72b8e5c4fa403736be782c35d94c86b3f785e056/src/parser/types.ts#L1563) |
| <a id="value"></a> `value` | `number` | The number of correct or incorrect responses to check for. | [parser/types.ts:1561](https://github.com/revisit-studies/study/blob/72b8e5c4fa403736be782c35d94c86b3f785e056/src/parser/types.ts#L1561) |
