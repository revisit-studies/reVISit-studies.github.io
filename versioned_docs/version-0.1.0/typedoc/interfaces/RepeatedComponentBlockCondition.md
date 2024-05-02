---
sidebar_position: 1
displayed_sidebar: docs
---

# Interface: RepeatedComponentBlockCondition

The RepeatedComponentBlockCondition interface is used to define a SkipCondition based on the number of correct or incorrect repeated components. You might use this if you need to check if an attention check was failed multiple times.

## Table of contents

### Properties

- [check](RepeatedComponentBlockCondition.md#check)
- [condition](RepeatedComponentBlockCondition.md#condition)
- [name](RepeatedComponentBlockCondition.md#name)
- [to](RepeatedComponentBlockCondition.md#to)
- [value](RepeatedComponentBlockCondition.md#value)

## Properties

### check

• **check**: ``"repeatedComponent"``

The check we'll perform.

#### Defined in

[parser/types.ts:505](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L505)

___

### condition

• **condition**: ``"numCorrect"`` \| ``"numIncorrect"``

The condition to check.

#### Defined in

[parser/types.ts:507](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L507)

___

### name

• **name**: `string`

The name of the repeated component to check (e.g. attentionCheck).

#### Defined in

[parser/types.ts:503](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L503)

___

### to

• **to**: `string`

The id of the component or block to skip to

#### Defined in

[parser/types.ts:511](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L511)

___

### value

• **value**: `number`

The number of correct or incorrect responses to check for.

#### Defined in

[parser/types.ts:509](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L509)
