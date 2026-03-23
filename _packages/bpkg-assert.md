---
title: bpkg-assert
description: Assertion library for bash unit testing with colored output and exit codes
version: "1.0.2"
license: MIT
author: stephenmathieson
author_github: stephenmathieson
repository: https://github.com/stephenmathieson/bpkg-assert
categories: development
keywords:
  - testing
  - assert
  - unit-test
  - tdd
  - bash
date: 2024-01-08
dependencies:
  - term
---

# bpkg-assert

Simple, readable assertion functions for bash unit tests. Works standalone or alongside test runners like `bats`.

## Installation

```bash
bpkg install stephenmathieson/bpkg-assert
```

## Usage

```bash
source bpkg_modules/bpkg-assert/assert.sh

assert_equal "foo" "foo"             # passes
assert_not_equal "foo" "bar"         # passes
assert_empty ""                      # passes
assert_not_empty "hello"             # passes
assert_contains "foobar" "foo"       # passes
assert_exit_code 0 ls /tmp           # passes
assert_file_exists /etc/hosts        # passes
```

## Output

```
✓ assert_equal: "foo" == "foo"
✓ assert_not_equal: "foo" != "bar"
✗ assert_equal: expected "foo" but got "bar"
```

Exits with code `1` on the first failure, or use `--no-exit` to collect all failures.
