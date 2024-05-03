---
sidebar_position: 1
displayed_sidebar: docs
---

# Interface: RadioResponse

The RadioResponse interface is used to define the properties of a radio response.
RadioResponses render as a radio input with user specified options, and optionally left and right labels.

## Hierarchy

- [`BaseResponse`](BaseResponse.md)

  ↳ **`RadioResponse`**

## Table of contents

### Properties

- [hidden](RadioResponse.md#hidden)
- [id](RadioResponse.md#id)
- [leftLabel](RadioResponse.md#leftlabel)
- [location](RadioResponse.md#location)
- [options](RadioResponse.md#options)
- [paramCapture](RadioResponse.md#paramcapture)
- [prompt](RadioResponse.md#prompt)
- [required](RadioResponse.md#required)
- [requiredLabel](RadioResponse.md#requiredlabel)
- [requiredValue](RadioResponse.md#requiredvalue)
- [rightLabel](RadioResponse.md#rightlabel)
- [type](RadioResponse.md#type)

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

### leftLabel

• `Optional` **leftLabel**: `string`

#### Defined in

[parser/types.ts:243](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L243)

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

#### Defined in

[parser/types.ts:242](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L242)

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

### rightLabel

• `Optional` **rightLabel**: `string`

#### Defined in

[parser/types.ts:244](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L244)

___

### type

• **type**: ``"radio"``

#### Defined in

[parser/types.ts:241](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L241)
