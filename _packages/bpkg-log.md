---
title: bpkg-log
description: Structured logging for bash scripts with levels, colors and file output
version: "2.1.0"
license: MIT
author: stephenmathieson
author_github: stephenmathieson
repository: https://github.com/bpkg/bpkg-log
categories: utilities
keywords:
  - logging
  - debug
  - utilities
  - color
date: 2024-02-18
dependencies:
  - bpkg-str
---

# bpkg-log

Structured, levelled logging for bash with colored terminal output and optional file sink.

## Installation

```bash
bpkg install bpkg/bpkg-log
```

## Usage

```bash
source bpkg_modules/bpkg-log/bpkg-log.sh

log_info  "Server started on port 8080"
log_warn  "Disk usage above 80%"
log_error "Connection refused"
log_debug "Variable x = $x"
```

## Configuration

| Variable | Default | Description |
|---|---|---|
| `LOG_LEVEL` | `info` | Minimum level to output |
| `LOG_FILE`  | _(none)_ | Path to write logs to |
| `LOG_COLOR` | `1` | Set to `0` to disable colors |

## Levels

`debug` < `info` < `warn` < `error` < `fatal`
