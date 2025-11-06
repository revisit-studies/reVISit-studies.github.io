# Installation

The reVISit project is open-source – meaning anyone can see the entire codebase. Most of the work that is done to create a new study is done by making changes to this codebase. Because of this, we will start by “forking the repository”.

## Forking Repository

Start by navigating to the following GitHub repository: https://github.com/revisit-studies/study

You should see a “fork” button on the same row as the name of the repository. When you fork a repository, you are essentially creating your own copy of the repository in your GitHub account. This means that any changes you commit and push to this new repository will not affect the main source code. Instead, you or your organization will be able to have a central location for all of your studies.

:::info
GitHub only allows you to fork a repository once. If you have already forked the repository, you will need to clone the repository to your local machine, create a new repo on your account, and run `git remote set-url origin new.git.url/here` to allow you to have 2 versions of the repository in your account.
:::

When forking the repository, you will be prompted for some basic information about this repository (such as the desired name). Once you've forked the repository into your own GitHub account, you can [clone the repository to your local computer](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

:::info
You can rename the repository to suit your needs, but if you change the name, you also need to adjust the `VITE_BASE_PATH` in your [`.env` file](https://github.com/revisit-studies/study/blob/main/.env) to reflect that change.
:::

After the repository is on your local machine, you will have the entire codebase for your personal use. Any changes that you make to this repository can be committed and then pushed to your forked repository for other users in your organization to see.

## Installing Required Software

To continue, you will need the Active LTS [node.js](https://nodejs.org/) version, and [yarn](https://yarnpkg.com/) installed. If you already have yarn installed, you can go to Step 2 below.

:::info
Yarn requires that you have the package manager NPM installed. If you do not have NPM installed, please see review [the NPM documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to get started. These docs will also direct you on how to install Node – a prerequisite of NPM.
:::

**Step 1: Install yarn on your local computer using NPM:**

```npm i -g yarn```

**Step 2: Once yarn is successfully installed, navigate to your forked repository and run the following yarn command:**

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
        {name: "Cloning Repository", url: "https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository"},
        {name: "Node.js Installation", url: "https://nodejs.org/en"},
        {name: "Yarn Installation", url: "https://yarnpkg.com/"},
        {name: "NPM Installation", url: "https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"}
    ]}
/>