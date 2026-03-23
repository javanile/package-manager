---
title: myorg/postgres
description: PostgreSQL with preconfigured connection pooling, backup scripts and healthcheck.
categories: databases
keywords:
  - postgres
  - postgresql
  - database
  - sql
---

# myorg/postgres

Production-ready PostgreSQL image with PgBouncer connection pooler, automated backups to S3 and a built-in healthcheck endpoint.

```bash
docker pull myorg/postgres:16
docker pull myorg/postgres:15
docker pull myorg/postgres:16-alpine
```

## Tags

| Tag | Size | Notes |
|-----|------|-------|
| `latest`, `16` | 138 MB | PostgreSQL 16 on Debian |
| `16-alpine` | 87 MB | PostgreSQL 16 on Alpine |
| `15` | 135 MB | PostgreSQL 15 LTS |

## Quick start

```bash
docker run -d \
  --name postgres \
  -e POSTGRES_PASSWORD=secret \
  -e POSTGRES_DB=myapp \
  -p 5432:5432 \
  myorg/postgres:16
```

## Environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| `POSTGRES_PASSWORD` | *(required)* | Superuser password |
| `POSTGRES_DB` | `postgres` | Default database name |
| `POSTGRES_USER` | `postgres` | Superuser name |
| `BACKUP_S3_BUCKET` | — | Enable S3 backups |
| `BACKUP_CRON` | `0 3 * * *` | Backup schedule |
