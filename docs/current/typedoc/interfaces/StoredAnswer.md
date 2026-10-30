# StoredAnswer

Defined in: [store/types.ts:86](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/store/types.ts#L86)

The StoredAnswer object is a data structure describing the participant's interaction with an individual component. It is the data structure used as values of the `answers` object of [ParticipantData](../ParticipantData). The general structure for this is below:

```json
{
  "answer": {
    "barChart": [
      1.3
    ]
  },
  "startTime": 1711641174858,
  "endTime": 1711641178836,
  "windowEvents": [
    ...
  ]
}
```
The `answer` object here uses the "id" in the [Response](../BaseResponse) list of the component in your [StudyConfiguration](../StudyConfig) as its keys. It then contains a list of the answers given. You are also given a start and end time for the participant's interaction with the component. Lastly, a set of windowEvents is given. Below is an example of the windowEvents list.

Each item in the window event is given a time, a position an event name, and some extra information for the event (for mouse events, this is the location).

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="answer"></a> `answer` | `Record`\<`string`, [`JsonValue`](../type-aliases/JsonValue.md)\> | Object whose keys are the "id"s in the Response list of the component in the StudyConfig and whose value is the inputted value from the participant. | [store/types.ts:88](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/store/types.ts#L88) |
| <a id="checkanswer"></a> `checkAnswer?` | `CheckAnswerState` | Check Answer state for this trial: attempts used and per-response correctness at the last check. | [store/types.ts:148](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/store/types.ts#L148) |
| <a id="componentname"></a> `componentName` | `string` | - | [store/types.ts:90](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/store/types.ts#L90) |
| <a id="correctanswer"></a> `correctAnswer` | [`Answer`](Answer.md)[] | The correct answer for the component. | [store/types.ts:138](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/store/types.ts#L138) |
| <a id="endtime"></a> `endTime` | `number` | Time that the user ended interaction with the component in epoch milliseconds. | [store/types.ts:98](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/store/types.ts#L98) |
| <a id="formorder"></a> `formOrder?` | `Record`\<`string`, `string`[]\> | The order of the form elements in a base response. | [store/types.ts:144](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/store/types.ts#L144) |
| <a id="helpbuttonclickedcount"></a> `helpButtonClickedCount` | `number` | A counter indicating how many times participants opened the help tab during a task. Clicking help, or accessing the tab via answer feedback on an incorrect answer both are included in the counter. | [store/types.ts:134](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/store/types.ts#L134) |
| <a id="identifier"></a> `identifier` | `string` | - | [store/types.ts:89](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/store/types.ts#L89) |
| <a id="incorrectanswers"></a> `incorrectAnswers` | `Record`\<`string`, \{ `id`: `string`; `value`: `unknown`[]; \}\> | Object whose keys are the "id"s in the Response list of the component in the StudyConfig and whose value is a list of incorrect inputted values from the participant. Only relevant for trials with `provideFeedback` and correct answers enabled. | [store/types.ts:94](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/store/types.ts#L94) |
| <a id="optionorders"></a> `optionOrders` | `Record`\<`string`, [`ParsedStringOption`](ParsedStringOption.md)[]\> | The order of question options in the component. | [store/types.ts:140](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/store/types.ts#L140) |
| <a id="parameters"></a> `parameters` | `Record`\<`string`, `any`\> | The parameters that were passed to the component. | [store/types.ts:136](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/store/types.ts#L136) |
| <a id="questionorders"></a> `questionOrders` | `Record`\<`string`, `string`[]\> | The order of the questions in a matrix component. | [store/types.ts:142](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/store/types.ts#L142) |
| <a id="responsesubmitattempted"></a> `responseSubmitAttempted?` | `boolean` | Whether required-response errors were revealed for this trial after a Next attempt. | [store/types.ts:146](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/store/types.ts#L146) |
| <a id="starttime"></a> `startTime` | `number` | Time that the user began interacting with the component in epoch milliseconds. | [store/types.ts:96](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/store/types.ts#L96) |
| <a id="timedout"></a> `timedOut` | `boolean` | A boolean value that indicates whether the participant timed out on this question. | [store/types.ts:132](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/store/types.ts#L132) |
| <a id="trialorder"></a> `trialOrder` | `string` | The order of the trial in the sequence. | [store/types.ts:92](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/store/types.ts#L92) |
| <a id="windowevents"></a> `windowEvents` | `EventType`[] | A list containing the time (in epoch milliseconds), the action (focus, input, keypress, mousedown, mouseup, mousemove, resize, scroll or visibility), and then either a coordinate pertaining to where the event took place on the screen or string related to such event. Below is an example of the windowEvents list. `"windowEvents": [ [ 1711641174878, "mousedown", [ 1843, 286 ] ], [ 1711641174878, "focus", "BUTTON" ], [ 1711641174935, "mouseup", [ 1843, 286 ] ], . . . [ 1711641178706, "mousemove", [ 1868, 728 ] ] ]` | [store/types.ts:130](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/store/types.ts#L130) |
