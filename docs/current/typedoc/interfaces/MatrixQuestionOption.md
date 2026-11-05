# MatrixQuestionOption

Defined in: [parser/types.ts:416](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L416)

The MatrixQuestionOption interface is used to define the question options for matrix responses.
The label is the fallback text displayed to participants, and the value is the key stored in the participant's data.
The optional left and right labels allow bipolar rows to label each side of the matrix without changing stored values.
When `leftLabel` is specified, it takes precedence over `label` for the left-side row text.

## Extends

- [`StringOption`](StringOption.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the option. This does not accept markdown. | [`StringOption`](StringOption.md).[`infoText`](StringOption.md#infotext) | [parser/types.ts:402](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L402) |
| <a id="label"></a> `label` | `string` | The label displayed to participants. Markdown is supported. | [`StringOption`](StringOption.md).[`label`](StringOption.md#label) | [parser/types.ts:398](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L398) |
| <a id="leftlabel"></a> `leftLabel?` | `string` | The label displayed on the left side of the matrix row. Takes precedence over label when specified. Defaults to label. | - | [parser/types.ts:418](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L418) |
| <a id="rightlabel"></a> `rightLabel?` | `string` | The label displayed on the right side of the matrix row. | - | [parser/types.ts:420](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L420) |
| <a id="value"></a> `value?` | `string` | The value stored in the participant's data. Defaults to label. | [`StringOption`](StringOption.md).[`value`](StringOption.md#value) | [parser/types.ts:400](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L400) |
