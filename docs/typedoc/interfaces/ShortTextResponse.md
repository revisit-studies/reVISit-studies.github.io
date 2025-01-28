---
sidebar_position: 1
displayed_sidebar: reference
---

# ShortTextResponse

Defined in: [parser/types.ts:234](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L234)

The ShortTextResponse interface is used to define the properties of a short text response.
ShortTextResponses render as a text input that accepts any text and can optionally have a placeholder.

```js
{
 "id": "q-short-text",
 "prompt": "Short text example",
 "location": "aboveStimulus",
 "type": "shortText",
 "placeholder": "Enter your answer here"
}
```

## Extends

- [`BaseResponse`](BaseResponse.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="hidden"></a> `hidden?` | `boolean` | Controls whether the response is hidden. | [`BaseResponse`](BaseResponse.md).[`hidden`](BaseResponse.md#hidden) | [parser/types.ts:185](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L185) |
| <a id="id"></a> `id` | `string` | The id of the response. This is used to identify the response in the data file. | [`BaseResponse`](BaseResponse.md).[`id`](BaseResponse.md#id) | [parser/types.ts:169](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L169) |
| <a id="location"></a> `location?` | `"sidebar"` \| `"aboveStimulus"` \| `"belowStimulus"` | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` | [`BaseResponse`](BaseResponse.md).[`location`](BaseResponse.md#location) | [parser/types.ts:177](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L177) |
| <a id="paramcapture"></a> `paramCapture?` | `string` | Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer uiConfig.urlParticipantIdParam if you are capturing a participant ID. | [`BaseResponse`](BaseResponse.md).[`paramCapture`](BaseResponse.md#paramcapture) | [parser/types.ts:183](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L183) |
| <a id="placeholder"></a> `placeholder?` | `string` | The placeholder text that is displayed in the input. | - | [parser/types.ts:237](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L237) |
| <a id="prompt"></a> `prompt` | `string` | The prompt that is displayed to the participant. You can use markdown here to render images, links, etc. | [`BaseResponse`](BaseResponse.md).[`prompt`](BaseResponse.md#prompt) | [parser/types.ts:171](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L171) |
| <a id="required"></a> `required?` | `boolean` | Controls whether the response is required to be answered. Defaults to true. | [`BaseResponse`](BaseResponse.md).[`required`](BaseResponse.md#required) | [parser/types.ts:175](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L175) |
| <a id="requiredlabel"></a> `requiredLabel?` | `string` | You can provide a required label, which makes it so a participant has to answer with a response that matches label. | [`BaseResponse`](BaseResponse.md).[`requiredLabel`](BaseResponse.md#requiredlabel) | [parser/types.ts:181](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L181) |
| <a id="requiredvalue"></a> `requiredValue?` | `unknown` | You can provide a required value, which makes it so a participant has to answer with that value. | [`BaseResponse`](BaseResponse.md).[`requiredValue`](BaseResponse.md#requiredvalue) | [parser/types.ts:179](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L179) |
| <a id="secondarytext"></a> `secondaryText?` | `string` | The secondary text that is displayed to the participant under the prompt. This does not accept markdown. | [`BaseResponse`](BaseResponse.md).[`secondaryText`](BaseResponse.md#secondarytext) | [parser/types.ts:173](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L173) |
| <a id="type"></a> `type` | `"shortText"` | - | - | [parser/types.ts:235](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L235) |
| <a id="withdivider"></a> `withDivider?` | `boolean` | Renders the response with a trailing divider. | [`BaseResponse`](BaseResponse.md).[`withDivider`](BaseResponse.md#withdivider) | [parser/types.ts:187](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L187) |
| <a id="withdontknow"></a> `withDontKnow?` | `boolean` | Renders the response with an option for "I don't know". This counts as a completed answer for the validation. | [`BaseResponse`](BaseResponse.md).[`withDontKnow`](BaseResponse.md#withdontknow) | [parser/types.ts:189](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L189) |
