---
sidebar_position: 1
displayed_sidebar: docs
---

# Interface: LikertResponse

The LikertResponse interface is used to define the properties of a likert response.
LikertResponses render as radio buttons with a user specified number of options, which can be controlled through the preset. For example, preset: 5 will render 5 radio buttons, and preset: 7 will render 7 radio buttons.
LikertResponses can also have a description, and left and right labels.
The left and right labels are used to label the left and right ends of the likert scale with values such as 'Strongly Disagree' and 'Strongly Agree'.

## Hierarchy

- [`BaseResponse`](BaseResponse.md)

  ↳ **`LikertResponse`**

## Table of contents

### Properties

- [desc](LikertResponse.md#desc)
- [hidden](LikertResponse.md#hidden)
- [id](LikertResponse.md#id)
- [leftLabel](LikertResponse.md#leftlabel)
- [location](LikertResponse.md#location)
- [paramCapture](LikertResponse.md#paramcapture)
- [preset](LikertResponse.md#preset)
- [prompt](LikertResponse.md#prompt)
- [required](LikertResponse.md#required)
- [requiredLabel](LikertResponse.md#requiredlabel)
- [requiredValue](LikertResponse.md#requiredvalue)
- [rightLabel](LikertResponse.md#rightlabel)
- [type](LikertResponse.md#type)

## Properties

### desc

• `Optional` **desc**: `string`

The description of the likert scale.

#### Defined in

[parser/types.ts:207](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L207)

___

### hidden

• `Optional` **hidden**: `boolean`

Controls whether the response is hidden.

#### Inherited from

[BaseResponse](BaseResponse.md).[hidden](BaseResponse.md#hidden)

#### Defined in

[parser/types.ts:159](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L159)

___

### id

• **id**: `string`

The id of the response. This is used to identify the response in the data file.

#### Inherited from

[BaseResponse](BaseResponse.md).[id](BaseResponse.md#id)

#### Defined in

[parser/types.ts:145](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L145)

___

### leftLabel

• `Optional` **leftLabel**: `string`

The left label of the likert scale. E.g Strongly Disagree

#### Defined in

[parser/types.ts:209](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L209)

___

### location

• **location**: ``"sidebar"`` \| ``"aboveStimulus"`` \| ``"belowStimulus"``

Controls the response location. These might be the same for all responses, or differ across responses.

#### Inherited from

[BaseResponse](BaseResponse.md).[location](BaseResponse.md#location)

#### Defined in

[parser/types.ts:151](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L151)

___

### paramCapture

• `Optional` **paramCapture**: `string`

Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer uiConfig.urlParticipantIdParam if you are capturing a participant ID.

#### Inherited from

[BaseResponse](BaseResponse.md).[paramCapture](BaseResponse.md#paramcapture)

#### Defined in

[parser/types.ts:157](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L157)

___

### preset

• **preset**: `number`

The number of options to render.

#### Defined in

[parser/types.ts:205](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L205)

___

### prompt

• **prompt**: `string`

The prompt that is displayed to the participant. You can use markdown here to render images, links, etc.

#### Inherited from

[BaseResponse](BaseResponse.md).[prompt](BaseResponse.md#prompt)

#### Defined in

[parser/types.ts:147](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L147)

___

### required

• **required**: `boolean`

Controls whether the response is required to be answered.

#### Inherited from

[BaseResponse](BaseResponse.md).[required](BaseResponse.md#required)

#### Defined in

[parser/types.ts:149](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L149)

___

### requiredLabel

• `Optional` **requiredLabel**: `string`

You can provide a required label, which makes it so a participant has to answer with a response that matches label.

#### Inherited from

[BaseResponse](BaseResponse.md).[requiredLabel](BaseResponse.md#requiredlabel)

#### Defined in

[parser/types.ts:155](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L155)

___

### requiredValue

• `Optional` **requiredValue**: `unknown`

You can provide a required value, which makes it so a participant has to answer with that value.

#### Inherited from

[BaseResponse](BaseResponse.md).[requiredValue](BaseResponse.md#requiredvalue)

#### Defined in

[parser/types.ts:153](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L153)

___

### rightLabel

• `Optional` **rightLabel**: `string`

The right label of the likert scale. E.g Strongly Agree

#### Defined in

[parser/types.ts:211](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L211)

___

### type

• **type**: ``"likert"``

#### Defined in

[parser/types.ts:203](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L203)
