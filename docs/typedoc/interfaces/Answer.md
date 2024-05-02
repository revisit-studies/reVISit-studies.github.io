---
sidebar_position: 1
displayed_sidebar: docs
---

# Interface: Answer

The Answer interface is used to define the properties of an answer. Answers are used to define the correct answer for a task. These are generally used in training tasks or if skip logic is required based on the answer.

## Table of contents

### Properties

- [acceptableHigh](Answer.md#acceptablehigh)
- [acceptableLow](Answer.md#acceptablelow)
- [answer](Answer.md#answer)
- [id](Answer.md#id)

## Properties

### acceptableHigh

• `Optional` **acceptableHigh**: `number`

The acceptable high value for the answer. This is used to define a range of acceptable answers.

#### Defined in

[parser/types.ts:279](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L279)

___

### acceptableLow

• `Optional` **acceptableLow**: `number`

The acceptable low value for the answer. This is used to define a range of acceptable answers.

#### Defined in

[parser/types.ts:277](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L277)

___

### answer

• **answer**: `any`

The correct answer to the question.

#### Defined in

[parser/types.ts:275](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L275)

___

### id

• **id**: `string`

The id of the answer. This is used to identify the answer in the data file.

#### Defined in

[parser/types.ts:272](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L272)
