import minify from '../utils/minify'

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
    tr,
    td,
    th,
    tbody,
    thead,
    tfoot,
    col {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-text-stroke: 0;
      border: none;
      box-sizing: border-box;
      display: block;
      font-weight: normal;
      line-height: normal;
      margin: 0;
      outline: none;
      padding: 0;
      text-decoration: none;
      text-rendering: optimizeLegibility;
      text-size-adjust: 100%;
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

    input[type='submit'],
    input[type='reset'],
    input[type='button'],
    input[type='checkbox'],
    input[type='radio'],
    input[type='file'],
    select,
    button {
      -moz-osx-font-smoothing: grayscale;
      -webkit-appearance: button;
      -webkit-font-smoothing: antialiased;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-text-stroke: 0;
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

    input[type='submit']::-moz-focus-inner,
    input[type='reset']::-moz-focus-inner,
    input[type='button']::-moz-focus-inner,
    input[type='checkbox']::-moz-focus-inner,
    input[type='radio']::-moz-focus-inner,
    input[type='file']::-moz-focus-inner,
    select::-moz-focus-inner,
    button::-moz-focus-inner {
      border: 0;
      padding: 0;
    }

    input[type='submit'].disabled,
    input[type='reset'].disabled,
    input[type='button'].disabled,
    input[type='checkbox'].disabled,
    input[type='radio'].disabled,
    input[type='file'].disabled,
    select.disabled,
    button.disabled,
    input[type='submit'][disabled],
    input[type='reset'][disabled],
    input[type='button'][disabled],
    input[type='checkbox'][disabled],
    input[type='radio'][disabled],
    input[type='file'][disabled],
    select[disabled],
    button[disabled] {
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

    button {
      background: transparent;
    }

    img {
      min-height: 1px;
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
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-text-stroke: 0;
      border: none;
      box-sizing: border-box;
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

    ul,
    ol {
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

    input[type='text']::-webkit-search-cancel-button,
    input[type='password']::-webkit-search-cancel-button,
    input[type='number']::-webkit-search-cancel-button,
    input[type='date']::-webkit-search-cancel-button,
    input[type='month']::-webkit-search-cancel-button,
    input[type='week']::-webkit-search-cancel-button,
    input[type='time']::-webkit-search-cancel-button,
    input[type='datetime']::-webkit-search-cancel-button,
    input[type='datetime-local']::-webkit-search-cancel-button,
    input[type='email']::-webkit-search-cancel-button,
    input[type='search']::-webkit-search-cancel-button,
    input[type='tel']::-webkit-search-cancel-button,
    input[type='url']::-webkit-search-cancel-button,
    textarea::-webkit-search-cancel-button,
    input[type='text']::-webkit-search-decoration,
    input[type='password']::-webkit-search-decoration,
    input[type='number']::-webkit-search-decoration,
    input[type='date']::-webkit-search-decoration,
    input[type='month']::-webkit-search-decoration,
    input[type='week']::-webkit-search-decoration,
    input[type='time']::-webkit-search-decoration,
    input[type='datetime']::-webkit-search-decoration,
    input[type='datetime-local']::-webkit-search-decoration,
    input[type='email']::-webkit-search-decoration,
    input[type='search']::-webkit-search-decoration,
    input[type='tel']::-webkit-search-decoration,
    input[type='url']::-webkit-search-decoration,
    textarea::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    input[type='text']::webkit-inner-spin-button,
    input[type='password']::webkit-inner-spin-button,
    input[type='number']::webkit-inner-spin-button,
    input[type='date']::webkit-inner-spin-button,
    input[type='month']::webkit-inner-spin-button,
    input[type='week']::webkit-inner-spin-button,
    input[type='time']::webkit-inner-spin-button,
    input[type='datetime']::webkit-inner-spin-button,
    input[type='datetime-local']::webkit-inner-spin-button,
    input[type='email']::webkit-inner-spin-button,
    input[type='search']::webkit-inner-spin-button,
    input[type='tel']::webkit-inner-spin-button,
    input[type='url']::webkit-inner-spin-button,
    textarea::webkit-inner-spin-button,
    input[type='text']::-webkit-outer-spin-button,
    input[type='password']::-webkit-outer-spin-button,
    input[type='number']::-webkit-outer-spin-button,
    input[type='date']::-webkit-outer-spin-button,
    input[type='month']::-webkit-outer-spin-button,
    input[type='week']::-webkit-outer-spin-button,
    input[type='time']::-webkit-outer-spin-button,
    input[type='datetime']::-webkit-outer-spin-button,
    input[type='datetime-local']::-webkit-outer-spin-button,
    input[type='email']::-webkit-outer-spin-button,
    input[type='search']::-webkit-outer-spin-button,
    input[type='tel']::-webkit-outer-spin-button,
    input[type='url']::-webkit-outer-spin-button,
    textarea::-webkit-outer-spin-button {
      height: auto;
    }

    input[type='text']:focus,
    input[type='password']:focus,
    input[type='number']:focus,
    input[type='date']:focus,
    input[type='month']:focus,
    input[type='week']:focus,
    input[type='time']:focus,
    input[type='datetime']:focus,
    input[type='datetime-local']:focus,
    input[type='email']:focus,
    input[type='search']:focus,
    input[type='tel']:focus,
    input[type='url']:focus,
    textarea:focus,
    input[type='text']:invalid,
    input[type='password']:invalid,
    input[type='number']:invalid,
    input[type='date']:invalid,
    input[type='month']:invalid,
    input[type='week']:invalid,
    input[type='time']:invalid,
    input[type='datetime']:invalid,
    input[type='datetime-local']:invalid,
    input[type='email']:invalid,
    input[type='search']:invalid,
    input[type='tel']:invalid,
    input[type='url']:invalid,
    textarea:invalid {
      box-shadow: none;
      outline-width: 0;
    }

    input[type='text']:-webkit-autofill,
    input[type='password']:-webkit-autofill,
    input[type='number']:-webkit-autofill,
    input[type='date']:-webkit-autofill,
    input[type='month']:-webkit-autofill,
    input[type='week']:-webkit-autofill,
    input[type='time']:-webkit-autofill,
    input[type='datetime']:-webkit-autofill,
    input[type='datetime-local']:-webkit-autofill,
    input[type='email']:-webkit-autofill,
    input[type='search']:-webkit-autofill,
    input[type='tel']:-webkit-autofill,
    input[type='url']:-webkit-autofill,
    textarea:-webkit-autofill {
      box-shadow: 0 0 0 1000px white inset;
    }

    input[type='text']::placeholder,
    input[type='password']::placeholder,
    input[type='number']::placeholder,
    input[type='date']::placeholder,
    input[type='month']::placeholder,
    input[type='week']::placeholder,
    input[type='time']::placeholder,
    input[type='datetime']::placeholder,
    input[type='datetime-local']::placeholder,
    input[type='email']::placeholder,
    input[type='search']::placeholder,
    input[type='tel']::placeholder,
    input[type='url']::placeholder,
    textarea::placeholder {
      color: inherit;
      opacity: .3;
    }

    form {
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
      position: static;
      text-decoration: none;
      text-rendering: optimizeLegibility;
      text-size-adjust: 100%;
    }

    a {
      background-color: transparent;
      text-decoration: none;
    }

    a:active,
    a:hover {
      outline: 0;
      text-decoration: none;
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
      border: none;
      box-sizing: border-box;
      margin: 0;
      outline: none;
      padding: 0;
      position: relative;
    }

    td,
    th,
    tbody {
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
  `)
}
