# CheckboxResponse

Defined in: [parser/types.ts:451](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L451)

The CheckboxResponse interface is used to define the properties of a checkbox response.
CheckboxResponses render as a checkbox input with user specified options.

```js
{
 "id": "q7",
 "prompt": "Checkbox example (not required)",
 "location": "aboveStimulus",
 "type": "checkbox",
 "options": ["Option 1", "Option 2", "Option 3"]
}
```

## Extends

- [`BaseResponse`](BaseResponse.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="hidden"></a> `hidden?` | `boolean` | Controls whether the response is hidden. | [`BaseResponse`](BaseResponse.md).[`hidden`](BaseResponse.md#hidden) | [parser/types.ts:177](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L177) |
| <a id="horizontal"></a> `horizontal?` | `boolean` | Whether to render the checkboxes horizontally. Defaults to false, so they render horizontally. | - | [parser/types.ts:460](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L460) |
| <a id="id"></a> `id` | `string` | The id of the response. This is used to identify the response in the data file. | [`BaseResponse`](BaseResponse.md).[`id`](BaseResponse.md#id) | [parser/types.ts:161](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L161) |
| <a id="location"></a> `location?` | [`ConfigResponseBlockLocation`](../type-aliases/ConfigResponseBlockLocation.md) | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` | [`BaseResponse`](BaseResponse.md).[`location`](BaseResponse.md#location) | [parser/types.ts:169](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L169) |
| <a id="maxselections"></a> `maxSelections?` | `number` | The maximum number of selections that are required. | - | [parser/types.ts:458](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L458) |
| <a id="minselections"></a> `minSelections?` | `number` | The minimum number of selections that are required. | - | [parser/types.ts:456](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L456) |
| <a id="options"></a> `options` | (`string` \| [`StringOption`](StringOption.md))[] | The options that are displayed as checkboxes, provided as an array of objects, with label and value fields. | - | [parser/types.ts:454](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L454) |
| <a id="paramcapture"></a> `paramCapture?` | `string` | Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer uiConfig.urlParticipantIdParam if you are capturing a participant ID. | [`BaseResponse`](BaseResponse.md).[`paramCapture`](BaseResponse.md#paramcapture) | [parser/types.ts:175](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L175) |
| <a id="prompt"></a> `prompt` | `string` | The prompt that is displayed to the participant. You can use markdown here to render images, links, etc. | [`BaseResponse`](BaseResponse.md).[`prompt`](BaseResponse.md#prompt) | [parser/types.ts:163](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L163) |
| <a id="required"></a> `required?` | `boolean` | Controls whether the response is required to be answered. Defaults to true. | [`BaseResponse`](BaseResponse.md).[`required`](BaseResponse.md#required) | [parser/types.ts:167](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L167) |
| <a id="requiredlabel"></a> `requiredLabel?` | `string` | You can provide a required label, which makes it so a participant has to answer with a response that matches label. | [`BaseResponse`](BaseResponse.md).[`requiredLabel`](BaseResponse.md#requiredlabel) | [parser/types.ts:173](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L173) |
| <a id="requiredvalue"></a> `requiredValue?` | `unknown` | You can provide a required value, which makes it so a participant has to answer with that value. | [`BaseResponse`](BaseResponse.md).[`requiredValue`](BaseResponse.md#requiredvalue) | [parser/types.ts:171](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L171) |
| <a id="secondarytext"></a> `secondaryText?` | `string` | The secondary text that is displayed to the participant under the prompt. This does not accept markdown. | [`BaseResponse`](BaseResponse.md).[`secondaryText`](BaseResponse.md#secondarytext) | [parser/types.ts:165](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L165) |
| <a id="type"></a> `type` | `"checkbox"` | - | - | [parser/types.ts:452](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L452) |
| <a id="withdivider"></a> `withDivider?` | `boolean` | Renders the response with a trailing divider. | [`BaseResponse`](BaseResponse.md).[`withDivider`](BaseResponse.md#withdivider) | [parser/types.ts:179](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L179) |
| <a id="withdontknow"></a> `withDontKnow?` | `boolean` | Renders the response with an option for "I don't know". This counts as a completed answer for the validation. | [`BaseResponse`](BaseResponse.md).[`withDontKnow`](BaseResponse.md#withdontknow) | [parser/types.ts:181](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L181) |
| <a id="withother"></a> `withOther?` | `boolean` | Whether to render the checkboxes with an "other" option. | - | [parser/types.ts:462](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L462) |
