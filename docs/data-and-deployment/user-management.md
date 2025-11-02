# User Management In reVISit

:::tip
To use the user-management system that is built into reVISit, you must have a Firebase application set up. Please see [here](../firebase/setup) for how to set up a Firebase application. Additionally, you will need to enable the Google sign-in method for Authentication. You can find this section of the Firebase tutorial [here](../firebase/setup#authentication).
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

## Recovering from lost access

### Firebase

:::danger
In general, we do not advise editing the user management data directly in the Firestore Database. This should only be used in cases where the security of the application has been compromised and there is no way to edit the user access within the reVISit application. Please see [here](../firebase/enabling-authentication) for editing users within the reVISit UI
:::

ReVISit allows you to handle all necessary user management from the reVISit UI. However, if you are ever in a situation where you have lost access to the reVISit application, you can still edit the user access via the Firestore.

#### `user-management` collection

In the Firebase application, you will see that your Firestore Database contains many different collections pertaining to the data collected for each study. There is an additional collection called `user-management`. If authentication was enabled, you should see two documents in the collection labeled `adminUsers` and `authentication`. 

The `adminUsers` will contain a single list called the `adminUsersList`. Each entry of this list is of the following form:

```json
{
    "email": "myemail@gmail.com",
    "uid": "<UID>"
}
```

The `uid` is automatically generated when the user signs in for the first time. If the `uid` field is `null`, then that means the user has not yet signed in.

The `authentication` document will only contained the boolean `isEnabled`. If this is set to `false`, authentication is completely disabled but the users will not be removed from the `adminUsers` collection.

#### How to Reset Authentication

The easiest and cleanest way to reset the authentication is to essentially remove this collection. This will allow you to re-do the authentication process completely (i.e. enable authentication within the reVISit application and sign in as an administrator).

:::warning
If this step is necessary, we advise that you first remove this application from any public facing website. This is the same protocol when setting up authentication for the first time; ensure that there are no other unwanted users who can access the reVISit application while you set up authentication.
:::

Go into the Firestore Database and navigate to the `user-management` collection. On this collection, you should see three vertical dots to the right. This will provide an option for deleting this collection. 

Once the collection is deleted, your reVISit application will be ready to re-enable authentication. 

### Supabase

:::danger
In general, we do not advise editing the user management data directly in the Supabase Database. This should only be used in cases where the security of the application has been compromised and there is no way to edit the user access within the reVISit application. Please see [here](../supabase/enabling-authentication) for editing users within the reVISit UI
:::

#### The `user_management` table row

In the Supabase application, navigate to the table editor and select the `revisit` table. You should see a row in the table with the `docId` of `user_management`. This row contains two fields: `admin_users` and `authentication`.

The `admin_users` field will contain a JSON array of objects. Each object will have the following structure:

```json
{
    "email": "myemail@provider.com",
    "uid": "<UID>"
}
```

The `uid` is automatically generated when the user signs in for the first time. If the `uid` field is `null`, then that means the user has not yet signed in.

The `authentication` field will contain a JSON object with a single key-value pair:

```json
{
    "is_enabled": true
}
```

#### How to Reset Authentication

The easiest and cleanest way to reset the authentication is to essentially remove this row. This will allow you to re-do the authentication process completely (i.e. enable authentication within the reVISit application and sign in as an administrator).

:::warning
If this step is necessary, we advise that you first remove this application from any public facing website. This is the same protocol when setting up authentication for the first time; ensure that there are no other unwanted users who can access the reVISit application while you set up authentication.
:::

Go into the table editor and navigate to the `revisit` table. Find the row with the `docId` of `user_management`. On this row, you should see a checkbox to the left. Select this checkbox and then select the "Delete" button at the top of the table editor. This will delete the row from the table.

Once the row is deleted, your reVISit application will be ready to re-enable authentication.

<!-- Importing Links -->
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    referenceLinks={[
        {name: "Firebase Setup", url: "../firebase/setup"},
        {name: "Firebase Authentication", url: "https://firebase.google.com/products/auth"},
        {name: "Supabase Setup", url: "../supabase/setup"},
    ]}
/>
