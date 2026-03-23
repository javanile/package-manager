---
title: myorg/node
description: Node.js LTS runtime with non-root user, pnpm pre-installed and production NODE_ENV default.
categories: runtimes
keywords:
  - node
  - nodejs
  - javascript
  - runtime
---

# myorg/node

Node.js LTS image. Runs as non-root `node` user, `NODE_ENV=production` by default, pnpm and yarn included.

```bash
docker pull myorg/node:20
docker pull myorg/node:20-alpine
docker pull myorg/node:18
docker pull myorg/node:18-alpine
```

## Tags

| Tag | Size | Notes |
|-----|------|-------|
| `latest`, `20` | 174 MB | Node 20 LTS on Debian |
| `20-alpine` | 68 MB | Node 20 LTS on Alpine |
| `18` | 171 MB | Node 18 LTS |
| `18-alpine` | 65 MB | Node 18 LTS on Alpine |

## Dockerfile example

```dockerfile
FROM myorg/node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```
