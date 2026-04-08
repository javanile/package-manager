#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEMO_NAME="${1:-}"

if [[ -z "$DEMO_NAME" ]]; then
	echo "usage: $0 <demo-name>" >&2
	exit 1
fi

DEMO_DIR="$ROOT_DIR/demo/$DEMO_NAME"
BUILD_ROOT="$ROOT_DIR/.demo-build"
BUILD_DIR="$BUILD_ROOT/$DEMO_NAME-$(date +%s)"
CURRENT_LINK="$BUILD_ROOT/$DEMO_NAME-current"

if [[ ! -d "$DEMO_DIR" ]]; then
	echo "demo not found: $DEMO_NAME" >&2
	exit 1
fi

mkdir -p "$BUILD_ROOT"
mkdir -p "$BUILD_DIR"

# Copy demo content only — theme is fetched from remote_theme at build time.
# Exclude build artifacts and bundle cache so the container always starts fresh.
shopt -s dotglob nullglob
for path in "$DEMO_DIR"/*; do
	name="$(basename "$path")"
	case "$name" in
		.bundle|.jekyll-cache|_site|Gemfile.lock)
			continue
			;;
		*)
			cp -R "$path" "$BUILD_DIR/$name"
			;;
	esac
done

if [[ ! -f "$BUILD_DIR/_config.yml" ]]; then
	echo "missing demo config: $DEMO_DIR/_config.yml" >&2
	exit 1
fi

ln -sfn "$BUILD_DIR" "$CURRENT_LINK"
echo "staged: $BUILD_DIR"
