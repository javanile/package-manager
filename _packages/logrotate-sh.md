---
title: logrotate-sh
description: Pure-bash log rotation with compression, archiving and retention policies
version: "1.1.0"
license: MIT
author: bpkg
author_github: bpkg
repository: https://github.com/bpkg/logrotate-sh
categories: monitoring
keywords:
  - logging
  - logrotate
  - archiving
  - monitoring
  - sysadmin
date: 2024-02-22
dependencies:
  - bpkg-log
---

# logrotate-sh

Portable log rotation in pure bash. Compress old logs with gzip, enforce a maximum number of rotated files, and optionally ship archives to S3 — without depending on system `logrotate`.

## Installation

```bash
bpkg install bpkg/logrotate-sh
```

## Usage

```bash
source bpkg_modules/logrotate-sh/logrotate.sh

# Rotate when log exceeds 100 MB, keep 7 rotated files
logrotate /var/log/myapp.log --max-size 100M --keep 7

# Rotate daily, compress with gzip
logrotate /var/log/nginx/access.log \
  --daily \
  --compress \
  --keep 30

# Also upload to S3
logrotate /var/log/myapp.log \
  --keep 5 \
  --s3-bucket my-logs
```

## Cron example

```
0 0 * * * logrotate-sh /var/log/myapp.log --daily --keep 30
```
