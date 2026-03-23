---
title: term
description: Terminal color codes, cursor control and spinner animations for bash
version: "3.0.1"
license: MIT
author: clibs
author_github: clibs
repository: https://github.com/clibs/term
homepage: https://github.com/clibs/term
categories: utilities
keywords:
  - terminal
  - color
  - ansi
  - tty
  - spinner
date: 2024-04-05
---

# term

ANSI terminal escape codes made easy. Colors, styles, cursor movement and spinner animations — all in one small library.

## Installation

```bash
bpkg install clibs/term
```

## Usage

```bash
source bpkg_modules/term/term.sh

echo "$(term_red)Error:$(term_reset) file not found"
echo "$(term_bold)$(term_green)Success!$(term_reset)"

term_spinner_start "Loading..."
sleep 2
term_spinner_stop
```

## Color functions

`term_black`, `term_red`, `term_green`, `term_yellow`, `term_blue`, `term_magenta`, `term_cyan`, `term_white`

Each has a `term_bg_*` variant for background colors.

## Style functions

`term_bold`, `term_dim`, `term_underline`, `term_blink`, `term_reverse`, `term_reset`
