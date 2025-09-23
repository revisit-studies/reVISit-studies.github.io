# StoredAnswer

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

| Property | Type | Description |
| :------ | :------ | :------ |
| `answer` | `Record`\<`string`, `object`\> | Object whose keys are the "id"s in the Response list of the component in the StudyConfiguration and whose value is the inputted value from the participant. |
| `endTime` | `number` | Time that the user ended interaction with the component in epoch milliseconds. |
| `provenanceGraph?` | `TrrackedProvenance` | The entire provenance graph exported from a Trrack instance from a React component. This will only be present if you are using React components and you're utilizing [Trrack](https://apps.vdl.sci.utah.edu/trrack) |
| `startTime` | `number` | Time that the user began interacting with the component in epoch milliseconds. |
| `timedOut` | `boolean` | A boolean value that indicates whether the participant timed out on this question. |
| `windowEvents` | `EventType`[] | <p>A list containing the time (in epoch milliseconds), the action (focus, input, kepress, mousedown, mouseup, mousemove, resize, scroll or visibility), and then either a coordinate pertaining to where the event took place on the screen or string related to such event. Below is an example of the windowEvents list.</p><code>"windowEvents": [<p>  [</p><p>    1711641174878,</p><p>    "mousedown",</p><p>    [ 1843, 286 ]</p><p>  ],</p><p>  [</p><p>    1711641174878,</p><p>    "focus",</p><p>    "BUTTON"</p><p>  ],</p><p>  [</p><p>    1711641174935,</p><p>    "mouseup",</p><p>    [ 1843, 286 ]</p><p>  ],</p><p>  .</p><p>  .</p><p>  .</p><p>  [</p><p>    1711641178706,</p><p>    "mousemove",</p><p>    [ 1868, 728 ]</p><p>  ]</p><p>]</p></code> |
