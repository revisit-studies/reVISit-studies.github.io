# Firebase User Management

:::danger
In general, we do not advise editing the user management data directly in the Firestore Database. This should only be used in cases where the security of the application has been compromised and there is no way to edit the user access within the reVISit application. Please see [here](adding-removing-ui) for editing users within the reVISit UI
:::

ReVISit allows you to handle all necessary user management from the reVISit UI. However, if you are ever in a situation where you have lost access to the reVISit application, you can still edit the user access via the Firestore.




## `user-management` collection

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


## How to Reset Authentication

The easiest and cleanest way to reset the authentication is to essentially remove this collection. This will allow you to re-do the authentication process completely (i.e. enable authentication within the reVISit application and sign in as an administrator).

:::warning
If this step is necessary, we advise that you first remove this application from any public facing website. This is the same protocol when setting up authentication for the first time; ensure that there are no other unwanted users who can access the reVISit application while you set up authentication.
:::

Go into the Firestore Database and navigate to the `user-management` collection. On this collection, you should see three vertical dots to the right. This will provide an option for deleting this collection. 

Once the collection is deleted, your reVISit application will be ready to re-enable authentication. 