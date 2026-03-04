# TextOnlyResponse

Defined in: [parser/types.ts:795](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L795)

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
| <a id="excludefromrandomization"></a> `excludeFromRandomization?` | `boolean` | Exclude response from randomization. If present, will override the responseOrder randomization setting in the components. Defaults to false. | - | [`BaseResponse`](BaseResponse.md).[`excludeFromRandomization`](BaseResponse.md#excludefromrandomization) | [parser/types.ts:375](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L375) |
| <a id="hidden"></a> `hidden?` | `undefined` | - | - | - | [parser/types.ts:807](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L807) |
| <a id="id"></a> `id` | `string` | The id of the response. This is used to identify the response in the data file. | - | [`BaseResponse`](BaseResponse.md).[`id`](BaseResponse.md#id) | [parser/types.ts:347](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L347) |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the response. This does not accept markdown. | - | [`BaseResponse`](BaseResponse.md).[`infoText`](BaseResponse.md#infotext) | [parser/types.ts:353](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L353) |
| <a id="location"></a> `location?` | [`ConfigResponseBlockLocation`](../type-aliases/ConfigResponseBlockLocation.md) | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` | - | [`BaseResponse`](BaseResponse.md).[`location`](BaseResponse.md#location) | [parser/types.ts:357](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L357) |
| <a id="paramcapture"></a> `paramCapture?` | `undefined` | - | - | - | [parser/types.ts:806](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L806) |
| <a id="prompt"></a> `prompt` | `string` | The markdown text that is displayed to the user. | [`BaseResponse`](BaseResponse.md).[`prompt`](BaseResponse.md#prompt) | - | [parser/types.ts:798](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L798) |
| <a id="required"></a> `required?` | `undefined` | - | - | - | [parser/types.ts:803](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L803) |
| <a id="requiredlabel"></a> `requiredLabel?` | `undefined` | - | - | - | [parser/types.ts:805](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L805) |
| <a id="requiredvalue"></a> `requiredValue?` | `undefined` | - | - | - | [parser/types.ts:804](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L804) |
| <a id="restartenumeration"></a> `restartEnumeration?` | `boolean` | Whether to restart the enumeration of the questions. Defaults to false. | - | - | [parser/types.ts:800](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L800) |
| <a id="secondarytext"></a> `secondaryText?` | `undefined` | - | - | - | [parser/types.ts:802](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L802) |
| <a id="style"></a> `style?` | [`Styles`](../type-aliases/Styles.md) | You can set styles here, using React CSSProperties, for example: `{"width": 100}` or `{"width": "50%"}` | - | [`BaseResponse`](BaseResponse.md).[`style`](BaseResponse.md#style) | [parser/types.ts:373](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L373) |
| <a id="stylesheetpath"></a> `stylesheetPath?` | `string` | The path to the external stylesheet file. | - | [`BaseResponse`](BaseResponse.md).[`stylesheetPath`](BaseResponse.md#stylesheetpath) | [parser/types.ts:371](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L371) |
| <a id="type"></a> `type` | `"textOnly"` | - | - | - | [parser/types.ts:796](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L796) |
| <a id="withdivider"></a> `withDivider?` | `boolean` | Renders the response with a trailing divider. If present, will override the divider setting in the components or uiConfig. | - | [`BaseResponse`](BaseResponse.md).[`withDivider`](BaseResponse.md#withdivider) | [parser/types.ts:367](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L367) |
| <a id="withdontknow"></a> `withDontKnow?` | `undefined` | - | - | - | [parser/types.ts:808](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L808) |
