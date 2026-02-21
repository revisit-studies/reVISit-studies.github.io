# Installation

The reVISit project is open-source – meaning anyone can see the entire codebase. Most of the work that is done to create a new study is done by making changes to this codebase.

For most users, the best place to start is the template repository (first option below). If you  want all demos and tighter upstream parity, or are considering contributing to revisit, we recommend you fork the repository instead.

## Starting from the Template Repository (Recommended)

Navigate to the [template repository](https://github.com/revisit-studies/template), and click the "Use this template" button. This will create a new repository in your GitHub account with the same files as the template repository, based on the latest stable release of reVISit.

:::info
You can choose a name for the repository to suit your needs, but if you choose anything other than `study`, you also need to adjust the `VITE_BASE_PATH` in your [`.env` file](https://github.com/revisit-studies/study/blob/main/.env) to reflect that change.
:::

You can then clone this new repository to your local machine and start making changes to it and share it with collaborators as desired.

This template is a minimal setup intended for creating your own study project quickly. Unlike the main `study` repository, it does not include all demo studies, so the codebase is easier to navigate and customize.

This is the preferred approach when you do not need cutting-edge changes (for example, from `dev`) and want a more stable baseline to build from. Unlike a fork, the new repository is not linked to the upstream repository's fork network, which helps keep your project lightweight and focused on your own study. You can also create as many repositories as you want from the template, which is not possible with forking.

:::info
Most likely, you will **receive a warning from GitHub about a potential security issue** as an API key is being shared, with a subject like “Possible valid secrets detected“. 
You can safely ignore this warning. The reason for this is that the Firebase API key is not a secret key, and it is intended to be shared publicly in client-side code. For more information, see the [Firebase documentation on API keys](https://firebase.google.com/docs/projects/api-keys#api_key_security_recommendations).
:::

## Forking Repository (Advanced Alternative to Template Repository)

Forking the repository is a more advanced option that allows you to have a copy of the entire `study` repository in your GitHub account. This means that you will have access to all the demo studies and that you can choose to follow the latest changes from the main repository (e.g., by following the `dev` branch). However, it also means that your repository will be linked to the upstream repository's fork network, which can make it more complex to manage.

To fork, start by navigating to the following GitHub repository: https://github.com/revisit-studies/study

You should see a “fork” button on the same row as the name of the repository. When you fork a repository, you are essentially creating your own copy of the repository in your GitHub account. This means that any changes you commit and push to this new repository will not affect the main source code. 

:::info
GitHub only allows you to fork a repository once. If you have already forked the repository, you will need to clone the repository to your local machine, create a new repo on your account, and run `git remote set-url origin new.git.url/here` to allow you to have 2 versions of the repository in your account.
:::

When forking the repository, you will be prompted for some basic information about this repository (such as the desired name). Once you've forked the repository into your own GitHub account, you can [clone the repository to your local computer](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

:::info
You can rename the repository to suit your needs, but if you change the name, you also need to adjust the `VITE_BASE_PATH` in your [`.env` file](https://github.com/revisit-studies/study/blob/main/.env) to reflect that change.
:::

After the repository is on your local machine, you will have the entire codebase for your personal use. Any changes that you make to this repository can be committed and then pushed to your forked repository for other users in your organization to see.

## Installing Required Software

To continue, you will need the Active LTS [Node.js](https://nodejs.org/) version, and [Yarn](https://yarnpkg.com/) installed. If you already have Yarn installed, you can go to Step 2 below.

:::info
Yarn requires that you have the package manager NPM installed. If you do not have NPM installed, please review [the NPM documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to get started. These docs will also direct you on how to install Node – a prerequisite of NPM.
:::

**Step 1: Install Yarn on your local computer using NPM:**

```npm i -g yarn```

**Step 2: Once Yarn is successfully installed, navigate to your local repository and run the following Yarn command:**

```yarn install```

This will install all the packages that the reVISit requires to run.

**Step 3: Once this is finished, you can now start the program:**

```yarn serve```

This will launch a local web server which can be accessed to view and interact with reVISit. By default, you can access this by visiting [http://localhost:8080/](http://localhost:8080/). Any change you make to the code will automatically update the website.

When you visit the site, you'll see a list of demo studies, identical to [the demo page](https://revisit.dev/study/). You can interact with any of these studies to get some familiarity (and hopefully some inspiration) for how reVISit can help you quickly launch a crowd-sourced visualization study.

:::note
We do not support using `npm` to run reVISit. Please use `yarn` for all package management and running commands.
:::

<!-- Importing links -->
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    referenceLinks={[
        {name: "reVISit Template Repository", url: "https://github.com/revisit-studies/template"},
        {name: "reVISit Main Repository", url: "https://github.com/revisit-studies/study"},
        {name: "Cloning Repository", url: "https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository"},
        {name: "Node.js Installation", url: "https://nodejs.org/en"},
        {name: "Yarn Installation", url: "https://yarnpkg.com/"},
        {name: "NPM Installation", url: "https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"}
    ]}
/>