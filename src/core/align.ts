import { Alignment } from '../types'
import format from '../utils/format'

/**
 * Applies horizontal margins to an element.
 *
 * @param value - Margin value.
 *
 * @returns CSS string.
 *
 * @example
 * ```js
 * horizontalMargin('0') // Returns...
 * ```
 *
 * ```css
 * {
 *   margin-left: 0;
 *   margin-right: 0;
 * }
 * ```
 */
export function horizontalMargin(value: string): string {
  return format(`
    margin-left: ${value};
    margin-right: ${value};
  `)
}

/**
 * Applies vertical margins to an element.
 *
 * @param value - Margin value.
 *
 * @returns CSS string.
 *
 * @example
 * ```js
 * verticalMargin('0') // Returns...
 * ```
 *
 * ```css
 * {
 *   margin-top: 0;
 *   margin-bottom: 0;
 * }
 * ```
 */
export function verticalMargin(value: string): string {
  return format(`
    margin-top: ${value};
    margin-bottom: ${value};
  `)
}

/**
 * Applies horizontal paddings to an element.
 *
 * @param value - Padding value.
 *
 * @returns CSS string.
 *
 * @example
 * ```js
 * horizontalPadding('0') // Returns...
 * ```
 *
 * ```css
 * {
 *   padding-left: 0;
 *   padding-right: 0;
 * }
 * ```
 */
export function horizontalPadding(value: string): string {
  return format(`
    padding-left: ${value};
    padding-right: ${value};
  `)
}

/**
 * Applies vertical paddings to an element.
 *
 * @param value - Padding value.
 *
 * @returns CSS string.
 *
 * @example
 * ```js
 * verticalPadding('0') // Returns...
 * ```
 *
 * ```css
 * {
 *   padding-top: 0;
 *   padding-bottom: 0;
 * }
 * ```
 */
export function verticalPadding(value: string): string {
  return format(`
    padding-top: ${value};
    padding-bottom: ${value};
  `)
}

/**
 * Applies horizontal margins to an element.
 *
 * @param value - Margin value.
 *
 * @returns CSS string.
 *
 * @example
 * ```js
 * hm('0') // Returns...
 * ```
 *
 * ```css
 * {
 *   margin-left: 0;
 *   margin-right: 0;
 * }
 * ```
 */
export const hm = horizontalMargin

/**
 * Applies vertical margins to an element.
 *
 * @param value - Margin value.
 *
 * @returns CSS string.
 *
 * @example
 * ```js
 * vm('0') // Returns...
 * ```
 *
 * ```css
 * {
 *   margin-top: 0;
 *   margin-bottom: 0;
 * }
 * ```
 */
export const vm = verticalMargin

/**
 * Applies horizontal paddings to an element.
 *
 * @param value - Padding value.
 *
 * @returns CSS string.
 *
 * @example
 * ```js
 * hp('0') // Returns...
 * ```
 *
 * ```css
 * {
 *   padding-left: 0;
 *   padding-right: 0;
 * }
 * ```
 */
export const hp = horizontalPadding

/**
 * Applies vertical paddings to an element.
 *
 * @param value - Padding value.
 *
 * @returns CSS string.
 *
 * @example
 * ```js
 * vp('0') // Returns...
 * ```
 *
 * ```css
 * {
 *   padding-top: 0;
 *   padding-bottom: 0;
 * }
 * ```
 */
export const vp = verticalPadding

/**
 * Applies absolute alignment to an element.
 *
 * @param alignment - Alignment style.
 *
 * @returns CSS string.
 *
 * @example
 * ```js
 * abs('tl') // Returns...
 * ```
 *
 * ```css
 * {
 *   bottom: unset;
 *   left: 0;
 *   margin: 0;
 *   position: absolute;
 *   right: unset;
 *   top: 0;
 * }
 * ```
 */
export function abs(alignment: Alignment = 'cc'): string {
  let t

  switch (alignment) {
    case 'tl':
      t = `
      bottom: unset;
      left: 0;
      margin: 0;
      right: unset;
      top: 0;
    `
      break
    case 'tc':
      t = `
      bottom: unset;
      left: 0;
      margin: 0 auto;
      right: 0;
      top: 0;
    `
      break
    case 'tr':
      t = `
      bottom: unset;
      left: unset;
      margin: 0;
      right: 0;
      top: 0;
    `
      break
    case 'cl':
      t = `
      bottom: 0;
      left: 0;
      margin: auto 0;
      right: unset;
      top: 0;
    `
      break
    case 'cr':
      t = `
      bottom: 0;
      left: unset;
      margin: auto 0;
      right: 0;
      top: 0;
    `
      break
    case 'bl':
      t = `
      bottom: 0;
      left: 0;
      margin: 0;
      right: unset;
      top: unset;
    `
      break
    case 'bc':
      t = `
      bottom: 0;
      left: 0;
      margin: 0 auto;
      right: 0;
      top: unset;
    `
      break
    case 'br':
      t = `
      bottom: 0;
      left: unset;
      margin: 0;
      right: 0;
      top: unset;
    `
      break
    default:
      t = `
      bottom: 0;
      left: 0;
      margin: auto;
      right: 0;
      top: 0;
    `
  }

  return format(`
    ${t}
    position: absolute;
  `)
}

/**
 * Applies fixed alignment to an element.
 *
 * @param alignment - Alignment style.
 *
 * @returns CSS string.
 *
 * @example
 * ```js
 * fixed('tl') // Returns...
 * ```
 *
 * ```css
 * {
 *   bottom: unset;
 *   left: 0;
 *   margin: 0;
 *   position: fixed;
 *   right: unset;
 *   top: 0;
 * }
 * ```
 */
export function fixed(alignment: Alignment = 'cc'): string {
  let t

  switch (alignment) {
    case 'tl':
      t = `
      bottom: unset;
      left: 0;
      margin: 0;
      right: unset;
      top: 0;
    `
      break
    case 'tc':
      t = `
      bottom: unset;
      left: 0;
      margin: 0 auto;
      right: 0;
      top: 0;
    `
      break
    case 'tr':
      t = `
      bottom: unset;
      left: unset;
      margin: 0;
      right: 0;
      top: 0;
    `
      break
    case 'cl':
      t = `
      bottom: 0;
      left: 0;
      margin: auto 0;
      right: unset;
      top: 0;
    `
      break
    case 'cr':
      t = `
      bottom: 0;
      left: unset;
      margin: auto 0;
      right: 0;
      top: 0;
    `
      break
    case 'bl':
      t = `
      bottom: 0;
      left: 0;
      margin: 0;
      right: unset;
      top: unset;
    `
      break
    case 'bc':
      t = `
      bottom: 0;
      left: 0;
      margin: 0 auto;
      right: 0;
      top: unset;
    `
      break
    case 'br':
      t = `
      bottom: 0;
      left: unset;
      margin: 0;
      right: 0;
      top: unset;
    `
      break
    default:
      t = `
      bottom: 0;
      left: 0;
      margin: auto;
      right: 0;
      top: 0;
    `
  }

  return format(`
    ${t}
    position: fixed;
  `)
}
