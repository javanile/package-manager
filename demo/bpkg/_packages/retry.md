---
title: retry
description: Retry a bash command N times with configurable delay.
categories: utilities
keywords:
  - retry
  - resilience
  - bash
  - loop
---

# retry

Run any command and retry it automatically on failure.

```bash
bpkg install bpkg/retry
```

## Usage

```bash
source deps/retry/retry.sh
retry 3 curl https://example.com/api
```
