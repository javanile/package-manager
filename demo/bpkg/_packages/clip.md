---
title: clip
description: Silly terminal clipboard
categories: utilities
keywords:
  - clipboard
---

Really simple clipboard manager in Bash.
You can access it via command-line or inside shell scripts.

```bash
$ bpkg install -g clip
```

## Usage

**Store**: *only stores single value:*

```bash
$ echo foo | clip
```

**Read**: *read stored value:*
```bash
$ clip
```

*NOTE:* It does not interface with the _actual_ system clipboard. It has it's own.

## Links

* [Source Code (GitHub)](https://github.com/bpkg/clip)
* Author: [Joseph Werle](https://github.com/jwerle)
