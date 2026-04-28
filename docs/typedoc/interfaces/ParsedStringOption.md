# ParsedStringOption

Defined in: [parser/types.ts:351](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L351)

StringOption normalized to always include a value.

## Extends

- `Omit`\<[`StringOption`](StringOption.md), `"value"`\>

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the option. This does not accept markdown. | [`StringOption`](StringOption.md).[`infoText`](StringOption.md#infotext) | [parser/types.ts:347](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L347) |
| <a id="label"></a> `label` | `string` | The label displayed to participants. Markdown is supported. | [`StringOption`](StringOption.md).[`label`](StringOption.md#label) | [parser/types.ts:343](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L343) |
| <a id="value"></a> `value` | `string` | - | - | [parser/types.ts:352](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L352) |
