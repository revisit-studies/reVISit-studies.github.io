# StoredAnswer

Defined in: [store/types.ts:70](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/store/types.ts#L70)

The StoredAnswer object is a data structure describing the participants interaction with an individual component. It is the data structure used as values of the `answers` object of [ParticipantData](../ParticipantData). The general structure for this is below:

```js
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
The `answer` object here uses the "id" in the [Response](../BaseResponse) list of the component in your [StudyConfiguration](../StudyConfig) as its keys. It then contains a list of the answers given. You are also given a start and end time for the participants interaction with the component. Lastly, a set of windowEvents is given. Below is an example of the windowEvents list.

Each item in the window event is given a time, a position an event name, and some extra information for the event (for mouse events, this is the location).

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="answer"></a> `answer` | `Record`\<`string`, `string` \| `number` \| `boolean` \| `string`[]\> | Object whose keys are the "id"s in the Response list of the component in the StudyConfig and whose value is the inputted value from the participant. | [store/types.ts:72](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/store/types.ts#L72) |
| <a id="componentname"></a> `componentName` | `string` | - | [store/types.ts:74](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/store/types.ts#L74) |
| <a id="correctanswer"></a> `correctAnswer` | [`Answer`](Answer.md)[] | The correct answer for the component. | [store/types.ts:122](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/store/types.ts#L122) |
| <a id="endtime"></a> `endTime` | `number` | Time that the user ended interaction with the component in epoch milliseconds. | [store/types.ts:82](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/store/types.ts#L82) |
| <a id="helpbuttonclickedcount"></a> `helpButtonClickedCount` | `number` | A counter indicating how many times participants opened the help tab during a task. Clicking help, or accessing the tab via answer feedback on an incorrect answer both are included in the counter. | [store/types.ts:118](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/store/types.ts#L118) |
| <a id="incorrectanswers"></a> `incorrectAnswers` | `Record`\<`string`, \{ `id`: `string`; `value`: `unknown`[]; \}\> | Object whose keys are the "id"s in the Response list of the component in the StudyConfig and whose value is a list of incorrect inputted values from the participant. Only relevant for trials with `provideFeedback` and correct answers enabled. | [store/types.ts:78](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/store/types.ts#L78) |
| <a id="parameters"></a> `parameters` | `Record`\<`string`, `any`\> | The parameters that were passed to the component. | [store/types.ts:120](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/store/types.ts#L120) |
| <a id="provenancegraph"></a> `provenanceGraph` | `Record`\<`ResponseBlockLocation`, `undefined` \| `TrrackedProvenance`\> | The entire provenance graph exported from a Trrack instance from a React component. This will only be present if you are using React components and you're utilizing [Trrack](https://apps.vdl.sci.utah.edu/trrack) | [store/types.ts:84](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/store/types.ts#L84) |
| <a id="starttime"></a> `startTime` | `number` | Time that the user began interacting with the component in epoch milliseconds. | [store/types.ts:80](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/store/types.ts#L80) |
| <a id="timedout"></a> `timedOut` | `boolean` | A boolean value that indicates whether the participant timed out on this question. | [store/types.ts:116](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/store/types.ts#L116) |
| <a id="trialorder"></a> `trialOrder` | `string` | The order of the trial in the sequence. | [store/types.ts:76](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/store/types.ts#L76) |
| <a id="windowevents"></a> `windowEvents` | `EventType`[] | A list containing the time (in epoch milliseconds), the action (focus, input, kepress, mousedown, mouseup, mousemove, resize, scroll or visibility), and then either a coordinate pertaining to where the event took place on the screen or string related to such event. Below is an example of the windowEvents list. `"windowEvents": [ [ 1711641174878, "mousedown", [ 1843, 286 ] ], [ 1711641174878, "focus", "BUTTON" ], [ 1711641174935, "mouseup", [ 1843, 286 ] ], . . . [ 1711641178706, "mousemove", [ 1868, 728 ] ] ]` | [store/types.ts:114](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/store/types.ts#L114) |
