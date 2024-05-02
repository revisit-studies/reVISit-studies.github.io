---
sidebar_position: 1
displayed_sidebar: docs
---

# Interface: IndividualComponentSingleResponseCondition

The IndividualComponentSingleResponseCondition interface is used to define a SkipCondition based on a single answer to a specific component. If the component is repeated within the block, this condition will only check the first instance of the component once the order is flattened.

## Table of contents

### Properties

- [check](IndividualComponentSingleResponseCondition.md#check)
- [name](IndividualComponentSingleResponseCondition.md#name)
- [responseId](IndividualComponentSingleResponseCondition.md#responseid)
- [to](IndividualComponentSingleResponseCondition.md#to)
- [value](IndividualComponentSingleResponseCondition.md#value)

## Properties

### check

• **check**: ``"response"``

The check we'll perform.

#### Defined in

[parser/types.ts:469](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L469)

___

### name

• **name**: `string`

The name of the component to check.

#### Defined in

[parser/types.ts:467](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L467)

___

### responseId

• **responseId**: `string`

The response id to check.

#### Defined in

[parser/types.ts:471](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L471)

___

### to

• **to**: `string`

The id of the component or block to skip to

#### Defined in

[parser/types.ts:475](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L475)

___

### value

• **value**: `string` \| `number`

The value to check.

#### Defined in

[parser/types.ts:473](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L473)
