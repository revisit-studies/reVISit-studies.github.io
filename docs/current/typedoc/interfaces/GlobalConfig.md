# GlobalConfig

Defined in: [parser/types.ts:51](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L51)

The GlobalConfig is used to generate the list of available studies in the UI.
This list is displayed on the landing page when running the app.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="schema"></a> `$schema` | `string` | A required json schema property. This should point to the GitHub link for the version of the schema you would like. See examples in the public folder for more information. | [parser/types.ts:53](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L53) |
| <a id="configs"></a> `configs` | `object` | A required property that specifies the options for the configList property. | [parser/types.ts:62](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L62) |
| <a id="configslist"></a> `configsList` | `string`[] | A required property that is used to generate the list of available studies in the UI. This list is displayed on the landing page when running the app. | [parser/types.ts:74](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L74) |
| <a id="tabs"></a> `tabs?` | `object`[] | Landing-page tabs in display order. Unassigned studies use the configured Studies tab, or a default Studies tab appended after configured tabs. If omitted or empty, all studies appear in Studies. | [parser/types.ts:55](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L55) |
