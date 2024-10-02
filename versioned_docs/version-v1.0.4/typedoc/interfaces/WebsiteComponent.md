---
sidebar_position: 1
displayed_sidebar: reference
---

# WebsiteComponent

The WebsiteComponent interface is used to define the properties of a website component. A WebsiteComponent is used to render an iframe with a website inside of it. This can be used to display an external website or an html file that is located in the public folder.

```js
{
 "type": "website",
 "path": "<study-name>/assets/website.html",
}
```

To pass a data from the config to the website, you can use the `parameters` field as below:

```js
{
 "type": "website",
 "path": "<study-name>/website.html",
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

## Extends

- [`BaseIndividualComponent`](BaseIndividualComponent.md)

## Properties

| Property | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ |
| `allowFailedTraining?` | `boolean` | Controls whether the component should allow failed training. If not provided, the default is true. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`allowFailedTraining` |
| `correctAnswer?` | [`Answer`](Answer.md)[] | The correct answer to the component. This is used for training trials where the user is shown the correct answer after a guess. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`correctAnswer` |
| `description?` | `string` | The description of the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`description` |
| `instruction?` | `string` | The instruction of the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`instruction` |
| `instructionLocation?` | `"sidebar"` \| `"aboveStimulus"` \| `"belowStimulus"` | The location of the instructions. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`instructionLocation` |
| `meta?` | `Record`\<`string`, `unknown`\> | The meta data for the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`meta` |
| `nextButtonLocation?` | `"sidebar"` \| `"aboveStimulus"` \| `"belowStimulus"` | The location of the next button. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`nextButtonLocation` |
| `nextButtonText?` | `string` | The text that is displayed on the next button. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`nextButtonText` |
| `parameters?` | `Record`\<`string`, `unknown`\> | The parameters that are passed to the website (iframe). These can be used within your website to render different things. | - |
| `path` | `string` | The path to the website. This should be a relative path from the public folder or could be an external website. | - |
| `provideFeedback?` | `boolean` | Controls whether the component should provide feedback to the participant, such as in a training trial. If not provided, the default is false. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`provideFeedback` |
| `response` | [`Response`](../type-aliases/Response.md)[] | The responses to the component | [`BaseIndividualComponent`](BaseIndividualComponent.md).`response` |
| `trainingAttempts?` | `number` | The number of training attempts allowed for the component. The next button will be disabled until either the correct answer is given or the number of attempts is reached. When the number of attempts is reached, if the answer is incorrect still, the correct value will be shown to the participant. The default value is 2. Providing a value of -1 will allow infinite attempts and the participant must enter the correct answer to continue, and reVISit will not show the correct answer to the user. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`trainingAttempts` |
| `type` | `"website"` | - | - |
