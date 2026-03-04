# StringOption

Defined in: [parser/types.ts:328](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L328)

The StringOption interface is used to define the options for a dropdown, radio, buttons, checkbox, matrix, and ranking response.
The label is the text that is displayed to the user, and the value is the value that is stored in the data file.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the option. This does not accept markdown. | [parser/types.ts:334](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L334) |
| <a id="label"></a> `label` | `string` | The label displayed to participants. Markdown is supported. | [parser/types.ts:330](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L330) |
| <a id="value"></a> `value?` | `string` | The value stored in the participant's data. Defaults to label. | [parser/types.ts:332](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L332) |
