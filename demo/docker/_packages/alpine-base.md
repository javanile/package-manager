---
title: myorg/alpine
description: Ultra-minimal Alpine Linux base image. Only 5MB, perfect as a build foundation.
categories: base
keywords:
  - alpine
  - base
  - minimal
  - linux
---

# myorg/alpine

Hardened Alpine Linux base image with a non-root user and read-only filesystem defaults.

```bash
docker pull myorg/alpine:latest
docker pull myorg/alpine:3.19
docker pull myorg/alpine:3.18
```

## Tags

| Tag | Size | Notes |
|-----|------|-------|
| `latest`, `3.19` | 5 MB | Current stable |
| `3.18` | 5 MB | Previous stable |
| `edge` | 5 MB | Rolling updates |

## Usage

```dockerfile
FROM myorg/alpine:latest

RUN apk add --no-cache curl bash

CMD ["/bin/sh"]
```

## What's included

- Alpine Linux base packages
- `ca-certificates` pre-installed
- Non-root user `app` (uid 1000)
- Timezone data
