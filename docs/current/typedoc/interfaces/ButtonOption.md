# ButtonOption

Defined in: [parser/types.ts:405](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L405)

The StringOption interface is used to define the options for a dropdown, radio, buttons, checkbox, matrix, and ranking response.
The label is the text that is displayed to the user, and the value is the value that is stored in the data file.

## Extends

- [`StringOption`](StringOption.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the option. This does not accept markdown. | [`StringOption`](StringOption.md).[`infoText`](StringOption.md#infotext) | [parser/types.ts:402](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L402) |
| <a id="key"></a> `key?` | `string` | Keyboard shortcut for this button (e.g., "r", "ArrowLeft", or "Shift+X"). | - | [parser/types.ts:407](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L407) |
| <a id="label"></a> `label` | `string` | The label displayed to participants. Markdown is supported. | [`StringOption`](StringOption.md).[`label`](StringOption.md#label) | [parser/types.ts:398](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L398) |
| <a id="value"></a> `value?` | `string` | The value stored in the participant's data. Defaults to label. | [`StringOption`](StringOption.md).[`value`](StringOption.md#value) | [parser/types.ts:400](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L400) |
