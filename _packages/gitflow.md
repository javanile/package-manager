---
title: gitflow
description: Git workflow automation — feature branches, releases, hotfixes and changelogs
version: "3.1.0"
license: MIT
author: nvie
author_github: nvie
repository: https://github.com/nvie/gitflow
homepage: https://nvie.com/posts/a-successful-git-branching-model/
categories: development
keywords:
  - git
  - workflow
  - branching
  - release
  - devops
date: 2024-01-30
dependencies:
  - bpkg-semver
  - bpkg-log
---

# gitflow

Bash implementation of the git-flow branching strategy. Automates feature branch creation, release tagging, hotfix merges and CHANGELOG generation.

## Installation

```bash
bpkg install nvie/gitflow
```

## Usage

```bash
# Initialize git-flow in current repo
gitflow init

# Start a new feature
gitflow feature start my-feature

# Finish and merge feature
gitflow feature finish my-feature

# Create a release
gitflow release start 1.2.0
gitflow release finish 1.2.0

# Emergency hotfix
gitflow hotfix start fix-critical-bug
gitflow hotfix finish fix-critical-bug
```

## Branching model

| Branch | Purpose |
|---|---|
| `main` | Production-ready code |
| `develop` | Integration branch |
| `feature/*` | New features |
| `release/*` | Release preparation |
| `hotfix/*` | Production patches |
