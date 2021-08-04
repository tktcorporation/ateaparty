# ateaparty

[![Test](https://github.com/tktcorporation/ateaparty/actions/workflows/test.yml/badge.svg)](https://github.com/tktcorporation/ateaparty/actions/workflows/test.yml)

## Prerequirements

-   Docker, docker-compose

## Get Started

### Env Vars

1. `cp -p .envrc.sample .envrc` and set variables.
1. Install [direnv](https://github.com/direnv/direnv).
1. `direnv allow`

### Develop

1. `docker-compose run app /bin/bash`

#### Test

```bash
RUST_BACKTRACE=1 cargo test
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

##### Task Runner

[act](https://github.com/nektos/act) can use as a task runner in this project.  
But, it takes longer than `yarn` commands.

```bash
# lint, format(check), test
act
```
