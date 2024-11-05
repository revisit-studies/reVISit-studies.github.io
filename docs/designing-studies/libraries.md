# Using Libraries

We provide reVISit with a number of libraries that can be used to help you create your study. These libraries are designed to allow study designers to quickly insert common components into their study without having to write the code from scratch. 

Libraries are open source and live in the study repository. If you have a library that you would like to contribute or suggest, please reach out to the reVISit team or submit a pull request to the study repository.

Here is a list of the libraries that are currently available for reVISit:

- vlat (Visual Literacy Assessment Tool)


Here is a list of libraries that are currently in development:

- color-blindness (components to test for participant color blindness)
- attention (components to test for participant attention)
- nasa-tlx (components to test for participant workload)
- beauvis (a library for evaluating the aesthetics of visualizations)
- revisit-utilities (a library of common utilities for reVISit studies)
- previs (Perceived Readability Evaluation for Visualizations scale)
- demographics (components to collect participant demographics)
- SUS (System Usability Scale)
- QUIS (Questionnaire for User Interaction Satisfaction)
- SMEQ (Subjective Mental Effort Questionnaire)
- berlin-num (Berlin Numeracy Scale)
- Spatial ability test (I forget the name, but deals with paper folding)


Using libraries is simple. You can import the library into your study and then use the components and/or whole sequences that are provided by the library. For example, to use a single component from a library, we would first import the library and then use the `$libraryName.components.componentName` syntax for the component.

```js
{
  "$schema": "https://raw.githubusercontent.com/revisit-studies/study/dev/src/parser/StudyConfigSchema.json",
  "studyMetadata": { ... },
  "uiConfig": { ... },
  "importedLibraries": ["vlat"],
  "components": {
    "vlat-modified":{
      "baseComponent":"$vlat.components.component-one"
      "description":"A new description"
    }
  },
  "sequence": {
    "order": "fixed",
    "components": [
      ...
      "vlat-modified",
      ...
    ]
  }
}
```

Additionally, we can use the components directly in our sequence, or import entire sequences from the library using the `$libraryName.sequences.sequencetName` syntax.

```js
{
  "$schema": "https://raw.githubusercontent.com/revisit-studies/study/dev/src/parser/StudyConfigSchema.json",
  "studyMetadata": { ... },
  "uiConfig": { ... },
  "importedLibraries": ["vlat"],
  "components": { ... },
  "sequence": {
    "order": "fixed",
    "components": [
      ...
      "$vlat.components.component-one",
      "$vlat.sequences.mini",
      ...
    ]
  }
}
```
