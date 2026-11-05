# StudyConfig

Defined in: [parser/types.ts:2362](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2362)

The StudyConfig interface is used to define the properties of a study configuration. This is a JSON object with four main components: the StudyMetadata, the UIConfig, the Components, and the Sequence. Below is the general template that should be followed when constructing a Study configuration file.
```json
{
  "$schema": "https://raw.githubusercontent.com/revisit-studies/study/v3.0.0/src/parser/StudyConfigSchema.json",
  "studyMetadata": {
    ...
  },
  "uiConfig": {
    ...
  },
  "components": {
    ...
  },
  "sequence": {
    ...
  }
}
```

:::info
For information about each of the individual pieces of the study configuration file, you can visit the documentation for each one individually.
:::

The `$schema` line is used to verify the schema. If you're using VSCode (or other similar IDEs), including this line will allow for autocomplete and helpful suggestions when writing the study configuration.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="schema"></a> `$schema` | `string` | A required json schema property. This should point to the github link for the version of the schema you would like. The `$schema` line is used to verify the schema. If you're using VSCode (or other similar IDEs), including this line will allow for autocomplete and helpful suggestions when writing the study configuration. See examples for more information | [parser/types.ts:2366](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2366) |
| <a id="basecomponents"></a> `baseComponents?` | [`BaseComponents`](../type-aliases/BaseComponents.md) | The base components that are used in the study. These components can be used to template other components. See [BaseComponents](../type-aliases/BaseComponents.md) for more information. | [parser/types.ts:2376](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2376) |
| <a id="betweensubjects"></a> `betweenSubjects?` | `string`[] | Primitive factor names assigned once per participant and passed to every component as global parameters. | [parser/types.ts:2382](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2382) |
| <a id="components"></a> `components` | `Record`\<`string`, [`IndividualComponent`](../type-aliases/IndividualComponent.md) \| [`InheritedComponent`](../type-aliases/InheritedComponent.md)\> | The components that are used in the study. They must be fully defined here with all properties. Some properties may be inherited from baseComponents. | [parser/types.ts:2378](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2378) |
| <a id="factors"></a> `factors?` | `Record`\<`string`, [`Factor`](../type-aliases/Factor.md)\> | Primitive factor levels and reusable derived factor definitions that can be referenced from the sequence. | [parser/types.ts:2380](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2380) |
| <a id="globalvariables"></a> `globalVariables?` | [`GlobalVariableDeclarations`](../type-aliases/GlobalVariableDeclarations.md) | Participant-wide values committed with accepted trial submissions. | [parser/types.ts:2364](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2364) |
| <a id="importedlibraries"></a> `importedLibraries?` | `string`[] | A list of libraries that are used in the study. This is used to import external libraries into the study. Library names are valid namespaces to be used later. | [parser/types.ts:2374](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2374) |
| <a id="sequence"></a> `sequence` | [`ComponentBlock`](ComponentBlock.md) \| [`DynamicBlock`](DynamicBlock.md) \| [`FactorBlock`](FactorBlock.md) | - | [parser/types.ts:2383](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2383) |
| <a id="studymetadata"></a> `studyMetadata` | [`StudyMetadata`](StudyMetadata.md) | The metadata for the study. This is used to identify the study and version in the data file. | [parser/types.ts:2368](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2368) |
| <a id="studyrules"></a> `studyRules?` | [`StudyRules`](StudyRules.md) | The study rules for the study. This is used to configure study constraints such as browsers, device sizes, etc. | [parser/types.ts:2372](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2372) |
| <a id="uiconfig"></a> `uiConfig` | [`UIConfig`](UIConfig.md) | The UI configuration for the study. This is used to configure the UI of the app. | [parser/types.ts:2370](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2370) |
