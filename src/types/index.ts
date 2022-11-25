/**
 * Type of alignment.
 *   - `tl`: Vertically top, horizontally left
 *   - `tc`: Vertically top, horizontally centered
 *   - `tr`: Vertically top, horizontally right
 *   - `ts`: Vertically top, horizontally stretched
 *   - `cl`: Vertically centered, horizontally left
 *   - `cc`: Vertically centered, horizontally centered
 *   - `cr`: Vertically centered, horizontally right
 *   - `cs`: Vertically centered, horizontally stretched
 *   - `bl`: Vertically bottom, horizontally left
 *   - `bc`: Vertically bottom, horizontally centered
 *   - `br`: Vertically bottom, horizontally right
 *   - `bs`: Vertically bottom, horizontally stretched
 *   - `sl`: Vertically stretched, horizontally left
 *   - `sc`: Vertically stretched, horizontally centered
 *   - `sr`: Vertically stretched, horizontally right
 *   - `ss`: Vertically stretched, horizontally stretched
 */
export type Alignment = 'tl' | 'tc' | 'tr' | 'ts' | 'cl' | 'cc' | 'cr' | 'cs' | 'bl' | 'bc' | 'br' | 'bs' | 'sl' | 'sc' | 'sr' | 'ss'

/**
 * CSS `font-style` type.
 */
export type FontStyle = 'normal' | 'italic' | 'oblique'

/**
 * CSS `font-display` type.
 */
export type FontDisplay = 'auto' | 'swap' | 'block' | 'fallback' | 'optional'

/**
 * CSS `font-weight` type.
 */
export type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

/**
 * CSS `font-variant` type.
 */
export type FontVariant = 'normal' | 'small-caps'

/**
 * CSS font format type when providing `src` to `@font-face`.
 */
export type FontFormat = 'eot' | 'woff' | 'woff2' | 'truetype' | 'opentype' | 'svg'

/**
 * CSS `line-height` type.
 */
export type LineHeight = string | number

/**
 * CSS `letter-spacing` type.
 */
export type LetterSpacing = string | number

/**
 * Prefix of a hex string, i.e. `#` in `#ffffff` or `0x` in `0xffffff`.
 */
export type HexStringPrefix = '#' | '0x'

/**
 * A type representing a number and its unit.
 */
export type UnitTuple = [number, string]

/**
 * A type storing RGB values in a tupe-like array. The format is `[red<0-255>,
 * green<0-255>, blue<0-255>]`.
 */
export type RGBTuple = [number, number, number]

/**
 * A type storing RGBA values in a tupe-like array. The format is `[red<0-255>,
 * green<0-255>,
 * blue<0-255>, alpha<0-1>]`.
 */
export type RGBATuple = [number, number, number, number]

/**
 * A dictionary of commonly used font weights.
 */
export interface FontWeightDict {
  thin: 100
  extraLight: 200
  light: 300
  normal: 400
  medium: 500
  semiBold: 600
  bold: 700
  extraBold: 800
  black: 900
}

/**
 * A dictionary defining media query breakpoints for different device types.
 * Each device type contains a `min` and `max` value which can be used to
 * represent either width or height values.
 */
export interface MediaBreakpointDict {
  mobile: {
    min: number
    max: number
  }
  tablet: {
    min: number
    max: number
  }
  notebook: {
    min: number
    max: number
  }
  desktop: {
    min: number
    max: number
  }
  tv: {
    min: number
    max: number
  }
}
