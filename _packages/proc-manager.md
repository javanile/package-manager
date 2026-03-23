---
title: proc-manager
description: Simple process manager for bash — start, stop, restart and monitor daemons
version: "1.2.0"
license: MIT
author: tuvistavie
author_github: tuvistavie
repository: https://github.com/tuvistavie/proc-manager
categories: system
keywords:
  - process
  - daemon
  - service
  - system
  - supervisor
date: 2024-02-10
dependencies:
  - bpkg-log
  - bpkg-pid
---

# proc-manager

Lightweight process manager for bash daemons. Start, stop, restart and monitor background processes without systemd or supervisor. Manages PID files and stdout/stderr logs automatically.

## Installation

```bash
bpkg install tuvistavie/proc-manager
```

## Usage

```bash
# Define a process
proc_define worker "node worker.js" \
  --log /var/log/worker.log \
  --pidfile /var/run/worker.pid

# Start
proc_start worker

# Stop gracefully (SIGTERM, then SIGKILL after timeout)
proc_stop worker

# Restart
proc_restart worker

# Status
proc_status worker
# → worker   RUNNING  pid=12345  uptime=3h 42m

# Watch and auto-restart on crash
proc_watch worker --interval 10
```

## Procfile support

```
web:     node server.js
worker:  node worker.js
cron:    bash cron.sh
```

```bash
proc_start_all Procfile
```
