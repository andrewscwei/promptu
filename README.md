# Promptu [![npm](https://img.shields.io/npm/v/promptu.svg)](https://www.npmjs.com/package/promptu) [![CI](https://github.com/andrewscwei/promptu/workflows/CI/badge.svg)](https://github.com/andrewscwei/promptu/actions?query=workflow%3ACI) [![CD](https://github.com/andrewscwei/promptu/workflows/CD/badge.svg)](https://github.com/andrewscwei/promptu/actions?query=workflow%3ACD)

A micro CSS-in-JS library that provides shorthands for commonly-used CSS rules as well as utility functions for transforming and parsing between CSS-compatible data types. For documentation please visit [here](https://andrewscwei.github.io/promptu/).

## Setup

```sh
$ npm install

# Run tests (against TypeScript source files)
$ npm test

# Build the library
$ npm run build
```

## Usage

Promptu pairs well with [Styled Components](https://styled-components.com/) (or any other CSS-in-JS library). Example use:

```ts
import { align, container } from 'promptu'

const StyledRoot = styled.div`
  ${promptu.align.ftl} // Aligns to top left in fixed position
  ${promptu.container.fvtl} // Transforms this div into a flex box where children are vertically top left aligned
`
```

## Normalizing Styles

A raw CSS file for just normalizing rules is generated and packaged into the released module at `lib/normalize.css`, which you can access directly via `unpkg`.

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://unpkg.com/promptu/lib/normalize.css">
  </head>
  <body>
  </body>
</html>
```
