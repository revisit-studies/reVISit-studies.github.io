# StringOption

Defined in: [parser/types.ts:345](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L345)

The StringOption interface is used to define the options for a dropdown, radio, buttons, checkbox, matrix, and ranking response.
The label is the text that is displayed to the user, and the value is the value that is stored in the data file.

## Extended by

- [`MatrixQuestionOption`](MatrixQuestionOption.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the option. This does not accept markdown. | [parser/types.ts:351](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L351) |
| <a id="label"></a> `label` | `string` | The label displayed to participants. Markdown is supported. | [parser/types.ts:347](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L347) |
| <a id="value"></a> `value?` | `string` | The value stored in the participant's data. Defaults to label. | [parser/types.ts:349](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L349) |
