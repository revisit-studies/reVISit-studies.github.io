---
sidebar_position: 1
displayed_sidebar: docs
---

# StudyConfig

The StudyConfig interface is used to define the properties of a study configuration. This is a JSON object with four main components: the StudyMetadata, the UIConfig, the Components, and the Sequence. Below is the general template that should be followed when constructing a Study configuration file.

```js
{
   "$schema": "https://raw.githubusercontent.com/revisit-studies/study/v1.0.0-beta10/src/parser/StudyConfigSchema.json",
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

| Property | Type | Description |
| :------ | :------ | :------ |
| `$schema` | `string` | A required json schema property. This should point to the github link for the version of the schema you would like. The `$schema` line is used to verify the schema. If you're using VSCode (or other similar IDEs), including this line will allow for autocomplete and helpful suggestions when writing the study configuration. See examples for more information |
| `baseComponents?` | `Record`\<`string`, [`IndividualComponent`](../type-aliases/IndividualComponent.md) \| `Partial`\<[`IndividualComponent`](../type-aliases/IndividualComponent.md)\>\> | The baseComponents is an optional set of components which can help template other components. For example, suppose you have a single HTML file that you want to display to the user several times. Instead of having the same component twice in the `components` list, you can have a single baseComponent with all the information that the two HTML components will share. A great example is showing the same HTML component but with two different questions;<br /><br />Using baseComponents:<br /><br />`js"baseComponents": { "my-image-component": {     "instructionLocation": "sidebar",     "nextButtonLocation": "sidebar",     "path": "path/to/assets/my-image.jpg",     "response": [         {             "id": "my-image-id",             "options": [                 {                     "label": "Europe",                     "value": "Europe"                 },                 {                     "label": "Japan",                     "value": "Japan"                 },                 {                     "label": "USA",                     "value": "USA"                 }             ],             "prompt": "Your Selected Answer:",             "type": "dropdown"         }     ],     "type": "image" }}`<br />In the above code snippet, we have a single base component which holds the information about the type of component, the path to the image, and the response (which is a dropdown containing three choices). Any component which contains the `"baseComponent":"my-image-component"` key-value pair will inherit each of these properties. Thus, if we have three different questions which have the same choices and are concerning the same image, we can define our components like below:<br />`js"components": { "q1": {     "baseComponent": "my-image-component",     "description": "Choosing section with largest GDP",     "instruction": "Which region has the largest GDP?" }, "q2": {     "baseComponent": "my-image-component",     "description": "Choosing section with lowest GDP",     "instruction": "Which region has the lowest GDP?" }, "q3": {     "baseComponent": "my-image-component",     "description": "Choosing section with highest exports of Wheat",     "instruction": "Which region had the most Wheat exported in 2022?" }}` |
| `components` | `Record`\<`string`, [`IndividualComponent`](../type-aliases/IndividualComponent.md) \| [`InheritedComponent`](../type-aliases/InheritedComponent.md)\> | The components that are used in the study. They must be fully defined here with all properties. Some properties may be inherited from baseComponents. |
| `sequence` | [`ComponentBlock`](ComponentBlock.md) | The order of the components in the study. This might include some randomness. |
| `studyMetadata` | [`StudyMetadata`](StudyMetadata.md) | The metadata for the study. This is used to identify the study and version in the data file. |
| `uiConfig` | [`UIConfig`](UIConfig.md) | The UI configuration for the study. This is used to configure the UI of the app. |
