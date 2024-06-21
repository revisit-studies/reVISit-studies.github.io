---
sidebar_position: 1
displayed_sidebar: reference
---

# GlobalConfig

The GlobalConfig is used to generate the list of available studies in the UI.
This list is displayed on the landing page when running the app.

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `$schema` | `string` | A required json schema property. This should point to the github link for the version of the schema you would like. See examples in the public folder for more information |
| `configs` | `object` | A required property that specifies the options for the configList property. |
| `configsList` | `string`[] | A required property that is used to generate the list of available studies in the UI. This list is displayed on the landing page when running the app. |
