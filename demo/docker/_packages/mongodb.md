---
title: myorg/mongodb
description: MongoDB with replica set initialisation, auth enabled and WiredTiger cache tuning.
categories: databases
keywords:
  - mongodb
  - mongo
  - nosql
  - database
---

# myorg/mongodb

MongoDB image with automatic replica set init, authentication enforced and WiredTiger cache pre-tuned to container memory limits.

```bash
docker pull myorg/mongodb:7
docker pull myorg/mongodb:6
```

## Quick start

```bash
docker run -d \
  --name mongodb \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=secret \
  -p 27017:27017 \
  myorg/mongodb:7
```
