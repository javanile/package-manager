---
title: myorg/nginx
description: Nginx with hardened security headers, Brotli compression and auto-renewing Let's Encrypt certs.
categories: web
keywords:
  - nginx
  - proxy
  - web-server
  - ssl
---

# myorg/nginx

Nginx tuned for production: HSTS, CSP headers, Brotli + gzip, HTTP/2, Let's Encrypt via certbot.

```bash
docker pull myorg/nginx:latest
docker pull myorg/nginx:1.25
docker pull myorg/nginx:1.25-alpine
```

## Tags

| Tag | Size | Notes |
|-----|------|-------|
| `latest`, `1.25` | 143 MB | Nginx 1.25 mainline |
| `1.25-alpine` | 43 MB | Alpine variant |
| `1.24` | 140 MB | Nginx 1.24 stable |

## Quick start

```bash
docker run -d \
  --name nginx \
  -p 80:80 -p 443:443 \
  -v ./nginx.conf:/etc/nginx/conf.d/default.conf:ro \
  myorg/nginx:latest
```

## With Let's Encrypt

```bash
docker run -d \
  -e DOMAIN=example.com \
  -e CERTBOT_EMAIL=admin@example.com \
  -v certs:/etc/letsencrypt \
  myorg/nginx:latest
```
