# ParticipantMetadata

Defined in: [store/types.ts:15](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L15)

The ParticipantMetadata object contains metadata about the participant. This includes the user agent, resolution, language, and IP address. This object is used to store information about the participant that is not directly related to the study itself.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="colormode"></a> `colorMode?` | `"light"` \| `"dark"` | The effective color mode chosen when participation starts, retained for resume and replay. Absent in older data. | [store/types.ts:25](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L25) |
| <a id="ip"></a> `ip` | `string` \| `null` | The IP address of the participant. | [store/types.ts:23](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L23) |
| <a id="language"></a> `language` | `string` | The language of the participant's browser. | [store/types.ts:21](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L21) |
| <a id="resolution"></a> `resolution` | `Record`\<`string`, `string` \| `number`\> | The resolution of the participant's screen. This is an object with two keys, "width" and "height". The values are the width and height of the participant's screen in pixels. | [store/types.ts:19](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L19) |
| <a id="useragent"></a> `userAgent` | `string` | The user agent of the participant. This is a string that contains information about the participant's browser and operating system. | [store/types.ts:17](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/store/types.ts#L17) |
