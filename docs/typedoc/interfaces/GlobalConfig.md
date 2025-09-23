---
sidebar_position: 1
displayed_sidebar: reference
---

# GlobalConfig

Defined in: [parser/types.ts:8](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L8)

The GlobalConfig is used to generate the list of available studies in the UI.
This list is displayed on the landing page when running the app.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="schema"></a> `$schema` | `string` | A required json schema property. This should point to the github link for the version of the schema you would like. See examples in the public folder for more information | [parser/types.ts:10](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L10) |
| <a id="configs"></a> `configs` | `object` | A required property that specifies the options for the configList property. | [parser/types.ts:12](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L12) |
| <a id="configslist"></a> `configsList` | `string`[] | A required property that is used to generate the list of available studies in the UI. This list is displayed on the landing page when running the app. | [parser/types.ts:22](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L22) |
