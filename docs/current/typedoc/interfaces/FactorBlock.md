# FactorBlock

Defined in: [parser/types.ts:2275](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2275)

Materialize components for each condition selected from a factor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="components"></a> `components` | `string` \| `string`[] | One or more base components materialized for every factor condition. Names may include factor parameter templates. | [parser/types.ts:2281](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2281) |
| <a id="conditional"></a> `conditional?` | `boolean` | - | [parser/types.ts:2285](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2285) |
| <a id="factor"></a> `factor` | [`FactorOption`](../type-aliases/FactorOption.md) | Named factor or inline factor expression to materialize at this sequence location. | [parser/types.ts:2279](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2279) |
| <a id="id"></a> `id` | `string` | - | [parser/types.ts:2277](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2277) |
| <a id="interruptions"></a> `interruptions?` | [`InterruptionBlock`](../type-aliases/InterruptionBlock.md)[] | - | [parser/types.ts:2283](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2283) |
| <a id="order"></a> `order?` | [`ComponentOrder`](../type-aliases/ComponentOrder.md) | - | [parser/types.ts:2282](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2282) |
| <a id="skip"></a> `skip?` | [`SkipConditions`](../type-aliases/SkipConditions.md) | - | [parser/types.ts:2284](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2284) |
| <a id="type"></a> `type` | `"factor"` | - | [parser/types.ts:2276](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2276) |
