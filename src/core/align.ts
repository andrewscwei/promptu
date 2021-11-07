import { Alignment } from '../types'
import minify from '../utils/minify'

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
  return minify(`
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
  return minify(`
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
export function horizontalPadding(value: string) : string {
  return minify(`
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
  return minify(`
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

  return minify(`
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

  return minify(`
    ${t}
    position: fixed;
  `)
}

/**
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
export const tl: string = abs('tl')

/**
 * ```css
 * {
 *   bottom: unset;
 *   left: 0;
 *   margin: 0 auto;
 *   position: absolute;
 *   right: 0;
 *   top: 0;
 * }
 * ```
 */
export const tc: string = abs('tc')

/**
 * ```css
 * {
 *   bottom: unset;
 *   left: unset;
 *   margin: 0;
 *   position: absolute;
 *   right: 0;
 *   top: 0;
 * }
 * ```
 */
export const tr: string = abs('tr')

/**
 * ```css
 * {
 *   bottom: 0;
 *   left: 0;
 *   margin: auto 0;
 *   position: absolute;
 *   right: unset;
 *   top: 0;
 * }
 * ```
 */
export const cl: string = abs('cl')

/**
 * ```css
 * {
 *   bottom: 0;
 *   left: 0;
 *   margin: auto;
 *   position: absolute;
 *   right: 0;
 *   top: 0;
 * }
 * ```
 */
export const cc: string = abs('cc')

/**
 * ```css
 * {
 *   bottom: 0;
 *   left: unset;
 *   margin: auto 0;
 *   position: absolute;
 *   right: 0;
 *   top: 0;
 * }
 * ```
 */
export const cr: string = abs('cr')

/**
 * ```css
 * {
 *   bottom: 0;
 *   left: 0;
 *   margin: 0;
 *   position: absolute;
 *   right: unset;
 *   top: unset;
 * }
 * ```
 */
export const bl: string = abs('bl')

/**
 * ```css
 * {
 *   bottom: 0;
 *   left: 0;
 *   margin: 0 auto;
 *   position: absolute;
 *   right: 0;
 *   top: unset;
 * }
 * ```
 */
export const bc: string = abs('bc')

/**
 * ```css
 * {
 *   bottom: 0;
 *   left: unset;
 *   margin: 0;
 *   position: absolute;
 *   right: 0;
 *   top: unset;
 * }
 * ```
 */
export const br: string = abs('br')

/**
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
export const ftl: string = fixed('tl')

/**
 * ```css
 * {
 *   bottom: unset;
 *   left: 0;
 *   margin: 0 auto;
 *   position: fixed;
 *   right: 0;
 *   top: 0;
 * }
 * ```
 */
export const ftc: string = fixed('tc')

/**
 * ```css
 * {
 *   bottom: unset;
 *   left: unset;
 *   margin: 0;
 *   position: fixed;
 *   right: 0;
 *   top: 0;
 * }
 * ```
 */
export const ftr: string = fixed('tr')

/**
 * ```css
 * {
 *   bottom: 0;
 *   left: 0;
 *   margin: auto 0;
 *   position: fixed;
 *   right: unset;
 *   top: 0;
 * }
 * ```
 */
export const fcl: string = fixed('cl')

/**
 * ```css
 * {
 *   bottom: 0;
 *   left: 0;
 *   margin: auto;
 *   position: fixed;
 *   right: 0;
 *   top: 0;
 * }
 * ```
 */
export const fcc: string = fixed('cc')

/**
 * ```css
 * {
 *   bottom: 0;
 *   left: unset;
 *   margin: auto 0;
 *   position: fixed;
 *   right: 0;
 *   top: 0;
 * }
 * ```
 */
export const fcr: string = fixed('cr')

/**
 * ```css
 * {
 *   bottom: 0;
 *   left: 0;
 *   margin: 0;
 *   position: fixed;
 *   right: unset;
 *   top: unset;
 * }
 * ```
 */
export const fbl: string = fixed('bl')

/**
 * ```css
 * {
 *   bottom: 0;
 *   left: 0;
 *   margin: 0 auto;
 *   position: fixed;
 *   right: 0;
 *   top: unset;
 * }
 * ```
 */
export const fbc: string = fixed('bc')

/**
 * ```css
 * {
 *   bottom: 0;
 *   left: unset;
 *   margin: 0;
 *   position: fixed;
 *   right: 0;
 *   top: unset;
 * }
 * ```
 */
export const fbr: string = fixed('br')
