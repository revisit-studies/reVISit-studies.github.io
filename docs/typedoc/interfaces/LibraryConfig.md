---
sidebar_position: 1
displayed_sidebar: reference
---

# LibraryConfig

Defined in: [parser/types.ts:1402](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L1402)

LibraryConfig is used to define the properties of a library configuration. This is a JSON object with three main components: baseComponents, components, and the sequences. Libraries are useful for defining components and sequences of these components that are to be reused across multiple studies. We (the reVISit team) provide several libraries that can be used in your study configurations. Check the public/libraries folder in the reVISit-studies repository for available libraries. We also plan to accept community contributions for libraries. If you have a library that you think would be useful for others, please reach out to us. We would love to include it in our repository.

Below is the general template that should be followed when constructing a Library configuration file.

```js
{
  "$schema": "https://raw.githubusercontent.com/revisit-studies/study/v2.1.1/src/parser/LibraryConfigSchema.json",
  "baseComponents": {
    // BaseComponents here are defined exactly as is in the StudyConfig
  },
  "components": {
    // Components here are defined exactly as is in the StudyConfig
  },
  "sequences": {
   // Sequences here are defined as "key": "value" pairs where the key is the name of the sequence and the value is a ComponentBlock, just like in the StudyConfig
  }
}
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="$schema"></a> `$schema` | `string` | A required json schema property. This should point to the github link for the version of the schema you would like. The `$schema` line is used to verify the schema. If you're using VSCode (or other similar IDEs), including this line will allow for autocomplete and helpful suggestions when writing the study configuration. See examples for more information | [parser/types.ts:1404](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L1404) |
| <a id="basecomponents"></a> `baseComponents?` | [`BaseComponents`](../type-aliases/BaseComponents.md) | The base components that are used in the study. These components can be used to template other components. See [BaseComponents](../../type-aliases/BaseComponents) for more information. | [parser/types.ts:1414](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L1414) |
| <a id="components"></a> `components` | `Record`\<`string`, [`IndividualComponent`](../type-aliases/IndividualComponent.md) \| [`InheritedComponent`](../type-aliases/InheritedComponent.md)\> | The components that are used in the study. They must be fully defined here with all properties. Some properties may be inherited from baseComponents. | [parser/types.ts:1416](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L1416) |
| <a id="description"></a> `description` | `string` | A description of the library. | [parser/types.ts:1406](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L1406) |
| <a id="doi"></a> `doi?` | `string` | The DOI of the paper where the content of the library is based on. | [parser/types.ts:1410](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L1410) |
| <a id="externallink"></a> `externalLink?` | `string` | The external link to the paper/website where the content of the library is based on. | [parser/types.ts:1412](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L1412) |
| <a id="reference"></a> `reference?` | `string` | The reference to the paper where the content of the library is based on. | [parser/types.ts:1408](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L1408) |
| <a id="sequences"></a> `sequences` | `Record`\<`string`, [`ComponentBlock`](ComponentBlock.md) \| [`DynamicBlock`](DynamicBlock.md)\> | The order of the components in the study. This might include some randomness. | [parser/types.ts:1418](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L1418) |
