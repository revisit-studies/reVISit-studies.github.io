# GlobalConfig

Defined in: [parser/types.ts:15](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L15)

The GlobalConfig is used to generate the list of available studies in the UI.
This list is displayed on the landing page when running the app.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="schema"></a> `$schema` | `string` | A required json schema property. This should point to the GitHub link for the version of the schema you would like. See examples in the public folder for more information. | [parser/types.ts:17](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L17) |
| <a id="configs"></a> `configs` | `object` | A required property that specifies the options for the configList property. | [parser/types.ts:19](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L19) |
| <a id="configslist"></a> `configsList` | `string`[] | A required property that is used to generate the list of available studies in the UI. This list is displayed on the landing page when running the app. | [parser/types.ts:29](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L29) |
