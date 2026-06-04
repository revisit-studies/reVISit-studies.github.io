# ParticipantMetadata

Defined in: [store/types.ts:12](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/store/types.ts#L12)

The ParticipantMetadata object contains metadata about the participant. This includes the user agent, resolution, language, and IP address. This object is used to store information about the participant that is not directly related to the study itself.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="ip"></a> `ip` | `string` \| `null` | The IP address of the participant. | [store/types.ts:20](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/store/types.ts#L20) |
| <a id="language"></a> `language` | `string` | The language of the participant's browser. | [store/types.ts:18](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/store/types.ts#L18) |
| <a id="resolution"></a> `resolution` | `Record`\<`string`, `string` \| `number`\> | The resolution of the participant's screen. This is an object with two keys, "width" and "height". The values are the width and height of the participant's screen in pixels. | [store/types.ts:16](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/store/types.ts#L16) |
| <a id="useragent"></a> `userAgent` | `string` | The user agent of the participant. This is a string that contains information about the participant's browser and operating system. | [store/types.ts:14](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/store/types.ts#L14) |
