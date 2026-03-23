---
title: ssl-check
description: TLS/SSL certificate expiry checker with alerting and multi-host support
version: "2.0.1"
license: MIT
author: luislavena
author_email: luislavena@gmail.com
author_github: luislavena
repository: https://github.com/luislavena/ssl-check
categories: security
keywords:
  - ssl
  - tls
  - certificate
  - security
  - monitoring
date: 2024-04-08
dependencies:
  - bpkg-log
  - netcheck
---

# ssl-check

Check TLS certificate expiry for one or many hosts. Sends alerts via Slack, email or webhook when certificates are close to expiration.

## Installation

```bash
bpkg install luislavena/ssl-check
```

## Usage

```bash
# Check a single host
ssl-check example.com

# Check multiple hosts
ssl-check example.com api.example.com cdn.example.com

# Alert if expiring within 30 days
ssl-check --warn-days 30 example.com

# From a file list
ssl-check --hosts-file /etc/ssl-check/hosts.txt

# JSON output
ssl-check --format json example.com
```

## Sample output

```
example.com:443     ✓  87 days  (expires 2024-07-15)
api.example.com:443 ⚠  12 days  (expires 2024-04-20)  ← alert!
old.example.com:443 ✗  EXPIRED  (expired 2024-03-01)
```
