---
sidebar_position: 1
displayed_sidebar: docs
---

# Interface: ParticipantData

The ParticipantData is a JSON object that contains all of the data for all of the participants in your study. It is structured as a list. Each element refers to a participants data or a configuration. While in many cases there is only one configuration per study, the study creator is allowed to change the configuration file after the study has already been completed by other participants. The data for each participant will have a "participantConfigHash" which refers to a particular configuration which is also in this list.

Below we have an example of a participants data.
``` JSON
[
    {
        "participantId": <UUID4>,
        "participantConfigHash": <CONFIG_ID>,
        "sequence": {
            ...
        },
        "answers": {
            ...
        },
        "searchParameters": {
            ...
        }
    }
]
```
Each key in answer will be labeled the same as the response component that it refers to. The sequence shows the order that the participant saw each component (since these may be different for each participant if the configuration sequence has some randomization). This answer will contain information such as the start time, the end time, and all of the window events. See the example below.

```JSON
     "bar-chart-1_1": {
        "answer": {
          "barChart": [
            1.3
          ]
        },
        "startTime": 1711641174858,
        "endTime": 1711641178836,
        "provenanceGraph":{
          ...
        },
        "windowEvents": [
          ...
        ]
      }
```
The keys of this object are the names of the components with an additional underscore and number appended to the end. This is done so that the study creator can discern between not only the components but also between the various instances of the same component when necessary. All times are in **epoch milliseconds**.

:::info
The `"provenanceGraph"` key will only exist if the component is a React component and if it is utilizing Trrack. See [here](/typedoc/interfaces/StoredAnswer) for more details.
:::

We can see at a high level that we are given the answer that the user submitted, the start time for the component, and the end time. In addition to this, we have a list of window events. You can find more information about the StoredAnswer object [here](/typedoc/interfaces/StoredAnswer).

## Table of contents

### Properties

- [answers](ParticipantData.md#answers)
- [completed](ParticipantData.md#completed)
- [metadata](ParticipantData.md#metadata)
- [participantConfigHash](ParticipantData.md#participantconfighash)
- [participantId](ParticipantData.md#participantid)
- [searchParams](ParticipantData.md#searchparams)
- [sequence](ParticipantData.md#sequence)

## Properties

### answers

• **answers**: `Record`\<`string`, [`StoredAnswer`](StoredAnswer.md)\>

Object whose keys are the component names and values are StoredAnswer objects.

#### Defined in

[storage/types.ts:60](https://github.com/revisit-studies/study/blob/4b1bc13/src/storage/types.ts#L60)

___

### completed

• **completed**: `boolean`

Whether the participant has completed the study.

#### Defined in

[storage/types.ts:66](https://github.com/revisit-studies/study/blob/4b1bc13/src/storage/types.ts#L66)

___

### metadata

• **metadata**: `ParticipantMetadata`

Metadata of a participants browser, resolution, language, and IP.

#### Defined in

[storage/types.ts:64](https://github.com/revisit-studies/study/blob/4b1bc13/src/storage/types.ts#L64)

___

### participantConfigHash

• **participantConfigHash**: `string`

Unique ID corresponding to the Configuration that the participant received.

#### Defined in

[storage/types.ts:56](https://github.com/revisit-studies/study/blob/4b1bc13/src/storage/types.ts#L56)

___

### participantId

• **participantId**: `string`

Unique ID  associated with the participant

#### Defined in

[storage/types.ts:54](https://github.com/revisit-studies/study/blob/4b1bc13/src/storage/types.ts#L54)

___

### searchParams

• **searchParams**: `Record`\<`string`, `string`\>

Query parameters of the URL used to enter the study.

#### Defined in

[storage/types.ts:62](https://github.com/revisit-studies/study/blob/4b1bc13/src/storage/types.ts#L62)

___

### sequence

• **sequence**: [`Sequence`](Sequence.md)

Sequence of components that the participant received.

#### Defined in

[storage/types.ts:58](https://github.com/revisit-studies/study/blob/4b1bc13/src/storage/types.ts#L58)