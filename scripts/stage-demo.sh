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

copy_if_exists() {
	local path="$1"
	if [[ -e "$ROOT_DIR/$path" ]]; then
		cp -R "$ROOT_DIR/$path" "$BUILD_DIR/$path"
	fi
}

# Theme/runtime files from the current checkout.
for path in _includes _layouts _sass assets _pages 404.html atom.xml rss.xml; do
	copy_if_exists "$path"
done

# Demo-specific content and pages. Theme implementation dirs are intentionally
# excluded so demos stay focused on _config.yml and content variations.
shopt -s dotglob nullglob
for path in "$DEMO_DIR"/*; do
	name="$(basename "$path")"
	case "$name" in
		.bundle|.jekyll-cache|_site|Gemfile.lock|_includes|_layouts|_sass|assets)
			continue
			;;
		_config.yml)
			awk '
				/^remote_theme:/ { next }
				/^plugins:[[:space:]]*$/ { in_plugins=1; plugin_count=0; next }
				in_plugins && /^[[:space:]]*-[[:space:]]+/ {
					if ($0 ~ /jekyll-remote-theme/) next
					plugins[++plugin_count] = $0
					next
				}
				in_plugins {
					if (plugin_count > 0) {
						print "plugins:"
						for (i = 1; i <= plugin_count; i++) print plugins[i]
					}
					in_plugins = 0
					plugin_count = 0
				}
				{ print }
				END {
					if (in_plugins && plugin_count > 0) {
						print "plugins:"
						for (i = 1; i <= plugin_count; i++) print plugins[i]
					}
				}
			' "$path" > "$BUILD_DIR/_config.yml"
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
