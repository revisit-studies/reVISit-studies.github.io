---
layout: tutorial
title: The reVISit Spec | reVISit
weight: 2
tag: tutorial
permalink: /spec/
---


{% capture path %}{{ site.baseurl }}/assets/tutorial/{% endcapture %}
{% capture repo %}{{ site.repo }}{% endcapture %}
{% capture code %}{{ site.code}}{% endcapture %}

# Overview

To create a study with reVISit, you have to create components that contain the content of your study, and you have to create the study configuration (the reVISit Spec) that controls when and how these components are shown to participants. In this tutorial, we will introduce these at a high level and link to complete documentation where appropriate. 


# Components

Componets are where user-generated content goes. ReVISit currently supports four types of components: 

* **Markdown Files** contain formatted text, including links, images, embedded videos, etc. They are useful for introductions, consent forms, help pages, etc. 
* **Images** can be used as stimuli directly. 
* **HTML Pages** can be used to create custom stimuly, including interactive stimuli developed with JavaScript 
* **React Components** can be used for sophisticated interactive stimuli. In comparison to HTML pages, react components simplify the communication between reVISit and the stimulus. 
* **Survey Questions** can be used to elicit structured responses from participants.


All of these stimuli can (and commonly are) paired with **responses**. Responses are form elements that capture the elicited responses. Survey questions are basically empty components with responses. 

A component is typically defined in the spec, with the text, code, or image included from a file. The only exception are survey questions, which do not need a file.



# The reVISit Spec



## Study Metadata

## Components

### Regular Components

### Inheritance and Base Components 


## Sequencing

### Groups

### Randomization

### Skips

### Breaks and Attention Checks


# Tracking Study Data








The reVISit framework uses a declarative DSL (Domain Specific Language) for specifying visualization experiments, which is called reVISit.spec. The configuration file uses JSON format which compiles into the reVISit platform. In the following tutorials, you will learn how to configure a visualization experiment using the reVISit DSL.


```JSON
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
        "helpTextPath": "basic-questionnaire-study/assets/help.md",
        "logoPath": "revisitAssets/revisitLogoSquare.svg",
        "withProgressBar": true,
        "autoDownloadStudy": false,
        "sidebar": true
    },
    "components": {
        "introduction": {
            "type": "markdown",
            "path": "basic-questionnaire-study/assets/introduction.md",
            "response": []
        },
        "first-question-set": {
            "type": "questionnaire",
            "response": [
                {
                    "id": "q1",
                    "prompt": "What is your first name?",
                    "required": true,
                    "location": "aboveStimulus",
                    "type": "longText",
                    "placeholder": "Please enter your first name"
                },
                {
                    "id": "q2",
                    "prompt": "What is your favorite color?",
                    "required": true,
                    "location": "aboveStimulus",
                    "type": "dropdown",
                    "placeholder": "Please choose your favorite color",
                    "options": [
                        {
                            "label": "Red",
                            "value": "red"
                        },
                        {
                            "label": "Blue",
                            "value": "blue"
                        },
                        {
                            "label": "My favorite color is not shown here.",
                            "value": "notShown"
                        }
                    ]
                }
            ]
        },
        "second-question-set": {
            "type": "questionnaire",
            "response": [
                {
                    "id": "q1",
                    "prompt": "What would you rate your satisfaction of this survey? 0 being very un-enjoyable, 5 being very enjoyable.",
                    "required": true,
                    "location": "aboveStimulus",
                    "type": "numerical",
                    "min": 0,
                    "max": 5
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
Save this file in the `basic-questionnaire-study` directory -- one level above the "basic-questionnaire-study/assets" directory.

If you want to learn more about the configuration, check out the [documentation page]({{site.baseurl}}/typedoc/interfaces/StudyConfig.html).

Now, our study is almost set up to view. The last step is to make sure that the `global.json` file is set to find this new study. Open the `global.json` file in the `public` directory.

Add the following code to the `configs` object:

``` JSON
"basic-questionnaire-study": {
	"path": "basic-questionnaire-study/config.json"
}
```

After this, add `basic-questionnaire-study` into the `configsList` list in the same file. 
This should look something like this: 

``` JSON
 "configsList": [
        "basic-questionnaire-study",
        "demo-html",
        ...
    ],
    "configs": {
        "basic-questionnaire-study": {
            "path": "basic-questionnaire-study/config.json"
        },
        ...
```

It does not matter where `basic-questionnaire-study` appears in the configs list. Because the configs list is ordered, however, placing `basic-questionnaire-study` at the bottom of the list will mean that the study will show up at the bottom of the list of studies in the UI, so it's probably a good idea to put it at the top.

Now, if you start the server (using `yarn serve` as described in the <a href="#installation">Installation</a> section), you'll be able to navigate to [http://localhost:8080/](http://localhost:8080/) and view your study in the list of studies. Alternatively, you can navigate to [http://localhost:8080/basic-questionnaire-study](http://localhost:8080/basic-questionnaire-study) to enter the study directly.


## Components, Inheritance and Adding Custom HTML to Your Study

In this section you will learn two things: 
* How to add a custom HTML stimulus to your study.
* How to use inheritance for components, so that you can, for example, write one component but parameterize it such that you can use it multiple times with tifferent configurations. 

We will take the study we just created and add another component based on a user-created HTML file. This allows for some additional customization of the component. 

The HTML code below uses the extensive D3.js library. It renders a simple, horizontal bar chart. Copy and paste this HTML into a document called `bar-chart.html` in the `basic-questionnaire-study/assets` directory.

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

One of the interesting pieces of the above code is that this HTML document interacts with reVISit in a two-way fashion. Firstly, note that the script to render the bar chart is wrapped in the `Revisit.onDataReceive()` function. This listens for data that is passed to the HTML document via the `parameters` key in the configuration of the component. You will see shortly how we can use this HTML document as a template for multiple components with different datasets.

Furthermore, you’ll see that we have also created an `onClick()` function and attached it to each of the bars in the bar graph. This click function uses the `Revisit.postAnswers()` method to send information back to reVISit. 

Now that we have this HTML document in our study directory, we are ready to adjust our `config.json` file to account for these new components.

In your `config.json` document, create new key called `baseComponents` as a sibling to the keys `uiConfig`, `components`, `sequence`, etc. 

`baseComponets` are components that are intended to be extended at a later point. In this example, we create a base component for the bar chart, but don't pass in data or task instructions yet.

In the `baseComponents` key, add the code below:

``` JSON
    "baseComponents": {
        "bar-chart": {
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
            "path": "basic-questionnaire-study/assets/bar-chart.html",
            "instructionLocation": "aboveStimulus"
        }
    }
```

This creates a component that more specific components can be based off of. Each component using the `bar-chart` as the value to the `baseComponent` key will now automatically have the above key-value pairs included. In other words, there is no need to specify the type, response, path, or instruction location when creating a concrete bar chart component.

We now create concrete bar chart components with data and instructions in the `components` section. Add the following objects:

``` JSON
...
"bar-chart-1":{
    "baseComponent": "bar-chart",
    "description": "A trial for the user to click the largest bar",
    "instruction": "Click on the largest bar",
    "parameters": {
        "barData": [0.32, 0.01, 1.2, 1.3, 0.82, 0.4, 0.3]
    }
},
"bar-chart-2":{
    "baseComponent": "bar-chart",
    "description": "A trial for the user to click the smallest bar",
    "instruction": "Click on the smallest bar",
    "parameters": {
        "barData": [1.2, 1.2, 1.2, 1.3, 0.82, 0.4, 0.3]
    }
}
...
```
The `parameters` key is a dynamically valued key which is used to pass data to your components. When you add the `parameters` key, any data contained within the objet will be sent via the event bus as a message to the component. Since we designed the HTML above to listen for this message, we were able to parse these parameters and use them as variables to control the sizes of the various bar charts. 

To finish this tutorial, add these two components (`bar-chart-1` and `bar-chart-2`) to the sequence in `config.json`. 

<div class='info-panel' type='warning'>
    <div class="info-text">
        In order for reVISit to properly identify users without a server and/or an authentication process, it relies on caching the data for a user in that user's browser. Because of this, the new configuration can only be seen when the user clears their browser cache. Whenever you make an update to the configuration file, make sure to clear your cache so that you can view the updated study
    </div>
</div>

You can review [this config](https://github.com/revisit-studies/study/tree/main/public/demo-html-input) and the [associated study](https://revisit.dev/study/demo-html-input/) in our main study repository. 

# How-To-Guides

## Connecting to Firebase

ReVISit is designed to be serverless, so that you don't have to run and maintain a server. While you can test reVISit locally without storage, we still need to store the data somehwere in online studies. Our intention is that those who create the study have full control over the data that is generated by participants -- no data is ever stored by the reVISit team. 

<a href="https://firebase.google.com/" target="_blank" >Firebase</a> is an app development platform that has extremely useful tools such as storage and real-time synchronization. With Firebase alone, a study creator can capture all data from participants and then export that data for further analysis. In what follows, there are two main products we will be using: the Firestore database and Firebase's storage product.

See the <a href="#deploying-to-a-static-website">Deployment</a> section for more information about deploying your study to GitHub.io once the connection to Firebase has been set up. 

<div class='info-panel'>
    <div class='info-text'>
    While reVISit is designed to work with custom storage solutions as well, we currently only support Firebase. 
    </div>
</div>

### Create a Firebase Project

Navigate to <a href="https://firebase.google.com/" target="_blank" >Firebase</a> and go to your console. 
<img src="{{ path }}firebase_steps/step1.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

Create a new Firebase project 
<img src="{{ path }}firebase_steps/step2.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

Name your Project Accordingly
<img src="{{ path }}firebase_steps/step3.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

<div class='info-panel'>
    <div class='info-text'>
        Enabling Google Analytics is not necessary. Feel free to disable this when prompted.
    </div>
</div>

### Adding a Firestore Database

With your project created, we are now going to add a Firestore database to it. On the left-hand side, you should see a "Build" dropdown menu. From that, select "Firestore Database".
<img src="{{ path }}firebase_steps/step4.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

Click "Create Database" in the center of the screen.
<img src="{{ path }}firebase_steps/step5.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

<div class='info-panel'>
    <div class='info-text'>
        At this point you can select where your data is stored. Select the location that meets your needs or any lequal requirements you might have. 
    </div>
</div>

For the next two steps change the defaults as needed and proceed. 
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

<div class='info-panel'>
    <div class='info-text'>
       Warning: this makes your data publicly readable. We will replace this so that only authenticated users can read soon. 
    </div>
</div>

<img src="{{ path }}firebase_steps/storage_step6.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

### Adding an App to the Firebase Project

We are now going to add an app to your firebase project. Navigate to your project home and add a "web app". 

<img src="{{ path }}firebase_steps/step9.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">
<img src="{{ path }}firebase_steps/step10.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">


With the app set up, we are ready to copy over the app configuration to your revisit project. In the image below you will see a JSON object denoted as `const firebase = { ... }`.

<img src="{{ path }}firebase_steps/step11.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

Copy the contents of that JSON object into the `.env` file for the variable `VITE_FIREBASE_CONFIG` in the root folder of your study repository. In the `.env` file, your `VITE_FIREBASE_CONFIG` variable should still be a JSON object that is escaped in single quotes.

Your resulting `.env` file should look someething like this (obviously with different values): 

```JSON
VITE_BASE_PATH="/study/"
VITE_FIREBASE_CONFIG='
{
  apiKey: "AIzaSyCVJ1fLk-_DL42C6wzMbNgOPeCfGW0Zhuo",
  authDomain: "revisit-test-10db1.firebaseapp.com",
  projectId: "revisit-test-10db1",
  storageBucket: "revisit-test-10db1.appspot.com",
  messagingSenderId: "737694563815",
  appId: "1:737694563815:web:ec45b08042afcd66241142",
  measurementId: "G-6VFMH9RK30"
}
'
VITE_STORAGE_ENGINE="localStorage" # "firebase" or "localStorage" or your own custom storage engine
VITE_RECAPTCHAV3TOKEN="6LdjOd0lAAAAAASvFfDZFWgtbzFSS9Y3so8rHJth" # recaptcha SITE KEY

```


We are now going to set up the authentication so that your browser is authorized to communicate with your firebase database. We set up authentication so that anonymous sign-in providers.


<img src="{{ path }}firebase_steps/step12.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

<img src="{{ path }}firebase_steps/step13.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

<img src="{{ path }}firebase_steps/step14.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

<img src="{{ path }}firebase_steps/step15.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

Our last step is to set up App Check. 
<img src="{{ path }}firebase_steps/step16.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">
<img src="{{ path }}firebase_steps/step17.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

Click on register to register your app with recaptcha. Firebase requires recaptcha.

<img src="{{ path }}firebase_steps/step18.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

At this point you will need to navigate to [the Recaptcha page](https://www.google.com/recaptcha/admin/create) to create a secret key. 

<img src="{{ path }}firebase_steps/step19.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

The important part here is filling out the domains that you will allow to access the firebase database. Add `localhost` and `127.0.0.1` to test your survey on your local machine and also add the domain to which you intend to deploy the page here.

<div class="info-panel">
<div class="info-text">If you are planning on hosting this externally (such as using GitHub pages), you need to also enter the base URL for your website. For the Github pages deployment, you should enter your base github pages url (i.e. <code>&lt;username&gt;.github.io</code>).
</div>
</div>

<img src="{{ path }}firebase_steps/step20.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

You should now see a SITE key and a SECRET key. First, copy the secret key and paste it back into the Firebase re-captcha page as shown in the following images.

<img src="{{ path }}firebase_steps/step21.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

<img src="{{ path }}firebase_steps/step22.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

Now, copy the SITE key. That site should now go back into your `.env` file for the variable `VITE_RECAPTCHAV3TOEKN`. 




Now we will link your browser to your app through a debug key. 

<div class="info-panel"><div class='info-text'>To see the debug token, you need to enable firebase storage. Open up the <code>.env</code> file in the root of the repository. Change the <code>VITE_STORAGE_ENGINE</code> variable value to "firebase". Once you have firebase already set up, you can switch between "localstorage" and "firebase" freely for development purposes.</div></div>

- Navigate to [http://localhost:8080](http://localhost:8080) and click on any demo study.

- Open up the browser console. This differs depending on the web browser that you are using. You can find the various ways to view the browser console for popular web browsers <a href="https://help.planday.com/en/articles/30207-how-to-open-the-developer-console-in-your-web-browser" target="_blank">here</a>.

- Copy the debug token from the console.
<img src="{{ path }}console.png" alt="Console" style="border: 2px solid black; border-radius: 5px;">

- Navigate to your firebase app instance and add the token as shown below:
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
./gsutil cors set cors.json gs://<your-cloud-storage-bucket>
```
You can find the link for the storage bucket by navigating to the "storage" product in Firebase. 

<img src="{{ path }}firebase_steps/gsutil_step1.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">


Assuming that you have already changed the `VITE_STORAGE_ENGINE` variable in the `.env` file to "firebase", you can now call `yarn serve` to launch the server and navigate to [http://localhost:8080](http://localhost:8080) to launch any demo study. All data from any participation will automatically be uploaded to the store. 

<div class="info-panel"><div class="info-text">When running `yarn build`, reVISit automatically uses the Firebase storage engine.</div></div>

<img src="{{ path }}demo.png" alt="Demo" style="border: 2px solid black; border-radius: 5px;">

### Did it work?

To make sure that the communication with firebase works, open the console in your browser as you're testing your study and make sure there are no firebase errors. 

To see wheter your application is collecting data, go to the firebase storage and see wheter data is collected. 

<div class="info-panel">
<div class="info-text">If you're struggling with the Firebase setup, first google the console error messages. This might lead you to which part of the setup went wrong. Otherwise, ask for help in our slack team.
</div>
</div>


## Deploying to the Web

Deploying your study should be relatively simple. We include a GitHub action that will build your study and deploy it to GitHub pages. The only item needs to be adjusted is in the `.env` file in the root of the repository. At the top of this file, you should see `VITE_BASE_PATH="/study/"`. Change `"/study/"` to your repository name: `"/<repo-name>/"` (make sure to includ the `/`s).

After this, you'll need to make sure that your Github repository has workflow actions enabled. Navigate to the actions tab in your repository as shown below.

<img src="{{ path }}deploy_step1.jpg" alt="Demo" style="border: 2px solid black; border-radius: 5px;">

On this page, enable workflows as shown below.

<img src="{{ path }}deploy_step2.jpg" alt="Demo" style="border: 2px solid black; border-radius: 5px;">

After you've changed the `.env` file and enabled the workflow, go ahead and push the commit to your forked repository. Once you push, the deploy action will run. Once that has finished, navigate to the 'settings' tab and then the 'pages' tab.

<img src="{{ path }}deploy_step3.jpg" alt="Demo" style="border: 2px solid black; border-radius: 5px;">
<img src="{{ path }}deploy_step4.jpg" alt="Demo" style="border: 2px solid black; border-radius: 5px;">


At this point, your study will be built and stored in the `gh-pages` branch. The last thing that remains to be done is to actually make the page visible via Github pages. Navigate to the 'Pages' section of youre repository's setting. In the 'Branch' section, you should see options to select a branch to deploy from. Select 'gh-pages' from the dropdown menu as shown below.

<img src="{{ path }}deploy_step5.jpg" alt="Demo" style="border: 2px solid black; border-radius: 5px;">

Click 'Save' once you have made the switch. After a short period of time, your reVISit application will deploy to `<username>.github.io/<repository-name>`.

If you want to deploy to a custom domain, you can do that as well by following the instructions on [GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).



## Downloading User Data

reVISit allows you to download participant's data using an admin interface -- there is no need to interact with Firebase directly. To start, navigate to a study that you wish to download participants data from. Then, add `?admin=t` to the url like in the image below.


<img src="{{ path }}userdata_step1.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

Next, you should see three vertical dots next to the `Help` button in the upper right hand of the view. Clicking this will open up the dropdown menu to access admin mode.

<img src="{{ path }}userdata_step2.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

Now that you are in admin mode, navigate to the end of the study. Once at the end, you should see options to download user data as shown below:

<img src="{{ path }}userdata_step3.jpg" alt="Console" style="border: 2px solid black; border-radius: 5px;">

<div class='info-panel' type='warning'>
    <div class="info-text">
    Currently, only JSON data is able to be exported by reVISit. We have plans to support Tidy CSV in the near future. 
    </div>
</div>

The file downloaded is a JSON object containing information about the participant's answers, how they interacted with each component, and which config they were served. You can find more explicit documentation about the data structure [here](/typedoc/interfaces/ParticipantData.html).

# Future of ReVISit

## Analysis Dashboard

We are working on an analysis dashboard that will allow you to analyze your data in real time. This will allow you to see how many participants have completed your study, how long they spent on each component, and how they responded to each component. This will allow you to monitor your study as it is running, and to make changes to the study if you find that participants are not completing it, or are not responding to it in the way you expected.

The tool will allow analyzing participant data after the study has run using our custom dashboard that we created as an earlier project, [published at SIGCHI](https://vdl.sci.utah.edu/publications/2021_chi_revisit/). This custom dashboard is specially built for our Trrack integration and will allow you to freely analyze the event data generated by your study.

## Configuration Builder

We are also working on a configuration builder that will allow you to build your configuration file using a graphical interface. This will allow you to build your study without having to write any code. We hope that this will make it easier for researchers to build their studies, and will allow researchers who are not comfortable with code to use reVISit. We intend to make this available some time after we hit v1.0.0 with reVISit.spec.
