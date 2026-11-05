# ParsedStringOption

Defined in: [parser/types.ts:424](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L424)

StringOption normalized to always include a value.

## Extends

- `Omit`\<[`StringOption`](StringOption.md), `"value"`\>

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the option. This does not accept markdown. | [`StringOption`](StringOption.md).[`infoText`](StringOption.md#infotext) | [parser/types.ts:402](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L402) |
| <a id="key"></a> `key?` | `string` | - | - | [parser/types.ts:426](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L426) |
| <a id="label"></a> `label` | `string` | The label displayed to participants. Markdown is supported. | [`StringOption`](StringOption.md).[`label`](StringOption.md#label) | [parser/types.ts:398](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L398) |
| <a id="value"></a> `value` | `string` | - | - | [parser/types.ts:425](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L425) |
