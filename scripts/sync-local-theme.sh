#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEMO_NAME="${1:-}"

if [[ -z "$DEMO_NAME" ]]; then
	echo "usage: $0 <demo-name>" >&2
	exit 1
fi

DEMO_DIR="$ROOT_DIR/demo/$DEMO_NAME"
CONFIG_FILE="$DEMO_DIR/_config.yml"

if [[ ! -d "$DEMO_DIR" || ! -f "$CONFIG_FILE" ]]; then
	echo "demo not found: $DEMO_NAME" >&2
	exit 1
fi

if ! grep -q '^[[:space:]]*remote_theme:' "$CONFIG_FILE"; then
	exit 0
fi

for path in _includes _layouts _sass assets; do
	rm -rf "$DEMO_DIR/$path"
	cp -R "$ROOT_DIR/$path" "$DEMO_DIR/$path"
done
