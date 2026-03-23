---
title: myorg/php
description: PHP-FPM with OPcache tuned, common extensions pre-built and Composer included.
categories: runtimes
keywords:
  - php
  - php-fpm
  - runtime
  - composer
---

# myorg/php

PHP-FPM image with OPcache, common extensions (pdo_mysql, pdo_pgsql, redis, gd, zip) and Composer 2.

```bash
docker pull myorg/php:8.3-fpm
docker pull myorg/php:8.3-fpm-alpine
docker pull myorg/php:8.2-fpm
```

## Tags

| Tag | Size | Notes |
|-----|------|-------|
| `latest`, `8.3-fpm` | 183 MB | PHP 8.3 FPM |
| `8.3-fpm-alpine` | 92 MB | Alpine variant |
| `8.2-fpm` | 179 MB | PHP 8.2 |

## Usage with Nginx

```yaml
services:
  php:
    image: myorg/php:8.3-fpm-alpine
    volumes:
      - ./src:/var/www/html
  nginx:
    image: myorg/nginx:latest
    volumes:
      - ./src:/var/www/html
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
```
