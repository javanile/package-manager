---
title: bpkg-http
description: HTTP client wrapper for bash — GET, POST, headers and JSON support
version: "1.5.2"
license: MIT
author: jakwings
author_github: jakwings
repository: https://github.com/jakwings/bpkg-http
repository_path: /dir/subdir
categories: networking
keywords:
  - http
  - curl
  - rest
  - api
  - networking
date: 2024-03-28
dependencies:
  - bpkg-str
versions:
  - main
  - dev
  - 1.0.1
  - 1.0.0
  - 0.9.0
---

# bpkg-http

A thin, ergonomic wrapper around `curl` for making HTTP requests from bash scripts. Supports JSON bodies, custom headers, timeouts and response parsing.

## Installation

```bash
bpkg install jakwings/bpkg-http
```

## Usage

```bash
source bpkg_modules/bpkg-http/http.sh

# Simple GET
body=$(http_get "https://api.example.com/status")

# POST with JSON
http_post "https://api.example.com/users" \
  --header "Authorization: Bearer $TOKEN" \
  --json '{"name":"alice","role":"admin"}'

# Check status code
if http_ok "https://api.example.com/health"; then
  echo "Service is up"
fi
```

## Functions

| Function | Description |
|---|---|
| `http_get` | Perform a GET request |
| `http_post` | Perform a POST request |
| `http_put` | Perform a PUT request |
| `http_delete` | Perform a DELETE request |
| `http_ok` | Returns 0 if status is 2xx |
| `http_status` | Print the HTTP status code |
