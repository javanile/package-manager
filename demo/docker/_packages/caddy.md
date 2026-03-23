---
title: myorg/caddy
description: Caddy web server with automatic HTTPS, Docker label-based config and Prometheus metrics.
categories: web
keywords:
  - caddy
  - proxy
  - https
  - web-server
---

# myorg/caddy

Caddy 2 with automatic HTTPS, Docker label-based virtual hosting and a `/metrics` endpoint for Prometheus.

```bash
docker pull myorg/caddy:2
docker pull myorg/caddy:2-alpine
```

## Quick start

```bash
docker run -d \
  --name caddy \
  -p 80:80 -p 443:443 \
  -v ./Caddyfile:/etc/caddy/Caddyfile:ro \
  -v caddy-data:/data \
  myorg/caddy:2
```
