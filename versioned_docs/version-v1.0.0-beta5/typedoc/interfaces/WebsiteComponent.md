---
sidebar_position: 1
displayed_sidebar: docs
---

# Interface: WebsiteComponent

The WebsiteComponent interface is used to define the properties of a website component. A WebsiteComponent is used to render an iframe with a website inside of it. This can be used to display an external website or an html file that is located in the public folder.

```js
 {
   "type": "website",
   "path": "path/to/study/assets/website.html",
 }
```

To pass a data from the config to the website, you can use the `parameters` field as below:

```js
 {
   "type": "website",
   "path": "path/to/website.html",
   "parameters": {
     "barData": [0.32, 0.01, 1.2, 1.3, 0.82, 0.4, 0.3]
   }
   "response": [
     {
       "id": "barChart",
       "prompt": "Your selected answer:",
       "required": true,
       "location": "belowStimulus",
       "type": "iframe"
     }
   ],
 }
```
In the `website.html` file, by including `revisit-communicate.js`, you can use the `Revisit.onDataReceive` method to retrieve the data, and `Revisit.postAnswers` to send the user's responses back to the reVISit as shown in the example below:

```html
 <script src="../../revisitUtilities/revisit-communicate.js"></script>
 <script>
   Revisit.onDataReceive((data) => {
     const barData = data['barData'];
     ...
   });

   // Call out that 'barChart' needs to match ID in 'response' object
   Revisit.postAnswers({ barChart: userAnswer });
 </script>
```

 * If the html website implements Trrack library for provenance tracking, you can send the provenance graph back to reVISit by calling `Revisit.postProvenanceGraph` as shown in the example below. You need to call this each time the Trrack state is updated so that reVISit is kept aware of the changes in the provenance graph.

```js
   const trrack = initializeTrrack({
       initialState,
       registry
   });

   ...
   Revisit.postProvenance(trrack.graph.backend);
```

## Hierarchy

- [`BaseIndividualComponent`](BaseIndividualComponent.md)

  ↳ **`WebsiteComponent`**

## Table of contents

### Properties

- [correctAnswer](WebsiteComponent.md#correctanswer)
- [description](WebsiteComponent.md#description)
- [instruction](WebsiteComponent.md#instruction)
- [instructionLocation](WebsiteComponent.md#instructionlocation)
- [meta](WebsiteComponent.md#meta)
- [nextButtonLocation](WebsiteComponent.md#nextbuttonlocation)
- [nextButtonText](WebsiteComponent.md#nextbuttontext)
- [parameters](WebsiteComponent.md#parameters)
- [path](WebsiteComponent.md#path)
- [provideFeedback](WebsiteComponent.md#providefeedback)
- [response](WebsiteComponent.md#response)
- [type](WebsiteComponent.md#type)

## Properties

### correctAnswer

• `Optional` **correctAnswer**: [`Answer`](Answer.md)[]

The correct answer to the component. This is used for training trials where the user is shown the correct answer after a guess.

#### Inherited from

[BaseIndividualComponent](BaseIndividualComponent.md).[correctAnswer](BaseIndividualComponent.md#correctanswer)

#### Defined in

[parser/types.ts:302](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L302)

___

### description

• `Optional` **description**: `string`

The description of the component. This is used to identify and provide additional information for the component in the admin panel.

#### Inherited from

[BaseIndividualComponent](BaseIndividualComponent.md).[description](BaseIndividualComponent.md#description)

#### Defined in

[parser/types.ts:308](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L308)

___

### instruction

• `Optional` **instruction**: `string`

The instruction of the component. This is used to identify and provide additional information for the component in the admin panel.

#### Inherited from

[BaseIndividualComponent](BaseIndividualComponent.md).[instruction](BaseIndividualComponent.md#instruction)

#### Defined in

[parser/types.ts:310](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L310)

___

### instructionLocation

• `Optional` **instructionLocation**: ``"sidebar"`` \| ``"aboveStimulus"`` \| ``"belowStimulus"``

The location of the instructions.

#### Inherited from

[BaseIndividualComponent](BaseIndividualComponent.md).[instructionLocation](BaseIndividualComponent.md#instructionlocation)

#### Defined in

[parser/types.ts:300](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L300)

___

### meta

• `Optional` **meta**: `Record`\<`string`, `unknown`\>

The meta data for the component. This is used to identify and provide additional information for the component in the admin panel.

#### Inherited from

[BaseIndividualComponent](BaseIndividualComponent.md).[meta](BaseIndividualComponent.md#meta)

#### Defined in

[parser/types.ts:306](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L306)

___

### nextButtonLocation

• `Optional` **nextButtonLocation**: ``"sidebar"`` \| ``"aboveStimulus"`` \| ``"belowStimulus"``

The location of the next button.

#### Inherited from

[BaseIndividualComponent](BaseIndividualComponent.md).[nextButtonLocation](BaseIndividualComponent.md#nextbuttonlocation)

#### Defined in

[parser/types.ts:298](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L298)

___

### nextButtonText

• `Optional` **nextButtonText**: `string`

The text that is displayed on the next button.

#### Inherited from

[BaseIndividualComponent](BaseIndividualComponent.md).[nextButtonText](BaseIndividualComponent.md#nextbuttontext)

#### Defined in

[parser/types.ts:296](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L296)

___

### parameters

• `Optional` **parameters**: `Record`\<`string`, `unknown`\>

The parameters that are passed to the website (iframe). These can be used within your website to render different things.

#### Defined in

[parser/types.ts:445](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L445)

___

### path

• **path**: `string`

The path to the website. This should be a relative path from the public folder or could be an external website.

#### Defined in

[parser/types.ts:443](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L443)

___

### provideFeedback

• `Optional` **provideFeedback**: `boolean`

Controls whether the component should provide feedback to the participant, such as in a training trial. If not provided, the default is false.

#### Inherited from

[BaseIndividualComponent](BaseIndividualComponent.md).[provideFeedback](BaseIndividualComponent.md#providefeedback)

#### Defined in

[parser/types.ts:304](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L304)

___

### response

• **response**: [`Response`](../modules.md#response)[]

The responses to the component

#### Inherited from

[BaseIndividualComponent](BaseIndividualComponent.md).[response](BaseIndividualComponent.md#response)

#### Defined in

[parser/types.ts:292](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L292)

___

### type

• **type**: ``"website"``

#### Defined in

[parser/types.ts:441](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L441)
