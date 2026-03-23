---
title: bpkg-str
description: String manipulation utilities for bash — trim, pad, split, repeat and more
version: "1.3.0"
license: MIT
author: bpkg
author_github: bpkg
repository: https://github.com/bpkg/bpkg-str
homepage: https://bpkg.sh
categories: utilities
keywords:
  - string
  - utilities
  - text
  - bash
date: 2024-03-10
---

# bpkg-str

A comprehensive string manipulation library for bash scripts.

## Installation

```bash
bpkg install bpkg/bpkg-str
```

## Usage

```bash
source bpkg_modules/bpkg-str/bpkg-str.sh

str_trim "  hello world  "  # → "hello world"
str_upper "hello"            # → "HELLO"
str_repeat "-" 40            # → "----------------------------------------"
str_contains "foobar" "foo"  # → 0 (true)
```

## Functions

### str_trim
Removes leading and trailing whitespace from a string.

### str_upper / str_lower
Converts string case.

### str_repeat
Repeats a string N times.

### str_contains
Returns 0 if the first string contains the second.

### str_starts_with / str_ends_with
Prefix and suffix checks.
