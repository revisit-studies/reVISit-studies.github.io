# Deploying with Docker

This guide explains how to build and run a ReVISit study with Docker using:

- `Dockerfile`
- `nginx-docker.conf`
- `revisit-nginx.conf`

## 1. Set environment variables before building

Before you run `docker build`, configure your `.env` file at the repository root.

At minimum, set `VITE_BASE_PATH` correctly for your deployment target:

```bash
# Root deployment
VITE_BASE_PATH="/"

# Or subpath deployment (example)
VITE_BASE_PATH="/study/"
```

:::warning
`VITE_BASE_PATH` and other `VITE_*` variables are baked into the built app image at build time. If you change these values later, you must rebuild the image and recreate the container. Restarting an existing container is not enough.
:::

## 2. Build the Docker image

From the project root (where the `Dockerfile` lives):

```bash
docker build -t revisit-study:latest .
```

The build will fail if `VITE_BASE_PATH` is missing from `.env`.

## 3. Run the app container

```bash
docker run --rm -p 8080:8080 revisit-study:latest
```

Then open:

- `http://localhost:8080/` if `VITE_BASE_PATH="/"`.
- `http://localhost:8080/<your-base-path>/` for subpath deployments.

## 4. Optional: proxy through host Nginx

If you are already using Nginx on the host, `revisit-nginx.conf` can proxy traffic to the app container:

```bash
docker run -d --name revisit-study -p 127.0.0.1:8080:8080 revisit-study:latest
```

Then install `revisit-nginx.conf` into your host Nginx config (for example, `/etc/nginx/conf.d/revisit.conf`) and reload Nginx.

## 5. Updating after env changes

When `.env` values change, rebuild and replace the running container:

```bash
docker build -t revisit-study:latest .
docker rm -f revisit-study
docker run -d --name revisit-study -p 127.0.0.1:8080:8080 revisit-study:latest
```
