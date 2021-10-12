# Promptu [![npm](https://img.shields.io/npm/v/promptu.svg)](https://www.npmjs.com/package/promptu) [![CI](https://github.com/andrewscwei/promptu/workflows/CI/badge.svg)](https://github.com/andrewscwei/promptu/actions?query=workflow%3ACI) [![CD](https://github.com/andrewscwei/promptu/workflows/CD/badge.svg)](https://github.com/andrewscwei/promptu/actions?query=workflow%3ACD)

Micro CSS-in-JS library. For documentation please visit [here](https://andrewscwei.github.io/promptu/).

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
import * as promptu from 'promptu'

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

## Disclaimer

Promptu is an on-going pet project for experimenting with CSS-in-JS styling techniques. At its current state, it is not production-ready, has an ever-changing API, and lacks proper documentation. Its features are driven by internal requirements and is meant for internal use only.
