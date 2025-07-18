# Configuring Supabase

import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    referenceLinks={[
        {name: "Supabase", url: "https://supabase.com/"},
        {name: "Supabase Documentation", url: "https://supabase.com/docs/guides"},
        {name: "Deploying to GitHub", url: "../deploying-to-static-website"}
    ]}
/>

<a href="https://supabase.com/" target="_blank" >Supabase</a> is an open-source alternative to Firebase that provides a real-time database and storage solution. It is built on top of PostgreSQL, which allows for more complex queries and data structures. Supabase is particularly useful for researchers who need to comply with strict data privacy regulations, as it can be self-hosted.

This guide will be focused on setting up a self hosted Supabase instance for use with reVISit. If you would like to use a hosted solution, we suggest that you use the firebase implementation instead. However, if you would like to use Supabase, as a hosted solution, you can follow the instructions on their website to stand up a hosted instance.

### Pre-requisites

Before you begin, ensure you have the following:
- A server or cloud instance where you can install Supabase (we suggest the latest lts version of Ubuntu since it likely has the most documentation online)
- Basic knowledge of Docker and Docker Compose
- Access to a terminal or command line interface

### Setting Up Supabase

Once you have your server or VM, you will need to follow these steps:

1. **Install Docker and Docker Compose**: If you don't have Docker installed, you can follow the [official Docker installation guide](https://docs.docker.com/get-docker/). After that, install Docker Compose by following the [Docker Compose installation guide](https://docs.docker.com/compose/install/).

2. **Clone the reVISit repository**: Navigate to the directory where you want to set up Supabase and clone the reVISit repository.

3. **Navigate to the Supabase directory**: Inside the reVISit repository, navigate to the `supabase` directory.

4. **Update the `.env` file**: We provide a `.env` file that needs to be updated with your specific configuration. Failure to modify this file will result in an insecure instance with default credentials. Make sure that you update the service key since this key provides elevated access to your Supabase instance. You can generate a new key using the `openssl` command:

   ```bash
   openssl rand -hex 32
   ```

   Replace the `SUPABASE_SERVICE_ROLE_KEY` in the `.env` file with the generated key.

5. **Start Supabase**: Run the following command to start Supabase using Docker Compose:

   ```bash
   docker-compose up -d
   ```

   This will pull the docker images and start the Supabase services in detached mode.
  
6. **Access the Supabase Dashboard**: Once the services are up and running, you can access the Supabase dashboard by navigating to `http://localhost:8000` in your web browser. Alternatively, if you are running this on a remote server, replace `localhost` with your server's IP address or domain name. You can log in using the credentials you set in the `.env` file.

:::info
If you are running Supabase on a remote server, ensure that port 8000 is open in your firewall settings to allow access to the dashboard and API.
:::

7. **Create a table for reVISit data**: You will need to create a table for storing user data. In the Supabase dashboard you should see that you're in the default project. From here click on "Table Editor" (the second icon) and then "New table" to create a new table.  The table should be called `revisit` and should have the following columns

    | Column Name | Data Type | Constraints                |
    |-------------|-----------|----------------------------|
    | createdAt   | Timestamp | Default: `now()`           |
    | studyId     | Varchar   | Primary Key                |
    | docId       | Varchar   | Primary Key                |
    | data        | JSONB     | Nullable                   |

    **Notes:**
    - Set both `study_id` and `doc_id` as composite primary keys.
    - The `created_at` column should automatically use the current timestamp.
    - The `data` column can store any JSON object and can be left empty.

    ![Table Creation](./img/table-creation.png)

    The new table requires a policy to allow authenticated users to read and write to the table. You can do this by clicking on "Add RLS Policy" in the table editor and adding a new policy to the revisit table.

    The policy should be called `allow_authenticated_read_write`, be on public.revisit, be Permissive, and allow all operations. Select "anon", "authenticated", and "service_role" as the roles that can access this policy. In the "using" block add `true`. At the bottom, uncheck "Use check expression". Now click "Save Policy".

    ![Table Policy](./img/table-policy.png)

8. **Create a storage bucket**: In the Supabase dashboard, navigate to the "Storage" section (6th icon) and create a new bucket called `revisit`. This bucket will be used to store participant data, audio, configs, etc. Ensure that the bucket is not public, as we want to restrict access to the data to users of your reVISit deployment.

    ![Storage Bucket](./img/storage-bucket.png)

  Since your bucket is not public, you will need to set up a policy to allow authenticated users to read and write to the bucket. You can do this by navigating to the "Policies" tab in the bucket settings and adding a new policy to the revisit bucket.

  Name the policy `allow_authenticated_read_write` and allow select, insert, update, and delete operations. Select "anon", "authenticated", and "service_role" as the roles that can access this policy and click next. The top of the 4 policies should look like this:

   ```sql
   CREATE POLICY "allow_authenticated_read_write i6w3co_0"
   ON storage.objects
   FOR SELECT TO anon, authenticated, service_role
   USING (bucket_id = 'revisit');
   ```

   Click save policy.

   ![Storage Policy](./img/storage-policy.png)

9. **Update your .env file in your deployed reVISit application**: In the root of your reVISit application, you will need to update the `.env` file with the following variables:

   ```env
    VITE_STORAGE_ENGINE="supabase"

   VITE_SUPABASE_URL=https://<your-supabase-instance-ip>
   VITE_SUPABASE_ANON_KEY=<your-anon-key>
   ```
  Replace `<your-supabase-instance-ip>` with the IP address or domain name of your Supabase instance, and `<your-anon-key>` with the anon key found in the Supabase `.env` file.

10. **Redeploy your reVISit application**: After updating the `.env` file, redeploy your reVISit application to ensure that it connects to the Supabase instance correctly.

After following these steps, your reVISit application should be connected to your Supabase instance, and you can start collecting data from participants.

### HTTPS/SSL Configuration

To ensure secure communication between your reVISit application and the Supabase instance, it is recommended to set up HTTPS/SSL. You can use a reverse proxy like Nginx or Caddy to handle SSL termination. It's required that your server or VM has a Fully Qualified Domain Name (FQDN) and a valid SSL certificate. With those in place, you can configure your reverse proxy to redirect HTTP traffic to HTTPS and handle SSL termination.

For example, if you are using Nginx, you can set up a server block like this:

```nginx
server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$host$request_uri;
}
server {
    listen 443 ssl;
    server_name your-domain.com;

    ssl_certificate /path/to/your/certificate.crt;
    ssl_certificate_key /path/to/your/private.key;

    location / {
        proxy_pass http://localhost:8000; # Assuming your reVISit app runs on port 8000
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
``` 
Make sure to replace `your-domain.com` with your actual domain name and provide the correct paths to your SSL certificate and private key.

Once the reverse proxy is set up, you can access your reVISit application securely over HTTPS provided that you change the `VITE_SUPABASE_URL` in your `.env` file to use `https://` instead of `http://` and drop the port number if you are using the default port 443 for HTTPS (as shown in the example above).
