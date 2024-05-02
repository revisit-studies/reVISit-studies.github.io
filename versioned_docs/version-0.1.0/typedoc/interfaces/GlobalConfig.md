---
sidebar_position: 1
displayed_sidebar: docs
---

# Interface: GlobalConfig

The GlobalConfig is used to generate the list of available studies in the UI.
This list is displayed on the landing page when running the app.

## Table of contents

### Properties

- [$schema](GlobalConfig.md#schema)
- [adminUsers](GlobalConfig.md#adminusers)
- [configs](GlobalConfig.md#configs)
- [configsList](GlobalConfig.md#configslist)

## Properties

### $schema

• **$schema**: `string`

A required json schema property. This should point to the github link for the version of the schema you would like. See examples for more information

#### Defined in

[parser/types.ts:10](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L10)

___

### adminUsers

• **adminUsers**: `string`[]

A required property listing out the emails of users who require admin access.

#### Defined in

[parser/types.ts:22](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L22)

___

### configs

• **configs**: `Object`

A required property that specifies the options for the configList property.

#### Index signature

▪ [key: `string`]: \{ `path`: `string`  }

The key is used to identify the study config file. This key is used in the configList property.

#### Defined in

[parser/types.ts:12](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L12)

___

### configsList

• **configsList**: `string`[]

A required property that is used to generate the list of available studies in the UI. This list is displayed on the landing page when running the app.

#### Defined in

[parser/types.ts:20](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L20)
