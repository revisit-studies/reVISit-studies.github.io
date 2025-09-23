---
sidebar_position: 1
displayed_sidebar: reference
---

# TextOnlyResponse

Defined in: [parser/types.ts:631](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L631)

The TextOnlyResponse interface is used to define the properties of a text only response.
TextOnlyResponses render as a block of text that is displayed to the user. This can be used to display instructions or other information.
It does not accept any input from the user.

Example:
```js
{
  "id": "textOnlyResponse",
  "type": "textOnly",
  "prompt": "This is a text only response, it accepts markdown so you can **bold** or _italicize_ text.",
  "location": "belowStimulus",
  "restartEnumeration": true
}
```

In this example, the text only response is displayed below the stimulus and the enumeration of the questions is restarted.

## Extends

- `Omit`\<[`BaseResponse`](BaseResponse.md), `"secondaryText"` \| `"required"` \| `"requiredValue"` \| `"requiredLabel"` \| `"paramCapture"` \| `"hidden"` \| `"withDontKnow"`\>

## Properties

| Property | Type | Description | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="hidden"></a> `hidden?` | `undefined` | - | - | - | [parser/types.ts:643](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L643) |
| <a id="id"></a> `id` | `string` | The id of the response. This is used to identify the response in the data file. | - | [`BaseResponse`](BaseResponse.md).[`id`](BaseResponse.md#id) | [parser/types.ts:244](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L244) |
| <a id="location"></a> `location?` | [`ConfigResponseBlockLocation`](../type-aliases/ConfigResponseBlockLocation.md) | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` | - | [`BaseResponse`](BaseResponse.md).[`location`](BaseResponse.md#location) | [parser/types.ts:252](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L252) |
| <a id="paramcapture"></a> `paramCapture?` | `undefined` | - | - | - | [parser/types.ts:642](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L642) |
| <a id="prompt"></a> `prompt` | `string` | The markdown text that is displayed to the user. | [`BaseResponse`](BaseResponse.md).[`prompt`](BaseResponse.md#prompt) | - | [parser/types.ts:634](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L634) |
| <a id="required"></a> `required?` | `undefined` | - | - | - | [parser/types.ts:639](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L639) |
| <a id="requiredlabel"></a> `requiredLabel?` | `undefined` | - | - | - | [parser/types.ts:641](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L641) |
| <a id="requiredvalue"></a> `requiredValue?` | `undefined` | - | - | - | [parser/types.ts:640](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L640) |
| <a id="restartenumeration"></a> `restartEnumeration?` | `boolean` | Whether to restart the enumeration of the questions. Defaults to false. | - | - | [parser/types.ts:636](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L636) |
| <a id="secondarytext"></a> `secondaryText?` | `undefined` | - | - | - | [parser/types.ts:638](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L638) |
| <a id="style"></a> `style?` | [`Styles`](../type-aliases/Styles.md) | You can set styles here, using React CSSProperties, for example: `{"width": 100}` or `{"width": "50%"}` | - | [`BaseResponse`](BaseResponse.md).[`style`](BaseResponse.md#style) | [parser/types.ts:268](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L268) |
| <a id="stylesheetpath"></a> `stylesheetPath?` | `string` | The path to the external stylesheet file. | - | [`BaseResponse`](BaseResponse.md).[`stylesheetPath`](BaseResponse.md#stylesheetpath) | [parser/types.ts:266](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L266) |
| <a id="type"></a> `type` | `"textOnly"` | - | - | - | [parser/types.ts:632](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L632) |
| <a id="withdivider"></a> `withDivider?` | `boolean` | Renders the response with a trailing divider. If present, will override the divider setting in the components or uiConfig. | - | [`BaseResponse`](BaseResponse.md).[`withDivider`](BaseResponse.md#withdivider) | [parser/types.ts:262](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L262) |
| <a id="withdontknow"></a> `withDontKnow?` | `undefined` | - | - | - | [parser/types.ts:644](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L644) |
