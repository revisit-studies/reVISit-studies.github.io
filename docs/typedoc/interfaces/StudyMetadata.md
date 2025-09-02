# StudyMetadata

Defined in: [parser/types.ts:47](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L47)

The StudyMetadata is used to describe certain properties of a study.
Some of this data is displayed on the landing page when running the app, such as the title and description.
Below is an example of a StudyMetadata entry in your study configuration file:

```js
"studyMetadata" : {
 "title": "My New Study",
 "version": "pilot",
 "authors": [
   "Jane Doe",
   "John Doe"
 ],
 "date": "2024-04-01",
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
| <a id="authors"></a> `authors` | `string`[] | The authors of your study. | [parser/types.ts:53](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L53) |
| <a id="date"></a> `date` | `string` | The date of your study, may be useful for the researcher. | [parser/types.ts:55](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L55) |
| <a id="description"></a> `description` | `string` | The description of your study, shown on the landing page. | [parser/types.ts:57](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L57) |
| <a id="organizations"></a> `organizations` | `string`[] | The organizations that are associated with your study. | [parser/types.ts:59](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L59) |
| <a id="title"></a> `title` | `string` | The title of your study, shown on the landing page. | [parser/types.ts:49](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L49) |
| <a id="version"></a> `version` | `string` | The version of your study. When you change a configuration file after a study has already been distributed to participants, you can change the version number so that the participants who see this new configuration file can be identified. | [parser/types.ts:51](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L51) |
