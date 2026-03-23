---
title: myorg/python
description: Python runtime with pip, pipenv and poetry pre-installed and virtual env auto-activation.
categories: runtimes
keywords:
  - python
  - runtime
  - pip
  - poetry
---

# myorg/python

Python image with pip, pipenv and poetry. Virtual env is automatically created and activated on `CMD`.

```bash
docker pull myorg/python:3.12
docker pull myorg/python:3.12-slim
docker pull myorg/python:3.11
docker pull myorg/python:3.11-slim
```

## Dockerfile example

```dockerfile
FROM myorg/python:3.12-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
CMD ["python", "app.py"]
```
