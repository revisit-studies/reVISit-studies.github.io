---
sidebar_position: 2
---

# Installation


The reVISit project is open-source – meaning anyone can see the entire codebase. Most of the work that is done to create a new study is done by making changes to this codebase. Because of this, we will start by “forking the repository”.

Start by navigating to the following github repository: https://github.com/revisit-studies/study

You should see a “fork” button on the same row as the name of the repository. When you fork a repository, you are essentially creating your own copy of the repository in your GitHub account. This means that any changes you commit and push to this new repository will not affect the main source code. Instead, you or your organization will be able to have a central location for all of your studies. 

When forking the repository, you will be prompted for some basic information about this repository (such as the desired name). Once you've forked the repository into your own github account, you can clone the repository. You should see a “code” button on the main page of your forked repository. After clicking the dropdown arrow on this button, you'll be given instructions on how to clone this repository to your local machine.

:::info
You can rename the repository to suit your needs, but if you change the name, you also need to adjust the `VITE_BASE_PATH` in your [`.env` file](https://github.com/revisit-studies/study/blob/main/.env) to reflect that change.
:::

After the repository is on your local machine, you will have the entire codebase for your personal use. Any changes that you make to this repository can be committed and then pushed to your forked repository for other users in your organization to see.

To continue, you will need yarn installed. If you already have yarn installed, you can skip to Step 2 below. Otherwise, proceed with Step 1. 


:::info
Note that this requires that you have the package manager NPM installed. If you do not have NPM installed, please see review [the NPM documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to get started. These docs will also direct you on how to install Node – a prerequisite of NPM.
:::

<br/>


**Step 1: Install yarn on your local computer using NPM:**

```npm i -g yarn```



**Step 2: Once yarn is successfully installed, navigate to your forked repository and run the following yarn command:**
	
```yarn install```

This will install all the packages that the reVisit requires to run.


**Step 3: Once this is finished, you can now start the program:**

```yarn serve```

This will launch a local server which can be accessed to view and interact with reVISit. By default, you can access this by visiting [http://localhost:8080/](http://localhost:8080/). Any change you make to the existing codebase will automatically update the front end.

When you visit the site, you'll be greeted with a list of pre-constructed demo studies. You can interact with any of these studies to get some familiarity (and hopefully some inspiration) for how reVISit can help you quickly launch a crowd-sourced visualization study.