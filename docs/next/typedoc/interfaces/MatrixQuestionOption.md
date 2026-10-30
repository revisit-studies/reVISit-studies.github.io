# MatrixQuestionOption

Defined in: [parser/types.ts:360](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L360)

The MatrixQuestionOption interface is used to define the question options for matrix responses.
The label is the fallback text displayed to participants, and the value is the key stored in the participant's data.
The optional left and right labels allow bipolar rows to label each side of the matrix without changing stored values.
When `leftLabel` is specified, it takes precedence over `label` for the left-side row text.

## Extends

- [`StringOption`](StringOption.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the option. This does not accept markdown. | [`StringOption`](StringOption.md).[`infoText`](StringOption.md#infotext) | [parser/types.ts:351](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L351) |
| <a id="label"></a> `label` | `string` | The label displayed to participants. Markdown is supported. | [`StringOption`](StringOption.md).[`label`](StringOption.md#label) | [parser/types.ts:347](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L347) |
| <a id="leftlabel"></a> `leftLabel?` | `string` | The label displayed on the left side of the matrix row. Takes precedence over label when specified. Defaults to label. | - | [parser/types.ts:362](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L362) |
| <a id="rightlabel"></a> `rightLabel?` | `string` | The label displayed on the right side of the matrix row. | - | [parser/types.ts:364](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L364) |
| <a id="value"></a> `value?` | `string` | The value stored in the participant's data. Defaults to label. | [`StringOption`](StringOption.md).[`value`](StringOption.md#value) | [parser/types.ts:349](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L349) |
