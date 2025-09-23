# ParticipantData

Defined in: [storage/types.ts:51](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/storage/types.ts#L51)

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
| <a id="answers"></a> `answers` | `Record`\<`string`, [`StoredAnswer`](StoredAnswer.md)\> | Object whose keys are the component names and values are StoredAnswer objects. | [storage/types.ts:61](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/storage/types.ts#L61) |
| <a id="completed"></a> `completed` | `boolean` | Whether the participant has completed the study. | [storage/types.ts:67](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/storage/types.ts#L67) |
| <a id="metadata"></a> `metadata` | [`ParticipantMetadata`](ParticipantMetadata.md) | Metadata of a participants browser, resolution, language, and IP. | [storage/types.ts:65](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/storage/types.ts#L65) |
| <a id="participantconfighash"></a> `participantConfigHash` | `string` | Unique ID corresponding to the Configuration that the participant received. | [storage/types.ts:55](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/storage/types.ts#L55) |
| <a id="participantid"></a> `participantId` | `string` | Unique ID associated with the participant | [storage/types.ts:53](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/storage/types.ts#L53) |
| <a id="participantindex"></a> `participantIndex` | `number` | Index of the participant in the study. | [storage/types.ts:59](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/storage/types.ts#L59) |
| <a id="participanttags"></a> `participantTags` | `string`[] | The component blocks that the participant entered. | [storage/types.ts:74](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/storage/types.ts#L74) |
| <a id="rejected"></a> `rejected` | `false` \| \{ `reason`: `string`; `timestamp`: `number`; \} | Whether the participant has been rejected and the reason. | [storage/types.ts:69](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/storage/types.ts#L69) |
| <a id="searchparams"></a> `searchParams` | `Record`\<`string`, `string`\> | Query parameters of the URL used to enter the study. | [storage/types.ts:63](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/storage/types.ts#L63) |
| <a id="sequence"></a> `sequence` | `Sequence` | Sequence of components that the participant received. This is an internal data type and is compiled from the ComponentBlocks in the StudyConfig sequence. | [storage/types.ts:57](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/storage/types.ts#L57) |
