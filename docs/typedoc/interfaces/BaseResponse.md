---
sidebar_position: 1
displayed_sidebar: docs
---

# Interface: BaseResponse

The BaseResponse interface is used to define the required fields for all responses.
Other Response interfaces inherit properties from the BaseResponse interface.
Therefore, all responses must include these properties.

## Hierarchy

- **`BaseResponse`**

  ↳ [`NumericalResponse`](NumericalResponse.md)

  ↳ [`ShortTextResponse`](ShortTextResponse.md)

  ↳ [`LongTextResponse`](LongTextResponse.md)

  ↳ [`LikertResponse`](LikertResponse.md)

  ↳ [`DropdownResponse`](DropdownResponse.md)

  ↳ [`SliderResponse`](SliderResponse.md)

  ↳ [`RadioResponse`](RadioResponse.md)

  ↳ [`CheckboxResponse`](CheckboxResponse.md)

  ↳ [`IFrameResponse`](IFrameResponse.md)

## Table of contents

### Properties

- [hidden](BaseResponse.md#hidden)
- [id](BaseResponse.md#id)
- [location](BaseResponse.md#location)
- [paramCapture](BaseResponse.md#paramcapture)
- [prompt](BaseResponse.md#prompt)
- [required](BaseResponse.md#required)
- [requiredLabel](BaseResponse.md#requiredlabel)
- [requiredValue](BaseResponse.md#requiredvalue)

## Properties

### hidden

• `Optional` **hidden**: `boolean`

Controls whether the response is hidden.

#### Defined in

[parser/types.ts:159](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L159)

___

### id

• **id**: `string`

The id of the response. This is used to identify the response in the data file.

#### Defined in

[parser/types.ts:145](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L145)

___

### location

• **location**: ``"sidebar"`` \| ``"aboveStimulus"`` \| ``"belowStimulus"``

Controls the response location. These might be the same for all responses, or differ across responses.

#### Defined in

[parser/types.ts:151](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L151)

___

### paramCapture

• `Optional` **paramCapture**: `string`

Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer uiConfig.urlParticipantIdParam if you are capturing a participant ID.

#### Defined in

[parser/types.ts:157](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L157)

___

### prompt

• **prompt**: `string`

The prompt that is displayed to the participant. You can use markdown here to render images, links, etc.

#### Defined in

[parser/types.ts:147](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L147)

___

### required

• **required**: `boolean`

Controls whether the response is required to be answered.

#### Defined in

[parser/types.ts:149](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L149)

___

### requiredLabel

• `Optional` **requiredLabel**: `string`

You can provide a required label, which makes it so a participant has to answer with a response that matches label.

#### Defined in

[parser/types.ts:155](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L155)

___

### requiredValue

• `Optional` **requiredValue**: `unknown`

You can provide a required value, which makes it so a participant has to answer with that value.

#### Defined in

[parser/types.ts:153](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L153)
