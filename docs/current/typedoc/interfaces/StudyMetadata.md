# StudyMetadata

Defined in: [parser/types.ts:98](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L98)

The StudyMetadata is used to describe certain properties of a study.
Some of this data is displayed on the landing page when running the app, such as the title and description.
Below is an example of a StudyMetadata entry in your study configuration file:
```json
"studyMetadata" : {
  "title": "My New Study",
  "version": "pilot",
  "authors": [
    "Jane Doe",
    "John Doe"
  ],
  "date": "2026-02-23",
  "description": "This study is meant to test your ability.",
  "organizations": [
    "The reVISit Team",
    "The Other Team"
  ]
}
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="authors"></a> `authors` | `string`[] | The authors of your study. | [parser/types.ts:104](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L104) |
| <a id="date"></a> `date` | `string` | The date of your study, may be useful for the researcher. | [parser/types.ts:106](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L106) |
| <a id="description"></a> `description` | `string` | The description of your study, shown on the landing page. | [parser/types.ts:108](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L108) |
| <a id="organizations"></a> `organizations` | `string`[] | The organizations that are associated with your study. | [parser/types.ts:110](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L110) |
| <a id="title"></a> `title` | `string` | The title of your study, shown on the landing page. | [parser/types.ts:100](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L100) |
| <a id="version"></a> `version` | `string` | The version of your study. When you change a configuration file after a study has already been distributed to participants, you can change the version number so that the participants who see this new configuration file can be identified. | [parser/types.ts:102](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L102) |
