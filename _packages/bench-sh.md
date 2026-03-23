---
title: bench-sh
description: Micro-benchmarking tool for bash functions and shell commands
version: "1.0.0"
license: MIT
author: visionmedia
author_github: visionmedia
repository: https://github.com/visionmedia/bench-sh
categories: development
keywords:
  - benchmark
  - performance
  - testing
  - profiling
  - bash
date: 2024-04-18
dependencies:
  - term
---

# bench-sh

Measure the execution time of bash functions and shell commands. Reports mean, min, max and standard deviation over N iterations.

## Installation

```bash
bpkg install visionmedia/bench-sh
```

## Usage

```bash
source bpkg_modules/bench-sh/bench.sh

# Benchmark a command (100 iterations)
bench "ls /tmp" 100

# Benchmark a function
my_func() { grep -c "foo" /var/log/syslog; }
bench_fn my_func 50

# Compare two implementations
bench_compare \
  "grep -c foo /var/log/syslog" \
  "awk '/foo/{c++}END{print c}' /var/log/syslog"
```

## Sample output

```
ls /tmp (100 runs)
  mean:   1.23ms
  min:    0.98ms
  max:    3.41ms
  stddev: 0.22ms
```
