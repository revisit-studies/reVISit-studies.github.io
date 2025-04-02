---
sidebar_position: 1
displayed_sidebar: reference
---

# SliderResponse

Defined in: [parser/types.ts:391](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L391)

The SliderResponse interface is used to define the properties of a slider response.
SliderResponses render as a slider input with user specified steps. For example, you could have steps of 0, 50, and 100.

Example:
```js
{
 "id": "q-slider",
 "prompt": "How are you feeling?",
 "location": "aboveStimulus",
 "type": "slider",
 "options": [
   {
     "label": "Bad",
     "value": 0
   },
   {
     "label": "OK",
     "value": 50
   },
   {
     "label": "Good",
     "value": 100
   }
 ]
}
```

## Extends

- [`BaseResponse`](BaseResponse.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="hidden"></a> `hidden?` | `boolean` | Controls whether the response is hidden. | [`BaseResponse`](BaseResponse.md).[`hidden`](BaseResponse.md#hidden) | [parser/types.ts:177](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L177) |
| <a id="id"></a> `id` | `string` | The id of the response. This is used to identify the response in the data file. | [`BaseResponse`](BaseResponse.md).[`id`](BaseResponse.md#id) | [parser/types.ts:161](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L161) |
| <a id="location"></a> `location?` | [`ConfigResponseBlockLocation`](../type-aliases/ConfigResponseBlockLocation.md) | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` | [`BaseResponse`](BaseResponse.md).[`location`](BaseResponse.md#location) | [parser/types.ts:169](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L169) |
| <a id="options"></a> `options` | [`NumberOption`](NumberOption.md)[] | This defines the steps in the slider and the extent of the slider as an array of objects that have a label and a value. | - | [parser/types.ts:394](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L394) |
| <a id="paramcapture"></a> `paramCapture?` | `string` | Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer uiConfig.urlParticipantIdParam if you are capturing a participant ID. | [`BaseResponse`](BaseResponse.md).[`paramCapture`](BaseResponse.md#paramcapture) | [parser/types.ts:175](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L175) |
| <a id="prompt"></a> `prompt` | `string` | The prompt that is displayed to the participant. You can use markdown here to render images, links, etc. | [`BaseResponse`](BaseResponse.md).[`prompt`](BaseResponse.md#prompt) | [parser/types.ts:163](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L163) |
| <a id="required"></a> `required?` | `boolean` | Controls whether the response is required to be answered. Defaults to true. | [`BaseResponse`](BaseResponse.md).[`required`](BaseResponse.md#required) | [parser/types.ts:167](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L167) |
| <a id="requiredlabel"></a> `requiredLabel?` | `string` | You can provide a required label, which makes it so a participant has to answer with a response that matches label. | [`BaseResponse`](BaseResponse.md).[`requiredLabel`](BaseResponse.md#requiredlabel) | [parser/types.ts:173](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L173) |
| <a id="requiredvalue"></a> `requiredValue?` | `unknown` | You can provide a required value, which makes it so a participant has to answer with that value. | [`BaseResponse`](BaseResponse.md).[`requiredValue`](BaseResponse.md#requiredvalue) | [parser/types.ts:171](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L171) |
| <a id="secondarytext"></a> `secondaryText?` | `string` | The secondary text that is displayed to the participant under the prompt. This does not accept markdown. | [`BaseResponse`](BaseResponse.md).[`secondaryText`](BaseResponse.md#secondarytext) | [parser/types.ts:165](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L165) |
| <a id="snap"></a> `snap?` | `boolean` | Whether the slider should snap between values. Defaults to false. Slider snapping disables the label above the handle. | - | [parser/types.ts:398](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L398) |
| <a id="startingvalue"></a> `startingValue?` | `number` | The starting value of the slider. Defaults to the minimum value. | - | [parser/types.ts:396](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L396) |
| <a id="step"></a> `step?` | `number` | The step value of the slider. If not provided (and snap not enabled), the step value is calculated as the range of the slider divided by 100. | - | [parser/types.ts:400](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L400) |
| <a id="tlxstyle"></a> `tlxStyle?` | `boolean` | Whether to render the slider with a NASA-tlx style. Defaults to false. | - | [parser/types.ts:404](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L404) |
| <a id="type"></a> `type` | `"slider"` | - | - | [parser/types.ts:392](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L392) |
| <a id="withbar"></a> `withBar?` | `boolean` | Whether to render the slider with a bar to the left. Defaults to true. | - | [parser/types.ts:402](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L402) |
| <a id="withdivider"></a> `withDivider?` | `boolean` | Renders the response with a trailing divider. | [`BaseResponse`](BaseResponse.md).[`withDivider`](BaseResponse.md#withdivider) | [parser/types.ts:179](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L179) |
| <a id="withdontknow"></a> `withDontKnow?` | `boolean` | Renders the response with an option for "I don't know". This counts as a completed answer for the validation. | [`BaseResponse`](BaseResponse.md).[`withDontKnow`](BaseResponse.md#withdontknow) | [parser/types.ts:181](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L181) |
