# ParsedMatrixQuestionOption

Defined in: [parser/types.ts:373](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L373)

MatrixQuestionOption normalized to always include a value.

## Extends

- `Omit`\<[`MatrixQuestionOption`](MatrixQuestionOption.md), `"value"`\>

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the option. This does not accept markdown. | [`StringOption`](StringOption.md).[`infoText`](StringOption.md#infotext) | [parser/types.ts:351](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L351) |
| <a id="label"></a> `label` | `string` | The label displayed to participants. Markdown is supported. | [`StringOption`](StringOption.md).[`label`](StringOption.md#label) | [parser/types.ts:347](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L347) |
| <a id="leftlabel"></a> `leftLabel?` | `string` | The label displayed on the left side of the matrix row. Takes precedence over label when specified. Defaults to label. | [`MatrixQuestionOption`](MatrixQuestionOption.md).[`leftLabel`](MatrixQuestionOption.md#leftlabel) | [parser/types.ts:362](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L362) |
| <a id="rightlabel"></a> `rightLabel?` | `string` | The label displayed on the right side of the matrix row. | [`MatrixQuestionOption`](MatrixQuestionOption.md).[`rightLabel`](MatrixQuestionOption.md#rightlabel) | [parser/types.ts:364](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L364) |
| <a id="value"></a> `value` | `string` | - | - | [parser/types.ts:374](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L374) |
