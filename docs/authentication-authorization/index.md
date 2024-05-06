# User Management In reVISit

:::tip
To use the user-management system that is built into reVISit, you must have a Firebase application set up. Please see [here](../tutorials/firebase-setup) for how setting up a Firebase application.
:::

ReVISit comes with an authentication and authorization system that allows a study creator to manage what users should have access to (possibly sensitive) user data and analysis. This is managed with Firebase's Google SSO and custom authorization tools built into the reVISit application. Enabling the authentication system will not interfere with who can take an individual study. Instead, it will allow a study creator to feel confident that a participant is not navigating to portions of the application which is intended for the study creator only.

:::warning
It is not required that you use the authentication system in reVISit, but it is highly recommended. Without this, any individual will be able to see and download any data that is stored in your Firebase application.
:::

## How does authentication work in reVISit?

There are a few different personas that we consider when talking about accessing the reVISit platform. To start, we will consider the personas "participant" and "administrator". A "participant" would be any user who is meant to participate in one or more studies. In general, participants are given a link to the study itself and have no immediate way to navigate to the main page, the analysis dashboard, or the settings page. In other words, there are no specific navigation buttons within an individual study which direct to any of these three pages. 

However, this does not necessarily prevent a user from accessing these pages; if a user knows the URL for these other pages, they are free to access them if authentication is not enabled. We want to make sure that the participant is not only solely focused on the study, but also that the participant does not have the ability to navigate to pages containing sensitive information. 

An "administrator" should, conversely, have access to all information that is in reVISit. This means they should have access to all user data, the analysis dashboard, and any study that is created within this particular application.

When authentication is enabled, all administrators are required to log into the application before proceeding to the analysis dashboard and other protected routes. Participants will still be able to take studies without the need for signing into the application.

:::info
When a user goes directly to a study, they are signed in <i>anonymously</i>. This means that no personally identifiable information is captured. This is only done so that we can persist the user data across the entire study.
:::

When you first set up your reVISit application, authentication is disabled by default. The user who first enables this authentication will be prompted to sign in via Google SSO. They will automatically become the first administrator. Additional administrators can be added afterwards.

:::warning
Authentication should be enabled prior to deployment. This will prevent any unwanted user from enabling authentication and setting themselves as an administrator. Adding or removing administrators can be done before or after deployment.
:::

