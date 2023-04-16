import format from '../utils/format'

/**
 * Normalizes CSS consistently across all major browsers.
 *
 * @see https://github.com/andrewscwei/promptu/blob/master/src/core/normalize.ts
 */
export default function(): string {
  return `
    html {
      font-family: sans-serif;
      font-size: 10px;
      height: 100%;
      margin: 0;
      padding: 0;
      width: 100%;
    }

    body {
      font-size: 1.6rem;
      height: 100%;
      margin: 0;
      padding: 0;
      width: 100%;
    }

    article,
    aside,
    details,
    dialog,
    div,
    figure,
    footer,
    header,
    main,
    nav,
    section,
    table {
      border: none;
      box-sizing: border-box;
      display: block;
      margin: 0;
      outline: none;
      padding: 0;
      position: relative;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
      border-radius: 0;
      border: none;
      box-sizing: border-box;
      color: inherit;
      font: inherit;
      margin: 0;
      outline: none;
      overflow: auto;
      padding: 0;
    }

    option {
      color: #000;
    }

    button,
    input[type='button'],
    input[type='checkbox'],
    input[type='file'],
    input[type='radio'],
    input[type='reset'],
    input[type='submit'],
    select {
      -moz-osx-font-smoothing: grayscale;
      -webkit-appearance: button;
      -webkit-font-smoothing: antialiased;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-text-stroke: 0;
      background: transparent;
      cursor: pointer;
      display: inline-block;
      font-weight: normal;
      line-height: normal;
      overflow: visible;
      position: relative;
      text-decoration: none;
      text-rendering: optimizeLegibility;
      text-size-adjust: 100%;
      text-transform: none;
    }

    button::-moz-focus-inner,
    input[type='button']::-moz-focus-inner,
    input[type='checkbox']::-moz-focus-inner,
    input[type='file']::-moz-focus-inner,
    input[type='radio']::-moz-focus-inner,
    input[type='reset']::-moz-focus-inner,
    input[type='submit']::-moz-focus-inner,
    select::-moz-focus-inner {
      border: 0;
      padding: 0;
    }

    button:disabled,
    button[disabled],
    input[type='button']:disabled,
    input[type='button'][disabled],
    input[type='checkbox']:disabled,
    input[type='checkbox'][disabled],
    input[type='file']:disabled,
    input[type='file'][disabled],
    input[type='radio']:disabled,
    input[type='radio'][disabled],
    input[type='reset']:disabled,
    input[type='reset'][disabled],
    input[type='submit']:disabled,
    input[type='submit'][disabled],
    select:disabled,
    select[disabled] {
      cursor: default;
      pointer-events: none;
    }

    a[type='button'] {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-text-stroke: 0;
      border: none;
      box-sizing: border-box;
      cursor: pointer;
      display: inline-block;
      font-weight: normal;
      line-height: normal;
      margin: 0;
      outline: none;
      overflow: visible;
      padding: 0;
      position: relative;
      text-decoration: none;
      text-rendering: optimizeLegibility;
      text-size-adjust: 100%;
      text-transform: none;
    }

    a[type='button']::-moz-focus-inner {
      border: 0;
      padding: 0;
    }

    a[type='button']:disabled,
    a[type='button'][disabled] {
      cursor: default;
      pointer-events: none;
    }

    img {
      min-height: 1px;
    }

    a,
    figcaption,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    label,
    li,
    p,
    span,
    summary {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-text-stroke: 0;
      background-color: transparent;
      border: none;
      font-weight: normal;
      line-height: normal;
      list-style: none;
      margin: 0;
      max-width: 100%;
      outline: none;
      padding: 0;
      text-decoration: none;
      text-rendering: optimizeLegibility;
      text-size-adjust: 100%;
    }

    a:active,
    a:hover {
      outline: 0;
      text-decoration: none;
    }

    ul,
    ol {
      margin: 0;
      padding: 0;
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
    }

    input::-webkit-search-cancel-button,
    input::-webkit-search-decoration,
    textarea::-webkit-search-cancel-button,
    textarea::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button,
    textarea::-webkit-outer-spin-button,
    textarea::-webkit-inner-spin-button {
      height: auto;
    }

    input:focus,
    input:invalid,
    textarea:focus,
    textarea:invalid {
      box-shadow: none;
      outline-width: 0;
    }

    input:-webkit-autofill {
      box-shadow: 0 0 0 1000px white inset;
    }

    input::placeholder,
    textarea::placeholder {
      color: inherit;
      opacity: .3;
    }

    form {
      margin: 0;
      padding: 0;
      position: static;
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
      background: #fff;
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

    col,
    hgroup,
    tbody,
    td,
    tfoot,
    th,
    thead,
    tr {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-text-stroke: 0;
      border: none;
      box-sizing: border-box;
      font-weight: normal;
      line-height: normal;
      margin: 0;
      outline: none;
      padding: 0;
      text-decoration: none;
      text-rendering: optimizeLegibility;
      text-size-adjust: 100%;
    }

    html.no-js .js,
    html:not(.no-js) .no-js {
      display: none !important;
    }

    html.supports-no-cookies .supports-cookies,
    html:not(.supports-no-cookies) .supports-no-cookies {
      display: none !important;
    }
  `
}
