# FactorKeepExpression

Defined in: [parser/types.ts:2254](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2254)

Retain the selected conditions from a factor.

## Extends

- [`FactorKeepRemoveExpressionBase`](FactorKeepRemoveExpressionBase.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="action"></a> `action` | `"keep"` | - | - | [parser/types.ts:2255](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2255) |
| <a id="condition"></a> `condition?` | [`FactorObject`](../type-aliases/FactorObject.md) | Parameter values used to select matching conditions. | [`FactorKeepRemoveExpressionBase`](FactorKeepRemoveExpressionBase.md).[`condition`](FactorKeepRemoveExpressionBase.md#condition) | [parser/types.ts:2248](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2248) |
| <a id="factor"></a> `factor` | [`FactorOption`](../type-aliases/FactorOption.md) | Named factor or expression whose conditions are selected. | [`FactorKeepRemoveExpressionBase`](FactorKeepRemoveExpressionBase.md).[`factor`](FactorKeepRemoveExpressionBase.md#factor) | [parser/types.ts:2246](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2246) |
| <a id="items"></a> `items?` | [`FactorOption`](../type-aliases/FactorOption.md) \| [`FactorObject`](../type-aliases/FactorObject.md)[] | Complete factor conditions, or a factor expression that resolves to them, used to select matching conditions. | [`FactorKeepRemoveExpressionBase`](FactorKeepRemoveExpressionBase.md).[`items`](FactorKeepRemoveExpressionBase.md#items) | [parser/types.ts:2250](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2250) |
