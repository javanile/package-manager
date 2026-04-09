---
title: json.sh
description: Streaming JSON parser for Bash pipelines.
categories: utilities
keywords:
  - json
  - parser
---

`json.sh` parses JSON in Bash-friendly form so it can be inspected, filtered, and processed in shell pipelines.

It walks the input structure and prints each path as a JSON array followed by the associated value, with minimal whitespace.

## Install

```bash
$ bpkg install -g json.sh
```

## Usage

```bash
$ json_parse < package.json
["name"]  "JSON.sh"
["version"]  "0.0.0"
["description"]  ""
["homepage"]  "http://github.com/dominictarr/JSON.sh"
["repository","type"]  "git"
["repository","url"]  "https://github.com/dominictarr/JSON.sh.git"
["repository"]  {"type":"git","url":"https://github.com/dominictarr/JSON.sh.git"}
["bin","json_parse"]  "./JSON.sh"
["bin"]  {"json_parse":"./JSON.sh"}
["dependencies"]  {}
#  ... etc

# A more complex example:
curl registry.npmjs.org/express | ./JSON.sh | egrep '\["versions","[^"]*"\]'
```

### Options

* -b
  Brief output. Combines 'Leaf only' and 'Prune empty' options.
* -l
  Leaf only. Only show leaf nodes, which stops data duplication.
* -p
  Prune empty. Exclude fields with empty values.
* -h
  Show help text.

## Links

* [Source Code (GitHub)](https://github.com/bpkg/JSON.sh)
* Author: [Dominic Tarr](https://github.com/dominictarr)
* Packager: [Joseph Werle](https://github.com/jwerle)
