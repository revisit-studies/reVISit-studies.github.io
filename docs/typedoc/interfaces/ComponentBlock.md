---
sidebar_position: 1
displayed_sidebar: docs
---

# Interface: ComponentBlock

The ComponentBlock interface is used to define order properties within the sequence. This is used to define the order of components in a study and the skip logic. It supports random assignment of trials using a pure random assignment and a latin square.

## Table of contents

### Properties

- [components](ComponentBlock.md#components)
- [id](ComponentBlock.md#id)
- [interruptions](ComponentBlock.md#interruptions)
- [numSamples](ComponentBlock.md#numsamples)
- [order](ComponentBlock.md#order)
- [skip](ComponentBlock.md#skip)

## Properties

### components

• **components**: (`string` \| [`ComponentBlock`](ComponentBlock.md))[]

The components that are included in the order.

#### Defined in

[parser/types.ts:537](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L537)

___

### id

• `Optional` **id**: `string`

The id of the block. This is used to identify the block in the SkipConditions and is only required if you want to refer to the whole block in the condition.to property.

#### Defined in

[parser/types.ts:533](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L533)

___

### interruptions

• `Optional` **interruptions**: [`InterruptionBlock`](../modules.md#interruptionblock)[]

The interruptions property specifies an array of interruptions. These can be used for breaks or attention checks.

#### Defined in

[parser/types.ts:541](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L541)

___

### numSamples

• `Optional` **numSamples**: `number`

The number of samples to use for the random assignments. This means you can randomize across 3 components while only showing a participant 2 at a time.

#### Defined in

[parser/types.ts:539](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L539)

___

### order

• **order**: ``"random"`` \| ``"latinSquare"`` \| ``"fixed"``

The type of order. This can be random (pure random), latinSquare (random with some guarantees), or fixed.

#### Defined in

[parser/types.ts:535](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L535)

___

### skip

• `Optional` **skip**: [`SkipConditions`](../modules.md#skipconditions)

The skip conditions for the block.

#### Defined in

[parser/types.ts:543](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L543)
