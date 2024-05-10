---
sidebar_position: 1
---


# FAQ 

Below we have a list of some frequently asked questions. We try to make sure that this page is updated as frequently as possible. If you have a question that is not answered by this page or the [documentation](/docs/introduction/), you can join the [reVISit Slack group](https://join.slack.com/t/revisit-nsf/shared_invite/zt-2g1lwcq5y-Yae8eBEbMO~r7tP~ZQ7Cig). Otherwise, you can contact us at `<contact@revisit.dev>`.


### Q: Is there a version of this application that I do not need to host myself?

A: reVISit is designed so that the study creators have full control over the data collected from their study. While there the reVISit creators offer no hosting platform, we designed the reVISit repository to make hosting the application yourself as simple as possible using Github Pages and Firebase. Using these two tools requires no domain name setups, no external server to host the application, and no backend database to store your data; all of this can be achieved by using Firebase and Github pages. Please see [here](/docs/tutorials/firebase-setup) to get started with setting up Firebase and see [here](/docs/tutorials/deploying-to-static-website) for deploying to Github pages.


### Q: I already have a website where'd I'd like to host reVISit. How can I use reVISit in an already existing website?

A: reVISit is designed to be a single page web application. If you run `yarn build` inside your forked repository, the storage engine will automatically change to using Firebase and will generate a `dist` directory containing all the necessary code for a static deployment. In this directory is the `index.html` file which is the entry point for the application -- no additional set up is necessary. For example, if you're using <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html" target="_blank">AWS S3 static website hosting</a>, you can upload the `dist` directory to the S3 bucket and then use this `index.html` file as the entry point when prompted.

### Q: How do store data in Firebase in a country outside of the U.S.?

A: Firebase allows choosing the region for both Firestore and Storage. Please see <a href="https://firebase.google.com/docs/projects/locations)" target="_blank">here</a> for documentation on how to choose these regions for both the Real Time Database and Cloud Firestore/Cloud Storage.


### Q: How do I store data in something other than Firebase?

A: reVISit is designed with "storage engines" in mind. By default, we use the local storage engine (data being downloaded directly to the user's computer) for development and the firebase storage engine for production builds. However, we do have plans to create additional storage engines for cases where a study creator has a backend server hooked up to a database (such as MySQL). In the meantime, you can view the <a href="https://github.com/revisit-studies/study/tree/main/src/storage/engines" target="_blank">source code</a> to design your own storage engine that best fits your needs. If you make a storage engine to suit your own needs, please consider making a pull request so that we can improve reVISit for all users.

### Q: I had Firebase connected but it no longer works locally. What happened?

A: A common issue is the debug token changing while developing. Whenever you clear the cache, you're debug token might change which means you'll have to re-register the debug token in the App Check section of Firebase. See [here](/docs/tutorials/firebase-setup#adding-an-app-to-the-firebase-project) to see how to register a debug token.

<div class="info-panel" type="warning"><div class="info-text">A common issue in Google Chrome is the debug token changing whenever the application is restarted or the page is refreshed. To solve this issue you will have to exit Chrome and re-launch it.</div></div>