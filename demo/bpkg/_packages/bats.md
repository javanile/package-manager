---
title: Bats
description: A TAP-compliant testing framework for Bash.
categories: testing
keywords:
  - bash
  - testing
  - ci
---

## Usage

Write tests into `*.bats` files like:

```bash
#!/usr/bin/env bats

@test "addition using bc" {
  result="$(echo 2+2 | bc)"
  [ "$result" -eq 4 ]
}
```

Then run the test:

```bash
$ bats test.bats
 ✓ addition using bc

1 test, 0 failures
```

## Links

* [Source Code (GitHub)](https://github.com/bats-core/bats-core)
* [Documentation](https://bats-core.readthedocs.io/)
