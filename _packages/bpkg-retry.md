---
title: bpkg-retry
description: Retry any command with exponential backoff and configurable attempts
version: "1.1.0"
license: MIT
author: tuvistavie
author_github: tuvistavie
repository: https://github.com/tuvistavie/bpkg-retry
categories: utilities
keywords:
  - retry
  - backoff
  - resilience
  - utilities
date: 2024-02-01
---

# bpkg-retry

Retry any shell command with configurable attempts and exponential backoff. Useful for flaky network calls, waiting for services to start, and resilient CI scripts.

## Installation

```bash
bpkg install tuvistavie/bpkg-retry
```

## Usage

```bash
source bpkg_modules/bpkg-retry/retry.sh

# Retry up to 5 times with 2s base delay
retry 5 curl -f https://api.example.com/health

# Exponential backoff: 1s, 2s, 4s, 8s...
retry --backoff 3 my_flaky_command

# Custom delay
retry --attempts 10 --delay 5 ping -c1 google.com
```

## Options

| Option | Default | Description |
|---|---|---|
| `--attempts` | `3` | Maximum number of tries |
| `--delay` | `1` | Initial delay in seconds |
| `--backoff` | `1` | Multiply delay by this factor each attempt |
| `--verbose` | off | Print attempt number |
