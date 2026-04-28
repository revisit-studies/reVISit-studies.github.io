# CheckboxResponse

Defined in: [parser/types.ts:728](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L728)

The CheckboxResponse interface is used to define the properties of a checkbox response.
CheckboxResponses render as a checkbox input with user specified options.
```json
{
  "id": "q7",
  "prompt": "Checkbox example (not required)",
  "location": "aboveStimulus",
  "type": "checkbox",
  "options": ["Option 1", "Option 2", "Option 3"],
  "withDontKnow": true,
  "default": ["Option 1", "I don't know"]
}
```

## Extends

- [`BaseResponse`](BaseResponse.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="default"></a> `default?` | `string`[] | The default value of the response. Specify an array of option values. To preselect the "I don't know" checkbox, include `"I don't know"`. | - | [parser/types.ts:733](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L733) |
| <a id="excludefromrandomization"></a> `excludeFromRandomization?` | `boolean` | Exclude response from randomization. If present, will override the `responseOrder` randomization setting in the components. Defaults to false. | [`BaseResponse`](BaseResponse.md).[`excludeFromRandomization`](BaseResponse.md#excludefromrandomization) | [parser/types.ts:377](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L377) |
| <a id="hidden"></a> `hidden?` | `boolean` | Controls whether the response is hidden. | [`BaseResponse`](BaseResponse.md).[`hidden`](BaseResponse.md#hidden) | [parser/types.ts:367](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L367) |
| <a id="horizontal"></a> `horizontal?` | `boolean` | Whether to render the checkboxes horizontally. Defaults to false, so they render horizontally. | - | [parser/types.ts:741](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L741) |
| <a id="id"></a> `id` | `string` | The id of the response. This is used to identify the response in the data file. | [`BaseResponse`](BaseResponse.md).[`id`](BaseResponse.md#id) | [parser/types.ts:349](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L349) |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the response. This does not accept markdown. | [`BaseResponse`](BaseResponse.md).[`infoText`](BaseResponse.md#infotext) | [parser/types.ts:355](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L355) |
| <a id="location"></a> `location?` | [`ConfigResponseBlockLocation`](../type-aliases/ConfigResponseBlockLocation.md) | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` | [`BaseResponse`](BaseResponse.md).[`location`](BaseResponse.md#location) | [parser/types.ts:359](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L359) |
| <a id="maxselections"></a> `maxSelections?` | `number` | The maximum number of selections that are required. | - | [parser/types.ts:739](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L739) |
| <a id="minselections"></a> `minSelections?` | `number` | The minimum number of selections that are required. | - | [parser/types.ts:737](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L737) |
| <a id="optionorder"></a> `optionOrder?` | `"random"` \| `"fixed"` | The order in which the checkboxes are displayed. Defaults to fixed. | - | [parser/types.ts:735](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L735) |
| <a id="options"></a> `options` | (`string` \| [`StringOption`](StringOption.md))[] | The options that are displayed as checkboxes, provided as an array of objects, with label and value fields. | - | [parser/types.ts:731](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L731) |
| <a id="paramcapture"></a> `paramCapture?` | `string` | Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer `uiConfig.urlParticipantIdParam` if you are capturing a participant ID. | [`BaseResponse`](BaseResponse.md).[`paramCapture`](BaseResponse.md#paramcapture) | [parser/types.ts:365](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L365) |
| <a id="prompt"></a> `prompt` | `string` | The prompt that is displayed to the participant. You can use markdown here to render images, links, etc. | [`BaseResponse`](BaseResponse.md).[`prompt`](BaseResponse.md#prompt) | [parser/types.ts:351](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L351) |
| <a id="required"></a> `required?` | `boolean` | Controls whether the response is required to be answered. Defaults to true. | [`BaseResponse`](BaseResponse.md).[`required`](BaseResponse.md#required) | [parser/types.ts:357](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L357) |
| <a id="requiredlabel"></a> `requiredLabel?` | `string` | You can provide a required label, which makes it so a participant has to answer with a response that matches label. | [`BaseResponse`](BaseResponse.md).[`requiredLabel`](BaseResponse.md#requiredlabel) | [parser/types.ts:363](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L363) |
| <a id="requiredvalue"></a> `requiredValue?` | `unknown` | You can provide a required value, which makes it so a participant has to answer with that value. | [`BaseResponse`](BaseResponse.md).[`requiredValue`](BaseResponse.md#requiredvalue) | [parser/types.ts:361](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L361) |
| <a id="secondarytext"></a> `secondaryText?` | `string` | The secondary text that is displayed to the participant under the prompt. This does not accept markdown. | [`BaseResponse`](BaseResponse.md).[`secondaryText`](BaseResponse.md#secondarytext) | [parser/types.ts:353](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L353) |
| <a id="style"></a> `style?` | [`Styles`](../type-aliases/Styles.md) | You can set styles here, using React CSSProperties, for example: `{"width": 100}` or `{"width": "50%"}` | [`BaseResponse`](BaseResponse.md).[`style`](BaseResponse.md#style) | [parser/types.ts:375](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L375) |
| <a id="stylesheetpath"></a> `stylesheetPath?` | `string` | The path to the external stylesheet file. | [`BaseResponse`](BaseResponse.md).[`stylesheetPath`](BaseResponse.md#stylesheetpath) | [parser/types.ts:373](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L373) |
| <a id="type"></a> `type` | `"checkbox"` | - | - | [parser/types.ts:729](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L729) |
| <a id="withdivider"></a> `withDivider?` | `boolean` | Renders the response with a trailing divider. If present, will override the divider setting in the components or `uiConfig`. | [`BaseResponse`](BaseResponse.md).[`withDivider`](BaseResponse.md#withdivider) | [parser/types.ts:369](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L369) |
| <a id="withdontknow"></a> `withDontKnow?` | `boolean` | Renders the response with an option for "I don't know". This counts as a completed answer for the validation. | [`BaseResponse`](BaseResponse.md).[`withDontKnow`](BaseResponse.md#withdontknow) | [parser/types.ts:371](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L371) |
| <a id="withother"></a> `withOther?` | `boolean` | Whether to render the checkboxes with an "other" option. | - | [parser/types.ts:743](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L743) |
