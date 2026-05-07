---
title: Pre Tutorial
description: Prepare for the reVISit template tutorial after installing and running the template repository.
---

# Pre Tutorial

This page prepares you to work through the reVISit template tutorial. It is not meant to replace the full [Installation](../getting-started/installation.md) guide. Instead, use it as a workshop checklist after you have created a repository from the [reVISit template repository](https://github.com/revisit-studies/template).

By the end of this page, you should know:

- Which installation steps must be complete before starting.
- Which resources will be useful during the tutorial.
- What activities the tutorial will walk through.
- Which tutorial files you will edit.
- Which files are answer keys.
- How to use the videos while working through the tutorial.
- What you will build in `config.json` and `replication-config.json`.

## Tutorial Roadmap

This tutorial follows the same general structure as the reVISit visualization tutorial worksheet. You will start by getting the template running locally, then build and test a Study Config, and then look at analysis and deployment topics.

The main sections are:

1. **Logistics and resources**: Join the community, open the docs, and make sure the required software is installed.
2. **Forking, cloning, installing, and serving**: Create a study repository, install dependencies, and run reVISit locally.
3. **Building a simple study**: Edit `config.json` step by step, add components to the sequence, and preview the study at `localhost:8080`.
4. **Replication study config**: Edit `replication-config.json`, use `baseComponents`, add practice trials, and add a dynamic block.
5. **Analytic interface**: Run through your study a few times, open the analysis dashboard, inspect participant data, export JSON and Tidy CSV, reject Participants, and explore trial stats.
6. **Advanced React component**: Continue into React component-based stimuli after the Study Config structure is comfortable.
7. **Deployment and data storage**: Review static deployment, GitHub Actions, Firebase setup, authentication, and data management.

## Tutorial Resources

Use these links during the tutorial:

| Resource | Link |
| --- | --- |
| reVISit Slack team | [Join Slack](https://join.slack.com/t/revisit-nsf/shared_invite/zt-25mrh5ppi-6sDAL6HqcWJh_uvt2~~DMQ) |
| reVISit home page | [https://revisit.dev/](https://revisit.dev/) |
| reVISit GitHub organization | [https://github.com/reVISit-studies/](https://github.com/reVISit-studies/) |
| Installation guide | [Installation](../getting-started/installation.md) |
| Template repository | [https://github.com/revisit-studies/template](https://github.com/revisit-studies/template) |
| Demo brush interactions study | [Demo study](https://revisit.dev/study/demo-brush-interactions) |
| Trrack library | [https://apps.vdl.sci.utah.edu/trrack](https://apps.vdl.sci.utah.edu/trrack) |
| Study replay and think-aloud example | [Think-aloud analysis example](https://vdl.sci.utah.edu/ThinkAloud/ThinkAloud/analysis/63f779d27ba18edb4b6e5a57/reviewer-paintBrush_q2) |

For the older simple-study worksheet activity, the starting point and answer are available in the main study repository:

- [Simple study starting point](https://github.com/revisit-studies/study/tree/main/public/tutorial/simple-study)
- [Simple study answer](https://github.com/revisit-studies/study/tree/main/public/tutorial/_answers/simple-study)

## Things You Need

Ideally, install and prepare these before the tutorial starts:

- An IDE such as [Visual Studio Code](https://code.visualstudio.com/).
- A [GitHub](https://github.com/) account.
- [Git](https://git-scm.com/install/) installed on your computer.
- Recent versions of NPM and Yarn. See [Installing Required Software](../getting-started/installation.md#installing-required-software).
- Your own study repository based on the template repository. See [Starting from the Template Repository](../getting-started/installation.md#starting-from-the-template-repository-recommended).

## Analysis and Deployment Resources

Later parts of the workshop use these resources:

- Analysis dashboard: [Study Card](../analysis/study-card.md) and [Data Export](../analysis/data-export.md)
- Participant details and replay: [Participant View](../analysis/participant-view.md) and [Participant Replay](../analysis/participant-replay.md)
- Trial stats: [Trial Stats](../analysis/trial-stats.md)
- Static deployment and GitHub Actions: [Deploying to a Static Website](../data-and-deployment/deploying-to-static-website.md)
- Firebase setup: [Firebase Setup](../data-and-deployment/firebase/setup.md)
- Authentication: [Enabling Authentication](../data-and-deployment/firebase/enabling-authentication.md)
- Data management: [Data Management](../analysis/data-management.md)

## Step 1: Complete the installation guide

Before editing any Study Config files, complete these two sections of the Installation page in order:

1. [Installing Required Software](../getting-started/installation.md#installing-required-software)
2. [Starting from the Template Repository](../getting-started/installation.md#starting-from-the-template-repository-recommended)

The first section makes sure Node.js and Yarn are installed on your computer. The second section shows how to create your own study repository from the reVISit template.

Together, those sections walk through:

1. Installing Git, Node.js, and Yarn.
2. Creating your own repository from the template.
3. Cloning that repository to your computer.
4. Running `yarn install`.
5. Running `yarn serve`.
6. Opening reVISit locally at [http://localhost:8080](http://localhost:8080).

When you are done, you should have your own copy of the template repository on your computer. You should also be able to start the local reVISit server with:

```bash
yarn serve
```

If you are setting up from the command line, the setup flow looks like this:

```bash
git clone https://github.com/your-github-name/your-repository-name.git
cd your-repository-name
yarn install
yarn serve
```

:::warning
Use Yarn for this tutorial. reVISit does not support using `npm` to run the app or manage packages.
:::

:::info
The template repository is the fastest starting point for this tutorial. If you accidentally clone the main `study` repository instead, it will still work, but it can take much longer because it contains the full development history and many more examples.
:::

### Workshop setup notes

The workshop recording spends time on setup because small local environment issues are common. Use these checks before you start editing JSON:

- Confirm Git is installed with `git --version`.
- Confirm Node.js is installed with `node --version`. Use a recent version; Node 20 or newer is recommended.
- Confirm Yarn is installed with `yarn --version`. The tutorial expects Yarn 1.22.x.
- If Yarn is missing, install it with `npm install -g yarn`. On a restricted macOS machine, you may need `sudo npm install -g yarn`.
- If GitHub authentication slows down cloning, use the GitHub **Code** menu and choose **Download ZIP** as a temporary workshop fallback.
- Run `yarn install` and `yarn serve` from the repository root, where `package.json` is located. If the terminal says it cannot find `package.json`, you are in the wrong folder.
- Use `http://localhost:8080`, not `https://localhost:8080`.
- Press `Ctrl-C` in the terminal to stop `yarn serve`, then run `yarn serve` again to restart it.
- If browser changes do not match the file you edited, check that you do not have two copies of the repository and that your editor is open to the same folder where `yarn serve` is running.

:::tip
If VS Code asks for permission to load the JSON schema, allow it. The schema makes a big difference: it gives autocomplete, hover documentation, and validation while you edit Study Config files.
:::

:::warning
If you are following an older workshop snapshot and Vite reports that `BrushPlotWrapper.tsx` cannot resolve `../../example-brush-interactions/assets/BrushPlot`, you are seeing a workshop setup issue, not a Study Config issue. For that snapshot, open `src/public/tutorial/assets/BrushPlotWrapper.tsx`, replace its contents with `export default function BrushPlotWrapper() {}`, save, stop `yarn serve` with `Ctrl-C`, and run `yarn serve` again.
:::

## Step 2: Confirm reVISit runs locally

With `yarn serve` running, open [http://localhost:8080](http://localhost:8080). The local site should load in your browser.

Keep the terminal running while you work. If you close the terminal or stop the command, the local website will stop too.

If `http://localhost:8080` does not load, check the terminal output. Sometimes Vite uses a different local port if `8080` is already busy. Open the local URL shown in your terminal.

The terminal output should include a local URL similar to this:

```text
Local:   http://localhost:8080/
```

:::info
If the browser says the connection is not secure, check the URL first. Local reVISit uses `http://localhost:8080`, not `https://localhost:8080`.
:::

## Step 3: Open the template in your editor

Open your local repository in an editor with JSON support. We recommend [VS Code](https://code.visualstudio.com/) because it can use the Study Config schema for autocomplete and validation.

In your editor, find this folder:

```text
public/tutorial
```

You will spend most of the tutorial in this folder.

The relevant files are organized like this:

```text
public/
└── tutorial/
    ├── config.json
    ├── replication-config.json
    ├── assets/
    └── _answers/
        ├── config.json
        └── replication-config.json
```

The root `public/` folder is where the tutorial keeps static study files: Study Config JSON, Markdown pages, images, Vega specifications, and standalone HTML pages. The `src/` folder contains the application source code. If you later use JavaScript or React component stimuli, those files live under `src/public/` so Vite can compile them.

:::info
For collaborative study design, use the normal GitHub workflow: create a repository from the template, commit Study Config and asset changes, and let collaborators pull or review changes. reVISit does not currently include a separate project-management layer for coordinating study design work.
:::

## Step 4: Understand the file roles

The tutorial folder has starter files and answer files. Edit the starter files. Use the answer files only to check your work.

| File | What it is for |
| --- | --- |
| `public/tutorial/config.json` | Starter file for the main tutorial. You will add components, responses, media stimuli, interruptions, and skip logic. |
| `public/tutorial/replication-config.json` | Starter file for the replication study exercise. You will add a reusable base component, practice trials, and a dynamic sequence. |
| `public/tutorial/_answers/config.json` | Completed version of the main tutorial config. Use it to compare after each step. |
| `public/tutorial/_answers/replication-config.json` | Completed version of the replication config. Use it to compare after each step. |

Do not copy the entire answer file at the beginning. The point of the tutorial is to build the Study Config gradually so each piece makes sense.

When you compare your starter file to an answer file, focus on the section you just edited. For example, if the current step asked you to add a component, compare only the `components` object and the matching sequence entry.

## Step 5: Know what starts empty

Both starter configs already include the basic [Study Config](../typedoc/interfaces/StudyConfig.md) structure: [`$schema`](../typedoc/interfaces/StudyConfig.md#schema), [`studyMetadata`](../typedoc/interfaces/StudyMetadata.md), [`uiConfig`](../typedoc/interfaces/UIConfig.md), empty [`components`](../typedoc/interfaces/StudyConfig.md#components), and an empty [`sequence`](../typedoc/interfaces/StudyConfig.md#sequence).

In `public/tutorial/config.json`, the main work starts here:

```json title="public/tutorial/config.json"
"components": {},
"sequence": {
  "order": "fixed",
  "components": []
}
```

In `public/tutorial/replication-config.json`, the main work starts here:

```json title="public/tutorial/replication-config.json"
"baseComponents": {},
"components": {},
"sequence": {
  "order": "fixed",
  "components": []
}
```

The replication config adds [`baseComponents`](../typedoc/interfaces/StudyConfig.md#basecomponents) on top of the standard structure — these are reusable templates that other components inherit from.

These empty sections are intentional. They make it easier to see exactly what each tutorial step adds.

## Step 6: Use the videos as references

If you are new to reVISit, start with the short overview video. It explains the general idea of building studies from Study Configs and reusable components.

<iframe
    width="100%"
    height="450"
    src="https://www.youtube.com/embed/1aa9UM2M3_Q?si=7ul6janppYiL2B_u"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
</iframe>

Then use the longer tutorial recording while you work through the files. It starts at the relevant section.

<iframe
    width="100%"
    height="450"
    src="https://www.youtube.com/embed/BmKBDpx1q1U?start=4392"
    title="reVISit tutorial recording"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
</iframe>

You do not need to watch both videos before editing. A good workflow is:

1. Watch a short section of the video.
2. Make the matching edit in the Study Config.
3. Refresh your local reVISit page.
4. Compare your file with the matching `_answers` file.
5. Continue to the next step.

## Step 7: Work in small edits

For each tutorial step, make one focused change and then check it locally. This keeps errors easy to find.

Use this loop:

1. Edit the current Study Config file.
2. Save the file.
3. Refresh [http://localhost:8080](http://localhost:8080).
4. If reVISit shows an error, check the most recent edit first.
5. Compare against the matching file in `_answers`.

Common mistakes are usually small:

- A missing comma between JSON objects.
- A component name in `sequence.components` that does not match the name in `components`.
- A response `id` in `correctAnswer` or `skip` that does not match the response definition.
- Editing a file in `_answers` instead of the starter file.

:::tip
With the `$schema` line at the top of each Study Config, VS Code (or any IDE that supports JSON Schema) will underline most of these mistakes as you type — missing commas, wrong types, unknown fields, and even mismatched component ids in the sequence. That's faster than catching them via reVISit's error page after refresh.
:::

## Step 8: Move to the first config tutorial

Once your local site runs and you understand the file layout, continue to [config.json](./config.json.md).

In that page, you will build the main tutorial Study Config step by step. You will add:

- Welcome and consent pages.
- Questionnaire responses.
- Training feedback.
- Image, Vega, website, and React component stimuli.
- Attention checks.
- Skip logic.

After that, continue to [replication-config.json](./replication-config.json.md), where you will build a replication study config with reusable base components and a dynamic sequence.

:::info
For data storage, local development uses browser storage. For deployed data collection, reVISit supports Firebase and Supabase. Firebase is often easier to set up and offers regional hosting options. Supabase is useful when you need more control, including self-hosting or using Supabase's hosted service. Your institution's privacy and ethics requirements should decide which backend is appropriate.
:::

<!-- Importing links -->
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    codeLinks={[
        {name: "Template Repository", url: "https://github.com/revisit-studies/template"},
        {name: "Tutorial Folder", url: "https://github.com/revisit-studies/template/tree/main/public/tutorial"}
    ]}
    referenceLinks={[
        {name: "Installation", url: "../getting-started/installation/"},
        {name: "config.json Tutorial", url: "./config.json/"},
        {name: "replication-config.json Tutorial", url: "./replication-config.json/"}
    ]}
/>
