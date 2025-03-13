---
sidebar_position: 1
displayed_sidebar: reference
---

# GlobalConfig

Defined in: [parser/types.ts:9](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L9)

The GlobalConfig is used to generate the list of available studies in the UI.
This list is displayed on the landing page when running the app.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="$schema"></a> `$schema` | `string` | A required json schema property. This should point to the github link for the version of the schema you would like. See examples in the public folder for more information | [parser/types.ts:11](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L11) |
| <a id="configs"></a> `configs` | `object` | A required property that specifies the options for the configList property. | [parser/types.ts:13](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L13) |
| <a id="configslist"></a> `configsList` | `string`[] | A required property that is used to generate the list of available studies in the UI. This list is displayed on the landing page when running the app. | [parser/types.ts:23](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L23) |
