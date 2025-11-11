# FAQ

Below is a list of frequently asked questions.

If you have a question that is not answered by this page or the rest of the [documentation](../introduction/), you can join the [reVISit Slack group](https://join.slack.com/t/revisit-nsf/shared_invite/zt-2g1lwcq5y-Yae8eBEbMO~r7tP~ZQ7Cig). Otherwise, you can contact us at [contact@revisit.dev](mailto:contact@revisit.dev).

### Q: Something weird is happening while I debug my study. What should I do?

A: If you're debugging your study by re-taking parts of the study over and over, you might get into an awkward state with the data that's stored. This doesn't happen when participants take the study, because they'll only take it once. You can click "Next Participant" in the study browser, and/or clear your browser cache and local storage to resolve this issue.

### Q: Is there a version of this application that I do not need to host myself?

A: ReVISit is designed so that the study creators have full control over the data collected from their study. While the reVISit team (currently) offers no hosting platform, we designed the reVISit repository to make hosting the application yourself as simple as possible using GitHub Pages and Firebase or Supabase. Using these tools requires no domain name setup, no external server to host the application, and no backend database to store your data; all of this can be achieved by using Firebase/Supabase and GitHub pages. Please see [Firebase Setup](../data-and-deployment/firebase/setup/) or [Supabase Setup](../data-and-deployment/supabase/setup/). See [here](../data-and-deployment/deploying-to-static-website) for deploying to GitHub pages.

However, we are considering making hosting available in a future version to further simplify the process of creating your own study. Let us know if that would be important to you!

### Q: I need a specific type of form element that's not in the library, what can I do?

A: There are a few ways you could handle that:

- You could add a form element as part of the core reVISit code. If you do so, consider submitting a PR that we can integrate back into reVISit.
- You could write a custom web page or React component that does exactly what you want. In that case be mindful that you will also have to handle data storage and provenance tracking yourself, which are "free" if you use a standard reVISit form element.

### Q: I already have a website where I'd like to host reVISit. How can I use reVISit in an already existing website?

A: ReVISit is designed to be a single page web application. If you run `yarn build` inside your forked repository, the storage engine will automatically switch to cloud storage and will generate a `dist` directory containing all the necessary code for a static deployment. In this directory is the `index.html` file which is the entry point for the application — no additional setup is necessary. For example, if you are using <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html" target="_blank">AWS S3 static website hosting</a>, you can upload the `dist` directory to the S3 bucket and then use this `index.html` file as the entry point when prompted.

### Q: I have to store my data in a specific country / region. How do I do this with Firebase?

A: Firebase lets you choose the region for both Firestore and Storage. Please see <a href="https://firebase.google.com/docs/firestore/locations" target="_blank">here</a> for documentation on how to choose these regions for both the Real Time Database and Cloud Firestore/Cloud Storage.

### Q: I don't want to use Firebase, what other options do I have?

A: We also support an open, self-hosted alternative to Firebase called Supabase. You will have to run this on a server you control. For details, see the [documentation](../data-and-deployment/supabase/setup/).

### Q: How do I store data in some other database?

A: In short: we don't support other databases. However, reVISit is designed with "storage engines" in mind. By default, we use the local storage engine (data being stored directly on the user's computer) for development or for in-lab studies and the firebase storage engine for production builds. However, we do have plans to create additional storage engines for cases where a study creator has a backend server hooked up to a database (such as MySQL). In the meantime, you can view the <a href="https://github.com/revisit-studies/study/tree/main/src/storage/engines" target="_blank">source code</a> to design your own storage engine that best fits your needs. If you make a storage engine to suit your own needs, please consider making a pull request so that we can improve reVISit for all users.

### Q: I had Firebase connected but it no longer works locally. What happened?

A: A common issue is that the debug token changes while you are developing. Whenever you clear the cache, your debug token might change which means you'll have to re-register the debug token in the App Check section of Firebase. [Review the tutorial](../data-and-deployment/firebase/setup/#adding-an-app-to-the-firebase-project) to see how to register a debug token.

:::warning
A common issue in Google Chrome is the debug token changing whenever the application is restarted or the page is refreshed. To solve this issue you will have to exit Chrome and re-launch it.
:::

### Q: I see two different times reported for the duration of a trial, one of them is called "clean time". What is that?

A: We report the total time it took a participant to complete a task as duration, but we also report a **clean time** duration that subtracts inactive periods from the total time. Technically, we determine that a browser window is inactive for a period of time based on the [`visibilitychange event`](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event), which fires, e.g., when the participant switches to a different tab. We subtract that inactive time from the total duration for the clean time. It's often the case that a participant gets distracted and does something unrelated to the study, and then comes back to the study to continue. Clean time is a way to identify these situations and prevent extreme outliers from being considered in timing data. However, there are ways for participants to become distracted that are not tracked by clean time, such as when they step away from their computer and keep their browser open.

### Q: What happens if there's an error during study initialization?

A: ReVISit has built-in error handling so your study can still run even if something goes wrong when it starts. If an error happens during setup, reVISit will show a warning message, then automatically use the first available study setup, and continue running so participants can still complete the study.