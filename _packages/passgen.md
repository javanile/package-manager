---
title: passgen
description: Cryptographically secure password and secret generator for bash
version: "1.1.0"
license: MIT
author: bashup
author_github: bashup
repository: https://github.com/bashup/passgen
categories: security
keywords:
  - password
  - security
  - crypto
  - secrets
  - random
date: 2024-04-01
---

# passgen

Generate cryptographically secure passwords, API keys, and secrets from the command line. Uses `/dev/urandom` for entropy, no external dependencies.

## Installation

```bash
bpkg install bashup/passgen
```

## Usage

```bash
# 32-character alphanumeric password
passgen 32

# Only symbols + letters (for API keys)
passgen --charset alphasymbols 40

# Memorable passphrase (4 words)
passgen --words 4

# PIN code
passgen --digits 6

# Multiple passwords
passgen --count 10 24

# Write to clipboard (macOS/Linux)
passgen 32 | pbcopy
```

## Output examples

```
passgen 32       → xK8#mP2@vLqR5nT7wYjF9cBdUoAeZsGh
passgen --words  → correct-horse-battery-staple
passgen --digits → 847291
```
