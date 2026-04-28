# DividerResponse

Defined in: [parser/types.ts:931](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L931)

## Extends

- `Omit`\<[`BaseResponse`](BaseResponse.md), `"prompt"` \| `"infoText"` \| `"secondaryText"` \| `"required"` \| `"requiredValue"` \| `"requiredLabel"` \| `"paramCapture"` \| `"hidden"` \| `"withDontKnow"`\>

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="excludefromrandomization"></a> `excludeFromRandomization?` | `boolean` | Exclude response from randomization. If present, will override the `responseOrder` randomization setting in the components. Defaults to false. | [`BaseResponse`](BaseResponse.md).[`excludeFromRandomization`](BaseResponse.md#excludefromrandomization) | [parser/types.ts:390](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L390) |
| <a id="hidden"></a> `hidden?` | `undefined` | - | - | [parser/types.ts:941](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L941) |
| <a id="id"></a> `id` | `string` | The id of the response. This is used to identify the response in the data file. | [`BaseResponse`](BaseResponse.md).[`id`](BaseResponse.md#id) | [parser/types.ts:362](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L362) |
| <a id="infotext"></a> `infoText?` | `undefined` | - | - | [parser/types.ts:935](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L935) |
| <a id="location"></a> `location?` | [`ConfigResponseBlockLocation`](../type-aliases/ConfigResponseBlockLocation.md) | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` | [`BaseResponse`](BaseResponse.md).[`location`](BaseResponse.md#location) | [parser/types.ts:372](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L372) |
| <a id="paramcapture"></a> `paramCapture?` | `undefined` | - | - | [parser/types.ts:940](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L940) |
| <a id="prompt"></a> `prompt?` | `undefined` | - | - | [parser/types.ts:934](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L934) |
| <a id="required"></a> `required?` | `undefined` | - | - | [parser/types.ts:937](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L937) |
| <a id="requiredlabel"></a> `requiredLabel?` | `undefined` | - | - | [parser/types.ts:939](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L939) |
| <a id="requiredvalue"></a> `requiredValue?` | `undefined` | - | - | [parser/types.ts:938](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L938) |
| <a id="secondarytext"></a> `secondaryText?` | `undefined` | - | - | [parser/types.ts:936](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L936) |
| <a id="style"></a> `style?` | [`Styles`](../type-aliases/Styles.md) | You can set styles here, using React CSSProperties, for example: `{"width": 100}` or `{"width": "50%"}` | [`BaseResponse`](BaseResponse.md).[`style`](BaseResponse.md#style) | [parser/types.ts:388](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L388) |
| <a id="stylesheetpath"></a> `stylesheetPath?` | `string` | The path to the external stylesheet file. | [`BaseResponse`](BaseResponse.md).[`stylesheetPath`](BaseResponse.md#stylesheetpath) | [parser/types.ts:386](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L386) |
| <a id="type"></a> `type` | `"divider"` | - | - | [parser/types.ts:932](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L932) |
| <a id="withdivider"></a> `withDivider?` | `boolean` | Renders the response with a trailing divider. If present, will override the divider setting in the components or `uiConfig`. | [`BaseResponse`](BaseResponse.md).[`withDivider`](BaseResponse.md#withdivider) | [parser/types.ts:382](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L382) |
| <a id="withdontknow"></a> `withDontKnow?` | `undefined` | - | - | [parser/types.ts:942](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L942) |
