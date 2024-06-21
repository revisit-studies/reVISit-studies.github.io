---
sidebar_position: 1
displayed_sidebar: docs
---

# ParticipantMetadata

The ParticipantMetadata object contains metadata about the participant. This includes the user agent, resolution, language, and IP address. This object is used to store information about the participant that is not directly related to the study itself.

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `ip` | `null` \| `string` | The IP address of the participant. |
| `language` | `string` | The language of the participants browser. |
| `resolution` | `Record`\<`string`, `string` \| `number`\> | The resolution of the participants screen. This is an object with two keys, "width" and "height". The values are the width and height of the participants screen in pixels. |
| `userAgent` | `string` | The user agent of the participant. This is a string that contains information about the participants browser and operating system. |
