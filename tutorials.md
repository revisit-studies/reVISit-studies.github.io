---
layout: page_toc
title: Tutorials | reVISit
weight: 2
tag: tutorials
permalink: /tutorials/
---

# Tutorial

{% capture path %}{{ site.baseurl }}/assets/tutorials/{% endcapture %}
{% capture repo %}https://github.com/revisit-studies/revisit-study-frontend/{% endcapture %}
{% capture code %}https://github.com/revisit-studies/revisit-study-frontend/tree/main/{% endcapture %}


reVISit lets you create interactive, web-based study setups using a JSON domain-specific language, called reVISit.spec, and a set if stimuli specified in one of various formats. Once you have created a spec and the stimuli, you can build your study and deploy it to the web. You can use stimuli that are images, (interactive) html pages, or react components. 

The overall process is shown in the following figure: 

![TODO]({{ path }}revisit-overview.png)

In this tutorial, we'll walk you through a simple example to create your first study with reVISit! 


## How to Create a Study

To create your own study, go to the [github repository]({{repo}}) and clone it to your computer. You'll need node and yarn installed; check out the [README]({{repo}}#readme) for details on the installation. 

All of the files you need to touch are in the [`public`]({{code}}public/) folder. 


## The Basic Study Grammar


Set up your study in the config file, described in more detail here. 

The configuration is done using the reVISit DSL, which allows you to specify information on the study Metadata, ui configuration, component, and sequence. 


### Study Metadata

Define elements such as title, authors, and description

### UI Configuration
Configuration details for the ui such as study logo, whether to include a sidebar, contact email, etc

### Study Components

This is where things start to get ineresting. In this section, you define a list of the tudy components. There are three types of comonents currently supported by revisit: **consent**, **training** , and **trials**. 

#### Consent
A consent component where participants will read information on the study and choose whether or not to proceed. This component requires a path to the file with the consent content as a markdown file. You can also specify whether it requires participants to sign. 

```js
consent: {
    type: "consent"
    path: "markdowns/consent-mvnv.md"
    signatureRequired: true
}
```

#### Training
Training components are those intended to guide your study participant through a set of trials to familiarize them with the stimulus. Training stimulus currently support by reVISit include *website* (.html) and *image* (.png,.jpg, etc). 

```js
training: {
    type: "training",
    stimulus: {
        type: "website",
        path: "training/mvnv/mvnv-training.html"
    }
}
```
        
 
#### Trials
Trials are the core or your study. They are the tasks you will ask participants to perform.

Trials are organized into 'trial blocks', or compoments of type *trials*. The order of trials within a trial block can be hard coded. We are currently working on implementing randomization schemes as well, such as  "latin-square". 


Trials inside a *trial component* should include the task prompt and information on the task stimulus. The task stimulus types supported by reVISit are: *image*, *iframe*, *javascript*, *website*, and *react-component*. 

An example trial block with a single trial is shown below. 

```js
trials0: {
    type: "trials"
    order: ["task0"]
    nextButtonLocation: sidebar
    subset-count: 2
    response:[{
        //to use iframe input, id must match trialID
        id: "task0"
        type: "iframe",
        prompt: "Selected name(s) will show here",
        desc: "small description"
        required: true
        location: sidebar
    }]
    trials: {
        task0: {
            description: "task description"
            instruction:  "**Question:** Find the North American with the most Tweets"
            stimulus: {
                // Allowable types: image, javascript, website, react-component 
                type: "website"
                // can be a URL or a local path
                path: "mvnv-study/index.html",
                // style that will be applied to iframe
                style: {
                    height: "500px"
                }
            }
        }
    }
},
```
      

#### Sequence

The last part of defining your study involves setting the sequences in which your components should be displayed to the participants. A common sequence is *consent*, *training*,*trial_block1*, *trial_block2*, ...  

```js
sequence: [
    "consent",
    "training",
    "trials0"
]
```


## Deploying your Study 

1: Set the list of your study/studies in global.hjson. 

```js
{
  configsList: ["Study1",],
  configs: {"Study1": {
      title: "My First Study",
      path: "config-study.hjson",
      description: "My first reVISit study",
        }
    }
}
```



## Getting your Data Out 






