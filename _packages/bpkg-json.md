---
title: bpkg-json
description: Lightweight JSON parser and query tool for bash without dependencies
version: "1.4.1"
license: MIT
author: dominictarr
author_github: dominictarr
repository: https://github.com/dominictarr/bpkg-json
categories: text-processing
keywords:
  - json
  - parser
  - jq
  - text-processing
date: 2024-04-12
---

# bpkg-json

Parse JSON from bash without requiring `jq`. Pure bash JSON query and extraction — lightweight and portable.

## Installation

```bash
bpkg install dominictarr/bpkg-json
```

## Usage

```bash
source bpkg_modules/bpkg-json/json.sh

data='{"name":"alice","age":30,"tags":["admin","user"]}'

json_get "$data" .name        # → alice
json_get "$data" .age         # → 30
json_get "$data" .tags[0]     # → admin
json_keys "$data"              # → name age tags

# Read from file
json_file /etc/config.json .database.host
```

## Functions

- `json_get` — extract a value by path
- `json_keys` — list keys of an object
- `json_length` — count array elements
- `json_has` — check if a key exists
- `json_file` — parse from a file path
