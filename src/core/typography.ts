import { FontDisplay, FontStyle, FontVariant, FontWeight, LetterSpacing, LineHeight } from '../types';

/**
 * All supported font weights.
 */
export const fontWeights: { [key: string]: FontWeight } = {
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
 * @param path - The path of the font file.
 *
 * @return The font format.
 */
export function getFontFormatFromPath(path: string): string {
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
}

/**
 * Infers the font style from a font file path.
 *
 * @param path - Path of the font file.
 *
 * @return The font style of the font file.
 */
export function getFontStyleFromPath(path: string): string {
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
}

/**
 * Infers the font weight from a font file path.
 *
 * @param path - Path of the font file.
 *
 * @return The font weight of the font file.
 */
export function getFontWeightFromPath(path: string): FontWeight {
  const basename = path.split('/').pop();

  if (!basename) return 'normal';

  if (~basename.search(/thin/i)) {
    return fontWeights.thin;
  }
  else if (~basename.search(/extralight/i)) {
    return fontWeights.extraLight;
  }
  else if (~basename.search(/light/i)) {
    return fontWeights.light;
  }
  else if (~basename.search(/regular/i) || ~basename.search(/normal/i)) {
    return fontWeights.normal;
  }
  else if (~basename.search(/medium/i)) {
    return fontWeights.medium;
  }
  else if (~basename.search(/semibold/i)) {
    return fontWeights.semiBold;
  }
  else if (~basename.search(/extrabold/i)) {
    return fontWeights.extraBold;
  }
  else if (~basename.search(/bold/i)) {
    return fontWeights.bold;
  }
  else if (~basename.search(/black/i)) {
    return fontWeights.black;
  }
  else {
    return fontWeights.normal;
  }
}

/**
 * CSS mixin for defining @font-face rules.
 *
 * @param family - Font family.
 * @param src - File path.
 * @param weight - Font weight, automatically inferred if unspecified.
 * @param style - Font style, automatically inferred if unspecified.
 * @param display - Font display, automatically inferred if
 *                             unspecified.
 *
 * @return Generated CSS rules.
 */
export function fontFace(family: string, src: string, weight?: FontWeight, style?: FontStyle, display?: FontDisplay): string {
  return `
    @font-face {
      font-family: ${family};
      src: url('${src}') format('${getFontFormatFromPath(src)}');
      font-style: ${style || getFontStyleFromPath(src)};
      font-weight: ${weight || getFontWeightFromPath(src)};
      font-display: ${display || 'auto'};
    }
  `;
}

/**
 * CSS mixin for defining font style related rules.
 *
 * @param family - Font family.
 * @param size - Font size. If the value specified is a number, the associated
 *               unit will be 'rem'.
 * @param weight - Font weight.
 * @param style - Font style.
 * @param lineHeight - Line height. If the value specified is a number, the
 *                     associated unit will be 'rem'.
 * @param letterSpacing - Letter spacing. If the value specified is a number,
 *                        the associated unit will be 'rem'.
 * @param variant - Font variant.
 *
 * @return Generated CSS rules.
 */
export function font(family: string, size: string | number = '1.6rem', weight: FontWeight = fontWeights.normal, style: FontStyle = 'normal', lineHeight: LineHeight = 'normal', letterSpacing: LetterSpacing = 'normal', variant: FontVariant = 'normal'): string {
  return `
    font-family: ${family || 'sans-serif'};
    font-size: ${typeof size === 'number' ? `${size}rem` : size};
    font-style: ${style};
    font-weight: ${typeof weight === 'number' ? weight : (fontWeights[weight] || weight)};
    font-variant: ${variant};
    line-height: ${typeof lineHeight === 'number' ? `${lineHeight}rem` : lineHeight};
    letter-spacing: ${typeof letterSpacing === 'number' ? `${letterSpacing}rem` : letterSpacing};
  `;
}
