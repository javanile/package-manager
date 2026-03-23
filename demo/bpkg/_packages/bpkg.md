---
title: bpkg
description: The bash package manager itself. Bootstrap your bash environment.
categories: utilities
keywords:
  - bpkg
  - package-manager
  - bash
  - installer
---

# bpkg

The bash package manager. Lets you install bash packages globally or locally into your project.

```bash
curl -Lo- "https://raw.githubusercontent.com/bpkg/bpkg/master/setup.sh" | bash
```

## Usage

```bash
bpkg install <package>       # install locally into deps/
bpkg install -g <package>    # install globally
bpkg list                    # list installed packages
```
