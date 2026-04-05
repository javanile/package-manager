# Package Manager

Package Manager is a Jekyll site template for package registries and package catalogs. It is designed to be heavily driven by `_config.yml`, so branding, navigation, footer links, colors, command snippets, and collection behavior can be changed without rewriting the theme.

Browse the public demo at <https://javanile.org/package-manager>.

## Features

- Package listings grouped by category
- Package detail pages with sticky metadata sidebar
- Search pages and search autocomplete
- Light and dark theme support
- Configurable branding, navigation, footer links, colors, repository links, and suggested install command
- RSS/Atom support
- SEO-friendly Jekyll structure
- Demo configurations for different product shapes

## Quick Start

1. Create a new repository from this template.
2. Add a project `_config.yml`, starting from [`_config.example.yml`](_config.example.yml).
3. Add package entries in `_packages/`.
4. Add categories in `_categories/` if needed.
5. Serve locally with `make serve`.

## Local Development

The project is developed and previewed through Docker:

```bash
make serve
```

This starts the main site on `http://localhost:4000/`.

## Demo Workflow

The demos are not meant to be separate theme forks. They exist as a local playground to verify how far the project can be configured from each demo `_config.yml`.

The intended rule is:

- The theme implementation lives in the root project.
- Each demo describes a scenario through its own `_config.yml` plus demo-specific content.
- Local demo builds should always render the current checkout of the theme, not an older remote copy.

For that reason, `make serve demo=<name>` and `make restart demo=<name>` now stage a temporary local build in `.demo-build/<name>` by combining:

- the current root theme files
- the selected demo `_config.yml`
- the selected demo content

This keeps the demos useful as configuration test benches while ensuring they reflect the latest local theme changes.

Important: because a demo runs from the staged snapshot in `.demo-build/<name>`, changes to the root theme are not reflected in an already running demo container until you restart that demo.

Use:

- `make restart demo=minimal`
- `make restart demo=bpkg`
- `make restart demo=docker`
- `make restart-demos` to refresh all demo snapshots after a theme change

Available demo ports:

- `make serve demo=minimal` -> `http://localhost:4001/`
- `make serve demo=bpkg` -> `http://localhost:4002/`
- `make serve demo=docker` -> `http://localhost:4003/`

## Editing Content

Package Manager is optimized for editing package data as Markdown files.

- Add, update, or remove package entries in `_packages/`.
- Organize packages through `_categories/`.
- Use page front matter and `_config.yml` to control layout behavior.
- The package page sidebar is populated from package metadata and page structure.

## Configuration Notes

Most of the visible site behavior is intentionally configurable from `_config.yml`, including:

- site title and tagline
- repository links
- navigation items
- footer links
- suggested install command
- collection output and permalinks
- per-page default body classes
- brand colors and visual identity

The demos exist specifically to validate these configuration combinations.

## Repository Notes

- The root theme is the source of truth.
- Demo-specific theme copies should not be treated as canonical implementation.
- `.demo-build/` is generated locally and ignored by git.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).
