---
sidebar_position: 1
---


# FAQ 

Below we have a list of some frequently asked questions. We try to make sure that this page is updated as frequently as possible. If you have a question that is not answered by this page or the rest of the [documentation](../introduction/), you can join the [reVISit Slack group](https://join.slack.com/t/revisit-nsf/shared_invite/zt-2g1lwcq5y-Yae8eBEbMO~r7tP~ZQ7Cig). Otherwise, you can contact us at [contact@revisit.dev](mailto:contact@revisit.dev).


### Q: Is there a version of this application that I do not need to host myself?

A: reVISit is designed so that the study creators have full control over the data collected from their study. While the reVISit team (currently) offer no hosting platform, we designed the reVISit repository to make hosting the application yourself as simple as possible using Github Pages and Firebase. Using these two tools requires no domain name setups, no external server to host the application, and no backend database to store your data; all of this can be achieved by using Firebase and Github pages. Please see [here](../data-and-deployment/firebase-setup) to get started with setting up Firebase and see [here](../data-and-deployment/deploying-to-static-website) for deploying to Github pages. 

However, we are considering making hosting available in a future version to further simplify the process of creating your own study. Let us know if that would be important to you!


### Q: I already have a website where I'd like to host reVISit. How can I use reVISit in an already existing website?

A: reVISit is designed to be a single page web application. If you run `yarn build` inside your forked repository, the storage engine will automatically change to using Firebase and will generate a `dist` directory containing all the necessary code for a static deployment. In this directory is the `index.html` file which is the entry point for the application — no additional set-up is necessary. For example, if you're using <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html" target="_blank">AWS S3 static website hosting</a>, you can upload the `dist` directory to the S3 bucket and then use this `index.html` file as the entry point when prompted.

### Q: I have to store my data in a specific country / region. How do I do this with Firebase?

A: Firebase lets you choose the region for both Firestore and Storage. Please see <a href="https://firebase.google.com/docs/firestore/locations" target="_blank">here</a> for documentation on how to choose these regions for both the Real Time Database and Cloud Firestore/Cloud Storage.


### Q: How do I store data in something other than Firebase?

A: reVISit is designed with “storage engines” in mind. By default, we use the local storage engine (data being stored directly on the user's computer) for development or for in-lab studies and the firebase storage engine for production builds. However, we do have plans to create additional storage engines for cases where a study creator has a backend server hooked up to a database (such as MySQL). In the meantime, you can view the <a href="https://github.com/revisit-studies/study/tree/main/src/storage/engines" target="_blank">source code</a> to design your own storage engine that best fits your needs. If you make a storage engine to suit your own needs, please consider making a pull request so that we can improve reVISit for all users.

### Q: I had Firebase connected but it no longer works locally. What happened?

A: A common issue is that the debug token changes while you are developing. Whenever you clear the cache, your debug token might change which means you'll have to re-register the debug token in the App Check section of Firebase. [Review the tutorial](../data-and-deployment/firebase-setup#adding-an-app-to-the-firebase-project) to see how to register a debug token.

:::warning
A common issue in Google Chrome is the debug token changing whenever the application is restarted or the page is refreshed. To solve this issue you will have to exit Chrome and re-launch it.
:::

### Q: I see two different times reported for the duration of a trial, one of them is called "clean". What is that? 

We report the total time it took a participant to complete a task as duration, but we also report a **clean time** duration that subtracts inactive periods from the total time. Technically, we determine that a browser window is inactive for a period of time based on the [visibilitychange event](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event), which fires, e.g., when the participant switches to a different tab. We subtract that inactive time from the total duration for the clean time. It's often the case that a participant gets distracted and does something unrelated to the study, and then comes back to the study to continue. Clean time is a way to identify these situations and prevent extreme outliers from being considered in timing data. However, there are ways for participants to become distracted that are not tracked by clean time, such as when they step away from their computer and keep their browser open. 