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

[parser/types.ts:504](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L504)

___

### condition

• **condition**: ``"numCorrect"`` \| ``"numIncorrect"``

The condition to check.

#### Defined in

[parser/types.ts:506](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L506)

___

### to

• **to**: `string`

The id of the component or block to skip to

#### Defined in

[parser/types.ts:510](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L510)

___

### value

• **value**: `number`

The number of correct or incorrect responses to check for.

#### Defined in

[parser/types.ts:508](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L508)
