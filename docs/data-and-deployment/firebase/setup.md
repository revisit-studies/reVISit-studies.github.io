# Configuring Firebase

<a href="https://firebase.google.com/" target="_blank" >Firebase</a> is an app development platform that has extremely useful tools such as storage and real-time synchronization. With Firebase alone, a study creator can capture all data from participants and then export that data for further analysis. In what follows, there are two main products we will be using: the Firestore database and Firebase's storage product.

## Create a Firebase Project

Navigate to <a href="https://firebase.google.com/" target="_blank">Firebase</a> and go to your console.
![Firebase homepage with the Go to console button](./img/enabling-authentication/step1.png)

Create a new Firebase project

![Firebase console showing the Create a project button](./img/enabling-authentication/step2.png)
![Firebase console dialog for creating a new project](./img/enabling-authentication/step3.png)

![Firebase project setup page for entering a project name](./img/enabling-authentication/step4.png)

![Firebase project setup page with Gemini and Google Analytics options](./img/enabling-authentication/step5.png)

:::note
Enabling Gemini or Google Analytics is not necessary. Feel free to disable this when prompted.
:::

Name your project accordingly.

![Firebase project overview page after the project is created](./img/enabling-authentication/step6.png)

## Adding a Firestore Database

With your project created, we are now going to add a Firestore database to it. On the left-hand side, you should see a "Databases & Storage" dropdown menu. From that, select "Firestore".

![Firebase sidebar with Firestore selected under Databases and Storage](./img/enabling-authentication/step7.png)

Click "Create Database" in the center of the screen.

![Firestore Database page with the Create database button](./img/enabling-authentication/step8.png)

For the next two steps, there is no need to change the defaults. Simply click "Next" and then "Create".

![Firestore database creation dialog showing the database ID and location settings](./img/enabling-authentication/step9.png)

![Firestore database creation dialog showing security rules options](./img/enabling-authentication/step10.png)

![Firestore database page after the database is created](./img/enabling-authentication/step11.png)

With the new database created, we'll want to use rules that match reVISit's storage layout. Firestore stores shared study-control records such as modes, the active config hash, and sequence assignments. Participant data and uploaded media are stored in Firebase Storage and are covered in the Storage rules below. Go to the 'rules' tab (second tab) and copy and paste the following code. Then click "publish".

:::warning
Do not treat every Google sign-in as an administrator. The `isAdmin()` function below expects a Firebase Auth custom claim named `revisitAdmin`. If you use a different admin mechanism, update this function before publishing. The in-app `adminUsers` list is useful for the reVISit UI, but Security Rules cannot safely use the current email/UID array as a rules-level admin allowlist.
:::

![Firestore Rules tab with custom read and write rules entered](./img/enabling-authentication/step12.png)

```
rules_version = '2';
service cloud.firestore {
  function isSignedIn() {
    return request.auth != null;
  }

  function isAdmin() {
    return isSignedIn() && request.auth.token.revisitAdmin == true;
  }

  function hasOwnerUid() {
    return isSignedIn()
      && request.resource.data.ownerUid == request.auth.uid;
  }

  function isOwner() {
    return isSignedIn() && resource.data.ownerUid == request.auth.uid;
  }

  function ownerUidUnchanged() {
    return request.resource.data.ownerUid == resource.data.ownerUid;
  }

  function participantIdUnchanged() {
    return request.resource.data.participantId == resource.data.participantId;
  }

  function isClaimingRejectedAssignment() {
    return isSignedIn()
      && resource.data.rejected == true
      && resource.data.claimed == false
      && request.resource.data.claimed == true
      && ownerUidUnchanged()
      && request.resource.data.diff(resource.data).affectedKeys().hasOnly(['claimed']);
  }

  match /databases/{database}/documents {
    match /user-management/{document=**} {
      allow read, write: if isAdmin();
    }

    match /{studyId}/modes {
      allow read: if isSignedIn();
      allow create: if isSignedIn();
      allow update, delete: if isAdmin();
    }

    match /{studyId}/configHash {
      allow read: if isSignedIn();
      allow create, update: if isSignedIn();
      allow delete: if isAdmin();
    }

    match /{studyId}/snapshots {
      allow read, write: if isAdmin();
    }

    match /{studyId}/sequenceAssignment {
      allow read, write: if isSignedIn();

      match /sequenceAssignment/{participantId} {
        allow create: if hasOwnerUid()
          && request.resource.data.participantId == participantId;
        allow get: if isAdmin() || isOwner();
        allow list: if isSignedIn();
        allow update: if isAdmin()
          || (isOwner() && ownerUidUnchanged() && participantIdUnchanged())
          || isClaimingRejectedAssignment();
        allow delete: if isAdmin();
      }
    }

    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

:::note
The participant-owned `sequenceAssignment` documents must include an `ownerUid` field set to the signed-in user's Firebase UID. The subcollection is intentionally list-readable by signed-in users because the current client-side assignment algorithm reads all assignments to choose a balanced sequence and to reuse rejected assignments. This exposes participant IDs and assignment status to signed-in clients. To hide those details, move sequence assignment to a trusted backend or Cloud Function and tighten the `allow list` rule.
:::

## Adding Firebase Storage

Once that is finished, we will enable standard Firebase storage. Click the "Databases & Storage" dropdown menu again and navigate to "Storage".

:::warning
As of October 1st, 2024, Firebase has changed its requirements for newly created projects. You will now be prompted to add a payment method when creating a new Firebase project. You will _only_ be charged if you exceed the limits of the "Always Free Tier". We suggest reading over the Firebase tier limits [here](https://cloud.google.com/storage/pricing#cloud-storage-always-free). We have conducted several studies using reVISit without going over the "Always Free Tier" limits, such as [this recent study](https://vdl.sci.utah.edu/publications/2024_preprint_guardrails/), but please be proactive and set up billing alerts to ensure you do not exceed the free tier limits.
:::

![Firebase sidebar with Storage selected under Databases and Storage](./img/enabling-authentication/step13.png)

![Firebase Storage page with the Get started button](./img/enabling-authentication/step14.png)

We can leave the options as their defaults.

![Firebase Storage setup dialog showing security rules options](./img/enabling-authentication/step15.png)

![Firebase Storage setup dialog showing storage location settings](./img/enabling-authentication/step16.png)

Once the storage product is enabled, navigate to the "Rules" tab. 

Replace the existing rule with the following code and then publish:

```
rules_version = '2';

service firebase.storage {
  function isSignedIn() {
    return request.auth != null;
  }

  function isAdmin() {
    return isSignedIn() && request.auth.token.revisitAdmin == true;
  }

  function hasOwnerMetadata() {
    return isSignedIn()
      && request.resource.metadata.ownerUid == request.auth.uid;
  }

  function isOwner() {
    return isSignedIn() && resource.metadata.ownerUid == request.auth.uid;
  }

  function ownerMetadataUnchanged() {
    return !('ownerUid' in request.resource.metadata)
      || request.resource.metadata.ownerUid == resource.metadata.ownerUid;
  }

  match /b/{bucket}/o {
    match /{studyId}/_sequenceArray {
      allow read: if isSignedIn();
      allow create: if isSignedIn();
      allow update, delete: if isAdmin();
    }

    match /{studyId}/configs/{configFile} {
      allow read: if isSignedIn();
      allow create, update: if isSignedIn();
      allow delete: if isAdmin();
    }

    match /{studyId}/participants/{participantFile} {
      allow create: if isAdmin() || hasOwnerMetadata();
      allow read: if isAdmin() || isOwner();
      allow update: if isAdmin() || (isOwner() && ownerMetadataUnchanged());
      allow delete: if isAdmin() || isOwner();
    }

    match /{studyId}/audio/transcriptAndTags/{allPaths=**} {
      allow read, write: if isAdmin();
    }

    match /{studyId}/audio/{audioFile} {
      allow create: if isAdmin() || hasOwnerMetadata();
      allow read: if isAdmin() || isOwner();
      allow update: if isAdmin() || (isOwner() && ownerMetadataUnchanged());
      allow delete: if isAdmin() || isOwner();
    }

    match /{studyId}/screenRecording/{screenFile} {
      allow create: if isAdmin() || hasOwnerMetadata();
      allow read: if isAdmin() || isOwner();
      allow update: if isAdmin() || (isOwner() && ownerMetadataUnchanged());
      allow delete: if isAdmin() || isOwner();
    }

    match /{allPaths=**} {
      allow read, write: if false;
    }
  }
}
```

The participant-owned Storage rules require uploads to include custom metadata `ownerUid` set to the signed-in user's Firebase UID, for example `customMetadata: { ownerUid: auth.currentUser.uid }`. Shared objects such as `_sequenceArray` and `configs/*_config` are readable by all signed-in users because every participant needs the same sequence/config data. Config uploads remain writable by signed-in users because the current serverless client calls `saveConfig()` during startup; making config writes admin-only requires changing the app so admins pre-publish configs instead of letting participant clients bootstrap them.

![Firebase Storage Rules tab with custom read and write rules entered](./img/enabling-authentication/step17.png)

## Adding automatic transcription for Think Aloud studies

If you plan to use [Think Aloud](../../designing-studies/think-aloud.md) studies with Firebase and want transcripts, install the [Google Cloud Speech-to-Text extension](https://extensions.dev/extensions/googlecloud/speech-to-text) from the Firebase Extensions marketplace.

Once the extension is configured for your project, it will automatically transcribe uploaded audio files. This is the setup reVISit expects when you want transcripts to appear in analysis and export workflows.

## Adding an App to the Firebase Project

We are now going to add an app to your Firebase project:

![Firebase project overview page showing app platform options](./img/enabling-authentication/step18.png)

![Firebase Add app dialog with the web app option selected](./img/enabling-authentication/step19.png)

![Firebase web app registration dialog for naming the app](./img/enabling-authentication/step20.png)

With the app set up, we are ready to copy over the app configuration to your reVISit project. 
In the image below you will see a JSON object denoted as `const firebaseConfig = { ... }`.

![Firebase web app configuration snippet with the firebaseConfig object](./img/enabling-authentication/step21.png)

Copy the contents of that JSON object into the `.env` file for the variable `VITE_FIREBASE_CONFIG`. In the `.env` file, your `VITE_FIREBASE_CONFIG` variable should still be a JSON object that is escaped in single quotes.

### Authentication

We are now going to set up the authentication so that your browser is authorized to communicate with your Firebase database.

![Firebase Authentication page with the Get started button](./img/enabling-authentication/step22.png)

![Firebase Authentication sign-in providers list](./img/enabling-authentication/step23.png)

![Firebase anonymous sign-in provider setup page](./img/enabling-authentication/step24.png)

:::info
In addition to what is shown above, you will want to enable "Google Authentication" in the same section of Firebase. You can do this by choosing the "Google" sign in method under the "Additional Providers" section. The anonymous sign-in is used for participants taking the study. It allows them to access and send data to the Firestore without external authentication. The Google sign-in method is used to authenticate administrators for managing studies and data. Please see [here](../enabling-authentication) for more detailed authentication information and set up instructions.
:::

### App Check

Our last step is to set up App Check.

![Firebase App Check page showing the registered web app](./img/enabling-authentication/step25.png)

![Firebase App Check registration page for reCAPTCHA](./img/enabling-authentication/step26.png)

Click on "Register" to register your app with reCAPTCHA. At this point you will need to navigate to [reCAPTCHA](https://www.google.com/recaptcha/admin/create) to create a secret key.

![Google reCAPTCHA admin page for creating a new reCAPTCHA key](./img/enabling-authentication/recaptcha1.jpg)

The important part here is filling out the domains that you will allow to access the Firebase database. Add `localhost` and `127.0.0.1` to test your survey on your local machine.

:::info
If you are planning on hosting this externally (such as using GitHub pages), you need to also enter the base URL for your website. For the GitHub pages deployment, you should enter your base GitHub pages URL (i.e. <code>&lt;username&gt;.github.io</code>).
:::

You should now see a site key and a secret key. First, copy the secret key and paste it back into the Firebase reCAPTCHA page as shown in the following images.

![Google reCAPTCHA admin page showing the generated site key and secret key](./img/enabling-authentication/recaptcha2.jpg)

![Firebase App Check reCAPTCHA setup page with the secret key field](./img/enabling-authentication/step27.png)

Now, copy the site key. That site key should go into your `.env` file for the variable `VITE_RECAPTCHAV3TOKEN`.

Now we will link your browser to your app through a debug key.

:::info
To see the debug token, you need to enable Firebase storage. Open up the <code>.env</code> file in the root of the repository. Change the <code>VITE_STORAGE_ENGINE</code> variable value to "firebase". Once you have Firebase already set up, you can switch between "localStorage" and "firebase" freely for development purposes.
:::

- Navigate to http://localhost:8080 and click on any demo study.

- Open up the browser console. This differs depending on the web browser that you are using. You can find the various ways to view the browser console for popular web browsers <a href="https://help.planday.com/en/articles/30207-how-to-open-the-developer-console-in-your-web-browser" target="_blank">here</a>.

- Copy the debug token from the console.
  ![Browser developer console showing the Firebase App Check debug token](./img/enabling-authentication/console.png)

- Navigate to your Firebase instance and add the token as shown below:

![Firebase App Check debug tokens page](./img/enabling-authentication/step28.png)

![Firebase dialog for adding an App Check debug token](./img/enabling-authentication/step29.png)

![Firebase App Check page showing the added debug token](./img/enabling-authentication/step30.png)

## Allowing for CORS requests

Once that is finished, we'll have to use Google's `gsutil` function in the terminal to set up a CORS policy so that the application can communicate with Firebase storage. Follow <a href="https://cloud.google.com/storage/docs/gsutil_install" target="_blank">these steps on how to install gsutil on your local machine</a>.

After installing gsutil, you need to navigate to the `google-cloud-sdk/bin` folder on your local machine. Create a new file called "cors.json" with the following contents:

```json
[
  {
    "origin": ["*"],
    "method": ["GET"],
    "maxAgeSeconds": 3600
  }
]
```

Lastly, while still inside this same directory, call the following function:

```bash
gsutil cors set cors.json gs://<your-cloud-storage-bucket>
```

You can find the link for the storage bucket by navigating to the "Storage" product in Firebase.

![Firebase Storage files page showing the storage bucket URL](./img/enabling-authentication/step31.png)

Assuming that you have already changed the `VITE_STORAGE_ENGINE` variable in the `.env` file to "firebase", you can now call `yarn serve` to launch the server and navigate to http://localhost:8080 to launch any demo study. All data from any participant session will automatically be uploaded to Firebase.

:::note
When running `yarn build`, reVISit automatically uses the Firebase storage engine.
:::

![ReVISit demo study page running with Firebase storage enabled](./img/enabling-authentication/demo.png)

## Deployment

If you are intending to deploy your reVISit application to a static website, we suggest following our [guide to deploy to GitHub pages](../../deploying-to-static-website). In this, you'll see that there is an additional step that you will need to follow in Firebase so that your custom domain can authorize users.

import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    referenceLinks={[
        {name: "Firebase", url: "https://firebase.google.com/"},
        {name: "Firebase Tier Limits", url: "https://cloud.google.com/storage/pricing#cloud-storage-always-free"},
        {name: "Google reCAPTCHA", url: "https://www.google.com/recaptcha/admin/create"},
        {name: "Deploying to GitHub", url: "../../deploying-to-static-website"}
    ]}
/>
