---
sidebar_position: 1
displayed_sidebar: docs
---

# Interface: UIConfig

The UIConfig is used to configure the UI of the app.
This includes the logo, contact email, and whether to show a progress bar.
The UIConfig is also used to configure the sidebar, which can be used to display the task instructions and capture responses. Below is an example of how the UI Config would look in your study configuration
```js
 uiConfig:{
   "contactEmail": "test@test.com",
   "helpTextPath": "path/to/assets/help.md",
   "logoPath": "path/to/assets/logo.jpg",
   "withProgressBar": true,
   "autoDownloadStudy": true
   "autoDownloadTime": 5000,
   "studyEndMsg": "Thank you for completing this study. You're the best!",
   "sidebar": true,
   "windowEventDebounceTime": 500,
   "urlParticipantIdParam": "PROLIFIC_ID",
   "numSequences": 500
 }
```
In the above, the `path/to/assets/` path is referring to the path to your individual study assets. It is common practice to have your study directory contain an `assets` directory where all components and images relevant to your study reside. Note that this path is relative to the `public` folder of the repository - as is all other paths you define in reVISit (aside from React components whose paths are relative to `src/public`.)

## Table of contents

### Properties

- [autoDownloadStudy](UIConfig.md#autodownloadstudy)
- [autoDownloadTime](UIConfig.md#autodownloadtime)
- [contactEmail](UIConfig.md#contactemail)
- [helpTextPath](UIConfig.md#helptextpath)
- [logoPath](UIConfig.md#logopath)
- [numSequences](UIConfig.md#numsequences)
- [sidebar](UIConfig.md#sidebar)
- [studyEndMsg](UIConfig.md#studyendmsg)
- [urlParticipantIdParam](UIConfig.md#urlparticipantidparam)
- [windowEventDebounceTime](UIConfig.md#windoweventdebouncetime)
- [withProgressBar](UIConfig.md#withprogressbar)

## Properties

### autoDownloadStudy

• `Optional` **autoDownloadStudy**: `boolean`

Controls whether the study data is automatically downloaded at the end of the study.

#### Defined in

[parser/types.ts:94](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L94)

___

### autoDownloadTime

• `Optional` **autoDownloadTime**: `number`

The time in milliseconds to wait before automatically downloading the study data.

#### Defined in

[parser/types.ts:96](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L96)

___

### contactEmail

• **contactEmail**: `string`

The email address that used during the study if a participant clicks contact.

#### Defined in

[parser/types.ts:86](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L86)

___

### helpTextPath

• `Optional` **helpTextPath**: `string`

The path to the help text file. This is displayed when a participant clicks help. Markdown is supported.

#### Defined in

[parser/types.ts:88](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L88)

___

### logoPath

• **logoPath**: `string`

The path to the logo image. This is displayed on the landing page and the header.

#### Defined in

[parser/types.ts:90](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L90)

___

### numSequences

• `Optional` **numSequences**: `number`

The number of sequences to generate for the study. This is used to generate the random sequences for the study. The default is 1000.

#### Defined in

[parser/types.ts:110](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L110)

___

### sidebar

• **sidebar**: `boolean`

Controls whether the left sidebar is rendered at all. Required to be true if your response's location is set to sidebar for any question.

#### Defined in

[parser/types.ts:100](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L100)

___

### studyEndMsg

• `Optional` **studyEndMsg**: `string`

The message to display when the study ends.

#### Defined in

[parser/types.ts:98](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L98)

___

### urlParticipantIdParam

• `Optional` **urlParticipantIdParam**: `string`

If the participant ID is passed in the URL, this is the name of the querystring parameter that is used to capture the participant ID (e.g. PROLIFIC_ID). This will allow a user to continue a study on different devices and browsers.

#### Defined in

[parser/types.ts:106](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L106)

___

### windowEventDebounceTime

• `Optional` **windowEventDebounceTime**: `number`

Debounce time in milliseconds for automatically tracked window events. Defaults to 100. E.g 100 here means 1000ms / 100ms = 10 times a second, 200 here means 1000ms / 200ms = 5 times per second

#### Defined in

[parser/types.ts:102](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L102)

___

### withProgressBar

• **withProgressBar**: `boolean`

Controls whether the progress bar is rendered in the study.

#### Defined in

[parser/types.ts:92](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L92)
