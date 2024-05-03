---
sidebar_position: 1
displayed_sidebar: docs
---

# Interface: StudyMetadata

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

## Table of contents

### Properties

- [authors](StudyMetadata.md#authors)
- [date](StudyMetadata.md#date)
- [description](StudyMetadata.md#description)
- [organizations](StudyMetadata.md#organizations)
- [title](StudyMetadata.md#title)
- [version](StudyMetadata.md#version)

## Properties

### authors

• **authors**: `string`[]

The authors of your study.

#### Defined in

[parser/types.ts:53](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L53)

___

### date

• **date**: `string`

The date of your study, may be useful for the researcher.

#### Defined in

[parser/types.ts:55](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L55)

___

### description

• **description**: `string`

The description of your study, shown on the landing page.

#### Defined in

[parser/types.ts:57](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L57)

___

### organizations

• **organizations**: `string`[]

The organizations that are associated with your study.

#### Defined in

[parser/types.ts:59](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L59)

___

### title

• **title**: `string`

The title of your study, shown on the landing page.

#### Defined in

[parser/types.ts:49](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L49)

___

### version

• **version**: `string`

The version of your study, shown on the landing page and attached to participant data. When you change a configuration file after a study has already been distributed to participants, you can change the version number so that the participants who see this new configuration file can be identified.

#### Defined in

[parser/types.ts:51](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L51)
