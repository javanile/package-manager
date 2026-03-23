---
title: bpkg-semver
description: Semantic versioning parser and comparator for bash
version: "1.0.4"
license: MIT
author: nicowillis
author_github: nicowillis
repository: https://github.com/nicowillis/bpkg-semver
categories: development
keywords:
  - semver
  - versioning
  - release
  - development
date: 2024-01-22
---

# bpkg-semver

Parse, compare, and validate [SemVer](https://semver.org) strings in pure bash.

## Installation

```bash
bpkg install nicowillis/bpkg-semver
```

## Usage

```bash
source bpkg_modules/bpkg-semver/semver.sh

semver_valid "1.2.3"        # → 0
semver_gt "2.0.0" "1.9.9"  # → 0 (true)
semver_major "3.4.5"        # → 3
semver_bump_patch "1.2.3"   # → 1.2.4
```

## Functions

- `semver_valid` — validate a version string
- `semver_gt / semver_lt / semver_eq` — comparison operators
- `semver_major / semver_minor / semver_patch` — extract components
- `semver_bump_major / semver_bump_minor / semver_bump_patch` — increment version
