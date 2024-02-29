# Package Manager

Package management site template for Jekyll. Browse through a [live demo](https://javanile.org/package-manager).

Package Manager was made by [Javanile](http://javanile.org/), an Italian Open Source Dev Community.

Find more projects, themes and step-by-step tutorials at [Javanile Package Store](https://packages.javanile.org/).

## Features

* Packages organised by category
* Two types of packages - application and library
* Ability to have a "multiple" version of a package
* FAQ section
* Disqus comments
* Sticky sidebar for main headings in tutorials
* Optimised for editing in local development environment
* RSS/Atom feed
* SEO tags
* Google Analytics

## Setup

1. Setup fresh new GitHub repository
2. Add `_config.yml` as the follow [example](https://github.com/javanile/package-manager/blob/main/_config.example.yml)
3. Add packages into `_packages` directory as markdown files
4. Enable GitHub Pages in the repository settings

## Develop

Package Manager was built with [Jekyll](http://jekyllrb.com/) version 3.4.3, but should support newer versions as well.

Install the dependencies and run it with Makefile based on [Docker](http://docker.com/):

```bash
$ make serve
```

## Editing

Package Manager is already optimised for adding, updating and removing packages as Markdown files into the `_packages` directory.

The sticky sidebar in package page in populated by pulling out `<h2>` elements from the content.

### Packages

* Add, update or remove a post in the *Packages* collection.
* The package page is organised by categories.
* Change the defaults when new packages are created in `_packages/_defaults.md`.

### Package Versioning

To create a new version:

* Add a new document to the `sets` collection.
* Set the `title` and `description`.

### Navigation

* Exposed as a data file to give clients better access.
* Set in the *Data* / *Navigation* section.

### Footer

* Exposed as a data file to give clients better access.
* Set in the *Data* / *Footer* section.

### Assets

* <https://feathericons.com/?query=box>

### Read more

* <https://github.com/mmistakes/jekyll-theme-basically-basic/blob/master/_config.yml>

### Used by

* https://github.com/javanile/bpkg.github.io/tree/package-manager

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
