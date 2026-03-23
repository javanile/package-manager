---
title: sysmon
description: System resource monitor — CPU, memory, disk and load average reporting
version: "2.0.0"
license: MIT
author: bpkg
author_github: bpkg
repository: https://github.com/bpkg/sysmon
categories: monitoring
keywords:
  - monitoring
  - cpu
  - memory
  - disk
  - sysadmin
date: 2024-03-15
dependencies:
  - bpkg-log
  - term
---

# sysmon

Bash system resource monitor that reports CPU usage, memory consumption, disk I/O and load averages. Can run as a daemon, write to a log file, or push metrics to a webhook.

## Installation

```bash
bpkg install bpkg/sysmon
```

## Usage

```bash
# One-shot report
sysmon report

# Watch mode (refresh every 5s)
sysmon watch --interval 5

# Alert when CPU > 90%
sysmon alert --cpu 90 --webhook https://hooks.slack.com/...

# Export to JSON
sysmon report --format json > metrics.json
```

## Sample output

```
CPU:    23% usr  4% sys  73% idle
Memory: 6.1 GB used / 16 GB total (38%)
Disk:   /       45 GB used / 200 GB (22%)
        /data  120 GB used / 500 GB (24%)
Load:   0.72 0.85 0.91 (1m 5m 15m)
```
