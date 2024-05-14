---
sidebar_position: 1
displayed_sidebar: docs
---

# Interface: NumericalResponse

The NumericalResponse interface is used to define the properties of a numerical response.
NumericalResponses render as a text input that only accepts numbers, and can optionally have a min and max value, or a placeholder.

## Hierarchy

- [`BaseResponse`](BaseResponse.md)

  ↳ **`NumericalResponse`**

## Table of contents

### Properties

- [hidden](NumericalResponse.md#hidden)
- [id](NumericalResponse.md#id)
- [location](NumericalResponse.md#location)
- [max](NumericalResponse.md#max)
- [min](NumericalResponse.md#min)
- [paramCapture](NumericalResponse.md#paramcapture)
- [placeholder](NumericalResponse.md#placeholder)
- [prompt](NumericalResponse.md#prompt)
- [required](NumericalResponse.md#required)
- [requiredLabel](NumericalResponse.md#requiredlabel)
- [requiredValue](NumericalResponse.md#requiredvalue)
- [type](NumericalResponse.md#type)

## Properties

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

### location

• **location**: ``"sidebar"`` \| ``"aboveStimulus"`` \| ``"belowStimulus"``

Controls the response location. These might be the same for all responses, or differ across responses.

#### Inherited from

[BaseResponse](BaseResponse.md).[location](BaseResponse.md#location)

#### Defined in

[parser/types.ts:151](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L151)

___

### max

• `Optional` **max**: `number`

The maximum value that is accepted in the input.

#### Defined in

[parser/types.ts:173](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L173)

___

### min

• `Optional` **min**: `number`

The minimum value that is accepted in the input.

#### Defined in

[parser/types.ts:171](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L171)

___

### paramCapture

• `Optional` **paramCapture**: `string`

Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer uiConfig.urlParticipantIdParam if you are capturing a participant ID.

#### Inherited from

[BaseResponse](BaseResponse.md).[paramCapture](BaseResponse.md#paramcapture)

#### Defined in

[parser/types.ts:157](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L157)

___

### placeholder

• `Optional` **placeholder**: `string`

The placeholder text that is displayed in the input.

#### Defined in

[parser/types.ts:169](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L169)

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

### type

• **type**: ``"numerical"``

#### Defined in

[parser/types.ts:167](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L167)
