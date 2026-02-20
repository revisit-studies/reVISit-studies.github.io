# ReVISit Documentation

Hello! You've stumbled across the code for the reVISit documentation. The documentation is hosted at [revisit.dev](https://revisit.dev/), and it's a great place to learn more about the project, how to use it, and how to contribute.

If you're working on the project, you might find the following information useful:

### Contributing

This site is built using [Docusaurus](https://docusaurus.io/). You can view all necessary documentation for working on this site there. Please make sure that you are creating a separate branch and making a pull request to the `main` branch when working on this site.

### Running the Documentation Locally

Run the following commands to install the dependencies and start the development server:

```bash
yarn
yarn start
```

The documentation will be available at [http://localhost:3000](http://localhost:3000).

### Building and Deploying the Documentation

The documentation is built and deployed automatically by GitHub Actions. When you push to the `main` branch, the documentation will be built and deployed to the `gh-pages` branch. See the `.github/workflows/deploy.yml` file for more information.

In addition to pushes from the `main` branch in this repo, the documentation is also built and deployed when a new version of the `revisit-studies` repo is released. This is triggered by a workflow dispatch event from the `revisit-studies` repo. See the `.github/workflows/deploy_website.yaml` file in the `revisit-studies` repo for more information. In theory, this workflow dispatch only happens when there is a new version of the `revisit-studies` repo, which happens on PR from `dev` to `main` in the `revisit-studies` repo.

### Our Versioning System

Whenever our Github action for the `study` repository runs, it versions the current documentation. This gets labeled as the previous recent version. So if we are about to release `v1` and our previous release was `v1-beta`, then the versioning system will create a `version-v1-beta` folder in the `version_docs` folder. The contents of these files will be identical to the `docs` folder when this action is taken. Then, the `docs/` folder will be `v1`.

### Writing Documentation

Because we have a versioning system in docusaurus, all old documentation is placed in the "versioned_docs" folder. This is done automatically with the help of our Github workflow and Docusaurus. The latest version of our documentation is always in the `docs/` folder. This should be the only folder you need to edit unless you are specifically attempting to update an old version of the documentation.

### Typesetting Conventions

* Use [Admonitions](https://docusaurus.io/docs/markdown-features/admonitions) for info, tip, warning, etc. For example, a tip would look like this in Markdown: 
```
:::warning

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
```
* Use opening and closing double quotes “ ” when you want to use quotes.
    * “ opening - is Option + [ on Mac
    * ” closing - is Option + Shift + [ on Mac.
    * Don't use code-style quotes ". Don't use single quotes at all.
* Use code highlighting whenever you're mentioning something that's code, like a `function_name()`.
* Use dashes properly:
    * em-dash: — use instead of comma; use sparingly. [Option + Shift + Dash (-) on Mac]
    * en-dash: – use for number ranges, 2–3 items. [Option + Dash (-) on Mac]
    * hyphen: - use for hyphenation

**Custom Structured Links Component:**

We can add a "structured links" component to any of our Markdown files like so:

```markdown
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
  demoLinks={[
    {name: "Vega Demo", url: "https://revisit.dev/study/demo-vega/"}
  ]}
  codeLinks={[
    {name: "Vega Code", url: "https://github.com/revisit-studies/study/tree/main/public/demo-vega"}
  ]}
  referenceLinks={[
    {name: "Vega", url: "https://vega.github.io/vega/"},
    {name: "Vega-Lite", url: "https://vega.github.io/vega-lite/"},
    {name: "Vega Component Config", url: "../../typedoc/interfaces/VegaComponentConfig/"},
    {name: "Vega Component Path", url: "../../typedoc/interfaces/VegaComponentPath/"}
  ]}
/>
```

The "demoLink" is a static path and will appear as "Live Demo". The "codeLink" is also static and will appear as "Demo Code". The reference links is a list with the associated displayed names (the "name" key) and the associated URL ( the "url" key).

Note that this wil _only_ render when we have the right-hand sidebar in the markdown file which appears when we have separated headers to navigate.

## Adoption

If you use reVISit in a paper, please let us know about it by submitting this form: https://forms.gle/nYqAoqESHdDtK2yH6

To update the website, copy the responses as a csv into `static/adoption.csv' from [here](https://docs.google.com/spreadsheets/d/1ox3MUu6sLJlPZA_ULuawBroC0CicxcSkdGcItRTQwb4/edit?gid=1547627539#gid=1547627539).