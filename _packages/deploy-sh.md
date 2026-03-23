---
title: deploy-sh
description: Zero-downtime deployment script with rollback, health checks and notifications
version: "3.2.1"
license: MIT
author: visionmedia
author_github: visionmedia
repository: https://github.com/visionmedia/deploy
homepage: https://github.com/visionmedia/deploy
categories: development
keywords:
  - deploy
  - devops
  - ssh
  - rollback
  - ci-cd
date: 2024-03-05
dependencies:
  - bpkg-log
  - bpkg-http
  - bpkg-retry
---

# deploy-sh

Zero-downtime bash deployment tool. Deploys over SSH, runs health checks, keeps N previous releases for instant rollback. Used in production at dozens of companies.

## Installation

```bash
bpkg install visionmedia/deploy
```

## Configuration

Create `deploy.conf`:

```bash
[production]
host        deploy@prod.example.com
repo        git@github.com:myorg/myapp.git
path        /var/www/myapp
ref         origin/main
keep        5
forward-agent yes
post-deploy "npm install && npm run build && pm2 restart myapp"
```

## Usage

```bash
# Deploy to production
deploy production

# Rollback to previous release
deploy production rollback

# List releases
deploy production releases

# Run a command on the server
deploy production exec "pm2 status"
```
