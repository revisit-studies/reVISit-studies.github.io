---
sidebar_position: 1
displayed_sidebar: reference
---

# BaseComponents

> **BaseComponents**: `Record`\<`string`, `Partial`\<[`IndividualComponent`](IndividualComponent.md)\>\>

Defined in: [parser/types.ts:1336](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L1336)

The baseComponents is an optional set of components which can help template other components. For example, suppose you have a single HTML file that you want to display to the user several times. Instead of having the same component twice in the `components` list, you can have a single baseComponent with all the information that the two HTML components will share. A great example is showing the same HTML component but with two different questions;

Using baseComponents:

```js
"baseComponents": {
"my-image-component": {
 "instructionLocation": "sidebar",
 "nextButtonLocation": "sidebar",
 "path": "<study-name>/assets/my-image.jpg",
 "response": [
   {
     "id": "my-image-id",
     "options": ["Europe", "Japan", "USA"],
     "prompt": "Your Selected Answer:",
     "type": "dropdown"
   }
 ],
 "type": "image"
}
}
```
In the above code snippet, we have a single base component which holds the information about the type of component, the path to the image, and the response (which is a dropdown containing three choices). Any component which contains the `"baseComponent":"my-image-component"` key-value pair will inherit each of these properties. Thus, if we have three different questions which have the same choices and are concerning the same image, we can define our components like below:
```js
"components": {
"q1": {
 "baseComponent": "my-image-component",
 "description": "Choosing section with largest GDP",
 "instruction": "Which region has the largest GDP?"
},
"q2": {
"baseComponent": "my-image-component",
"description": "Choosing section with lowest GDP",
"instruction": "Which region has the lowest GDP?"
},
"q3": {
"baseComponent": "my-image-component",
"description": "Choosing section with highest exports of Wheat",
"instruction": "Which region had the most Wheat exported in 2022?"
}
}
```
