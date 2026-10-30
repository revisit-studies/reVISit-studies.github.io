# Configuring Supabase

[Supabase](https://supabase.com/) provides a PostgreSQL database, authentication, and file storage for reVISit. You can run it on a server you control or use a hosted Supabase project. This page covers self-hosting.

reVISit uses a pinned upstream Supabase deployment. The application repository's [`supabase/README.md`][supabase-setup] contains the supported release and complete setup commands. Supabase supplies the deployment configuration; reVISit's `supabase/` directory contains initialization, GitHub authentication, and migration support.

:::warning Existing installations
If you already run the previous bundled MinIO or pgsty stack, follow the [migration guide][supabase-migration] before starting the new configuration. Back up the database, object data, encryption volume, and configuration together. Storage applies one-way database migrations; changing image tags alone cannot undo them. The same guide contains the [exact rollback procedure][supabase-rollback].
:::

### Pre-requisites

- A Linux server or cloud VM with SSH access and enough persistent disk space for Supabase and backups.
- Git, Docker Engine, Docker Compose v2 or newer, and OpenSSL. The setup guide also describes Node.js or Docker for key generation.
- A filesystem that supports Linux extended attributes for file storage.
- Access to your server's firewall settings and a domain name for HTTPS.

### Setting Up Supabase

1. **Connect to your server** from your local machine:

   ```bash
   ssh <user>@<server-ip>
   ```

   Run deployment commands on the server.

2. **Follow the [first-time setup guide][supabase-setup]** using the reVISit checkout matching this documentation. It walks you through obtaining the pinned upstream release, generating secrets, enabling anonymous participant sessions, and initializing the reVISit table and private storage bucket with `supabase/revisit.sql`.

   The guide also adds reVISit's required Auth image override, which pins an Auth release containing a TLS security fix. Keep it enabled for every deployment, including when you recreate containers or update Supabase, and complete the guide's Auth image check before letting anyone use the deployment.

   Keep the Supabase deployment in its own directory outside the application checkout. Its `.env` contains database credentials and deployment secrets. The `.env` at the root of the reVISit application is separate and contains the public connection settings below.

   Run initialization only on a fresh database. Existing installations retain their schema and policies through the migration procedure. The supplied policies allow anyone holding the public application key to read and write reVISit records and objects; a private bucket does not provide participant-level isolation under these policies. Preserve any stricter policies you already use.

3. **Configure network access**:

   - Allow SSH only from trusted administration addresses.
   - Expose the Supabase API through HTTPS on port `443`; see the reverse-proxy example below. Keep port `8000` private when using a reverse proxy.
   - Keep database and pooler ports, including `5432` and `6543`, restricted.
   - For remote dashboard administration, open an SSH tunnel from your local machine:

     ```bash
     ssh -L 8000:localhost:8000 <user>@<server-ip>
     ```

     Then open `http://localhost:8000` and log in with the deployment's generated dashboard credentials.

4. **Connect your reVISit application**. Set these variables in the application's root `.env`:

   ```env title="reVISit application .env"
   VITE_STORAGE_ENGINE="supabase"
   VITE_SUPABASE_URL="https://<your-supabase-domain>"
   VITE_SUPABASE_ANON_KEY="<SUPABASE_PUBLISHABLE_KEY from your deployment .env>"
   ```

   Use the Supabase base URL without `/auth/v1`. The application variable keeps its existing name and accepts the new publishable key. Migrated deployments can keep their existing `ANON_KEY`; follow the migration guide when preserving existing keys and sessions. Never put `SERVICE_ROLE_KEY` or `SUPABASE_SECRET_KEY` in the application configuration.

   Restart the development server or rebuild and redeploy reVISit after changing these values. To enable Study Designer sign-in, follow [Setting Up Authentication](./enabling-authentication.md).

5. **Verify the deployment**. Complete a short study, confirm its participant data is stored, and check that it can be retrieved in a fresh browser. Restart Supabase and confirm the data persists and a new participant can submit answers. Check your configured Study Designer sign-in as well.

### Storage, backups, and updates

The upstream default stores objects in `volumes/storage` and database files in `volumes/db/data`. The `db-config` named volume contains encryption material. Back these up together with writes paused, retain copies outside the server, and test restoration. Do not delete the volumes when stopping or recreating containers. File storage requires disk monitoring and does not provide replication or failover.

Follow [storage and ongoing operations][supabase-operations] for the supported update workflow and release caveats. Upgrades are explicit operations; updating the reVISit application does not update a separate Supabase deployment. Keep the [migration and rollback guide][supabase-migration] with your deployment records.

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
        proxy_pass http://localhost:8000; # Supabase endpoint exposed by Docker Compose
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
Make sure to replace `your-domain.com` with your actual domain name and provide the correct paths to your SSL certificate and private key.

Once the reverse proxy is set up, you can access your Supabase instance securely over HTTPS. Update `VITE_SUPABASE_URL` in your reVISit `.env` file to use `https://` and drop the port if you are using default `443` (as shown in the example above).

import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    referenceLinks={[
        {name: "Supabase", url: "https://supabase.com/"},
        {name: "Supabase Documentation", url: "https://supabase.com/docs/guides"},
        {name: "Deploying to GitHub", url: "../../deploying-to-static-website"}
    ]}
/>

[supabase-setup]: https://github.com/revisit-studies/study/blob/5dc9fc5b53e9716efb8735ba5744e707bf5b9d81/supabase/README.md
[supabase-migration]: https://github.com/revisit-studies/study/blob/5dc9fc5b53e9716efb8735ba5744e707bf5b9d81/supabase/MIGRATION.md
[supabase-rollback]: https://github.com/revisit-studies/study/blob/5dc9fc5b53e9716efb8735ba5744e707bf5b9d81/supabase/MIGRATION.md#rollback
[supabase-operations]: https://github.com/revisit-studies/study/blob/5dc9fc5b53e9716efb8735ba5744e707bf5b9d81/supabase/README.md#storage-and-ongoing-operations
