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


Using libraries is simple. You can import the library into your study and then use the components that are provided by the library. Here is an example of how you might use the VLAT library in your study:

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
      "$vlat.sequences.mini",
      ...
    ]
  }
}
```

As shown above, libraries provide sequence exports that can be used in the sequence of your study. You can also use the library components directly in the sequence, or as a baseComponent in a component.
