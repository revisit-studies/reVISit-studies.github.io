# StringOption

Defined in: [parser/types.ts:326](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L326)

The StringOption interface is used to define the options for a dropdown, radio, buttons, or checkbox response.
The label is the text that is displayed to the user, and the value is the value that is stored in the data file.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the option. This does not accept markdown. Applies to responses that use StringOption, including DropdownResponse, RadioResponse, CheckboxResponse, ButtonsResponse, RankingResponse, and MatrixResponse. | [parser/types.ts:332](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L332) |
| <a id="label"></a> `label` | `string` | The label displayed to participants. Markdown is supported. | [parser/types.ts:328](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L328) |
| <a id="value"></a> `value?` | `string` | The value stored in the participant's data. Defaults to label. | [parser/types.ts:330](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L330) |
