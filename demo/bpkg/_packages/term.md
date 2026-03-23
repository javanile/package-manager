---
title: term
description: Terminal color output and formatting helpers for bash scripts.
categories: utilities
keywords:
  - terminal
  - colors
  - output
  - formatting
---

# term

Terminal color and formatting utilities for bash.

```bash
bpkg install bpkg/term
```

## Usage

```bash
source deps/term/term.sh
term::red "Error message"
term::green "Success!"
term::yellow "Warning"
```
