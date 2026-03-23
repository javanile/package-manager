---
title: log
description: Simple logging utility with log levels for bash scripts.
categories: logging
keywords:
  - log
  - logging
  - debug
  - bash
---

# log

Lightweight logging with levels: `debug`, `info`, `warn`, `error`.

```bash
bpkg install bpkg/log
```

## Usage

```bash
source deps/log/log.sh
log::info "Starting process..."
log::warn "Disk space low"
log::error "Connection failed"
```
