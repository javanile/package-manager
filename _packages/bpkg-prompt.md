---
title: bpkg-prompt
description: Interactive prompts for bash — yes/no, select menus, text input and password
version: "1.2.3"
license: MIT
author: nicowillis
author_github: nicowillis
repository: https://github.com/nicowillis/bpkg-prompt
categories: utilities
keywords:
  - prompt
  - interactive
  - input
  - menu
  - tui
date: 2024-03-01
dependencies:
  - term
---

# bpkg-prompt

Beautiful interactive prompts for bash scripts. Build installer wizards, CLI tools and interactive menus with ease.

## Installation

```bash
bpkg install nicowillis/bpkg-prompt
```

## Usage

```bash
source bpkg_modules/bpkg-prompt/prompt.sh

# Yes/no confirmation
if prompt_confirm "Delete all files?"; then
  rm -rf ./dist
fi

# Text input with default
name=$(prompt_input "Enter your name" "World")
echo "Hello, $name!"

# Password (hidden input)
pass=$(prompt_password "Enter password")

# Select from list
choice=$(prompt_select "Choose environment" dev staging production)
echo "Deploying to: $choice"
```

## Functions

- `prompt_confirm` — yes/no question, returns 0/1
- `prompt_input` — text input with optional default
- `prompt_password` — masked password input
- `prompt_select` — arrow-key selection menu
