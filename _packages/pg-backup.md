---
title: pg-backup
description: Automated PostgreSQL backup with compression, rotation and S3 upload
version: "2.3.0"
license: MIT
author: luislavena
author_email: luislavena@gmail.com
author_github: luislavena
repository: https://github.com/luislavena/pg-backup
categories: database
keywords:
  - postgresql
  - backup
  - s3
  - database
  - devops
date: 2024-02-14
dependencies:
  - dotenv
  - bpkg-log
---

# pg-backup

Automated PostgreSQL backup script with gzip compression, configurable retention policy, and optional S3 upload. Ready for cron jobs or CI pipelines.

## Installation

```bash
bpkg install luislavena/pg-backup
```

## Usage

```bash
# Basic backup
pg-backup --host localhost --db myapp --user postgres

# With S3 upload and 30-day retention
pg-backup \
  --db myapp \
  --s3-bucket my-backups \
  --retain 30

# Via environment variables
export PG_HOST=db.internal
export PG_DB=production
export PG_USER=backup_user
export S3_BUCKET=prod-backups
pg-backup
```

## Configuration

Create a `.env` file:

```bash
PG_HOST=localhost
PG_PORT=5432
PG_DB=myapp
PG_USER=postgres
PG_PASSWORD=secret
S3_BUCKET=my-backups
BACKUP_RETAIN_DAYS=30
```

## Cron example

```
0 2 * * * /usr/local/bin/pg-backup >> /var/log/pg-backup.log 2>&1
```
