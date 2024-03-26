---
layout: tutorial
title: Tutorial | reVISit
weight: 2
tag: tutorial
permalink: /tutorial/
---
<h1 class='tutorial-page'>Introduction</h1>

{% capture path %}{{ site.baseurl }}/assets/tutorial/{% endcapture %}
{% capture repo %}{{ site.repo }}{% endcapture %}
{% capture code %}{{ site.code}}{% endcapture %}


reVISit lets you create interactive, web-based study setups using a JSON domain-specific language (DSL), called reVISit.spec, and a set of stimuli specified in the DSL. Once you have created a spec and the stimuli, you can build your study and deploy it to the web. You can use stimuli that are images, (interactive) html pages, or react components. 

The overall process is shown in the following figure: 

![Revisit teaser image showing revisit workflow]({{ path }}revisit-overview.png)

In the tutorials section, we'll walk you through a simple example to create your first study with reVISit! 

## The ReVISit DSL

The ReVISit framework uses a declarative DSL (Domain Specific Language) for specifying visualization experiments. The configuration file uses JSON format which compiles into the ReVISit platform. In the following tutorials, you will see how we configure a visualization experiment using the ReVISit DSL.

## Environment Setup

The ReVISit frameworks provides an environment that allows researchers to build web-based visualization user studies by cloning/forking a github repository. Users can then customize the properties of a configuration file which allows for the specification of desired study components (e.g. consent, training, practice, trials, stimuli and survey).

<h1 class='tutorial-page'>Installation</h1>


The reVisit project is open-source – meaning anyone can see the entire codebase. Most of the work that is done to create a new study is done by making changes to this codebase. Because of this, we will start by “forking the repository”.

Start by navigating to the following github repository: https://github.com/revisit-studies/study

You should see a “fork” button on the same row as the name of the repository. When you fork a repository, you are essentially creating your own copy of the repository in your GitHub account. This means that any changes you commit and push to this new repository will not affect the main source code. Instead, your organization will be able to have a central location for all of your personal studies. 

Once you fork the repository, you will be prompted for some basic information about this repository (such as the desired name). After this, you’ll need to clone the repository onto your local machine.

After the repository is on your local machine, you will have the entire codebase for your personal use. Any changes that you make to this repository can be committed and then pushed to your forked repository for other users in your organization to see.

To continue, you will need yarn installed. If you already have yarn installed, you can skip to Step 2 below. Otherwise, proceed with Step 1. 

<div class="info-panel">
    <div class="info-text">Note that this requires that you have the package manager NPM installed. If you do not have NPM installed, please see <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" targe="_blank">here</a> to get started. These docs will also direct you on how to install Node -- a prerequisite of NPM.</div>
</div>

<br>
<br>


**Step 1: Install yarn on your local computer using NPM:**

	npm i -g yarn

<br>

**Step 2: Once yarn is successfully installed, navigate to your forked repository and run the following yarn command:**
	
	yarn install

This will install all the packages that the reVisit requires to run.

<br>

**Step 3: . Once this is finished, you can now start the program:**

	yarn serve

This will launch a local server which can be accessed to view and interact with reVisit. By default, you can access this by visiting http://localhost:8080/. Any change you make to the existing codebase will automatically update the front end.

When you visit the site, you'll be greeted with a list of pre-constructed demo studies. You can interact with any of these studies to get some familiarity (and hopefully some inspiration) for how reVISit can help you quickly launch a crowd-sourced visualization study.


<h1 class='tutorial-page'>Tutorials</h1>

## Setting up a basic questionnaire study

Let's start with setting up a simple questionnaire study.

<div class='info-panel'>
    <div class="info-text">
        It is easiest to perform the following tutorial with an IDE. We suggest something like VSCode.
    </div>
</div>

You’ll see that the repository consists of many high level directories. For this tutorial, we will solely be working with the “public” directory. Start by making a new directory called “basic-questionnaire-study” in the "public" directory. Inside this folder, create another directory called "assets". The assets directory will be where all of our various components are held.

Once that is done, we will make an “introduction” markdown file. This will be used as the introduction to the study for your users.

Create a file with the following contents:

``` markdown

# Introduction 

Welcome to our study. This is a basic questionnaire study. We will only ask you a few questions and then we will be done.
```
Save this file as “introduction.md” in the “basic-questionnaire-study/assets” directory. Next, let’s create a “help” file. This will be used so that any user who needs help during the study will be able to read this markdown page.

``` markdown
# Help

This is a questionnaire. For each question, be sure to provide and answer and then click **Next** when you’re ready to move onto the next question.

```
Save this file as “help.md” in the “basic-questionnaire-study/assets” directory.

Now we are ready to create the configuration file for the study. This configuration defines how our study is laid out, provides some basic information about yourself (the creator), and describes which components will be added to the study. 

Create a new file called “config.json”. Then, copy and paste the following json into the new file.

``` json
{
    "$schema": "https://raw.githubusercontent.com/reVISit-studies/study/main/src/parser/StudyConfigSchema.json",
    "studyMetadata": {
        "title": "Basic Questionnaire Study",
        "version": "pilot",
        "authors": [
            "The reVISit Team"
        ],
        "date": "2024-03-19",
        "description": "A simple questionnaire study",
        "organizations": [
            "University of Utah",
            "WPI",
            "University of Toronto"
        ]
    },
    "uiConfig": {
        "contactEmail": "test@test.com",
        "helpTextPath": "basic-questionnaire-study/help.md",
        "logoPath": "assets/revisitLogoSquare.svg",
        "withProgressBar": true,
        "autoDownloadStudy": false,
        "sidebar": true
    },
    "components": {
        "introduction": {
            "type": "markdown",
            "path": "basic-questionnaire-study/introduction.md",
            "response": []
        },
        "first-question-set":{
            "type":"questionnaire",
            "response":[
                {
                    "id":"q1",
                    "prompt":"What is your first name?",
                    "required":true,
                    "location":"aboveStimulus",
                    "type":"longText",
                    "placeholder": "Please enter your first name"

                },
                {
                    "id":"q2",
                    "prompt":"What is your favorite color?",
                    "required":true,
                    "location":"aboveStimulus",
                    "type":"dropdown",
                    "placeholder":"Please choose your favorite color",
                    "options":[
                        {
                            "label":"Red",
                            "value":"red"
                        },
                        {
                            "label":"Blue",
                            "value":"blue"
                        },
                        {
                            "label":"My favorite color is not shown here.",
                            "value":"notShown"
                        }
                    ]
                }
            ]
        },
        "second-question-set":{
            "type":"questionnaire",
            "response":[
                {
                    "id":"q1",
                    "prompt":"What would you rate your satisfaction of this survey? 0 being very un-enjoyable, 5 being very enjoyable.",
                    "required": true,
                    "location":"aboveStimulus",
                    "type":"numerical",
                    "min":0,
                    "max":5
                }
            ]
        }
    },
    "sequence": {
        "order": "fixed",
        "components": [
            "introduction",
            "first-question-set",
            "second-question-set"
        ]
    }
}


```
Save this file in the “basic-questionnaire-study” directory -- one level above the "basic-questionnaire-study/assets" directory.

Now, our study is almost set up to view. The last step is to make sure that the “global.json” file is set to find this new study. Open the "global.json" file in the "public" directory.

Add the following code to the “configs” object:

``` JSON
“basic-questionnaire-study”:{
	“path”:”basic-questionnaire-study/config.json”
}
```
After this, add “basic-questionnaire-study” into the “configsList” list in the same file. It does not matter where "basic-questionnaire-study" appears in the configs list. Because the configs list is ordered, however, placing "basic-questionnaire-study" at the bottom of the list will mean that the study will show up at the bottom of the list of studies in the UI.

Now, if you start the server (using `yarn serve` as described in the Installation section), you'll be able to navigate to "http://localhost:8080/" and view your study in the list of studies. Alternatively, you can navigate to "http://localhost:8080/basic-questionnaire-study" to enter the study directly.


## Adding custom HTML to your Study

Now, we will take the study we just created and add another component based on a user-created HTML file. This allows for some additional customization of the component. 

The HTML code below uses the extensive D3.js library. It renders a simple, horizontal bar chart. Copy and paste this HTML into a document called “bar-chart.html” in the “basic-questionnaire-study” directory.

``` HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>D3 Nice Axes</title>
    <script src="https://d3js.org/d3.v7.js"></script>
    <!-- Load revisit-communicate to be able to send data to reVISit -->
    <script src="../../revisitUtilities/revisit-communicate.js"></script>
  </head>

  <body>
    <svg></svg>
  </body>

  <script>
    // Get data from the config file
    Revisit.onDataReceive((data) => {
      const barData = data['barData']
      const taskID = 'barChart';
      const loc = 'belowStimulus';
      height = 400;
      width = 750;
      padding = 25;
      svg = d3.select('svg');
      svg
        .attr('width', width + 2 * padding)
        .attr('height', height + 2 * padding);

      let spacing = height / barData.length;

      let min = d3.min(barData);
      let max = d3.max(barData);

      let xScale = d3.scaleLinear().domain([min, max]).range([0, width]).nice();

      let color = d3
        .scaleLinear()
        .domain([min, 0, max])
        .range(['darkred', 'lightgray', 'steelblue']);

      let xAxis = d3.axisBottom();
      xAxis.scale(xScale);

      svg
        .selectAll('.bar')
        .data(barData)
        .join('rect')
        .classed('bar', true)
        .attr('transform', 'translate(' + padding + ',' + padding + ')')
        .attr('x', (d) => xScale(Math.min(0, d)))
        .attr('y', (d, i) => i * spacing + 5)
        .attr('width', (d) => Math.abs(xScale(d) - xScale(0)))
        .attr('height', 20)
        .style('fill', (d) => color(d))

        // Post answer from the html to reVISit platform
        .on('click', (e, d) => {
          Revisit.postAnswers({ answer: [d], taskID, location: loc });
        });

      svg
        .append('g')
        .attr(
          'transform',
          'translate(' + padding + ',' + (height + padding) + ')'
        )
        .call(xAxis);
    });
  </script>
</html>
```

One of the interesting pieces of the above code is that this HTML document interacts with reVISit in a two-way fashion. Firstly, note that the script to render the bar chart is wrapped in the “Revisit.onDataReceive” function. This listens for data that is passed to the HTML document via the "parameters" key in the configuration of the component. You will see shortly how we can use this HTML document as a template for multiple components with different datasets.

Furthermore, you’ll see that we have also created an “onClick” function and attached it to each of the bars in the bar graph. This click function uses the “Revisit.postAnswers” method to send information back to reVISit. 

Now that we have this HTML document in our study directory, we are ready to adjust our “config.json” file to account for these new components.

In your “config.json” document, create new new key called “baseComponents” as a sibling to the keys “uiConfig”, “components”, “sequence”, etc. In this newly created key, paste the code below:

``` JSON
    "baseComponents":{
        "bar-chart":{
            "type": "website",
            "response": [
                {
                    "id": "barChart",
                    "prompt": "Your selected answer:",
                    "required": true,
                    "location": "belowStimulus",
                    "type": "iframe"
                }
            ],
            "path": "basic-questionnaire-study/bar-chart.html",
            "instructionLocation": "aboveStimulus"
        
        }
    },

```
This creates a component that new components can be based off of. Each component using the “bar-chart” as the value to the “baseComponent” key will now automatically have the above key-value pairs included. In other words, there is no need to specify the type, response, path, or instruction location when creating these next components.

In the components section, add the following objects:

``` json
...
"bar-chart-1":{
    "baseComponent": "bar-chart",
    "description": "A trial for the user to click the largest bar",
    "instruction": "Click on the largest bar",
    "parameters":{
        "barData":[0.32, 0.01, 1.2, 1.3, 0.82, 0.4, 0.3]
    }
},
"bar-chart-2":{
    "baseComponent": "bar-chart",
    "description": "A trial for the user to click the smallest bar",
    "instruction": "Click on the smallest bar",
    "parameters":{
        "barData":[1.2, 1.2, 1.2, 1.3, 0.82, 0.4, 0.3]
    }
}
...


```
The "parameters" key is a dynamically valued key which is used to pass data to your components. When you add the "parameters" key, any data contained within the objet will be sent via the event bus as a message to the component. Since we designed the HTML above to listen for this message, we were able to parse these parameters and use them as variables to control the sizes of the various bar charts. 

To finish this tutorial, add these two components ("bar-chart-1" and "bar-chart-2" to the sequence in config.json). 

<div class='info-panel' type='warning'>
    <div class="info-text">
        In order for reVISit to properly identify users without a server and/or an authentication process, it relies on caching the data for a user in that user's browser. Because of this, the new configuration can only be seen when the user clears their browser cache. Whenever you make an update to the configuration file, make sure to clear your cache so that you can view the updated study
    </div>
</div>

<h1 class='tutorial-page'>How-To-Guides</h1>

## Connecting to Firebase

reVISit is inherently a serverless program. Because of this, we set up a storage engine in order to store the data that is gathered from users as they move through the study. While you can test the program locally without any storage, you will need to set up some sort of storage in order for users that are interacting with the study so that the data can be gathered. Our intention is that those who create the study have full control over the data that is generated by participants -- no data is ever linked back to the reVISit repository or those who have contributed to its creation.

<a href="https://firebase.google.com/" target="_blank" >Firebase</a> is an app development platform that has extremely useful tools such as storage and real-time synchronization. With Firebase alone, a study creator can capture all data from participants and then export that data for further analysis. In what follows, there are two main products we will be using: the Firestore database and Firebase's storage product.

### Create a Firebase Project

Navigate to <a href="https://firebase.google.com/" target="_blank" >Firebase</a> and go to your console. 
<img src="{{ path }}firebase_steps/step1.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

Create a new Firebase project 
<img src="{{ path }}firebase_steps/step2.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

Name your Project Accordingly
<img src="{{ path }}firebase_steps/step3.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

<div class='info-panel'>
    <div class='info-text'>
        Enabling google analytics is not necessary. Feel free to disable this when prompted.
    </div>
</div>

### Adding a Firestore Database

With your project created, we are now going to add a Firestore database to it. On the left-hand side, you should see a "Build" dropdown menu. From that, select "Firestore Database".
<img src="{{ path }}firebase_steps/step4.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

Click "Create Database" in the center of the screen.
<img src="{{ path }}firebase_steps/step5.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

For the next two steps, there is no need to change the defaults. Simply click "Next" and then "Enable".
<img src="{{ path }}firebase_steps/step6.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

<img src="{{ path }}firebase_steps/step7.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

With the new database created, we'll want to change the read/write rules to only allow authenticated users to write to the database. Go to the 'rules' tab (second tab) and copy and paste the following code. Then click "publish".

```
rules_version = '2';
service cloud.firestore {
 match /databases/{database}/documents {
    match /{document=**} {
    	allow read: if true
       allow write: if request.auth != null;
    }
  }
}
```

<img src="{{ path }}firebase_steps/step8.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

### Adding Firebase Storage

Once that is finished, we will enable standard Firebase storage. Click the "Build" dropdown menu again and navigate to "Storage". We can leave the options as their defaults.

<img src="{{ path }}firebase_steps/storage_step1.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

<img src="{{ path }}firebase_steps/storage_step2.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

<img src="{{ path }}firebase_steps/storage_step3.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

<img src="{{ path }}firebase_steps/storage_step4.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

Once the storage product is enabled, navigate to the "rules" tab. 

<img src="{{ path }}firebase_steps/storage_step5.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">


Replace the existing rule with the following code and then publish:

```
rules_version = '2';

service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true;
    }
  }
}
```

<img src="{{ path }}firebase_steps/storage_step6.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

### Adding an App to the Firebase Project


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

Click on register to register your app with recaptcha. 
<img src="{{ path }}firebase_steps/step18.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

At this point you will need to navigate to [Recaptcha](https://www.google.com/recaptcha/admin/create) to create a secret key. 

<img src="{{ path }}firebase_steps/step19.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

The important part here is filling out the domains that you will allow to access the firebase database. Assuming you are hosting your survey on github, enter your base github pages url (<username>.github.io). Also add localhost and 127.0.0.1 to test your survey on your local server. 

<img src="{{ path }}firebase_steps/step20.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

Copy the secret key

<img src="{{ path }}firebase_steps/step21.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

And paste it back on the firebase re-captcha page. 


<img src="{{ path }}firebase_steps/step22.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

The last step is to link your browser to your app through a debug key. 

- Navigate to http://localhost:8080 and click on any demo study.

- Open up the browser console. This differs depending on the web browser that you are using. You can find the various ways to view the browser console for popular web browsers <a href="https://help.planday.com/en/articles/30207-how-to-open-the-developer-console-in-your-web-browser" target="_blank">here</a>.

- Copy the debug token from the console.
<img src="{{ path }}console.png" alt="Console" style="border: 2px solid black; border-radius: 5px;">

- Navigate to your firebase instance and add the token as shown below:
<img src="{{ path }}firebase_steps/step23.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">
<img src="{{ path }}firebase_steps/step24.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">
<img src="{{ path }}firebase_steps/step25.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

### Allowing for CORS requests


Once that is finished, we'll have to use Google's `gsutil` function in the terminal to set up a CORS policy so that the application can communicate with Firebase storage. Follow <a href="https://cloud.google.com/storage/docs/gsutil_install" targe="_blank">these steps on how to install gsutil on your local machine</a>.

After installing gsutil, you need to navigate to the `google-cloud-sdk/bin` folder on your local machine. Create a new file called "cors.json" with the following contents:

``` JSON
[
  {
    "origin": ["*"],
    "method": ["GET"],
    "maxAgeSeconds": 3600
  }
]
```

Lastly, while still inside this same directory, call the following function:

``` shell
gsutil cors set cors.json gs://<your-cloud-storage-bucket>
```
You can find the link for the storage bucket by navigating to the "storage" product in Firebase. 

<img src="{{ path }}firebase_steps/gsutil_step1.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">


Now you can navigate to http://localhost:8080 and launch any demo study. All data from any participation will automatically be uploaded to the store.

<img src="{{ path }}demo.png" alt="Demo" style="border: 2px solid black; border-radius: 5px;">


## Deploying to a static website

Deploying your study should be relatively simple. We include a GitHub action that will build your study and deploy it to GitHub pages. Once your configuration is built, you need only push your changes to GitHub and the action will run. This means that developing the studies and iterating their design is easy. If you find something doesn't work in a pilot version of the study, you can change it out, push and the new version will be deployed in a matter of minutes. By default, GitHub pages will deploy to a URL like `https://<username>.github.io/<repository-name>`. If you want to deploy to a custom domain, you can do that as well by following the instructions on [GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).



## Downloading User Data

Since reVISit uses Firebase as its data store, you can use the Firebase console to download your data. Additionally, we provide the ability to manually download your data from the study ending page. There are options to download the data as a CSV or JSON file. The CSV file is a flat file that contains all of the data for all of the participants in your study. The JSON file is a nested file that contains all of the data for all of the participants in your study. The JSON file is useful if you want to do more complex analysis of your data, but the CSV file is useful if you want to import your data into a spreadsheet program like Excel or Google Sheets.

# Future of ReVISit

## Analysis Dashboard

We are working on an analysis dashboard that will allow you to analyze your data in real time. This will allow you to see how many participants have completed your study, how long they spent on each component, and how they responded to each component. This will allow you to monitor your study as it is running, and to make changes to the study if you find that participants are not completing it, or are not responding to it in the way you expected.

The tool will allow analyzing participant data after the study has run using our custom dashboard that we created as an earlier project, [published at SIGCHI](https://vdl.sci.utah.edu/publications/2021_chi_revisit/). This custom dashboard is specially built for our Trrack integration and will allow you to freely analyze the event data generated by your study.

## Configuration Builder

We are also working on a configuration builder that will allow you to build your configuration file using a graphical interface. This will allow you to build your study without having to write any code. We hope that this will make it easier for researchers to build their studies, and will allow researchers who are not comfortable with code to use reVISit. We intend to make this available some time after we hit v1.0.0 with reVISit.spec.
