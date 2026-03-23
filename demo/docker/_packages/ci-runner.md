---
title: myorg/ci-runner
description: Universal CI runner agent with Docker-in-Docker, kubectl, helm and common build tools.
categories: ci-cd
keywords:
  - ci
  - runner
  - gitlab
  - github-actions
  - dind
---

# myorg/ci-runner

All-in-one CI agent image. Includes Docker-in-Docker, kubectl, helm, terraform, jq and common build tools. Works with GitLab CI, GitHub Actions and Jenkins.

```bash
docker pull myorg/ci-runner:latest
docker pull myorg/ci-runner:node20
docker pull myorg/ci-runner:python3.12
```

## Tags

| Tag | Extras | Notes |
|-----|--------|-------|
| `latest` | base tools | DinD + kubectl + helm |
| `node20` | Node.js 20 | For JS/TS pipelines |
| `python3.12` | Python 3.12 | For Python pipelines |

## GitLab CI example

```yaml
build:
  image: myorg/ci-runner:latest
  services:
    - docker:dind
  script:
    - docker build -t myapp:$CI_COMMIT_SHA .
    - docker push myapp:$CI_COMMIT_SHA
```

## GitHub Actions example

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    container:
      image: myorg/ci-runner:node20
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm test
```
