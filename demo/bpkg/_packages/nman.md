---
title: nman
description: Read the node.js core api in man page format
categories: utilities
keywords:
  - docs
  - nodejs
---

This package adds the convenience of man pages to [the node.js API](http://nodejs.org/api/).

```bash
$ bpkg install nman -g
```

## Usage

Just use `nman` along with the node API you'd like to view.
Some examples:

```bash
# For the File System module
$ nman fs

# ...and the console
$ nman console

# The name is the same as you'd `require` it
# For the "Assertion Testing", just like you
# would `require(assert)`, do...
$ nman assert
```

*NOTE:* It requires _an active internet connection_. It does not come with the docs nor stores offline as they are requested.

## Links

* [Source Code (GitHub)](https://github.com/bpkg/nman)
* Author: [Joseph Werle](https://github.com/jwerle)
