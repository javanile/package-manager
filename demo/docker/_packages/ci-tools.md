---
title: myorg/ci-tools
description: Lightweight image with git, curl, jq, yq, aws-cli and gcloud for scripting pipelines.
categories: ci-cd
keywords:
  - ci
  - tools
  - aws
  - gcloud
  - scripting
---

# myorg/ci-tools

Minimal Alpine-based toolbox for CI/CD scripts: git, curl, jq, yq, aws-cli v2, gcloud SDK, vault CLI.

```bash
docker pull myorg/ci-tools:latest
```

## Included tools

| Tool | Version |
|------|---------|
| git | 2.43 |
| curl | 8.5 |
| jq | 1.7 |
| yq | 4.40 |
| aws-cli | 2.15 |
| gcloud | 461 |
| vault | 1.15 |
| kubectl | 1.29 |

## Usage

```bash
docker run --rm \
  -e AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID \
  -e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
  myorg/ci-tools \
  aws s3 ls
```
