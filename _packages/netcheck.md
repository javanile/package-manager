---
title: netcheck
description: Network connectivity checker with DNS resolution, ping and port scan
version: "1.0.0"
license: MIT
author: tuvistavie
author_github: tuvistavie
repository: https://github.com/tuvistavie/netcheck
categories: networking
keywords:
  - network
  - ping
  - dns
  - port
  - monitoring
date: 2024-04-20
dependencies:
  - bpkg-log
  - term
---

# netcheck

Lightweight network diagnostics tool for bash. Check DNS resolution, ICMP reachability, TCP port availability, and HTTP endpoints in one script.

## Installation

```bash
bpkg install tuvistavie/netcheck
```

## Usage

```bash
source bpkg_modules/netcheck/netcheck.sh

# Check if host is reachable
netcheck_ping google.com

# Check DNS resolution
netcheck_dns api.example.com

# Check TCP port
netcheck_port db.internal 5432

# Check HTTP endpoint
netcheck_http https://api.example.com/health

# Full report
netcheck_report \
  google.com \
  api.example.com:443 \
  db.internal:5432
```

## Exit codes

| Code | Meaning |
|---|---|
| `0` | All checks passed |
| `1` | One or more checks failed |
| `2` | Invalid arguments |
