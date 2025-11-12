# CheckboxResponse

Defined in: [parser/types.ts:558](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L558)

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
| <a id="hidden"></a> `hidden?` | `boolean` | Controls whether the response is hidden. | [`BaseResponse`](BaseResponse.md).[`hidden`](BaseResponse.md#hidden) | [parser/types.ts:262](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L262) |
| <a id="horizontal"></a> `horizontal?` | `boolean` | Whether to render the checkboxes horizontally. Defaults to false, so they render horizontally. | - | [parser/types.ts:569](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L569) |
| <a id="id"></a> `id` | `string` | The id of the response. This is used to identify the response in the data file. | [`BaseResponse`](BaseResponse.md).[`id`](BaseResponse.md#id) | [parser/types.ts:244](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L244) |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the response. This does not accept markdown. | [`BaseResponse`](BaseResponse.md).[`infoText`](BaseResponse.md#infotext) | [parser/types.ts:250](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L250) |
| <a id="location"></a> `location?` | [`ConfigResponseBlockLocation`](../type-aliases/ConfigResponseBlockLocation.md) | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` | [`BaseResponse`](BaseResponse.md).[`location`](BaseResponse.md#location) | [parser/types.ts:254](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L254) |
| <a id="maxselections"></a> `maxSelections?` | `number` | The maximum number of selections that are required. | - | [parser/types.ts:567](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L567) |
| <a id="minselections"></a> `minSelections?` | `number` | The minimum number of selections that are required. | - | [parser/types.ts:565](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L565) |
| <a id="optionorder"></a> `optionOrder?` | `"fixed"` \| `"random"` | The order in which the checkboxes are displayed. Defaults to fixed. | - | [parser/types.ts:563](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L563) |
| <a id="options"></a> `options` | (`string` \| [`StringOption`](StringOption.md))[] | The options that are displayed as checkboxes, provided as an array of objects, with label and value fields. | - | [parser/types.ts:561](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L561) |
| <a id="paramcapture"></a> `paramCapture?` | `string` | Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer uiConfig.urlParticipantIdParam if you are capturing a participant ID. | [`BaseResponse`](BaseResponse.md).[`paramCapture`](BaseResponse.md#paramcapture) | [parser/types.ts:260](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L260) |
| <a id="prompt"></a> `prompt` | `string` | The prompt that is displayed to the participant. You can use markdown here to render images, links, etc. | [`BaseResponse`](BaseResponse.md).[`prompt`](BaseResponse.md#prompt) | [parser/types.ts:246](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L246) |
| <a id="required"></a> `required?` | `boolean` | Controls whether the response is required to be answered. Defaults to true. | [`BaseResponse`](BaseResponse.md).[`required`](BaseResponse.md#required) | [parser/types.ts:252](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L252) |
| <a id="requiredlabel"></a> `requiredLabel?` | `string` | You can provide a required label, which makes it so a participant has to answer with a response that matches label. | [`BaseResponse`](BaseResponse.md).[`requiredLabel`](BaseResponse.md#requiredlabel) | [parser/types.ts:258](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L258) |
| <a id="requiredvalue"></a> `requiredValue?` | `unknown` | You can provide a required value, which makes it so a participant has to answer with that value. | [`BaseResponse`](BaseResponse.md).[`requiredValue`](BaseResponse.md#requiredvalue) | [parser/types.ts:256](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L256) |
| <a id="secondarytext"></a> `secondaryText?` | `string` | The secondary text that is displayed to the participant under the prompt. This does not accept markdown. | [`BaseResponse`](BaseResponse.md).[`secondaryText`](BaseResponse.md#secondarytext) | [parser/types.ts:248](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L248) |
| <a id="style"></a> `style?` | [`Styles`](../type-aliases/Styles.md) | You can set styles here, using React CSSProperties, for example: `{"width": 100}` or `{"width": "50%"}` | [`BaseResponse`](BaseResponse.md).[`style`](BaseResponse.md#style) | [parser/types.ts:270](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L270) |
| <a id="stylesheetpath"></a> `stylesheetPath?` | `string` | The path to the external stylesheet file. | [`BaseResponse`](BaseResponse.md).[`stylesheetPath`](BaseResponse.md#stylesheetpath) | [parser/types.ts:268](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L268) |
| <a id="type"></a> `type` | `"checkbox"` | - | - | [parser/types.ts:559](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L559) |
| <a id="withdivider"></a> `withDivider?` | `boolean` | Renders the response with a trailing divider. If present, will override the divider setting in the components or uiConfig. | [`BaseResponse`](BaseResponse.md).[`withDivider`](BaseResponse.md#withdivider) | [parser/types.ts:264](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L264) |
| <a id="withdontknow"></a> `withDontKnow?` | `boolean` | Renders the response with an option for "I don't know". This counts as a completed answer for the validation. | [`BaseResponse`](BaseResponse.md).[`withDontKnow`](BaseResponse.md#withdontknow) | [parser/types.ts:266](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L266) |
| <a id="withother"></a> `withOther?` | `boolean` | Whether to render the checkboxes with an "other" option. | - | [parser/types.ts:571](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L571) |
