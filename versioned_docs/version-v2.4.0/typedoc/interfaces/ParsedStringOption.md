# ParsedStringOption

Defined in: [parser/types.ts:336](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L336)

StringOption normalized to always include a value.

## Extends

- `Omit`\<[`StringOption`](StringOption.md), `"value"`\>

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the option. This does not accept markdown. Applies to responses that use StringOption, including DropdownResponse, RadioResponse, CheckboxResponse, ButtonsResponse, RankingResponse, and MatrixResponse. | [`StringOption`](StringOption.md).[`infoText`](StringOption.md#infotext) | [parser/types.ts:332](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L332) |
| <a id="label"></a> `label` | `string` | The label displayed to participants. Markdown is supported. | [`StringOption`](StringOption.md).[`label`](StringOption.md#label) | [parser/types.ts:328](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L328) |
| <a id="value"></a> `value` | `string` | - | - | [parser/types.ts:337](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L337) |
