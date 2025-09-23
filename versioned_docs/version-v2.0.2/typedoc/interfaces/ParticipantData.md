# ParticipantData

Defined in: [storage/types.ts:52](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/storage/types.ts#L52)

The ParticipantData is a JSON object that contains all of the data for all of the participants in your study. It is structured as a list. Each element refers to a participants data or a configuration. While in many cases there is only one configuration per study, the study creator is allowed to change the configuration file after the study has already been completed by other participants. The data for each participant will have a "participantConfigHash" which refers to a particular configuration which is also in this list.

Below we have an example of a participants data.
```js
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

```js
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
The `"provenanceGraph"` key will only exist if the component is a React component and if it is utilizing Trrack. See [here](../StoredAnswer) for more details.
:::

We can see at a high level that we are given the answer that the user submitted, the start time for the component, and the end time. In addition to this, we have a list of window events. You can find more information about the StoredAnswer object [here](../StoredAnswer).

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="answers"></a> `answers` | `Record`\<`string`, [`StoredAnswer`](StoredAnswer.md)\> | Object whose keys are the component names and values are StoredAnswer objects. | [storage/types.ts:62](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/storage/types.ts#L62) |
| <a id="completed"></a> `completed` | `boolean` | Whether the participant has completed the study. | [storage/types.ts:68](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/storage/types.ts#L68) |
| <a id="metadata"></a> `metadata` | [`ParticipantMetadata`](ParticipantMetadata.md) | Metadata of a participants browser, resolution, language, and IP. | [storage/types.ts:66](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/storage/types.ts#L66) |
| <a id="participantconfighash"></a> `participantConfigHash` | `string` | Unique ID corresponding to the Configuration that the participant received. | [storage/types.ts:56](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/storage/types.ts#L56) |
| <a id="participantid"></a> `participantId` | `string` | Unique ID associated with the participant | [storage/types.ts:54](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/storage/types.ts#L54) |
| <a id="participantindex"></a> `participantIndex` | `number` | Index of the participant in the study. | [storage/types.ts:60](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/storage/types.ts#L60) |
| <a id="participanttags"></a> `participantTags` | `string`[] | The component blocks that the participant entered. | [storage/types.ts:75](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/storage/types.ts#L75) |
| <a id="rejected"></a> `rejected` | `false` \| \{ `reason`: `string`; `timestamp`: `number`; \} | Whether the participant has been rejected and the reason. | [storage/types.ts:70](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/storage/types.ts#L70) |
| <a id="searchparams"></a> `searchParams` | `Record`\<`string`, `string`\> | Query parameters of the URL used to enter the study. | [storage/types.ts:64](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/storage/types.ts#L64) |
| <a id="sequence"></a> `sequence` | `Sequence` | Sequence of components that the participant received. This is an internal data type and is compiled from the ComponentBlocks in the StudyConfig sequence. | [storage/types.ts:58](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/storage/types.ts#L58) |
