---
sidebar_position: 1
displayed_sidebar: docs
---

# Interface: SliderResponse

The SliderResponse interface is used to define the properties of a slider response.
SliderResponses render as a slider input with user specified steps. For example, you could have steps of 0, 50, and 100.

## Hierarchy

- [`BaseResponse`](BaseResponse.md)

  ↳ **`SliderResponse`**

## Table of contents

### Properties

- [hidden](SliderResponse.md#hidden)
- [id](SliderResponse.md#id)
- [location](SliderResponse.md#location)
- [options](SliderResponse.md#options)
- [paramCapture](SliderResponse.md#paramcapture)
- [prompt](SliderResponse.md#prompt)
- [required](SliderResponse.md#required)
- [requiredLabel](SliderResponse.md#requiredlabel)
- [requiredValue](SliderResponse.md#requiredvalue)
- [type](SliderResponse.md#type)

## Properties

### hidden

• `Optional` **hidden**: `boolean`

Controls whether the response is hidden.

#### Inherited from

[BaseResponse](BaseResponse.md).[hidden](BaseResponse.md#hidden)

#### Defined in

[parser/types.ts:159](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L159)

___

### id

• **id**: `string`

The id of the response. This is used to identify the response in the data file.

#### Inherited from

[BaseResponse](BaseResponse.md).[id](BaseResponse.md#id)

#### Defined in

[parser/types.ts:145](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L145)

___

### location

• **location**: ``"sidebar"`` \| ``"aboveStimulus"`` \| ``"belowStimulus"``

Controls the response location. These might be the same for all responses, or differ across responses.

#### Inherited from

[BaseResponse](BaseResponse.md).[location](BaseResponse.md#location)

#### Defined in

[parser/types.ts:151](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L151)

___

### options

• **options**: [`Option`](Option.md)[]

This define the steps in the slider and the extent of the slider.

#### Defined in

[parser/types.ts:233](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L233)

___

### paramCapture

• `Optional` **paramCapture**: `string`

Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer uiConfig.urlParticipantIdParam if you are capturing a participant ID.

#### Inherited from

[BaseResponse](BaseResponse.md).[paramCapture](BaseResponse.md#paramcapture)

#### Defined in

[parser/types.ts:157](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L157)

___

### prompt

• **prompt**: `string`

The prompt that is displayed to the participant. You can use markdown here to render images, links, etc.

#### Inherited from

[BaseResponse](BaseResponse.md).[prompt](BaseResponse.md#prompt)

#### Defined in

[parser/types.ts:147](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L147)

___

### required

• **required**: `boolean`

Controls whether the response is required to be answered.

#### Inherited from

[BaseResponse](BaseResponse.md).[required](BaseResponse.md#required)

#### Defined in

[parser/types.ts:149](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L149)

___

### requiredLabel

• `Optional` **requiredLabel**: `string`

You can provide a required label, which makes it so a participant has to answer with a response that matches label.

#### Inherited from

[BaseResponse](BaseResponse.md).[requiredLabel](BaseResponse.md#requiredlabel)

#### Defined in

[parser/types.ts:155](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L155)

___

### requiredValue

• `Optional` **requiredValue**: `unknown`

You can provide a required value, which makes it so a participant has to answer with that value.

#### Inherited from

[BaseResponse](BaseResponse.md).[requiredValue](BaseResponse.md#requiredvalue)

#### Defined in

[parser/types.ts:153](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L153)

___

### type

• **type**: ``"slider"``

#### Defined in

[parser/types.ts:231](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L231)
