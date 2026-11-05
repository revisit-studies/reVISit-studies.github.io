# ComponentBlock

Defined in: [parser/types.ts:2155](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2155)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="components"></a> `components` | (`string` \| `ComponentBlock` \| [`DynamicBlock`](DynamicBlock.md) \| [`FactorBlock`](FactorBlock.md))[] | The components that are included in the order. | [parser/types.ts:2161](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2161) |
| <a id="conditional"></a> `conditional?` | `boolean` | The conditional property shows the block only when the URL condition matches its `id`. | [parser/types.ts:2169](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2169) |
| <a id="id"></a> `id?` | `string` | The id of the block. This is used to identify the block in the SkipConditions and is only required if you want to refer to the whole block in the condition.to property. | [parser/types.ts:2157](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2157) |
| <a id="interruptions"></a> `interruptions?` | [`InterruptionBlock`](../type-aliases/InterruptionBlock.md)[] | The interruptions property specifies an array of interruptions. These can be used for breaks or attention checks. | [parser/types.ts:2165](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2165) |
| <a id="numsamples"></a> `numSamples?` | `number` | The number of samples to use for the random assignments. This means you can randomize across 3 components while only showing a participant 2 at a time. | [parser/types.ts:2163](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2163) |
| <a id="order"></a> `order` | [`ComponentOrder`](../type-aliases/ComponentOrder.md) | The type of order. This can be random (pure random), latinSquare (random with some guarantees), or fixed. | [parser/types.ts:2159](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2159) |
| <a id="skip"></a> `skip?` | [`SkipConditions`](../type-aliases/SkipConditions.md) | The skip conditions for the block. | [parser/types.ts:2167](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2167) |
