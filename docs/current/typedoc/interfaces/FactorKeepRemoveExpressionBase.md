# FactorKeepRemoveExpressionBase

Defined in: [parser/types.ts:2244](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2244)

Select conditions either by matching parameter values or by matching complete items.

## Extended by

- [`FactorKeepExpression`](FactorKeepExpression.md)
- [`FactorRemoveExpression`](FactorRemoveExpression.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="condition"></a> `condition?` | [`FactorObject`](../type-aliases/FactorObject.md) | Parameter values used to select matching conditions. | [parser/types.ts:2248](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2248) |
| <a id="factor"></a> `factor` | [`FactorOption`](../type-aliases/FactorOption.md) | Named factor or expression whose conditions are selected. | [parser/types.ts:2246](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2246) |
| <a id="items"></a> `items?` | [`FactorOption`](../type-aliases/FactorOption.md) \| [`FactorObject`](../type-aliases/FactorObject.md)[] | Complete factor conditions, or a factor expression that resolves to them, used to select matching conditions. | [parser/types.ts:2250](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2250) |
