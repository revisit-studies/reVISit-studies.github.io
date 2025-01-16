---
sidebar_position: 1
displayed_sidebar: reference
---

# BaseResponse

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
- [`IFrameResponse`](IFrameResponse.md)

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `hidden?` | `boolean` | Controls whether the response is hidden. |
| `id` | `string` | The id of the response. This is used to identify the response in the data file. |
| `location?` | `"sidebar"` \| `"aboveStimulus"` \| `"belowStimulus"` | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` |
| `paramCapture?` | `string` | Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer uiConfig.urlParticipantIdParam if you are capturing a participant ID. |
| `prompt` | `string` | The prompt that is displayed to the participant. You can use markdown here to render images, links, etc. |
| `required?` | `boolean` | Controls whether the response is required to be answered. Defaults to true. |
| `requiredLabel?` | `string` | You can provide a required label, which makes it so a participant has to answer with a response that matches label. |
| `requiredValue?` | `unknown` | You can provide a required value, which makes it so a participant has to answer with that value. |
| `secondaryText?` | `string` | The secondary text that is displayed to the participant under the prompt. This does not accept markdown. |
| `withDivider?` | `boolean` | Renders the response with a trailing divider. |
| `withDontKnow?` | `boolean` | Renders the response with an option for "I don't know". This counts as a completed answer for the validation. |
