# DividerResponse

Defined in: [parser/types.ts:712](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L712)

## Extends

- `Omit`\<[`BaseResponse`](BaseResponse.md), `"prompt"` \| `"infoText"` \| `"secondaryText"` \| `"required"` \| `"requiredValue"` \| `"requiredLabel"` \| `"paramCapture"` \| `"hidden"` \| `"withDontKnow"`\>

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="excludefromrandomization"></a> `excludeFromRandomization?` | `boolean` | Exclude response from randomization. If present, will override the responseOrder randomization setting in the components. Defaults to false. | [`BaseResponse`](BaseResponse.md).[`excludeFromRandomization`](BaseResponse.md#excludefromrandomization) | [parser/types.ts:272](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L272) |
| <a id="hidden"></a> `hidden?` | `undefined` | - | - | [parser/types.ts:722](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L722) |
| <a id="id"></a> `id` | `string` | The id of the response. This is used to identify the response in the data file. | [`BaseResponse`](BaseResponse.md).[`id`](BaseResponse.md#id) | [parser/types.ts:244](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L244) |
| <a id="infotext"></a> `infoText?` | `undefined` | - | - | [parser/types.ts:716](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L716) |
| <a id="location"></a> `location?` | [`ConfigResponseBlockLocation`](../type-aliases/ConfigResponseBlockLocation.md) | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` | [`BaseResponse`](BaseResponse.md).[`location`](BaseResponse.md#location) | [parser/types.ts:254](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L254) |
| <a id="paramcapture"></a> `paramCapture?` | `undefined` | - | - | [parser/types.ts:721](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L721) |
| <a id="prompt"></a> `prompt?` | `undefined` | - | - | [parser/types.ts:715](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L715) |
| <a id="required"></a> `required?` | `undefined` | - | - | [parser/types.ts:718](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L718) |
| <a id="requiredlabel"></a> `requiredLabel?` | `undefined` | - | - | [parser/types.ts:720](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L720) |
| <a id="requiredvalue"></a> `requiredValue?` | `undefined` | - | - | [parser/types.ts:719](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L719) |
| <a id="secondarytext"></a> `secondaryText?` | `undefined` | - | - | [parser/types.ts:717](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L717) |
| <a id="style"></a> `style?` | [`Styles`](../type-aliases/Styles.md) | You can set styles here, using React CSSProperties, for example: `{"width": 100}` or `{"width": "50%"}` | [`BaseResponse`](BaseResponse.md).[`style`](BaseResponse.md#style) | [parser/types.ts:270](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L270) |
| <a id="stylesheetpath"></a> `stylesheetPath?` | `string` | The path to the external stylesheet file. | [`BaseResponse`](BaseResponse.md).[`stylesheetPath`](BaseResponse.md#stylesheetpath) | [parser/types.ts:268](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L268) |
| <a id="type"></a> `type` | `"divider"` | - | - | [parser/types.ts:713](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L713) |
| <a id="withdivider"></a> `withDivider?` | `boolean` | Renders the response with a trailing divider. If present, will override the divider setting in the components or uiConfig. | [`BaseResponse`](BaseResponse.md).[`withDivider`](BaseResponse.md#withdivider) | [parser/types.ts:264](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L264) |
| <a id="withdontknow"></a> `withDontKnow?` | `undefined` | - | - | [parser/types.ts:723](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L723) |
