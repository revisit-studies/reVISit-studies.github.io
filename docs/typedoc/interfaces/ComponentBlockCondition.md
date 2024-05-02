---
sidebar_position: 1
displayed_sidebar: docs
---

# Interface: ComponentBlockCondition

The ComponentBlockCondition interface is used to define a SkipCondition based on the number of correct or incorrect components in a block. All answers on all components in the block are checked.

## Table of contents

### Properties

- [check](ComponentBlockCondition.md#check)
- [condition](ComponentBlockCondition.md#condition)
- [to](ComponentBlockCondition.md#to)
- [value](ComponentBlockCondition.md#value)

## Properties

### check

• **check**: ``"block"``

The check we'll perform.

#### Defined in

[parser/types.ts:491](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L491)

___

### condition

• **condition**: ``"numCorrect"`` \| ``"numIncorrect"``

The condition to check.

#### Defined in

[parser/types.ts:493](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L493)

___

### to

• **to**: `string`

The id of the component or block to skip to

#### Defined in

[parser/types.ts:497](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L497)

___

### value

• **value**: `number`

The number of correct or incorrect responses to check for.

#### Defined in

[parser/types.ts:495](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L495)
