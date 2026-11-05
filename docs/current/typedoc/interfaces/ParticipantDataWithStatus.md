# ParticipantDataWithStatus

Defined in: [storage/types.ts:82](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/storage/types.ts#L82)

The ParticipantData is a JSON object that contains all of the data for a single participant in your study. In storage, participant records and configuration records are often collected together in a list, where each element refers either to a participant's data or to a configuration. While in many cases there is only one configuration per study, the study creator is allowed to change the configuration file after the study has already been completed by other participants. The data for each participant will have a `participantConfigHash` which refers to a particular configuration that is also stored in this list.

Below we have an example of a single participant's data record.
```json
{
  "participantId": <UUID4>,
  "participantConfigHash": <CONFIG_ID>,
  "sequence": {
      ...
  },
  "answers": {
      ...
  },
  "searchParams": {
      ...
  }
}
```
Each key in answer will be labeled the same as the response component that it refers to. The sequence shows the order that the participant saw each component (since these may be different for each participant if the configuration sequence has some randomization). This answer will contain information such as the start time, the end time, and all of the window events. See the example below.

```json
"bar-chart-1_1": {
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
The keys of this object are the names of the components with an additional underscore and number appended to the end. This is done so that the study creator can discern between not only the components but also between the various instances of the same component when necessary. All times are in **epoch milliseconds**.

Provenance graphs exported from Trrack are stored separately from the participant answer object, using the same per-participant, per-task asset storage pattern as audio and screen recordings.

We can see at a high level that we are given the answer that the user submitted, the start time for the component, and the end time. In addition to this, we have a list of window events. You can find more information in [StoredAnswer](StoredAnswer.md).

## Extends

- [`ParticipantData`](ParticipantData.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="answers"></a> `answers` | `Record`\<`string`, [`StoredAnswer`](StoredAnswer.md)\> | Object whose keys are the component names and values are StoredAnswer objects. | [`ParticipantData`](ParticipantData.md).[`answers`](ParticipantData.md#answers) | [storage/types.ts:62](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/storage/types.ts#L62) |
| <a id="assignmentcreatedtime"></a> `assignmentCreatedTime?` | `number` | Assignment registration time in epoch milliseconds; server-generated for cloud engines. | - | [storage/types.ts:92](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/storage/types.ts#L92) |
| <a id="completed"></a> `completed` | `boolean` | Whether the participant has completed the study. Derived from sequence assignment status. | - | [storage/types.ts:84](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/storage/types.ts#L84) |
| <a id="conditions"></a> `conditions?` | `string`[] | The study condition(s) the participant was assigned to. Derived from the URL `condition` query parameter. | [`ParticipantData`](ParticipantData.md).[`conditions`](ParticipantData.md#conditions) | [storage/types.ts:77](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/storage/types.ts#L77) |
| <a id="createdtime"></a> `createdTime?` | `number` | Time that the participant registered for the study in epoch milliseconds. | [`ParticipantData`](ParticipantData.md).[`createdTime`](ParticipantData.md#createdtime) | [storage/types.ts:79](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/storage/types.ts#L79) |
| <a id="finalized"></a> `finalized?` | `boolean` | Local completion also locks sessions when cloud collection is disabled. | [`ParticipantData`](ParticipantData.md).[`finalized`](ParticipantData.md#finalized) | [storage/types.ts:52](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/storage/types.ts#L52) |
| <a id="globalstorehead"></a> `globalStoreHead?` | `string` | - | [`ParticipantData`](ParticipantData.md).[`globalStoreHead`](ParticipantData.md#globalstorehead) | [storage/types.ts:50](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/storage/types.ts#L50) |
| <a id="globalstorerevision"></a> `globalStoreRevision?` | `number` | - | [`ParticipantData`](ParticipantData.md).[`globalStoreRevision`](ParticipantData.md#globalstorerevision) | [storage/types.ts:49](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/storage/types.ts#L49) |
| <a id="globalvariables"></a> `globalVariables?` | [`GlobalStoreValues`](../type-aliases/GlobalStoreValues.md) | Current projection of accepted global-store provenance. Absent for legacy studies. | [`ParticipantData`](ParticipantData.md).[`globalVariables`](ParticipantData.md#globalvariables) | [storage/types.ts:48](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/storage/types.ts#L48) |
| <a id="metadata"></a> `metadata` | [`ParticipantMetadata`](ParticipantMetadata.md) | Metadata of a participant's browser, resolution, language, and IP. | [`ParticipantData`](ParticipantData.md).[`metadata`](ParticipantData.md#metadata) | [storage/types.ts:66](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/storage/types.ts#L66) |
| <a id="participantconfighash"></a> `participantConfigHash` | `string` | Unique ID corresponding to the Configuration that the participant received. | [`ParticipantData`](ParticipantData.md).[`participantConfigHash`](ParticipantData.md#participantconfighash) | [storage/types.ts:56](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/storage/types.ts#L56) |
| <a id="participantid"></a> `participantId` | `string` | Unique ID associated with the participant | [`ParticipantData`](ParticipantData.md).[`participantId`](ParticipantData.md#participantid) | [storage/types.ts:54](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/storage/types.ts#L54) |
| <a id="participantindex"></a> `participantIndex` | `number` | Index of the participant in the study. | [`ParticipantData`](ParticipantData.md).[`participantIndex`](ParticipantData.md#participantindex) | [storage/types.ts:60](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/storage/types.ts#L60) |
| <a id="participanttags"></a> `participantTags` | `string`[] | The component blocks that the participant entered. | [`ParticipantData`](ParticipantData.md).[`participantTags`](ParticipantData.md#participanttags) | [storage/types.ts:73](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/storage/types.ts#L73) |
| <a id="rejected"></a> `rejected` | `false` \| \{ `reason`: `string`; `timestamp`: `number`; \} | Whether the participant has been rejected and the reason. | [`ParticipantData`](ParticipantData.md).[`rejected`](ParticipantData.md#rejected) | [storage/types.ts:68](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/storage/types.ts#L68) |
| <a id="searchparams"></a> `searchParams` | `Record`\<`string`, `string`\> | Query parameters of the URL used to enter the study. | [`ParticipantData`](ParticipantData.md).[`searchParams`](ParticipantData.md#searchparams) | [storage/types.ts:64](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/storage/types.ts#L64) |
| <a id="sequence"></a> `sequence` | `Sequence` | Sequence of components that the participant received. This is an internal data type and is compiled from the ComponentBlocks in the StudyConfig sequence. | [`ParticipantData`](ParticipantData.md).[`sequence`](ParticipantData.md#sequence) | [storage/types.ts:58](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/storage/types.ts#L58) |
| <a id="stage"></a> `stage` | `string` | The stage of the participant in the study. | [`ParticipantData`](ParticipantData.md).[`stage`](ParticipantData.md#stage) | [storage/types.ts:75](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/storage/types.ts#L75) |
| <a id="timedout"></a> `timedOut?` | `boolean` | Allocation timed out and no longer consumes a study slot. A timed-out participant may still complete, so derive a display status with `getParticipantDataStatus` rather than combining this with `completed`. | - | [storage/types.ts:90](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/storage/types.ts#L90) |
