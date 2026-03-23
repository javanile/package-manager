---
title: myorg/redis
description: Redis with AOF persistence enabled by default, TLS support and Sentinel-ready config.
categories: databases
keywords:
  - redis
  - cache
  - queue
  - database
---

# myorg/redis

Redis image tuned for production: AOF persistence on, memory overcommit disabled, TLS ready.

```bash
docker pull myorg/redis:7
docker pull myorg/redis:7-alpine
docker pull myorg/redis:6
```

## Tags

| Tag | Size | Notes |
|-----|------|-------|
| `latest`, `7` | 117 MB | Redis 7 stable |
| `7-alpine` | 41 MB | Redis 7 on Alpine |
| `6` | 113 MB | Redis 6 LTS |

## Quick start

```bash
docker run -d \
  --name redis \
  -p 6379:6379 \
  -v redis-data:/data \
  myorg/redis:7
```

## TLS mode

```bash
docker run -d \
  -e REDIS_TLS=true \
  -v /certs:/certs:ro \
  myorg/redis:7
```
