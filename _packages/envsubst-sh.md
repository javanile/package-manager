---
title: envsubst-sh
description: Template rendering with environment variable substitution for bash
version: "1.0.3"
license: MIT
author: bashup
author_github: bashup
repository: https://github.com/bashup/envsubst-sh
categories: text-processing
keywords:
  - template
  - envsubst
  - config
  - kubernetes
  - text-processing
date: 2024-01-20
---

# envsubst-sh

Render config templates by substituting environment variables. A portable bash alternative to GNU `envsubst` with support for default values, required variables and custom delimiters.

## Installation

```bash
bpkg install bashup/envsubst-sh
```

## Usage

```bash
source bpkg_modules/envsubst-sh/envsubst.sh

# Render template to stdout
APP_PORT=3000 APP_NAME=myapp \
  envsubst-sh template.conf.tmpl

# Write to file
envsubst-sh nginx.conf.tmpl > /etc/nginx/nginx.conf

# Fail if variable is unset
STRICT=1 envsubst-sh config.tmpl
```

## Template syntax

```
server {
    listen ${APP_PORT:-8080};
    server_name ${APP_HOST};              # required
    root ${APP_ROOT:-/var/www/html};
}
```

## Default values

Use `${VAR:-default}` for optional variables. With `STRICT=1`, any unset variable without a default causes an error and exit code `1`.
