---
title: mysql-backup
description: Automated MySQL/MariaDB backup with per-table dumps, compression and S3
version: "1.4.0"
license: MIT
author: luislavena
author_email: luislavena@gmail.com
author_github: luislavena
repository: https://github.com/luislavena/mysql-backup
categories: database
keywords:
  - mysql
  - mariadb
  - backup
  - database
  - s3
date: 2024-03-10
dependencies:
  - dotenv
  - bpkg-log
  - bpkg-retry
---

# mysql-backup

Automated MySQL and MariaDB backup with per-table or full-database dumps, gzip compression, configurable retention and S3 upload. Companion script to `pg-backup`.

## Installation

```bash
bpkg install luislavena/mysql-backup
```

## Usage

```bash
# Full database backup
mysql-backup --host localhost --db myapp --user root

# Per-table dumps (easier partial restores)
mysql-backup --db myapp --per-table

# With S3 and 14-day retention
mysql-backup --db myapp --s3-bucket my-backups --retain 14
```

## Configuration

```bash
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DB=myapp
MYSQL_USER=backup
MYSQL_PASSWORD=secret
S3_BUCKET=my-backups
BACKUP_RETAIN_DAYS=14
```

## Restore

```bash
# Restore full dump
mysql-backup restore myapp_2024-03-10.sql.gz

# Restore single table
mysql-backup restore myapp_users_2024-03-10.sql.gz
```
