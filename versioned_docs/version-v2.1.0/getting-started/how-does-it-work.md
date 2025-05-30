---
sidebar_position: 1
displayed_sidebar: docs
---

# How Does It Work?

import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    referenceLinks={[
        {name: "Study Config", url: "../../typedoc/interfaces/StudyConfig"},
        {name: "Study Metadata", url: "../../typedoc/interfaces/StudyMetadata/"},
        {name: "UI Config", url: "../../typedoc/interfaces/UIConfig"},
        {name: "Base Individual Component", url: "../../typedoc/interfaces/BaseIndividualComponent/"},
        {name: "Base Response", url: "../../typedoc/interfaces/BaseResponse/"},
        {name: "Sequence", url: "../../typedoc/interfaces/Sequence/"},
        {name: "Analytics Platform", url: "../../analysis"},
        {name: "Lifecycle of reVISit", url: "../../data-and-deployment/lifecycle-of-revisit"},
        {name: "Data Management", url: "../../analysis/data-management"}
    ]}
/>

To create a study with reVISit, you have to create **components** that contain the content of your study, and you have to create the **study configuration (the reVISit Spec)** that controls when and how these components are shown to participants. Here, we will introduce these at a high level and link to the [detailed documentation](../../typedoc/globals) where appropriate. 

# Components

Components are where study-specific content goes. ReVISit supports many types of components: 

* **[Markdown Files](../../typedoc/interfaces/MarkdownComponent)** contain formatted text, including links, images, embedded videos, etc. They are useful for introductions, consent forms, help pages, etc. 
* **[Images](../../typedoc/interfaces/ImageComponent) and [Videos](../../typedoc/interfaces/VideoComponent)** can be used as stimuli directly. 
* **[Web Pages](../../typedoc/interfaces/WebsiteComponent)** can be used to create custom stimuli, including interactive stimuli developed with JavaScript 
* **[React Components](../../typedoc/interfaces/ReactComponent)** can be used for sophisticated interactive stimuli. In comparison to HTML pages, react components simplify the communication between reVISit and the stimulus. 
* **[Vega and Vega-lite Components](../../typedoc/type-aliases/VegaComponent)** can be used to create declarative visualization stimuli. Vega components integrate with reVISit's provenance system and track user interactions with the visualization.
* **[Survey Questions](../../typedoc/interfaces/QuestionnaireComponent)** can be used to elicit structured responses from participants.

All of these stimuli can be (and commonly are) paired with **responses**. Responses are form elements that capture the elicited responses. Survey questions are basically empty components with responses. 

A component is typically defined in the spec, with the text, code, or image included from a file/URL. The only exception are survey questions, which do not need a file/URL and are specified directly in the spec.

# The reVISit Spec

The [reVISit Spec](../../typedoc/interfaces/StudyConfig) enables you to define the details of your experiment as a JSON file. The reVISit Spec has five top-level concepts: 

* **Study Metadata** — specifying things like the name of the study, authors, contact e-mails
* **UI Config** — parameterizing the appearance of reVISit
* **Components** and **BaseComponents** — setting up the content of the study
* **Sequence** — choosing the order and the selection of tasks participants see. 

We'll explain the ideas in the next section, and link to the documentation for more details. 

Check out the [detailed documentation](../../typedoc/interfaces/StudyConfig) for the reVISit Spec.

## Study Metadata

The study metadata defines elements such as the study title, authors, and description. The title and description are shown on the landing page when you have multiple studies. The other fields are hidden to the user, but are saved to the database with participant tracking information. This allows you to see which version of the study a participant took. For more detailed documentation on the study metadata, check out the [documentation](../../typedoc/interfaces/StudyMetadata).

## UI Configuration

The UI configuration tells reVISit how the UI should be laid out, such as which image to use for the study logo, whether to include a sidebar, etc. For more detailed documentation on the UI configuration, check out the [documentation](../../typedoc/interfaces/UIConfig).

## Specifying Components in the Spec

Components are the building blocks for each study. Each component extends the [BaseIndividualComponent](../../typedoc/interfaces/BaseIndividualComponent) interface. To add a component to your study (which can be thought of as a “page” of your study), you add a JSON object representing that component to the `components` object using a freely choosable key. The `type` key in that JSON object controls which type of component you are referring to. 

### Collecting Responses

Each component has a list of responses which represents a set of questions to ask to the user for that particular component. The user can describe where the question should be displayed in the UI, the instruction for the response, and the type of response input (e.g., a [numerical response](../../typedoc/interfaces/NumericalResponse), a [dropdown](../../typedoc/interfaces/DropdownResponse), a [slider](../../typedoc/interfaces/SliderResponse), etc). Each response interface extends the [BaseResponse](../../typedoc/interfaces/BaseResponse) interface.

The below example illustrates a simple consent component that is based on a Markdown file and has a response that asks for a signature, nested inside the `components` block: 

```js
"components":{ 
    "consent": {
        "type": "markdown",
        "path": "demo-brush-interactions/assets/consent.md",
        "nextButtonText": "Agree",
        "response": [
            {
                "id": "signature",
                "prompt": "Your signature",
                "required": true,
                "location": "belowStimulus",
                "type": "shortText",
                "placeholder": "Please provide your signature"
            }
        ]
    }
} 
```

For more detailed documentation on the response section, check out the [documentation](../../typedoc/interfaces/BaseResponse).

## Base Components and Inheritance

[Base Components](../../typedoc/interfaces/StudyConfig#properties) can be used to implement inheritance for components. This is often useful if you want to parameterize a component. For example: 

* You might have a stimulus, such as an image, about which you want to ask multiple different questions on separate pages.  
* You might have a generic implementation of a stimulus, such as a bar chart, and you want to pass in data to change how the stimulus appears. 

In both of these cases, you can set up a component once as a `baseComponent`, including linking to the stimulus and including (partial) responses, but then later write inherited, short components that extend the base component with the specific functionality you want. 

For examples of how to write a base component, refer to the [documentation](../../typedoc/interfaces/StudyConfig#properties) and to the [relevant tutorial](../designing-studies/html-stimulus.md).

## Sequence

The sequence object of the study configuration defines (a) the order participants see your components and (b) determines which components they see. ReVISit supports sophisticated ordering strategies, interruptions and skip logic. Specifically, revisit supports: 

* **Ordering Strategies:** 
    * **Fixed** order: participants see the components the way they are defined in the sequence
    * **Random** order: the order of the components are randomized
    * **[Latin Square](https://en.wikipedia.org/wiki/Latin_square) order**: permute the order of stimuli but ensure that for a set of participants, each component occurs at each index an equal amount of times throughout the sequence (e.g. if there are 100 participants and 10 components, each component is seen at each index 10 times).
* **Sampling:**  `numSamples` draws a given number of items from a block. numSamples can be used in combination with each ordering strategy (while preserving ordering guarantees)
* **Interruptions**  can be used to insert breaks and attention checks into a block
* **Skips** can be used to control flow based on the response to a question or a component block. 

All of these can be applied on arbitrarily nested “blocks”: an entry in the `components` list can either be the name of a component or another component block. For example, the overall structure of a study can be linear (introduction, consent, tutorial, trials, survey), but within trials we can use random order:  

```js
"sequence": {
    "order": "fixed",
    "components": [
        "introduction",
        "consent",
        "tutorial",
        {
            "order": "random",
            "components": [
                "paintBrush_q1",
                "rectangleBrush_q1",
                "axisBrush_q1",
                "sliderBrush_q1"
            ]
        },
        "post-study-survey",
        "survey"
    ]
}
```

You can find more detailed documentation about the sequencing strategies [here](../../typedoc/interfaces/ComponentBlock).


## reVISit Study Modes

Each of the reVISit studies has various modes which enable different features. These can be managed in the "Manage" tab of a particular study in our analytics interface. Here we give a brief introduction to these modes. Check out our [Analytics Platform Documentation](../../analysis) for more information on managing your data and studies. Additionally, you can find our [best practices](../../data-and-deployment/lifecycle-of-revisit) for using these modes to manage the lifecycle of your reVISit study.

### Data Collection

With Data Collection enabled, all data that is captured by participants will be stored either Locally or in your Firestore database (dependent on your current setup). You can check out our [data management documentation](../../analysis/data-management) to learn how to manage participants, create backup datasets, and more. 

Disabling data collection for a particular study will be shown to the user with a `DEMO MODE` icon in the upper right hand corner. This is to alert users that their data is not currently being collected.


### Study Navigator

When the study navigator is enabled, any user will be able to access the studie's "study browser". This allows users to move between any two components in the study freely. This is especially useful when you are disseminating your study after all data collection has completed and you'd like to share your study with the broader public.

### Publicly Accessible Analysis Interface

The analysis interface provides administrators with a way to view, download, and manage study data. When enabling this mode, all the data for this particular study will be viewable by the broader public. This means that anybody can view the anonymized participants, see the answers given, and download all the data. 