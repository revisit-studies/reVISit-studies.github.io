# StudyConfig

Defined in: [parser/types.ts:1583](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L1583)

The StudyConfig interface is used to define the properties of a study configuration. This is a JSON object with four main components: the StudyMetadata, the UIConfig, the Components, and the Sequence. Below is the general template that should be followed when constructing a Study configuration file.

```js
{
 "$schema": "https://raw.githubusercontent.com/revisit-studies/study/v2.3.0/src/parser/StudyConfigSchema.json",
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
<br/>

The `$schema` line is used to verify the schema. If you're using VSCode (or other similar IDEs), including this line will allow for autocomplete and helpful suggestions when writing the study configuration.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="schema"></a> `$schema` | `string` | A required json schema property. This should point to the github link for the version of the schema you would like. The `$schema` line is used to verify the schema. If you're using VSCode (or other similar IDEs), including this line will allow for autocomplete and helpful suggestions when writing the study configuration. See examples for more information | [parser/types.ts:1585](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L1585) |
| <a id="basecomponents"></a> `baseComponents?` | [`BaseComponents`](../type-aliases/BaseComponents.md) | The base components that are used in the study. These components can be used to template other components. See [BaseComponents](../../type-aliases/BaseComponents) for more information. | [parser/types.ts:1593](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L1593) |
| <a id="components"></a> `components` | `Record`\<`string`, [`IndividualComponent`](../type-aliases/IndividualComponent.md) \| [`InheritedComponent`](../type-aliases/InheritedComponent.md)\> | The components that are used in the study. They must be fully defined here with all properties. Some properties may be inherited from baseComponents. | [parser/types.ts:1595](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L1595) |
| <a id="importedlibraries"></a> `importedLibraries?` | `string`[] | A list of libraries that are used in the study. This is used to import external libraries into the study. Library names are valid namespaces to be used later. | [parser/types.ts:1591](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L1591) |
| <a id="sequence"></a> `sequence` | [`ComponentBlock`](ComponentBlock.md) \| [`DynamicBlock`](DynamicBlock.md) | The order of the components in the study. This might include some randomness. | [parser/types.ts:1597](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L1597) |
| <a id="studymetadata"></a> `studyMetadata` | [`StudyMetadata`](StudyMetadata.md) | The metadata for the study. This is used to identify the study and version in the data file. | [parser/types.ts:1587](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L1587) |
| <a id="uiconfig"></a> `uiConfig` | [`UIConfig`](UIConfig.md) | The UI configuration for the study. This is used to configure the UI of the app. | [parser/types.ts:1589](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L1589) |
