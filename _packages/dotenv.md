---
title: dotenv
description: Load .env files into the current shell environment
version: "2.0.0"
license: MIT
author: bashup
author_github: bashup
repository: https://github.com/bashup/dotenv
categories: development
keywords:
  - dotenv
  - env
  - environment
  - config
  - twelve-factor
date: 2024-01-15
---

# dotenv

Load `.env` files into your shell environment. Follows the [twelve-factor app](https://12factor.net) config principle. Supports variable interpolation, comments and multi-line values.

## Installation

```bash
bpkg install bashup/dotenv
```

## Usage

```bash
source bpkg_modules/dotenv/dotenv.sh

# Load default .env
dotenv

# Load specific file
dotenv .env.production

# Load and export all variables
dotenv --export .env
```

## .env format

```bash
# This is a comment
DATABASE_URL=postgres://localhost/mydb
SECRET_KEY="my secret with spaces"
MULTILINE="line one\nline two"
INTERPOLATED="Hello $USER"
```

## Notes

- Existing environment variables are **not** overwritten by default
- Use `--override` to force overwrite
- `export` is not required in the file; use `--export` flag instead
