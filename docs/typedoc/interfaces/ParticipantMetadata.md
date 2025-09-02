# ParticipantMetadata

Defined in: [store/types.ts:11](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/store/types.ts#L11)

The ParticipantMetadata object contains metadata about the participant. This includes the user agent, resolution, language, and IP address. This object is used to store information about the participant that is not directly related to the study itself.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="ip"></a> `ip` | `null` \| `string` | The IP address of the participant. | [store/types.ts:19](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/store/types.ts#L19) |
| <a id="language"></a> `language` | `string` | The language of the participants browser. | [store/types.ts:17](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/store/types.ts#L17) |
| <a id="resolution"></a> `resolution` | `Record`\<`string`, `string` \| `number`\> | The resolution of the participants screen. This is an object with two keys, "width" and "height". The values are the width and height of the participants screen in pixels. | [store/types.ts:15](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/store/types.ts#L15) |
| <a id="useragent"></a> `userAgent` | `string` | The user agent of the participant. This is a string that contains information about the participants browser and operating system. | [store/types.ts:13](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/store/types.ts#L13) |
