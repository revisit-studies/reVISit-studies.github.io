---
layout: home
title: FAQ | reVISit
weight: 2
tag: faq
permalink: /faq/
---

# FAQ 

Below we go through some frequently asked questions. We try to make sure that this page is as up-to-date as possible. If you have a question that is not answered by this page or the [documentation](/tutorial/), you can join the [reVISit Slack group](https://join.slack.com/t/revisit-nsf/shared_invite/zt-2g1lwcq5y-Yae8eBEbMO~r7tP~ZQ7Cig). Otherwise, you can contact us at <contact@revisit.dev>.

{% capture path %}{{ site.baseurl }}/assets/images/{% endcapture %}

### Q: Is there a version of this application that I do not need to host myself?

A: reVISit is designed so that the study creators have full control over the data collected from their study. While there the reVISit creators offer no hosting platform, we designed the reVISit repository to make hosting the application yourself as simple as possible using Github Pages and Firebase. Using these two tools requires no domain name setups, no external server to host the application, and no backend database to store your data -- all of this can be achieved by using Firebase and Github pages. Please see [here](/tutorial/#connecting-to-firebase) to get started with setting up Firebase and see [here](/tutorial/#deploying-to-a-static-website) for deploying to Github pages.


### Q: I already have a website where'd I'd like to host reVISit. How can I use reVISit in an already existing website?

A: reVISit is designed to be a single page web application. If you run `yarn build`, the storage engine will automatically change to using Firebase and will generate a `dist` directory containing all the necessary code for a static deployment. In this directory is the `index.html` file which can be the entry point for the application -- no additional set up is necessary. For example, if you're using <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html" target="_blank">AWS S3 static website hosting</a>, you can upload the `dist` directory to the S3 bucket and then use this `index.html` file as the entry point.

### Q: How do store data in Firebase in a country outside of the U.S.?

A: Firebase allows choosing the region for both Firestore and Storage. Please see <a href="https://firebase.google.com/docs/projects/locations)" target="_blank">here</a> for documentation on how to choose these regions for both the Real Time Database and Clour Firestore/Cloud Storage.


### Q: How do I store data in something other than Firebase?

A: reVISit is designed with "storage engines" in mind. By default, we use the local storage engine (data being downloaded directly to the user's computer) and mostly provide support for Firebase. However, we do have plans to create additional storage engines for cases where a study creator has a backend server hooked up to a SQL database. In the meantime, you can view the <a href="https://github.com/revisit-studies/study/tree/main/src/storage/engines" target="_blank">source code</a> to design your own storage engine that best fits your needs.