---
sidebar_position: 1
displayed_sidebar: reference
---

# ParticipantMetadata

Defined in: [store/types.ts:10](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/store/types.ts#L10)

The ParticipantMetadata object contains metadata about the participant. This includes the user agent, resolution, language, and IP address. This object is used to store information about the participant that is not directly related to the study itself.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="ip"></a> `ip` | `null` \| `string` | The IP address of the participant. | [store/types.ts:18](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/store/types.ts#L18) |
| <a id="language"></a> `language` | `string` | The language of the participants browser. | [store/types.ts:16](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/store/types.ts#L16) |
| <a id="resolution"></a> `resolution` | `Record`\<`string`, `string` \| `number`\> | The resolution of the participants screen. This is an object with two keys, "width" and "height". The values are the width and height of the participants screen in pixels. | [store/types.ts:14](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/store/types.ts#L14) |
| <a id="useragent"></a> `userAgent` | `string` | The user agent of the participant. This is a string that contains information about the participants browser and operating system. | [store/types.ts:12](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/store/types.ts#L12) |
