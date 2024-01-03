# ateaparty

[![Test](https://github.com/tktcorporation/ateaparty/actions/workflows/test.yml/badge.svg)](https://github.com/tktcorporation/ateaparty/actions/workflows/test.yml)

## Prerequirements

-   Docker, docker-compose

## Get Started

### Develop

1. Run `docker compose` to start the development environment

```bash
docker compose run --service-ports app /bin/bash
```

1. Install dependencies

```bash
ni
```

1. Start the development server

```bash
nr dev
```

#### Test

```bash
yarn test
```

#### Linter, Formatter

-   Lint

```bash
yarn lint
```

-   Format

```bash
yarn format
```

## Deploy

Deploying to Vercel is done automatically when pushing to the main branch.
