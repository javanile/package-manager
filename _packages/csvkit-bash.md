---
title: csvkit-bash
description: CSV parsing, filtering and transformation utilities for bash scripts
version: "1.3.2"
license: MIT
author: jakwings
author_github: jakwings
repository: https://github.com/jakwings/csvkit-bash
categories: text-processing
keywords:
  - csv
  - tsv
  - parsing
  - data
  - text-processing
date: 2024-02-28
dependencies:
  - bpkg-str
---

# csvkit-bash

Read, filter, transform and output CSV/TSV data in bash. No Python required — pure shell with awk under the hood.

## Installation

```bash
bpkg install jakwings/csvkit-bash
```

## Usage

```bash
source bpkg_modules/csvkit-bash/csv.sh

# Get column by header name
csv_col data.csv "email"

# Filter rows where column matches value
csv_filter data.csv "country" "Italy"

# Print specific columns only
csv_cut data.csv "name,email,country"

# Count rows (excluding header)
csv_count data.csv

# Convert CSV to JSON array
csv_to_json data.csv
```

## Pipeline example

```bash
csv_filter users.csv "active" "true" \
  | csv_cut - "name,email" \
  | csv_to_json
```
