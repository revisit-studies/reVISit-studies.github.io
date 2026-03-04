# LibraryConfig

Defined in: [parser/types.ts:1772](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1772)

LibraryConfig is used to define the properties of a library configuration. This is a JSON object with three main components: baseComponents, components, and the sequences. Libraries are useful for defining components and sequences of these components that are to be reused across multiple studies. We (the reVISit team) provide several libraries that can be used in your study configurations. Check the public/libraries folder in the reVISit-studies repository for available libraries. We also plan to accept community contributions for libraries. If you have a library that you think would be useful for others, please reach out to us. We would love to include it in our repository.

Below is the general template that should be followed when constructing a Library configuration file.

```js
{
  "$schema": "https://raw.githubusercontent.com/revisit-studies/study/v2.4.0/src/parser/LibraryConfigSchema.json",
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
| <a id="schema"></a> `$schema` | `string` | A required json schema property. This should point to the github link for the version of the schema you would like. The `$schema` line is used to verify the schema. If you're using VSCode (or other similar IDEs), including this line will allow for autocomplete and helpful suggestions when writing the study configuration. See examples for more information | [parser/types.ts:1774](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1774) |
| <a id="additionaldescription"></a> `additionalDescription?` | `string` | Additional description of the library. It accepts markdown formatting. | [parser/types.ts:1782](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1782) |
| <a id="basecomponents"></a> `baseComponents?` | [`BaseComponents`](../type-aliases/BaseComponents.md) | The base components that are used in the study. These components can be used to template other components. See [BaseComponents](../../type-aliases/BaseComponents) for more information. | [parser/types.ts:1790](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1790) |
| <a id="components"></a> `components` | `Record`\<`string`, [`IndividualComponent`](../type-aliases/IndividualComponent.md) \| [`InheritedComponent`](../type-aliases/InheritedComponent.md)\> | The components that are used in the study. They must be fully defined here with all properties. Some properties may be inherited from baseComponents. | [parser/types.ts:1778](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1778) |
| <a id="description"></a> `description` | `string` | A description of the library. | [parser/types.ts:1776](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1776) |
| <a id="doi"></a> `doi?` | `string` | The DOI of the paper where the content of the library is based on. | [parser/types.ts:1786](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1786) |
| <a id="externallink"></a> `externalLink?` | `string` | The external link to the paper/website where the content of the library is based on. | [parser/types.ts:1788](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1788) |
| <a id="reference"></a> `reference?` | `string` | The reference to the paper where the content of the library is based on. | [parser/types.ts:1784](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1784) |
| <a id="sequences"></a> `sequences` | `Record`\<`string`, [`StudyConfig`](StudyConfig.md)\[`"sequence"`\]\> | The order of the components in the study. This might include some randomness. | [parser/types.ts:1780](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1780) |
