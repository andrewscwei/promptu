/**
 * Formats a CSS string.
 *
 * @param val - CSS string.
 *
 * @returns The formatted CSS string.
 *
 * @private
 */
export default function format(val: string): string {
  return val.replace(/(\n+|\r+)\s+/g, ' ').trim()
}
