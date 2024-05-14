---
sidebar_position: 1
displayed_sidebar: docs
---

# StudyMetadata

The StudyMetadata is used to describe certain properties of a study.
Some of this data is displayed on the landing page when running the app, such as the title and description.
This data is also included in the data file that is downloaded at the end of the study, to help identify the study and version. Below is an example of a StudyMetadata entry in your study configuration file:

```js
"studyMetadata" : {
   "title": "My New Study",
   "version": "pilot",
   "authors": [
     "Jane Doe",
     "John Doe"
   ],
   "date": "2024-04-01",
   "description": "This study is meant to test your patience.",
   "organizations": [
     "The reVISit Team",
     "The Other Team"
   ]
}
```

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `authors` | `string`[] | The authors of your study. |
| `date` | `string` | The date of your study, may be useful for the researcher. |
| `description` | `string` | The description of your study, shown on the landing page. |
| `organizations` | `string`[] | The organizations that are associated with your study. |
| `title` | `string` | The title of your study, shown on the landing page. |
| `version` | `string` | The version of your study, shown on the landing page and attached to participant data. When you change a configuration file after a study has already been distributed to participants, you can change the version number so that the participants who see this new configuration file can be identified. |
