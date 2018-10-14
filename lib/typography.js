const { css } = require('styled-components');

/**
 * All supported font weights.
 */
exports.fontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

/**
 * Infers the font format from a font file path.
 *
 * @param {string} path - The path of the font file.
 *
 * @return {string} The font format.
 */
exports.getFontFormatFromPath = (path) => {
  const ext = path.split('.').pop();

  if (!ext) return 'opentype';

  if (ext.startsWith('eot')) {
    return 'eot';
  }
  else if (ext.startsWith('woff2')) {
    return 'woff2';
  }
  else if (ext.startsWith('woff')) {
    return 'woff';
  }
  else if (ext.startsWith('ttf')) {
    return 'truetype';
  }
  else if (ext.startsWith('otf')) {
    return 'opentype';
  }
  else if (ext.startsWith('svg')) {
    return 'svg';
  }

  return 'opentype';
};

/**
 * Infers the font style from a font file path.
 *
 * @param {string} path - Path of the font file.
 *
 * @return {string} The font style of the font file.
 */
exports.getFontStyleFromPath = (path) => {
  const basename = path.split('/').pop();

  if (!basename) return 'normal';

  if (~basename.search(/italic/i)) {
    return 'italic';
  }
  else if (~basename.search(/oblique/i)) {
    return 'oblique';
  }
  else {
    return 'normal';
  }
};


/**
 * Infers the font weight from a font file path.
 *
 * @param {string} path - Path of the font file.
 *
 * @return {string|number} - The font weight of the font file.
 */
exports.getFontWeightFromPath = (path) => {
  const basename = path.split('/').pop();

  if (!basename) return 'normal';

  if (~basename.search(/thin/i)) {
    return exports.fontWeights.thin;
  }
  else if (~basename.search(/extralight/i)) {
    return exports.fontWeights.extraLight;
  }
  else if (~basename.search(/light/i)) {
    return exports.fontWeights.light;
  }
  else if (~basename.search(/regular/i) || ~basename.search(/normal/i)) {
    return exports.fontWeights.normal;
  }
  else if (~basename.search(/medium/i)) {
    return exports.fontWeights.medium;
  }
  else if (~basename.search(/semibold/i)) {
    return exports.fontWeights.semiBold;
  }
  else if (~basename.search(/extrabold/i)) {
    return exports.fontWeights.extraBold;
  }
  else if (~basename.search(/bold/i)) {
    return exports.fontWeights.bold;
  }
  else if (~basename.search(/black/i)) {
    return exports.fontWeights.black;
  }
  else {
    return exports.fontWeights.normal;
  }
};

/**
 * CSS mixin for defining @font-face rules.
 *
 * @param {string} family - Font family.
 * @param {string} src - File path.
 * @param {string|number} [weight] - Font weight, automatically inferred if
 *                                   unspecified.
 * @param {string} [style] - Font style, automatically inferred if unspecified.
 *
 * @return {string} Generated CSS rules.
 */
exports.fontFace = (family, src, weight, style) => {
  return css`
    @font-face {
      font-family: ${family};
      src: url('${src}') format('${exports.getFontFormatFromPath(src)}');
      font-style: ${style || exports.getFontStyleFromPath(src)};
      font-weight: ${weight || exports.getFontWeightFromPath(src)};
    }
  `;
};

/**
 * CSS mixin for defining font style related rules.
 *
 * @param {string} family - Font family.
 * @param {string|number} size - Font size. If the value specified is a number,
 *                               the associated unit will be 'rem'.
 * @param {string|number} [weight=400] - Font weight.
 * @param {string} [style='normal'] - Font style.
 * @param {string|number} [lineHeight='normal'] - Line height. If the value
 *                                                specified is a number, the
 *                                                associated unit will be 'rem'.
 * @param {string|number} [letterSpacing='normal'] - Letter spacing. If the
 *                                                   value specified is a
 *                                                   number, the associated unit
 *                                                   will be 'rem'.
 * @param {string} [variant='normal'] - Font variant.
 *
 * @return {string} Generated CSS rules.
 */
exports.font = (family, size = '1.6rem', weight = exports.fontWeights.normal, style = 'normal', lineHeight = 'normal', letterSpacing = 'normal', variant = 'normal') => {
  return css`
    font-family: ${family || 'sans-serif'};
    font-size: ${typeof size === 'number' ? `${size}rem` : size};
    font-style: ${style};
    font-weight: ${typeof weight === 'number' ? weight : (exports.fontWeights[weight] || weight)};
    font-variant: ${variant};
    line-height: ${typeof lineHeight === 'number' ? `${lineHeight}rem` : lineHeight};
    letter-spacing: ${typeof letterSpacing === 'number' ? `${letterSpacing}rem` : letterSpacing};
  `;
};
