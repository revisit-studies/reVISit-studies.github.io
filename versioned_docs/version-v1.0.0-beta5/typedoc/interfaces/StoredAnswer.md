---
sidebar_position: 1
displayed_sidebar: docs
---

# Interface: StoredAnswer

The StoredAnswer object is a data structure describing the participants interaction with an individual component. It is the data structure used as values of the `answers` object of [ParticipantData](ParticipantData). The general structure for this is below:

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
The `answer` object here uses the "id" in the [Response](BaseResponse) list of the component in your [StudyConfiguration](StudyConfig) as its keys. It then contains a list of the answers given. You are also given a start and end time for the participants interaction with the component. Lastly, a set of windowEvents is given. Below is an example of the windowEvents list.

Each item in the window event is given a time, a position an event name, and some extra information for the event (for mouse events, this is the location).

## Table of contents

### Properties

- [answer](StoredAnswer.md#answer)
- [endTime](StoredAnswer.md#endtime)
- [provenanceGraph](StoredAnswer.md#provenancegraph)
- [startTime](StoredAnswer.md#starttime)
- [windowEvents](StoredAnswer.md#windowevents)

## Properties

### answer

• **answer**: `Record`\<`string`, \{ `id`: `string` ; `value`: `unknown`  }\>

Object whose keys are the "id"s in the Response list of the component in the StudyConfiguration and whose value is the inputted value from the participant.

#### Defined in

[store/types.ts:61](https://github.com/revisit-studies/study/blob/cb2c5ee/src/store/types.ts#L61)

___

### endTime

• **endTime**: `number`

Time that the user ended interaction with the component in epoch milliseconds.

#### Defined in

[store/types.ts:65](https://github.com/revisit-studies/study/blob/cb2c5ee/src/store/types.ts#L65)

___

### provenanceGraph

• `Optional` **provenanceGraph**: `TrrackedProvenance`

The entire provenance graph exported from a Trrack instance from a React component. This will only be present if you are using React components and you're utilizing Trrack.

#### Defined in

[store/types.ts:67](https://github.com/revisit-studies/study/blob/cb2c5ee/src/store/types.ts#L67)

___

### startTime

• **startTime**: `number`

Time that the user began interacting with the component in epoch milliseconds.

#### Defined in

[store/types.ts:63](https://github.com/revisit-studies/study/blob/cb2c5ee/src/store/types.ts#L63)

___

### windowEvents

• **windowEvents**: `EventType`[]

A list containing the time (in epoch milliseconds), the action (focus, input, kepress, mousedown, mouseup, mousemove, resize, scroll or visibility), and then either a coordinate pertaining to where the event took place on the screen or string related to such event. Below is an example of the windowEvents list.
```js

"windowEvents" :[
  [
    1711641174878,
    "mousedown",
    [ 1843, 286 ]
  ],
  [
    1711641174878,
    "focus",
    "BUTTON"
  ],
  [
    1711641174935,
    "mouseup",
    [ 1843, 286 ]
  ],
  .
  .
  .
  [
    1711641178706,
    "mousemove",
    [ 1868, 728 ]
  ]
]
```

#### Defined in

[store/types.ts:98](https://github.com/revisit-studies/study/blob/cb2c5ee/src/store/types.ts#L98)