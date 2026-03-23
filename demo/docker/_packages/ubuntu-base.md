---
title: myorg/ubuntu
description: Slim Ubuntu base image with security patches applied at build time.
categories: base
keywords:
  - ubuntu
  - base
  - debian
  - linux
---

# myorg/ubuntu

Ubuntu LTS base image, rebuilt weekly with the latest security patches.

```bash
docker pull myorg/ubuntu:24.04
docker pull myorg/ubuntu:22.04
docker pull myorg/ubuntu:20.04
```

## Tags

| Tag | Size | Notes |
|-----|------|-------|
| `latest`, `24.04` | 29 MB | Noble Numbat LTS |
| `22.04` | 28 MB | Jammy Jellyfish LTS |
| `20.04` | 29 MB | Focal Fossa LTS (EOL 2025) |

## Usage

```dockerfile
FROM myorg/ubuntu:24.04

RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*
```
