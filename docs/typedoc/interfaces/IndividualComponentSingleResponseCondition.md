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

[parser/types.ts:482](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L482)

___

### name

• **name**: `string`

The name of the component to check.

#### Defined in

[parser/types.ts:480](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L480)

___

### responseId

• **responseId**: `string`

The response id to check.

#### Defined in

[parser/types.ts:484](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L484)

___

### to

• **to**: `string`

The id of the component or block to skip to

#### Defined in

[parser/types.ts:488](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L488)

___

### value

• **value**: `string` \| `number`

The value to check.

#### Defined in

[parser/types.ts:486](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L486)
