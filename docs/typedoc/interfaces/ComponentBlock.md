---
sidebar_position: 1
displayed_sidebar: reference
---

# ComponentBlock

Defined in: [parser/types.ts:1193](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L1193)

The ComponentBlock interface is used to define order properties within the sequence. This is used to define the order of components in a study and the skip logic. It supports random assignment of trials using a pure random assignment and a [latin square](https://en.wikipedia.org/wiki/Latin_square).

The pure random assignment is a random assignment with no guarantees. For example, one component _could_ show up in the first position 10 times in a row. However, this situation is unlikely.

Here's a snippet that shows how to use the random order:

```js
{
 "order": "random",
 "components": [
   "component1",
   "component2",
   "component3"
 ]
}
```
This snippet would produce a random order of the components in the sequence array. For example, the resulting sequence array could be :

```js
[
 ["component2", "component3", "component1"],
 ["component1", "component3", "component2"],
 ["component3", "component1", "component2"],
 ...
]
```

The latin square assignment is a random assignment with some guarantees. It ensures that each component is shown an equal number of times in each position. Here's a snippet that shows how to use the latin square order:

```js
{
 "order": "latinSquare",
 "components": [
   "component1",
   "component2",
   "component3"
 ]
}
```

This snippet would produce a latin square order of the components in the sequence array. Since the latin square guarantees that each component is shown an equal number of times in each position, the resulting sequence array could be:

```js
[
 ["component1", "component2", "component3"],
 ["component2", "component3", "component1"],
 ["component3", "component1", "component2"],
 ...
]
```

The fixed assignment is a fixed assignment of components. This is used when you want to show the components in a specific order. Here's a snippet that shows how to use the fixed order:

```js
{
 "order": "fixed",
 "components": [
   "component1",
   "component2",
   "component3"
 ]
}
```

This snippet would produce a fixed order of the components in the sequence array. The resulting sequence array would be:

```js
[
 ["component1", "component2", "component3"],
 ["component1", "component2", "component3"],
 ["component1", "component2", "component3"],
 ...
]
```

In addition to the order property, the ComponentBlock interface also includes the `"numSamples"` property. This is used to reduce the number of components shown to a participant. This property respects the order property and the guarantees provided by the order property. For example, if you have three components in the components array and you set `"numSamples"` to 2, you would randomize across the three components while only showing a participant two of them. Here's a snippet that shows how to use the numSamples property:

```js
{
 "order": "latinSquare",
 "components": [
   "component1",
   "component2",
   "component3"
 ],
 "numSamples": 2
}
```

This snippet would produce a latin square order of the components in the sequence array. Since the latin square guarantees that each component is shown an equal number of times in each position, the resulting sequence array could be:

```js
[
 ["component1", "component2"],
 ["component2", "component3"],
 ["component3", "component1"],
 ...
]
```

The interruptions property specifies an array of interruptions. These can be used for breaks or attention checks. Interruptions can be deterministic or random. Please see [InterruptionBlock](../../type-aliases/InterruptionBlock) for more specific information.

The skip property is used to define skip conditions. This is used to skip to a different component or block based on the response to a component or the number of correct or incorrect responses in a block. Please see [SkipConditions](../../type-aliases/SkipConditions) for more specific information.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="components"></a> `components` | (`string` \| [`ComponentBlock`](ComponentBlock.md))[] | The components that are included in the order. | [parser/types.ts:1199](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L1199) |
| <a id="id"></a> `id?` | `string` | The id of the block. This is used to identify the block in the SkipConditions and is only required if you want to refer to the whole block in the condition.to property. | [parser/types.ts:1195](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L1195) |
| <a id="interruptions"></a> `interruptions?` | [`InterruptionBlock`](../type-aliases/InterruptionBlock.md)[] | The interruptions property specifies an array of interruptions. These can be used for breaks or attention checks. | [parser/types.ts:1203](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L1203) |
| <a id="numsamples"></a> `numSamples?` | `number` | The number of samples to use for the random assignments. This means you can randomize across 3 components while only showing a participant 2 at a time. | [parser/types.ts:1201](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L1201) |
| <a id="order"></a> `order` | `"random"` \| `"latinSquare"` \| `"fixed"` | The type of order. This can be random (pure random), latinSquare (random with some guarantees), or fixed. | [parser/types.ts:1197](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L1197) |
| <a id="skip"></a> `skip?` | [`SkipConditions`](../type-aliases/SkipConditions.md) | The skip conditions for the block. | [parser/types.ts:1205](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L1205) |
