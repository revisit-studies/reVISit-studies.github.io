# Configure Supabase

ReVISit can store study data in a self-hosted Supabase instance. This guide sets up a new instance on a Linux server using the Supabase self-hosted Docker bundle. For a hosted Supabase project, follow Supabase's own project setup instructions, then configure the ReVISit application with the project URL and publishable key described below.

## Before you begin

You need a Linux host with Git, Docker Engine, Docker Compose v2 or newer, OpenSSL, and Node.js 16 or newer. A domain name and HTTPS are recommended for any server participants or Study Designers will access. Follow the [Supabase self-hosting guide](https://supabase.com/docs/guides/self-hosting/docker) for host sizing and Docker installation.

This guide applies to a **new self-hosted deployment**. If you already have a self-hosted Supabase installation, do not follow the new-install steps or run the ReVISit SQL setup against its database. The current upgrade changes the storage backend and includes database migrations that cannot be reversed by changing container images alone. Back up and follow the version-specific [ReVISit Supabase migration instructions](https://github.com/revisit-studies/study/blob/dev/supabase/MIGRATION.md) before upgrading.

## Download and configure Supabase

Run these commands on the Linux host. Keep the Supabase deployment in its own directory, outside the ReVISit application checkout, so application updates do not replace its configuration or data. The instructions use the pinned Supabase self-hosted `v0.8.3` bundle.

1. In the directory where you want to keep the deployment, download the upstream bundle and verify the pinned commit:

   ```sh
   git clone --filter=blob:none --sparse --depth 1 --branch self-hosted/v0.8.3 \
     https://github.com/supabase/supabase.git supabase-upstream
   git -C supabase-upstream sparse-checkout set docker
   test "$(git -C supabase-upstream rev-parse HEAD)" = \
     bc27d2661edd09a5d0b8d76ce33da6d4071a756e
   mkdir supabase-project
   cp -a supabase-upstream/docker/. supabase-project/
   cd supabase-project
   ```

2. Create a private `.env`, generate new keys, and add ReVISit's required Auth image override. Replace `/absolute/path/to/revisit-study/supabase` with the path to the `supabase` directory in your ReVISit checkout:

   ```sh
   revisit_support=/absolute/path/to/revisit-study/supabase
   cp .env.example .env
   sh utils/generate-keys.sh --update-env
   sh utils/add-new-auth-keys.sh --update-env
   printf 'ref=self-hosted/v0.8.3\n' > .supabase-version
   cp "$revisit_support/docker-compose.auth.yml" .
   sh run.sh config add auth
   ```

   The key-generation commands print secret values. Keep their output private, restrict access to `.env`, and never commit or publish it. The Auth override must stay enabled: it pins an Auth image containing a required TLS security fix. Do not remove it when restarting or recreating containers.

3. Edit `.env` and set the public URLs and account options for your deployment:

   - Set `ENABLE_ANONYMOUS_USERS=true` so participants can take part without creating Supabase accounts.
   - Set `SUPABASE_PUBLIC_URL` to the base URL participants' browsers will use, and `API_EXTERNAL_URL` to that URL followed by `/auth/v1`. For a local setup, these are `http://localhost:8000` and `http://localhost:8000/auth/v1`.
   - Set `SITE_URL` and `ADDITIONAL_REDIRECT_URLS` to include the URL of your ReVISit application.
   - Review the email confirmation and SMTP settings if Study Designers will sign in to your deployment.
   - Keep `STORAGE_TENANT_ID=stub`, `GLOBAL_S3_BUCKET=stub`, and `REGION=stub` for a new file-storage installation.

   GitHub sign-in is optional. If you enable it, configure `GITHUB_OAUTH_CLIENT_ID`, `GITHUB_OAUTH_SECRET`, and `GITHUB_OAUTH_REDIRECT_URI` in `.env`, and set `ENABLE_GITHUB_OAUTH=true`. Copy and enable ReVISit's GitHub OAuth override:

   ```sh
   cp "$revisit_support/docker-compose.github.yml" .
   sh run.sh config add github
   ```

   Use `<SUPABASE_PUBLIC_URL>/auth/v1/callback` as the redirect URI in your GitHub OAuth app. See the [Supabase Auth provider instructions](https://supabase.com/docs/guides/self-hosting/auth).

## Start Supabase and initialize ReVISit storage

From the `supabase-project` directory, pull and start the services:

```sh
sh run.sh pull
sh run.sh start
sh run.sh status
```

Confirm the required Auth image is running before allowing anyone to use the deployment:

```sh
test "$(docker inspect supabase-auth --format '{{.Config.Image}}')" = \
  supabase/gotrue:v2.198.0-rc.25@sha256:b4c104aa7abbb2bc6c0c294072f736230979acfec87c9114fce63f4224e0f357
```

If the check fails, keep the deployment closed to participants and correct the Auth override before continuing. Open Supabase Studio at `http://localhost:8000` and sign in with the generated `DASHBOARD_USERNAME` and `DASHBOARD_PASSWORD` values from `.env`.

On a **new, empty database only**, initialize the ReVISit table, storage bucket, and access policies using the SQL file in your ReVISit checkout:

```sh
docker exec -i supabase-db psql -U supabase_admin \
  -v ON_ERROR_STOP=1 < "$revisit_support/revisit.sql"
```

This setup uses a private storage bucket. Its policies allow anyone holding the public application key to read and write ReVISit records and objects; a private bucket does not provide participant-level isolation. Review whether this access model suits your study and keep any stricter existing policies when migrating an established deployment.

## Connect the ReVISit application

In the root `.env` file of the ReVISit application, set the storage engine, public Supabase URL, and publishable key:

```dotenv title=".env"
VITE_STORAGE_ENGINE="supabase"
VITE_SUPABASE_URL="https://<your-supabase-domain>"
VITE_SUPABASE_ANON_KEY="<your-SUPABASE_PUBLISHABLE_KEY>"
```

Use the public URL configured for Supabase, including `https://` when HTTPS is enabled. The `VITE_SUPABASE_ANON_KEY` application setting accepts the deployment's `SUPABASE_PUBLISHABLE_KEY`. Never put `SERVICE_ROLE_KEY` or `SUPABASE_SECRET_KEY` in the ReVISit application's environment because those keys grant elevated access. Restart the local ReVISit server or rebuild and redeploy the application after changing these build-time variables.

Complete a short study and confirm that its participant data appears in Studio. Restart Supabase and confirm that the data remains available.

## Secure and maintain the deployment

For a server deployment, expose the Supabase API through HTTPS, restrict Studio and other administration ports, and do not expose the database or pooler ports (`5432` and `6543`) publicly. See Supabase's [HTTPS proxy guidance](https://supabase.com/docs/guides/self-hosting/self-hosted-proxy-https). A direct Studio address on port `8000` is suitable only for local setup or an appropriately restricted network.

Supabase stores files under `volumes/storage` and the database under `volumes/db/data`; back up both together and keep a copy of the `db-config` volume, which contains encryption material. Test restores and monitor disk capacity. Do not run `docker compose down -v` on a deployment you intend to keep, since it removes persistent volumes.

Use `sh run.sh stop`, `start`, `status`, and `logs` to operate the services. Before upgrading, make an external backup and review the [Supabase update guide](https://supabase.com/docs/guides/self-hosting/updating), the release notes, and ReVISit's Auth override requirements. Storage database migrations may be one-way; reverting to an older container image is not a safe rollback. Restore a coordinated pre-upgrade backup if you need to roll back.

import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    referenceLinks={[
        {name: "Supabase", url: "https://supabase.com/"},
        {name: "Supabase self-hosting guide", url: "https://supabase.com/docs/guides/self-hosting/docker"},
        {name: "Deploying to a static website", url: "../../deploying-to-static-website"}
    ]}
/>
