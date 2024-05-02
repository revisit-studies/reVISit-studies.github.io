---
sidebar_position: 2
---

# Deploying To a Static Website

Deploying your study should be relatively simple. We include a GitHub action that will build your study and deploy it to GitHub pages. The only item that the user must adjust is in the `.env` file in the root of the repository. At the top of this file, you should see `VITE_BASE_PATH="/study/"`. Change "/study/" to `"/<repo-name>/"`.

After this, you'll need to make sure that your Github repository has workflow actions enabled. Navigate to the actions tab in your repository as shown below.

![Demo](./img/deploy_step1.jpg)

On this page, enable workflows as shown below.

![Demo](./img/deploy_step2.jpg)

After you've changed the `.env` file and enabled the workflow, go ahead and push the commit to your forked repository. Afterwards, the deploy action will run. Once that has finished, navigate to the 'settings' tab and then the 'pages' tab.

![Demo](./img/deploy_step3.jpg)
![Demo](./img/deploy_step4.jpg)

Here we will be able to deploy the site to the Github pages. In the 'Branch' section, you should see options to select a branch to deploy from. Select 'gh-pages' from the dropdown menu as shown below.

![Demo](./img/deploy_step5.jpg)

Click 'Save' once you have made the switch. After a short period of time, your reVISit application will deploy to `<username>.github.io/<repository-name>`. If you want to deploy to a custom domain, you can do that as well by following the instructions on [GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).