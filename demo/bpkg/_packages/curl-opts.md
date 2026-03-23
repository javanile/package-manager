---
title: curl-opts
description: Sensible curl defaults and helpers for scripting HTTP requests.
categories: networking
keywords:
  - curl
  - http
  - networking
  - api
---

# curl-opts

Opinionated curl wrappers for common scripting patterns.

```bash
bpkg install bpkg/curl-opts
```

## Usage

```bash
source deps/curl-opts/curl-opts.sh
curl::get https://api.example.com/data
curl::post https://api.example.com/endpoint '{"key":"value"}'
```
