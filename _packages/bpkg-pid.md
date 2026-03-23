---
title: bpkg-pid
description: PID file management utilities for bash daemons and background processes
version: "1.0.1"
license: MIT
author: stephenmathieson
author_github: stephenmathieson
repository: https://github.com/stephenmathieson/bpkg-pid
categories: system
keywords:
  - pid
  - daemon
  - process
  - system
  - lock
date: 2024-01-12
---

# bpkg-pid

Create, read, check and remove PID files for bash daemons. Prevents double-start races and makes process management predictable.

## Installation

```bash
bpkg install stephenmathieson/bpkg-pid
```

## Usage

```bash
source bpkg_modules/bpkg-pid/pid.sh

PIDFILE=/var/run/myscript.pid

# Write current PID
pid_write "$PIDFILE"

# Check if process is running
if pid_running "$PIDFILE"; then
  echo "already running, exit"
  exit 1
fi

# Read PID value
pid=$(pid_read "$PIDFILE")

# Remove PID file on exit
trap "pid_remove $PIDFILE" EXIT
```

## Functions

- `pid_write` — write `$$` to file
- `pid_read` — read PID from file
- `pid_running` — check if PID file exists and process is alive
- `pid_remove` — delete PID file if it belongs to current process
- `pid_lock` — atomic test-and-set (race-free)
