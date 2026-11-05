# GlobalVariableDeclaration

Defined in: [parser/types.ts:14](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L14)

## Extends

- `Pick`\<[`ShortTextResponse`](ShortTextResponse.md), `"minCharLength"` \| `"maxCharLength"` \| `"minWordLength"` \| `"maxWordLength"` \| `"textValidation"` \| `"builtInValidation"`\>

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="builtinvalidation"></a> `builtInValidation?` | [`BuiltInValidationType`](../type-aliases/BuiltInValidationType.md) | Applies one predefined format from BuiltInValidationType to the response value. | [`ShortTextResponse`](ShortTextResponse.md).[`builtInValidation`](ShortTextResponse.md#builtinvalidation) | [parser/types.ts:723](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L723) |
| <a id="initialvalue"></a> `initialValue` | [`GlobalStoreValue`](../type-aliases/GlobalStoreValue.md) | - | - | [parser/types.ts:15](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L15) |
| <a id="max"></a> `max?` | `number` | Inclusive bound, valid only for a numeric initialValue. | - | [parser/types.ts:19](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L19) |
| <a id="maxcharlength"></a> `maxCharLength?` | `number` | The maximum number of characters accepted in the response. Must be greater than 0 when the response is required. | [`ShortTextResponse`](ShortTextResponse.md).[`maxCharLength`](ShortTextResponse.md#maxcharlength) | [parser/types.ts:715](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L715) |
| <a id="maxwordlength"></a> `maxWordLength?` | `number` | The maximum number of whitespace-separated words accepted in the response. Must be greater than 0 when the response is required. | [`ShortTextResponse`](ShortTextResponse.md).[`maxWordLength`](ShortTextResponse.md#maxwordlength) | [parser/types.ts:719](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L719) |
| <a id="min"></a> `min?` | `number` | Inclusive bound, valid only for a numeric initialValue. | - | [parser/types.ts:17](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L17) |
| <a id="mincharlength"></a> `minCharLength?` | `number` | The minimum number of characters accepted in the response. | [`ShortTextResponse`](ShortTextResponse.md).[`minCharLength`](ShortTextResponse.md#mincharlength) | [parser/types.ts:713](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L713) |
| <a id="minwordlength"></a> `minWordLength?` | `number` | The minimum number of whitespace-separated words accepted in the response. | [`ShortTextResponse`](ShortTextResponse.md).[`minWordLength`](ShortTextResponse.md#minwordlength) | [parser/types.ts:717](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L717) |
| <a id="strictmax"></a> `strictMax?` | `number` | - | - | [parser/types.ts:21](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L21) |
| <a id="strictmin"></a> `strictMin?` | `number` | - | - | [parser/types.ts:20](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L20) |
| <a id="textvalidation"></a> `textValidation?` | [`TextValidationRule`](TextValidationRule.md)[] | Validation rules applied to the response value in array order. | [`ShortTextResponse`](ShortTextResponse.md).[`textValidation`](ShortTextResponse.md#textvalidation) | [parser/types.ts:721](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L721) |
