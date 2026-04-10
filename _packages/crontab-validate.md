---
title: crontab-validate
description: Validate and describe cron expressions from the command line
version: "1.0.0"
license: MIT
author: nicowillis
author_github: nicowillis
repository: https://github.com/nicowillis/crontab-validate
categories: system
keywords:
  - cron
  - crontab
  - validation
  - scheduling
  - system
date: 2024-03-18
unsafe: true
---

# crontab-validate

Validate cron expressions and get a human-readable description of when they will run. Catches syntax errors before they hit production.

## Installation

```bash
bpkg install nicowillis/crontab-validate
```

## Usage

```bash
# Validate an expression
crontab-validate "0 2 * * *"
# → ✓ Valid: At 02:00, every day

crontab-validate "*/5 * * * *"
# → ✓ Valid: Every 5 minutes

crontab-validate "60 * * * *"
# → ✗ Invalid: minute value 60 out of range [0-59]

# List next N execution times
crontab-validate --next 5 "0 9 * * 1-5"
# → Mon 2024-04-01 09:00
# → Tue 2024-04-02 09:00
# ...
```

## Exit codes

- `0` — expression is valid
- `1` — expression is invalid
- `2` — bad arguments
