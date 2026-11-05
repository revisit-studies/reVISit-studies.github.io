# StringOption

Defined in: [parser/types.ts:396](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L396)

The StringOption interface is used to define the options for a dropdown, radio, buttons, checkbox, matrix, and ranking response.
The label is the text that is displayed to the user, and the value is the value that is stored in the data file.

## Extended by

- [`ButtonOption`](ButtonOption.md)
- [`MatrixQuestionOption`](MatrixQuestionOption.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the option. This does not accept markdown. | [parser/types.ts:402](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L402) |
| <a id="label"></a> `label` | `string` | The label displayed to participants. Markdown is supported. | [parser/types.ts:398](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L398) |
| <a id="value"></a> `value?` | `string` | The value stored in the participant's data. Defaults to label. | [parser/types.ts:400](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L400) |
