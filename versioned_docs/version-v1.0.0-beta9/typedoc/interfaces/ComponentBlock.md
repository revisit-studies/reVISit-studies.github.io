---
sidebar_position: 1
displayed_sidebar: docs
---

# ComponentBlock

The ComponentBlock interface is used to define order properties within the sequence. This is used to define the order of components in a study and the skip logic. It supports random assignment of trials using a pure random assignment and a latin square.

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `components` | (`string` \| [`ComponentBlock`](ComponentBlock.md))[] | The components that are included in the order. |
| `id?` | `string` | The id of the block. This is used to identify the block in the SkipConditions and is only required if you want to refer to the whole block in the condition.to property. |
| `interruptions?` | [`InterruptionBlock`](../type-aliases/InterruptionBlock.md)[] | The interruptions property specifies an array of interruptions. These can be used for breaks or attention checks. |
| `numSamples?` | `number` | The number of samples to use for the random assignments. This means you can randomize across 3 components while only showing a participant 2 at a time. |
| `order` | `"random"` \| `"latinSquare"` \| `"fixed"` | The type of order. This can be random (pure random), latinSquare (random with some guarantees), or fixed. |
| `skip?` | [`SkipConditions`](../type-aliases/SkipConditions.md) | The skip conditions for the block. |
