# StoredAnswer

Defined in: [store/types.ts:103](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L103)

The StoredAnswer object is a data structure describing the participant's interaction with an individual component. It is the data structure used as values of the `answers` object of [ParticipantData](ParticipantData.md). The general structure for this is below:

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
The `answer` object here uses the "id" in the [BaseResponse](BaseResponse.md) list of the component in your [StudyConfig](StudyConfig.md) as its keys. It then contains a list of the answers given. You are also given a start and end time for the participant's interaction with the component. Lastly, a set of windowEvents is given. Below is an example of the windowEvents list.

Each item in the window event is given a time, a position an event name, and some extra information for the event (for mouse events, this is the location).

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="answer"></a> `answer` | `Record`\<`string`, [`JsonValue`](../type-aliases/JsonValue.md)\> | Object whose keys are the "id"s in the Response list of the component in the StudyConfig and whose value is the inputted value from the participant. | [store/types.ts:109](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L109) |
| <a id="assetidentifier"></a> `assetIdentifier?` | `string` | Recording/transcription key for this accepted entry. Legacy records use identifier. | [store/types.ts:107](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L107) |
| <a id="checkanswer"></a> `checkAnswer?` | `CheckAnswerState` | Per-response grading state and Check Answer attempts for this trial. | [store/types.ts:169](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L169) |
| <a id="componentname"></a> `componentName` | `string` | - | [store/types.ts:111](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L111) |
| <a id="correctanswer"></a> `correctAnswer` | [`Answer`](Answer.md)[] | The correct answer for the component. | [store/types.ts:159](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L159) |
| <a id="endtime"></a> `endTime` | `number` | Time that the user ended interaction with the component in epoch milliseconds. | [store/types.ts:119](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L119) |
| <a id="formorder"></a> `formOrder?` | `Record`\<`string`, `string`[]\> | The order of the form elements in a base response. | [store/types.ts:165](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L165) |
| <a id="globalstoreentry"></a> `globalStoreEntry?` | [`GlobalStoreValues`](../type-aliases/GlobalStoreValues.md) | Active projection of the entry state for validation/analysis. Provenance remains canonical. | [store/types.ts:105](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L105) |
| <a id="helpbuttonclickedcount"></a> `helpButtonClickedCount` | `number` | A counter indicating how many times participants opened the help tab during a task. Clicking help, or accessing the tab via answer feedback on an incorrect answer both are included in the counter. | [store/types.ts:155](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L155) |
| <a id="identifier"></a> `identifier` | `string` | - | [store/types.ts:110](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L110) |
| <a id="incorrectanswers"></a> `incorrectAnswers` | `Record`\<`string`, \{ `id`: `string`; `value`: `unknown`[]; \}\> | Object whose keys are the "id"s in the Response list of the component in the StudyConfig and whose value is a list of incorrect inputted values from the participant. Only relevant for trials with `provideFeedback` enabled or custom answer-level feedback. | [store/types.ts:115](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L115) |
| <a id="optionorders"></a> `optionOrders` | `Record`\<`string`, [`ParsedStringOption`](ParsedStringOption.md)[]\> | The order of question options in the component. | [store/types.ts:161](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L161) |
| <a id="parameters"></a> `parameters` | `Record`\<`string`, `any`\> | The parameters that were passed to the component. | [store/types.ts:157](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L157) |
| <a id="questionorders"></a> `questionOrders` | `Record`\<`string`, `string`[]\> | The order of the questions in a matrix component. | [store/types.ts:163](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L163) |
| <a id="responsesubmitattempted"></a> `responseSubmitAttempted?` | `boolean` | Whether required-response errors were revealed for this trial after a Next attempt. | [store/types.ts:167](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L167) |
| <a id="starttime"></a> `startTime` | `number` | Time that the user began interacting with the component in epoch milliseconds. | [store/types.ts:117](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L117) |
| <a id="timedout"></a> `timedOut` | `boolean` | A boolean value that indicates whether the participant timed out on this question. | [store/types.ts:153](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L153) |
| <a id="trialorder"></a> `trialOrder` | `string` | The order of the trial in the sequence. | [store/types.ts:113](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L113) |
| <a id="windowevents"></a> `windowEvents` | `EventType`[] | A list containing the time (in epoch milliseconds), the action (focus, input, keypress, mousedown, mouseup, mousemove, resize, scroll, visibility, gamepadconnection, gamepadbuttondown, gamepadbuttonup or gamepadaxis), and then either a coordinate pertaining to where the event took place on the screen or string related to such event. Below is an example of the windowEvents list. `"windowEvents": [ [ 1711641174878, "mousedown", [ 1843, 286 ] ], [ 1711641174878, "focus", "BUTTON" ], [ 1711641174935, "mouseup", [ 1843, 286 ] ], . . . [ 1711641178706, "mousemove", [ 1868, 728 ] ] ]` | [store/types.ts:151](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L151) |
