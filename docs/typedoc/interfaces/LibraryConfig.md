---
sidebar_position: 1
displayed_sidebar: reference
---

# LibraryConfig

LibraryConfig is used to define the properties of a library configuration. This is a JSON object with three main components: baseComponents, components, and the sequences. Libraries are useful for defining components and sequences of these components that are to be reused across multiple studies. We (the reVISit team) provide several libraries that can be used in your study configurations. Check the public/libraries folder in the reVISit-studies repository for available libraries. We also plan to accept community contributions for libraries. If you have a library that you think would be useful for others, please reach out to us. We would love to include it in our repository.

Below is the general template that should be followed when constructing a Library configuration file.

```js
{
  "$schema": "https://raw.githubusercontent.com/revisit-studies/study/v2.0.0-rc1/src/parser/LibraryConfigSchema.json",
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

| Property | Type | Description |
| :------ | :------ | :------ |
| `$schema` | `string` | A required json schema property. This should point to the github link for the version of the schema you would like. The `$schema` line is used to verify the schema. If you're using VSCode (or other similar IDEs), including this line will allow for autocomplete and helpful suggestions when writing the study configuration. See examples for more information |
| `baseComponents?` | [`BaseComponents`](../type-aliases/BaseComponents.md) | The base components that are used in the study. These components can be used to template other components. See [BaseComponents](../../type-aliases/BaseComponents) for more information. |
| `components` | `Record`\<`string`, [`IndividualComponent`](../type-aliases/IndividualComponent.md) \| [`InheritedComponent`](../type-aliases/InheritedComponent.md)\> | The components that are used in the study. They must be fully defined here with all properties. Some properties may be inherited from baseComponents. |
| `sequences` | `Record`\<`string`, [`ComponentBlock`](ComponentBlock.md)\> | The order of the components in the study. This might include some randomness. |
