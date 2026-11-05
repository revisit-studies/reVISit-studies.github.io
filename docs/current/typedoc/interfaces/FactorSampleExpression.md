# FactorSampleExpression

Defined in: [parser/types.ts:2218](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2218)

Select random conditions from the input factors for each participant.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="action"></a> `action` | `"sample"` | - | [parser/types.ts:2219](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2219) |
| <a id="factors"></a> `factors` | [`FactorOption`](../type-aliases/FactorOption.md)[] | - | [parser/types.ts:2220](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2220) |
| <a id="numsamples"></a> `numSamples` | `number` | Number of conditions randomly selected for each participant. **As Type** integer **Minimum** 1 | [parser/types.ts:2228](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2228) |
| <a id="samplingstrategy"></a> `samplingStrategy` | `"withoutReplacement"` \| `"withReplacement"` | Whether selected conditions may repeat. | [parser/types.ts:2222](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2222) |
