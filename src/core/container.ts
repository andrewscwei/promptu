import { Alignment } from '../types'
import format from '../utils/format'

/**
 * Transforms an element to a flex box where the child elements are horizontally
 * aligned.
 *
 * @param alignment - Alignment style of child elements.
 * @param isInline - Specifies if the element is inline (`inline-flex` instead
 *                   of `flex`).
 *
 * @returns CSS string.
 *
 * @example
 * ```js
 * flexvh('tl') \\ Returns...
 * ```
 *
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row;
 *   flex-wrap: nowrap;
 *   justify-content: flex-start;
 * }
 * ```
 */
export function flexh(alignment: Alignment = 'cc', isInline = false): string {
  let t

  switch (alignment) {
    case 'tl':
      t = `
      align-items: flex-start;
      justify-content: flex-start;
    `
      break
    case 'tc':
      t = `
      align-items: flex-start;
      justify-content: center;
    `
      break
    case 'tr':
      t = `
      align-items: flex-start;
      justify-content: flex-end;
    `
      break
    case 'ts':
      t = `
      align-items: flex-start;
      justify-content: space-between;
    `
      break
    case 'cl':
      t = `
      align-items: center;
      justify-content: flex-start;
    `
      break
    case 'cr':
      t = `
      align-items: center;
      justify-content: flex-end;
    `
      break
    case 'cs':
      t = `
      align-items: center;
      justify-content: space-between;
    `
      break
    case 'bl':
      t = `
      align-items: flex-end;
      justify-content: flex-start;
    `
      break
    case 'bc':
      t = `
      align-items: flex-end;
      justify-content: center;
    `
      break
    case 'br':
      t = `
      align-items: flex-end;
      justify-content: flex-end;
    `
      break
    case 'bs':
      t = `
      align-items: flex-end;
      justify-content: space-between;
    `
      break
    case 'sl':
      t = `
      align-items: stretch;
      justify-content: flex-start;
    `
      break
    case 'sc':
      t = `
      align-items: stretch;
      justify-content: center;
    `
      break
    case 'sr':
      t = `
      align-items: stretch;
      justify-content: flex-end;
    `
      break
    case 'ss':
      t = `
      align-items: stretch;
      justify-content: space-between;
    `
      break
    default:
      t = `
      align-items: center;
      justify-content: center;
    `
  }

  return format(`
    ${t}
    box-sizing: border-box;
    display: ${isInline ? 'inline-flex' : 'flex'};
    flex-direction: row;
    flex-wrap: nowrap;
  `)
}

/**
 * Transforms an element to a flex box where the child elements are reverse
 * horizontally aligned.
 *
 * @param alignment - Alignment style of child elements.
 * @param isInline - Specifies if the element is inline (`inline-flex` instead
 *                   of `flex`).
 *
 * @returns CSS string.
 *
 * @example
 * ```js
 * flexrh('tl') // Returns...
 * ```
 *
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: flex-end;
 * }
 * ```
 */
export function flexrh(alignment: Alignment = 'cc', isInline = false): string {
  let t

  switch (alignment) {
    case 'tl':
      t = `
      align-items: flex-start;
      justify-content: flex-end;
    `
      break
    case 'tc':
      t = `
      align-items: flex-start;
      justify-content: center;
    `
      break
    case 'tr':
      t = `
      align-items: flex-start;
      justify-content: flex-start;
    `
      break
    case 'ts':
      t = `
      align-items: flex-start;
      justify-content: space-between;
    `
      break
    case 'cl':
      t = `
      align-items: center;
      justify-content: flex-end;
    `
      break
    case 'cr':
      t = `
      align-items: center;
      justify-content: flex-start;
    `
      break
    case 'cs':
      t = `
      align-items: center;
      justify-content: space-between;
    `
      break
    case 'bl':
      t = `
      align-items: flex-end;
      justify-content: flex-end;
    `
      break
    case 'bc':
      t = `
      align-items: flex-end;
      justify-content: center;
    `
      break
    case 'br':
      t = `
      align-items: flex-end;
      justify-content: flex-start;
    `
      break
    case 'bs':
      t = `
      align-items: flex-end;
      justify-content: space-between;
    `
      break
    case 'sl':
      t = `
      align-items: stretch;
      justify-content: flex-end;
    `
      break
    case 'sc':
      t = `
      align-items: stretch;
      justify-content: center;
    `
      break
    case 'sr':
      t = `
      align-items: stretch;
      justify-content: flex-start;
    `
      break
    case 'ss':
      t = `
      align-items: stretch;
      justify-content: space-between;
    `
      break
    default:
      t = `
      align-items: center;
      justify-content: center;
    `
  }

  return format(`
    ${t}
    box-sizing: border-box;
    display: ${isInline ? 'inline-flex' : 'flex'};
    flex-direction: row-reverse;
    flex-wrap: nowrap;
  `)
}

/**
 * Transforms an element to a flex box where the child elements are vertically
 * aligned.
 *
 * @param alignment - Alignment style of child elements.
 * @param isInline - Specifies if the element is inline (`inline-flex` instead
 *                   of `flex`).
 *
 * @returns CSS string.
 *
 * @example
 * ```js
 * flexv('tl') \\ Returns...
 * ```
 *
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: flex-start;
 * }
 * ```
 */
export function flexv(alignment: Alignment = 'cc', isInline = false): string {
  let t

  switch (alignment) {
    case 'tl':
      t = `
      align-items: flex-start;
      justify-content: flex-start;
    `
      break
    case 'tc':
      t = `
      align-items: center;
      justify-content: flex-start;
    `
      break
    case 'tr':
      t = `
      align-items: flex-end;
      justify-content: flex-start;
    `
      break
    case 'ts':
      t = `
      align-items: stretch;
      justify-content: flex-start;
    `
      break
    case 'cl':
      t = `
      align-items: flex-start;
      justify-content: center;
    `
      break
    case 'cr':
      t = `
      align-items: flex-end;
      justify-content: center;
    `
      break
    case 'cs':
      t = `
      align-items: stretch;
      justify-content: center;
    `
      break
    case 'bl':
      t = `
      align-items: flex-start;
      justify-content: flex-end;
    `
      break
    case 'bc':
      t = `
      align-items: center;
      justify-content: flex-end;
    `
      break
    case 'br':
      t = `
      align-items: flex-end;
      justify-content: flex-end;
    `
      break
    case 'bs':
      t = `
      align-items: stretch;
      justify-content: flex-end;
    `
      break
    case 'sl':
      t = `
      align-items: flex-start;
      justify-content: space-between;
    `
      break
    case 'sc':
      t = `
      align-items: center;
      justify-content: space-between;
    `
      break
    case 'sr':
      t = `
      align-items: flex-end;
      justify-content: space-between;
    `
      break
    case 'ss':
      t = `
      align-items: stretch;
      justify-content: space-between;
    `
      break
    default:
      t = `
      align-items: center;
      justify-content: center;
    `
  }

  return format(`
    ${t}
    box-sizing: border-box;
    display: ${isInline ? 'inline-flex' : 'flex'};
    flex-direction: column;
    flex-wrap: nowrap;
  `)
}

/**
 * Transforms an element to a flex box where the child elements are vertically
 * aligned.
 *
 * @param alignment - Alignment style of child elements.
 * @param isInline - Specifies if the element is inline (`inline-flex` instead
 *                   of `flex`).
 *
 * @returns CSS string.
 *
 * @example
 * ```js
 * flexrv('tl') // Returns...
 * ```
 *
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: flex-end;
 * }
 * ```
 */
export function flexrv(alignment: Alignment = 'cc', isInline = false): string {
  let t

  switch (alignment) {
    case 'tl':
      t = `
      align-items: flex-start;
      justify-content: flex-end;
    `
      break
    case 'tc':
      t = `
      align-items: center;
      justify-content: flex-end;
    `
      break
    case 'tr':
      t = `
      align-items: flex-end;
      justify-content: flex-end;
    `
      break
    case 'ts':
      t = `
      align-items: stretch;
      justify-content: flex-end;
    `
      break
    case 'cl':
      t = `
      align-items: flex-start;
      justify-content: center;
    `
      break
    case 'cr':
      t = `
      align-items: flex-end;
      justify-content: center;
    `
      break
    case 'cs':
      t = `
      align-items: stretch;
      justify-content: center;
    `
      break
    case 'bl':
      t = `
      align-items: flex-start;
      justify-content: flex-start;
    `
      break
    case 'bc':
      t = `
      align-items: center;
      justify-content: flex-start;
    `
      break
    case 'br':
      t = `
      align-items: flex-end;
      justify-content: flex-start;
    `
      break
    case 'bs':
      t = `
      align-items: stretch;
      justify-content: flex-start;
    `
      break
    case 'sl':
      t = `
      align-items: flex-start;
      justify-content: space-between;
    `
      break
    case 'sc':
      t = `
      align-items: center;
      justify-content: space-between;
    `
      break
    case 'sr':
      t = `
      align-items: flex-end;
      justify-content: space-between;
    `
      break
    case 'ss':
      t = `
      align-items: stretch;
      justify-content: space-between;
    `
      break
    default:
      t = `
      align-items: center;
      justify-content: center;
    `
  }

  return format(`
    ${t}
    box-sizing: border-box;
    display: ${isInline ? 'inline-flex' : 'flex'};
    flex-direction: column-reverse;
    flex-wrap: nowrap;
  `)
}
