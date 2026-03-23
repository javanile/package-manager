---
title: recho
description: Easily echo strings over SSH
categories: networking
keywords:
  - internet
  - ssh
---

This package makes easy to send quick strings across SSH hosts.

```bash
$ bpkg install -g recho
```

## Usage

```bash
# The following will create a file `/var/log/dump`
# on `somehost.com` under `user` with the content `beep`
$ recho user@somehost.com beep > /var/log/dump

# All options
$ recho --help
recho [-hvV] [ssh_options] [user@] [echo_options] [string]
-v, --verbose   enable verbose output
-h, --help      display this message
-V, --version   output version

[ssh_options]   ssh options
[echo_options]  echo options
```

## Links

* [Source Code (GitHub)](https://github.com/bpkg/recho)
* Author: [Joseph Werle](https://github.com/jwerle)
* ["Sister project" *rtail*](http://bpkg.sh/pkg/rtail)
