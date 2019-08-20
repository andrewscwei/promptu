import minify from '../utils/minify';

/**
 * Normalizes CSS consistently across all major browsers.
 *
 * @see https://github.com/andrewscwei/promptu/blob/master/src/core/normalize.ts
 */
export default function(): string {
  return minify(`
    html {
      border: none;
      box-sizing: border-box;
      font-family: sans-serif;
      font-size: 10px;
      height: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      width: 100%;
    }

    body {
      border: none;
      box-sizing: border-box;
      font-size: 1.6rem;
      height: 100%;
      margin: 0;
      outline: none;
      overflow-x: hidden;
      overflow-y: auto;
      padding: 0;
      width: 100%;
    }

    #app {
      box-sizing: border-box;
      height: 100%;
      margin: 0;
      padding: 0;
      width: 100%;
    }

    article,
    aside,
    details,
    dialog,
    summary,
    footer,
    header,
    main,
    figcaption,
    figure,
    hgroup,
    nav,
    section,
    div,
    table,
    tr,
    td,
    th,
    tbody,
    thead,
    tfoot,
    col {
      border: none;
      box-sizing: border-box;
      margin: 0;
      outline: none;
      padding: 0;
      font-weight: normal;
      line-height: normal;
      text-decoration: none;
      text-rendering: optimizeLegibility;
      text-size-adjust: 100%;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-text-stroke: 0;
      display: block;
      position: relative;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
      border: none;
      box-sizing: border-box;
      margin: 0;
      outline: none;
      padding: 0;
      color: inherit;
      font: inherit;
      overflow: auto;
    }

    input[type='submit'],
    input[type='reset'],
    input[type='button'],
    input[type='checkbox'],
    input[type='radio'],
    input[type='file'],
    select,
    button {
      border: none;
      box-sizing: border-box;
      margin: 0;
      outline: none;
      padding: 0;
      font-weight: normal;
      line-height: normal;
      text-decoration: none;
      text-rendering: optimizeLegibility;
      text-size-adjust: 100%;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-text-stroke: 0;
      cursor: pointer;
      display: inline-block;
      position: relative;
      overflow: visible;
      text-transform: none;
      -webkit-appearance: button;

      &::-moz-focus-inner {
        border: 0;
        padding: 0;
      }

      &:disabled,
      &[disabled] {
        cursor: default;
        pointer-events: none;
      }
    }

    a[type='button'] {
      border: none;
      box-sizing: border-box;
      margin: 0;
      outline: none;
      padding: 0;
      font-weight: normal;
      line-height: normal;
      text-decoration: none;
      text-rendering: optimizeLegibility;
      text-size-adjust: 100%;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-text-stroke: 0;
      cursor: pointer;
      display: inline-block;
      position: relative;
      overflow: visible;
      text-transform: none;

      &::-moz-focus-inner {
        border: 0;
        padding: 0;
      }

      &:disabled,
      &[disabled] {
        cursor: default;
        pointer-events: none;
      }
    }

    button {
      background: transparent;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    label,
    a[type='label'],
    li[type='label'],
    span[type='label'] {
      border: none;
      box-sizing: border-box;
      margin: 0;
      outline: none;
      padding: 0;
      font-weight: normal;
      line-height: normal;
      max-width: 100%;
      text-decoration: none;
      text-rendering: optimizeLegibility;
      text-size-adjust: 100%;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-text-stroke: 0;
      list-style: none;
    }

    ul,
    ol {
      border: none;
      box-sizing: border-box;
      margin: 0;
      outline: none;
      padding: 0;
      font-weight: normal;
      line-height: normal;
      text-decoration: none;
      text-rendering: optimizeLegibility;
      text-size-adjust: 100%;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-text-stroke: 0;
    }

    input[type='text'],
    input[type='password'],
    input[type='number'],
    input[type='date'],
    input[type='month'],
    input[type='week'],
    input[type='time'],
    input[type='datetime'],
    input[type='datetime-local'],
    input[type='email'],
    input[type='search'],
    input[type='tel'],
    input[type='url'],
    textarea {
      -moz-osx-font-smoothing: grayscale;
      -webkit-appearance: textfield;
      -webkit-font-smoothing: antialiased;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-text-stroke: 0;
      appearance: none;
      border-radius: 0;
      border: none;
      box-shadow: none;
      box-sizing: border-box;
      font-weight: normal;
      line-height: normal;
      margin: 0;
      outline: none;
      padding: 0;
      resize: none;
      text-decoration: none;
      text-rendering: optimizeLegibility;
      text-size-adjust: 100%;

      &::-webkit-search-cancel-button,
      &::-webkit-search-decoration {
        -webkit-appearance: none;
      }

      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        height: auto;
      }

      &:focus,
      &:invalid {
        box-shadow: none;
        outline-width: 0;
      }

      &:-webkit-autofill {
        box-shadow: 0 0 0 1000px white inset;
      }

      &::placeholder {
        color: inherit;
        opacity: .3;
      }
    }

    form {
      border: none;
      box-sizing: border-box;
      margin: 0;
      outline: none;
      padding: 0;
      font-weight: normal;
      line-height: normal;
      text-decoration: none;
      text-rendering: optimizeLegibility;
      text-size-adjust: 100%;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-text-stroke: 0;
      position: static;
    }

    a {
      text-decoration: none;
      background-color: transparent;

      &:active,
      &:hover {
        outline: 0;
        text-decoration: none;
      }
    }

    audio,
    canvas,
    progress,
    video {
      display: inline-block;
      vertical-align: baseline;
    }

    audio:not([controls]) {
      display: none;
      height: 0;
    }

    [hidden],
    template {
      display: none;
    }

    abbr[title] {
      border-bottom: 1px dotted;
    }

    b {
      font-weight: bold;
    }

    dfn,
    i {
      font-style: italic;
    }

    mark {
      background: #ff0;
      color: #000;
    }

    small {
      font-size: 80%;
    }

    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }

    sup {
      top: -.5em;
    }

    sub {
      bottom: -.25em;
    }

    svg:not(:root) {
      height: 100%;
      overflow: hidden;
      width: auto;
    }

    hr {
      box-sizing: content-box;
      height: 0;
    }

    pre {
      overflow: auto;
    }

    code,
    kbd,
    pre,
    samp {
      font-family: monospace;
      font-size: 1em;
    }

    fieldset {
      border: 1px solid #c0c0c0;
      margin: 0 2px;
      padding: .35em .625em .75em;
    }

    legend {
      border: 0;
      padding: 0;
    }

    optgroup {
      font-weight: bold;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    td,
    th {
      padding: 0;
    }

    ::placeholder {
      color: inherit;
      opacity: .3;
    }

    html.no-js .js,
    html:not(.no-js) .no-js {
      display: none !important;
    }

    html.supports-no-cookies .supports-cookies,
    html:not(.supports-no-cookies) .supports-no-cookies {
      display: none !important;
    }
  `);
}
