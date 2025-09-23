# StudyMetadata

Defined in: [parser/types.ts:48](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L48)

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
| <a id="authors"></a> `authors` | `string`[] | The authors of your study. | [parser/types.ts:54](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L54) |
| <a id="date"></a> `date` | `string` | The date of your study, may be useful for the researcher. | [parser/types.ts:56](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L56) |
| <a id="description"></a> `description` | `string` | The description of your study, shown on the landing page. | [parser/types.ts:58](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L58) |
| <a id="organizations"></a> `organizations` | `string`[] | The organizations that are associated with your study. | [parser/types.ts:60](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L60) |
| <a id="title"></a> `title` | `string` | The title of your study, shown on the landing page. | [parser/types.ts:50](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L50) |
| <a id="version"></a> `version` | `string` | The version of your study. When you change a configuration file after a study has already been distributed to participants, you can change the version number so that the participants who see this new configuration file can be identified. | [parser/types.ts:52](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L52) |
