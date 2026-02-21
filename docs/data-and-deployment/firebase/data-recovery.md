# Data Recovery

:::warning
By default, Object Versioning is disabled for Firebase storage buckets. Without it, there is still a  **one-week soft delete recovery window** in which data can be restored.
:::

reVISit data stored with Firebase lives in Google Cloud services:

- Study and participant records are stored in **Cloud Firestore**.
- Files (for example, audio and screen recordings) are stored in **Cloud Storage for Firebase**, which uses a **Google Cloud Storage bucket**.

## Viewing Version History for A Single Stored Object

Object version history is managed through Google Cloud Storage, not directly in the Firebase UI.

Every noncurrent object version is stored and billed until removed (manually or with lifecycle rules). For some studies in reVISit, such as studies that store large amounts of provenance data, this may **significantly increase costs**.

1. Enable Object Versioning on your bucket:
   - Open the [Google Cloud Console](https://console.cloud.google.com/).
   - Go to **Cloud Storage** -> **Buckets** -> your Firebase bucket.
   - Open the **Protection** tab and enable **Object versioning**.
2. View versions for one object:
   - In the bucket's **Objects** tab, change **Show** to **Live and noncurrent objects**.
   - Click the object name.
   - Open the **Version history** tab to see each generation.
3. (Optional) Restore an older version from that same version history view.

## How Long Version Histories Last

- By default (without Object Versioning), deleted files are recoverable for **one week (7 days)** via the bucket's soft delete policy.
- With Object Versioning enabled, noncurrent versions are retained until you delete them.
- There is no default limit on the number of versions kept.
- If you want automatic cleanup, add Object Lifecycle rules (for example, delete noncurrent versions after N days).
- Noncurrent versions are billed as stored Cloud Storage data, so turning on version history will increase storage costs.

<!-- Importing links -->
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    referenceLinks={[
        {name: "Cloud Storage for Firebase", url: "https://firebase.google.com/docs/storage"},
        {name: "Google Cloud Console", url: "https://console.cloud.google.com/"},
        {name: "Object Versioning", url: "https://cloud.google.com/storage/docs/object-versioning"},
        {name: "Using Versioned Objects", url: "https://cloud.google.com/storage/docs/using-versioned-objects"},
        {name: "Cloud Firestore Locations", url: "https://firebase.google.com/docs/firestore/locations"}
    ]}
/>
