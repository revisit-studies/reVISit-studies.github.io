# Deploying To a Static Website

- [Deploying using GitHub](#deploying-using-github)
- [Deploying using Netlify](#deploying-using-netlify)
- [Deploying using Vercel](#deploying-using-vercel)
- [Deploying using render.com](#deploying-using-rendercom)

## Deploying using GitHub

Deploying your study should be relatively simple. We include a GitHub action that will build your study and deploy it to GitHub pages. The only item that the user must adjust is in the `.env` file in the root of the repository. At the top of this file, you should see `VITE_BASE_PATH="/study/"`. Change "/study/" to `"/<repo-name>/"`.

After this, you'll need to make sure that your GitHub repository has workflow actions enabled. Navigate to the actions tab in your repository as shown below.

![Demo](./img/deploy_step1.jpg)

On this page, enable workflows as shown below.

![Demo](./img/deploy_step2.jpg)

:::info
If you have enabled GitHub pages or ran any other action in your repo, it won't be possible to enable the workflow on this screen. To enable the workflow, you will have to navigate to the `.github/workflows` folder in your repository, remove the workflow files, commit and push, then add the workflow files back, commit and push again. After that, the workflows should be enabled.
:::

After you've changed the `.env` file and enabled the workflow, go ahead and push the commit to your forked repository. Afterwards, the deploy action will run. Once that has finished, navigate to the 'settings' tab and then the 'pages' tab.

![Demo](./img/deploy_step3.jpg)

![Demo](./img/deploy_step4.jpg)

Here we will be able to deploy the site to GitHub pages. In the 'Branch' section, you should see options to select a branch to deploy from. Select 'gh-pages' from the dropdown menu as shown below.

![Demo](./img/deploy_step5.jpg)

Click 'Save' once you have made the switch. After a short period of time, your reVISit application will deploy to `<username>.github.io/<repository-name>`. If you want to deploy to a custom domain, you can do that as well by following the instructions on [GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

:::info
If you would like to enable admin sign ins when you deploy your static website, you will have to make sure that Firebase has your domain name set as an authorized domain. Please see [here](../firebase/enabling-authentication/#adding-authorized-domains) to add your custom domain.
:::

## Deploying using Netlify

Similarly deploying your study to Netlify is relatively straightforward. First, modify the VITE_BASE_PATH in your .env to be

```
VITE_BASE_PATH="/"
```

Then create a new file called `public/_redirects`, the contents of the file should be

```
/*    /index.html   200
```

Next, navigate to Netlify. This will likely require you to sign in or to make an account. From the home page, create a new project.

![Netlify Demo](./img/netlify_steps/netlify_1.png)

Then, on the next page, select GitHub. This will require you to authorize Netlify as a GitHub app. This will then bring up a list of repos.

![Netlify Demo](./img/netlify_steps/netlify_2.png)

Search for the appropriate repo and then select it. This will bring up a configuration screen for the new Netlify project. You should enter a project name, which will determine the url (e.g., YOUR_PROJECT.netlify.app if your project name is YOUR_PROJECT). Scroll to the bottom of the screen and click "Deploy YOUR PROJECT NAME".

The first build will take a bit, but once it runs, your experiment should be ready!

If you are using Netlify as a secondary venue for anonymization purposes, you can specify which branch Netlify will use to deploy from. For instance a branch called `for-review' might remove all personnel and affiliation information.

## Deploying using Vercel

Deploying with Vercel is also straightforward and follows a very similar configuration process as the other platforms. Ensure that your VITE_BASE_PATH in your .env is like the following:

```
VITE_BASE_PATH="/"
```

At the root of your project, create a `vercel.json` file with the following contents:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Then, navigate to Vercel. This will likely require you to sign in or to make an account. From the home page, create a new project.

![Clicking the vercel navbar to pick a new project](./img/vercel_steps/vercel_0.png)

Then, on the next page, select GitHub. This will require you to authorize Vercel as a GitHub app. This will then bring up a list of repos. Select the appropriate repo. This will bring up a configuration screen for the new Vercel project.

![Vercel Demo](./img/vercel_steps/vercel_1.png)

You likely will not need to make any changes to the configuration. After a short period of time, this will yield a website like `https://<APP_NAME>.vercel.app/`

## Deploying using render.com

Deploying with render.com is a little more involved than some of the other options, but has similar bones as the other platforms. Ensure that your VITE_BASE_PATH in your .env is like the following:

```
VITE_BASE_PATH="/"
```

Then, navigate to render.com. This will likely require you to sign in or to make an account. From the home page, create a new project. Select "Static Site" as the type of project you want to create.

![Clicking the render navbar to pick a new project](./img/render_steps/render_0.png)

Then, on the next page, select GitHub. This will require you to authorize render.com as a GitHub app. This will then bring up a list of repos. Select the appropriate repo. This will bring up a configuration screen for the new render.com project.

![Render Demo](./img/render_steps/render_1.png)

You likely will not need to make any changes to the configuration. The one exception is, you will need to add a rewrite rule. Go to your static site on Render → Redirects/Rewrites tab → Add Rule:

```
Type: Rewrite
Source: /*
Destination: /index.html
```

Deploy again and then after a protracted period of time, this will yield a website like `https://<APP_NAME>.onrender.com/`

<!-- Importing links -->

import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
referenceLinks={[
{name: "GitHub Pages", url: "https://docs.github.com/en/pages/quickstart"},
{name: "GitHub Custom Domain", url: "https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site"},
{name: "Netlify", url: "https://www.netlify.com/"},
{name: "Vercel", url: "https://vercel.com/"},
{name: "render.com", url: "https://render.com/"}
]}/>
