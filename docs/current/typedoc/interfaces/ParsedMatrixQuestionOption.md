# ParsedMatrixQuestionOption

Defined in: [parser/types.ts:430](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L430)

MatrixQuestionOption normalized to always include a value.

## Extends

- `Omit`\<[`MatrixQuestionOption`](MatrixQuestionOption.md), `"value"`\>

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the option. This does not accept markdown. | [`StringOption`](StringOption.md).[`infoText`](StringOption.md#infotext) | [parser/types.ts:402](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L402) |
| <a id="label"></a> `label` | `string` | The label displayed to participants. Markdown is supported. | [`StringOption`](StringOption.md).[`label`](StringOption.md#label) | [parser/types.ts:398](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L398) |
| <a id="leftlabel"></a> `leftLabel?` | `string` | The label displayed on the left side of the matrix row. Takes precedence over label when specified. Defaults to label. | [`MatrixQuestionOption`](MatrixQuestionOption.md).[`leftLabel`](MatrixQuestionOption.md#leftlabel) | [parser/types.ts:418](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L418) |
| <a id="rightlabel"></a> `rightLabel?` | `string` | The label displayed on the right side of the matrix row. | [`MatrixQuestionOption`](MatrixQuestionOption.md).[`rightLabel`](MatrixQuestionOption.md#rightlabel) | [parser/types.ts:420](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L420) |
| <a id="value"></a> `value` | `string` | - | - | [parser/types.ts:431](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L431) |
