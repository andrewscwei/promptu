/**
 * Shallow minification of a CSS string.
 *
 * @param val - CSS string.
 *
 * @returns The minified CSS string.
 *
 * @private
 */
export default function minify(val: string): string {
  return val.replace(/(\n+|\r+)\s+/g, ' ').trim()
}
