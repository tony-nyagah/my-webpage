# My Personal Webpage

A modern personal website built with Astro, featuring a clean design and optimized performance.

## 🚀 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── docker-compose.yaml
├── docker-compose.dev.yaml
├── Dockerfile
└── package.json
```

## 🧞 Local Development Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 🐳 Docker Development

For development with hot reloading and live updates:

```bash
# Start development server
docker-compose -f docker-compose.dev.yaml up --build

# Run in background
docker-compose -f docker-compose.dev.yaml up -d --build

# View logs
docker-compose -f docker-compose.dev.yaml logs -f

# Stop development server
docker-compose -f docker-compose.dev.yaml down
```

The development server includes:

- Hot reloading for instant changes
- Volume mounting for real-time file updates
- Development environment variables

## 🚀 Docker Production

For production deployment with optimized builds:

```bash
# Build and start production server
docker-compose up --build

# Run in background (detached mode)
docker-compose up -d --build

# View production logs
docker-compose logs -f

# Stop production server
docker-compose down

# Restart production server
docker-compose restart
```

The production setup includes:

- Optimized production build
- Minified assets
- Production environment variables
- Container restart policies

## 📋 Docker Requirements

- Docker and Docker Compose installed
- Port 4321 available on your machine
- At least 512MB RAM available for container

Both development and production modes serve the application at `http://localhost:4321`.

## 🔧 Environment Variables

| Variable   | Development | Production | Description      |
| :--------- | :---------- | :--------- | :--------------- |
| `NODE_ENV` | development | production | Environment mode |
| `HOST`     | 0.0.0.0     | 0.0.0.0    | Server host      |
| `PORT`     | 4321        | 4321       | Server port      |
