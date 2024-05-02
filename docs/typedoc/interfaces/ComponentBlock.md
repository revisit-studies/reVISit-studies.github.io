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

[parser/types.ts:524](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L524)

___

### id

• `Optional` **id**: `string`

The id of the block. This is used to identify the block in the SkipConditions and is only required if you want to refer to the whole block in the condition.to property.

#### Defined in

[parser/types.ts:520](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L520)

___

### interruptions

• `Optional` **interruptions**: [`InterruptionBlock`](../modules.md#interruptionblock)[]

The interruptions property specifies an array of interruptions. These can be used for breaks or attention checks.

#### Defined in

[parser/types.ts:528](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L528)

___

### numSamples

• `Optional` **numSamples**: `number`

The number of samples to use for the random assignments. This means you can randomize across 3 components while only showing a participant 2 at a time.

#### Defined in

[parser/types.ts:526](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L526)

___

### order

• **order**: ``"random"`` \| ``"latinSquare"`` \| ``"fixed"``

The type of order. This can be random (pure random), latinSquare (random with some guarantees), or fixed.

#### Defined in

[parser/types.ts:522](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L522)

___

### skip

• `Optional` **skip**: [`SkipConditions`](../modules.md#skipconditions)

The skip conditions for the block.

#### Defined in

[parser/types.ts:530](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L530)
