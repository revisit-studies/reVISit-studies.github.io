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

** Workflow as of 2024/05/10 **
Until version 1 is released, we have a `v1-doc-updates` branch that we will be working off of. For now, pleas make separate feature branches off of this branch and then make PRs to this branch. When we release V1, this branch will be merged into main. Afterwards, our standard workflow may change.
