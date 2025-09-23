---
sidebar_position: 1
displayed_sidebar: reference
---

# BaseResponse

Defined in: [parser/types.ts:242](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L242)

The BaseResponse interface is used to define the required fields for all responses.
Other Response interfaces inherit properties from the BaseResponse interface.
Therefore, all responses must include these properties.

## Extended by

- [`NumericalResponse`](NumericalResponse.md)
- [`ShortTextResponse`](ShortTextResponse.md)
- [`LongTextResponse`](LongTextResponse.md)
- [`LikertResponse`](LikertResponse.md)
- [`MatrixResponse`](MatrixResponse.md)
- [`DropdownResponse`](DropdownResponse.md)
- [`SliderResponse`](SliderResponse.md)
- [`RadioResponse`](RadioResponse.md)
- [`CheckboxResponse`](CheckboxResponse.md)
- [`ReactiveResponse`](ReactiveResponse.md)
- [`ButtonsResponse`](ButtonsResponse.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="hidden"></a> `hidden?` | `boolean` | Controls whether the response is hidden. | [parser/types.ts:260](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L260) |
| <a id="id"></a> `id` | `string` | The id of the response. This is used to identify the response in the data file. | [parser/types.ts:244](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L244) |
| <a id="location"></a> `location?` | [`ConfigResponseBlockLocation`](../type-aliases/ConfigResponseBlockLocation.md) | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` | [parser/types.ts:252](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L252) |
| <a id="paramcapture"></a> `paramCapture?` | `string` | Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer uiConfig.urlParticipantIdParam if you are capturing a participant ID. | [parser/types.ts:258](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L258) |
| <a id="prompt"></a> `prompt` | `string` | The prompt that is displayed to the participant. You can use markdown here to render images, links, etc. | [parser/types.ts:246](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L246) |
| <a id="required"></a> `required?` | `boolean` | Controls whether the response is required to be answered. Defaults to true. | [parser/types.ts:250](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L250) |
| <a id="requiredlabel"></a> `requiredLabel?` | `string` | You can provide a required label, which makes it so a participant has to answer with a response that matches label. | [parser/types.ts:256](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L256) |
| <a id="requiredvalue"></a> `requiredValue?` | `unknown` | You can provide a required value, which makes it so a participant has to answer with that value. | [parser/types.ts:254](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L254) |
| <a id="secondarytext"></a> `secondaryText?` | `string` | The secondary text that is displayed to the participant under the prompt. This does not accept markdown. | [parser/types.ts:248](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L248) |
| <a id="style"></a> `style?` | [`Styles`](../type-aliases/Styles.md) | You can set styles here, using React CSSProperties, for example: {"width": 100} or {"width": "50%"} | [parser/types.ts:268](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L268) |
| <a id="stylesheetpath"></a> `stylesheetPath?` | `string` | The path to the external stylesheet file. | [parser/types.ts:266](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L266) |
| <a id="withdivider"></a> `withDivider?` | `boolean` | Renders the response with a trailing divider. If present, will override the divider setting in the components or uiConfig. | [parser/types.ts:262](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L262) |
| <a id="withdontknow"></a> `withDontKnow?` | `boolean` | Renders the response with an option for "I don't know". This counts as a completed answer for the validation. | [parser/types.ts:264](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L264) |
