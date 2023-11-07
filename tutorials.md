---
layout: page_toc
title: Tutorial | reVISit
weight: 2
tag: tutorial
permalink: /tutorial/
---

# Tutorial

{% capture path %}{{ site.baseurl }}/assets/tutorial/{% endcapture %}
{% capture repo %}{{ site.repo }}{% endcapture %}
{% capture code %}{{ site.code}}{% endcapture %}


reVISit lets you create interactive, web-based study setups using a JSON domain-specific language (DSL), called reVISit.spec, and a set of stimuli specified in the DSL. Once you have created a spec and the stimuli, you can build your study and deploy it to the web. You can use stimuli that are images, (interactive) html pages, or react components. 

The overall process is shown in the following figure: 

![Revisit teaser image showing revisit workflow]({{ path }}revisit-overview.png)

In this tutorial, we'll walk you through a simple example to create your first study with reVISit! 

## The ReVISit DSL

The ReVISit framework uses a declarative DSL (Domain Specific Language) for specifying visualization experiments. The configuration file [**reVISit.spec**]({{ code }}public/configs/config-reference.hjson) uses HJSON format which compiles into the ReVISit platform. This documentation provides an overview on how to configure a visualization experiment using the ReVISit DSL.

# Environment Setup

The ReVISit frameworks provides an environment that allows researchers to build web-based visualization user studies by cloning/forking a github repository. Users can then customize the properties of a configuration file allows the specification of desired study components (consent, training, practice, trials, stimuli and survey). This section provides a guideline of how to setup the ReVISit framework and further sections explain how to modify the configuration file.

### How to install reVISit and run it locally

- Fork, then clone the [**ReVISit repository**]({{ repo }})
- Run `yarn install`. If you don't have yarn installed, run `npm i -g yarn`.
- To run locally, run `yarn install` , then `yarn serve`.
- Navigate to http://localhost:8080 to a view demo studies.

**Note:** The ReVISit framework uses [Firebase](http://firebase.google.com) as its default data store. To connect to a Firebase instance:

### How to create and connect to a Firebase instance: 

Navigate to [Firebase](http://firebase.google.com) and go to your console. 
<img src="{{ path }}firebase_steps/step1.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

Create a new Firebase project 
<img src="{{ path }}firebase_steps/step2.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

Name your Project Accordingly
<img src="{{ path }}firebase_steps/step3.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

With your project created, we are now going to add a firestore database to it. 
<img src="{{ path }}firebase_steps/step4.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

<img src="{{ path }}firebase_steps/step5.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

You can leave the default settings in the following two steps. 
<img src="{{ path }}firebase_steps/step6.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

<img src="{{ path }}firebase_steps/step7.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

With the new database created, we'll want to change the read/write rules to only allow authenticated users to write to the database. Go to the 'rules' tab (second tab) and update your read/write rules as follows: 

``rules_version = '2';
service cloud.firestore {
 match /databases/{database}/documents {
    match /{document=**} {
    	allow read: if true
       allow write: if request.auth != null;
    }
  }
}
``

<img src="{{ path }}firebase_steps/step8.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">


We are now going to add an app to your firebase project: 
<img src="{{ path }}firebase_steps/step9.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">
<img src="{{ path }}firebase_steps/step10.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">


With the app set up, we are ready to copy over the app configuration to your revisit project. 
Click on project settings and copy your firebase configuration to the .env file in your revisit project (just the object, don't include the javascript parts like `const, ;`, etc.). 

<img src="{{ path }}firebase_steps/step11.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">


We are now going to set up the authentication so that your browser is authorized to communicate with your firebase database. 
<img src="{{ path }}firebase_steps/step12.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

<img src="{{ path }}firebase_steps/step13.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

<img src="{{ path }}firebase_steps/step14.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

<img src="{{ path }}firebase_steps/step15.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

Our last step is to set up App Check. 
<img src="{{ path }}firebase_steps/step16.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">
<img src="{{ path }}firebase_steps/step17.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">
<img src="{{ path }}firebase_steps/step18.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">
<img src="{{ path }}firebase_steps/step19.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">
<img src="{{ path }}firebase_steps/step20.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">



- Navigate to http://localhost:8080 and click on any demo study.
- Press [Ctrl + Shift + i] to view the browser console.
- Copy the debug token from the console.
<img src="{{ path }}console.png" alt="Console" style="border: 2px solid black; border-radius: 5px;">

- Navigate to your firebase instance and add the token as shown below:


<img src="{{ path }}firebase.png" alt="Firebase" style="border: 2px solid black; border-radius: 5px;">

- Navigate to http://localhost:8080 and launch any demo study.

<img src="{{ path }}demo.png" alt="Demo" style="border: 2px solid black; border-radius: 5px;">

## How to Create Your Own Study

First, complete the steps above to clone and install rVISit to your computer. All of the files you need to touch to create your own study are in the [`public`]({{code}}public/) folder -- unless you plan to add React components, which live in the `src` folder. If you're using react components, check out the guide for that [here](#react-component).

## The Basic Study Grammar

The configuration is done using the reVISit DSL, which allows you to specify information on the study metadata, UI configuration, study components, and study sequence. reVISit configurations are written in [HJSON](https://hjson.github.io/), a human readable version of JSON that allows commenting and has looser syntax requirements. We'll give an overview of what each of these sections controls below, and give you some relevant HJSON snippets for each section.


### Study Metadata

The study metadata defines elements such as the study title, authors, and description. The title and description are shown on the landing page when you have multiple studies. The other fields are hidden to the user, but are saved to the database with participant tracking information. This allows you to see which version of the study a participant took.

For more detailed documentation on the study metadata, check out the [documentation](/typedoc/interfaces/StudyMetadata.html).

```
{
    ...
    studyMetadata: {
        title: Study title
        version: pilot
        authors: [
            The reVISit Team
        ]
        date: 2023-08-08
        description: A demo study for the documentation
        organizations: [
            University of Utah
            WPI
            University of Toronto
        ]
    }
    ...
}
```

### UI Configuration

The UI configuration tells reVISit how the UI should be laid out, such as which image to use for the study logo, whether to include a sidebar, the contact email, etc.

For more detailed documentation on the UI configuration, check out the [documentation](/typedoc/interfaces/UIConfig.html).

```
{
    ...
    uiConfig: {
        contactEmail: test@test.com
        helpTextPath: folder/help.md
        logoPath: assets/revisitLogoSquare.svg
        withProgressBar: true
        autoDownloadStudy: false
        sidebar: true
    }
    ...
}
```

### Study Components

This is where things start to get interesting. In this section, you define a list of the study components. There are 2 basic types of study components, one that renders something to the page and a container component. The container component exists to enable groupings of rendering components, randomization (not yet implemented), and skip logic (not yet implemented).

We'll step through examples for how to the rendering components and the container components. 

#### Markdown Component

A markdown component renders a markdown file to the page. This is useful for introducing your study, giving instructions, etc. The markdown file can be in any folder in the `public` folder (e.g., `public/cleveland/introduction.md`), and the path is relative to the `public` folder.

For more detailed documentation on the markdown component, check out the [documentation](/typedoc/interfaces/MarkdownComponent.html).

```
introduction: {
    type: markdown
    path: cleveland/introduction.md
    response: []
}
```

#### Image Component

Similar to mark down components, image components render an image to the page. The image can be in any folder in the `public` folder (e.g., `public/cleveland/cm-training.png`), and the path is relative to the `public` folder.

For more detailed documentation on the image component, check out the [documentation](/typedoc/interfaces/ImageComponent.html).

```
training1: {
    type: image
    path: cleveland/cm-training.png
    response: []
}
```

#### Website Component

Similar to the above components website components render a website to the page. The website can be in any folder in the `public` folder (e.g., `public/mvnv/training/mvnv-training.html`), and the path is relative to the `public` folder, in that case. The website may also be external, in which case the path is the full URL. This would be useful for displaying publicly available websites or elements on them as a part of your study.

For more detailed documentation on the website component, check out the [documentation](/typedoc/interfaces/WebsiteComponent.html).

```
training: {
    type: website
    type: website
    path: mvnv/training/mvnv-training.html
    response: []
}
```

#### Questionnaire Component

The questionnaire component renders a questionnaire to the page. It could be  useful for collecting demographic information, or other information that you want to collect from participants. Since this component doesn't render a stimulus, it's only useful for collecting basic information from participants.

For more detailed documentation on the questionnaire component, check out the [documentation](/typedoc/interfaces/QuestionnaireComponent.html).

```
survey: {
    type: questionnaire
    response: [
        {
            id: q1
            prompt: Dropdown example
            required: true
            location: aboveStimulus
            type: dropdown
            placeholder: Enter your chart preference
            options: [
                {
                    label: Bar Chart
                    value: Bar Chart
                }
                {
                    label: Bubble Chart
                    value: Bubble Chart
                }
            ]
        }
    ]
}
```

#### React Component

The React component is by far the most complicated. It allows you to render a React component to the page. This is useful for rendering interactive stimuli, or for rendering stimuli that require a lot of customization. We have options for passing parameters to the React component that allow the same component to be used for multiple stimuli. For the best example of how to use this component, check out the Cleveland & McGill demo study.

For more detailed documentation on the react component, check out the [documentation](/typedoc/interfaces/ReactComponent.html).

```
trial: {
    meta: {
        nr-dots: 1
    }
    title: Click Accuracy Test
    description: try to click on the center of the moving dot
    instruction: Click on the moving dot
    type: react-component
    path: ClickAccuracyTest.tsx
    parameters: {
        speed: 100
        taskid: accuracy
    }
    nextButtonLocation: sidebar
    response: [
        {
            id: accuracy
            prompt: Your click distance to circle center
            required: true
            location: sidebar
            type: iframe
        }
    ]
}
```

### Container Component

The container component is the odd one out. It doesn't render anything to the page, but it allows you to group components together, and to define the order in which they should be displayed. This is useful for grouping components into logical blocks. For example, you might have a training block, and then multiple trial blocks. Eventually, you will be able to use the container component to define skip logic and randomization, both of which are not yet implemented.

For more detailed documentation on the container component, check out the [documentation](/typedoc/interfaces/ContainerComponent.html).

```
trials1: {
    type: container
    order: [
        trial
    ]
    components: {
        trial: {
            meta: {
                nr-dots: 1
            }
            title: Click Accuracy Test
            description: try to click on the center of the moving dot
            instruction: Click on the moving dot
            type: react-component
            path: ClickAccuracyTest.tsx
            parameters: {
                speed: 100
                taskid: accuracy
            }
            nextButtonLocation: sidebar
            response: [
                {
                    id: accuracy
                    prompt: Your click distance to circle center
                    required: true
                    location: sidebar
                    type: iframe
                }
            ]
        }
    }
}
```

#### Collecting Responses

The last part of defining your study involves collecting responses from participants. This is done in the response section of each rendering component and is required. The response section is a list of questions that you want to ask participants. Each question has a prompt, a type, and a location. The prompt is the text that is displayed to the participant. The type is the type of response that you want to collect. The location is where you want to display the response to the participant. The location can be one of `aboveStimulus`, `belowStimulus`, or `sidebar`. The type of response that you want to collect depends on the type of question that you want to ask. The available types are:

- `numerical`: A text box that allows the participant to enter a number.
- `shorttext`: A text box that allows the participant to enter text.
- `longtext`: A text area that allows the participant to enter text.
- `likert`: A likert scale that allows the participant to select one of a set of options.
- `dropdown`: A dropdown menu that allows the participant to select one of a set of options.
- `slider`: A slider that allows the participant to select a value between a minimum and maximum value.
- `checkbox`: A checkbox that allows the participant to select one or more options.
- `radio`: A radio button that allows the participant to select one of a set of options.
- `iframe`: A list generated by items passed from an iframe (website component).

For more detailed documentation on the response section, check out the [documentation](/typedoc/index.html#response).

```
response: [
    {
        id: q1
        prompt: Dropdown example
        required: true
        location: aboveStimulus
        type: dropdown
        placeholder: Enter your chart preference
        options: [
            {
                label: Bar Chart
                value: Bar Chart
            }
            {
                label: Bubble Chart
                value: Bubble Chart
            }
        ]
    }
]
```

#### Sequence

The last part of defining your study involves setting the sequences in which your components should be displayed to the participants. A common sequence is *consent*, *training*,*trial_block1*, *trial_block2*, ... These blocks and components are ordered in the sequence section. The sequence section is a list in the order you want to display components to the participant.

```js
sequence: [
    "consent",
    "training",
    "trials0"
]
```


## Deploying your Study 

Deploying your study should be relatively simple. We include a GitHub action that will build your study and deploy it to GitHub pages. Once your configuration is built, you need only push your changes to GitHub and the action will run. This means that developing the studies and iterating their design is easy. If you find something doesn't work in a pilot version of the study, you can change it out, push and the new version will be deployed in a matter of minutes. By default, GitHub pages will deploy to a URL like `https://<username>.github.io/<repository-name>`. If you want to deploy to a custom domain, you can do that as well by following the instructions on [GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Getting your Data Out 

Since reVISit uses Firebase as its data store, you can use the Firebase console to download your data. Additionally, we provide the ability to manually download your data from the study ending page. There are options to download the data as a CSV or JSON file. The CSV file is a flat file that contains all of the data for all of the participants in your study. The JSON file is a nested file that contains all of the data for all of the participants in your study. The JSON file is useful if you want to do more complex analysis of your data, but the CSV file is useful if you want to import your data into a spreadsheet program like Excel or Google Sheets.


## Future Plans: Analysis Dashboard

We are working on an analysis dashboard that will allow you to analyze your data in real time. This will allow you to see how many participants have completed your study, how long they spent on each component, and how they responded to each component. This will allow you to monitor your study as it is running, and to make changes to the study if you find that participants are not completing it, or are not responding to it in the way you expected.

The tool will allow analyzing participant data after the study has run using our custom dashboard that we created as an earlier project, [published at SIGCHI](https://vdl.sci.utah.edu/publications/2021_chi_revisit/). This custom dashboard is specially built for our Trrack integration and will allow you to freely analyze the event data generated by your study.

## Future Plans: Configuration Builder

We are also working on a configuration builder that will allow you to build your configuration file using a graphical interface. This will allow you to build your study without having to write any code. We hope that this will make it easier for researchers to build their studies, and will allow researchers who are not comfortable with code to use reVISit. We intend to make this available some time after we hit v1.0.0 with reVISit.spec.
