import { HexStringPrefix, RGBATuple, RGBTuple, UnitTuple } from '../types'

/**
 * Converts a hex number/string representing a color to an RGB tuple.
 *
 * @param val - Hex number/string representing a color.
 * @param prefix - Prefix of hex if using a string.
 *
 * @returns RGB tuple in the format of `[r, g, b]`.
 *
 * @example
 * ```js
 * toRGBTuple('#fff') // Returns '[255, 255, 255]'
 * toRGBTuple('0x000', '0x') // Returns '[0, 0, 0]'
 * ```
 */
export function toRGBTuple(val: string | number, prefix: HexStringPrefix = '#'): RGBTuple {
  const t = typeof val === 'string' ? toHexNumber(val, prefix) : val
  const r = (t & 0xFF0000) >> 16
  const g = (t & 0xFF00) >> 8
  const b = (t & 0xFF)

  return [r, g, b]
}

/**
 * Converts a hex number/string representing a color to an RGB string.
 *
 * @param val - Hex number/string representing a color.
 * @param prefix - Prefix of hex if using a string.
 *
 * @returns RGB string.
 *
 * @example
 * ```js
 * toRGBString('#fff') // Returns 'rgb(255,255,255)'
 * toRGBString('0x000', '0x') // Returns 'rgb(0,0,0)'
 * ```
 */
export function toRGBString(val: string | number, prefix: HexStringPrefix = '#'): string {
  const [r, g, b] = toRGBTuple(val, prefix)
  return `rgb(${r},${g},${b})`
}

/**
 * Converts a hex number/string representing a color and an alpha value to an RGBA tuple.
 *
 * @param val - Hex number/string representing a color.
 * @param alpha - The alpha level, between 0.0 - 1.0, inclusive.
 * @param prefix - Prefix of hex if using a string.
 *
 * @returns RGBA tuple in the format of `[r, g, b, a]`.
 *
 * @example
 * ```js
 * toRGBATuple('#fff', 0.5) // Returns '[255,255,255,0.5]'
 * toRGBATuple('0x000', 1, '0x') // Returns '[0,0,0,1]'
 * ```
 */
export function toRGBATuple(val: string | number, alpha: number, prefix: HexStringPrefix = '#'): RGBATuple {
  const [r, g, b] = toRGBTuple(val, prefix)
  return [r, g, b, alpha]
}

/**
 * Converts a hex number/string representing a color and an alpha value to an RGBA string.
 *
 * @param val - Hex number/string representing a color.
 * @param alpha - The alpha level, between 0.0 - 1.0, inclusive.
 * @param prefix - Prefix of hex if using a string.
 *
 * @returns RGBA string.
 *
 * @example
 * ```js
 * toRGBAString('#fff', 0.5) // Returns 'rgba(255,255,255,0.5)'
 * toRGBAString('0x000', 1, '0x') // Returns 'rgba(0,0,0,1)'
 * ```
 */
export function toRGBAString(val: string | number, alpha: number, prefix: HexStringPrefix = '#'): string {
  const [r, g, b, a] = toRGBATuple(val, alpha, prefix)
  return `rgba(${r},${g},${b},${a})`
}

/**
 * Converts a hex number value to a hex string with customizable prefix.
 *
 * @param val - Hex number value.
 * @param prefix - Output string prefix.
 *
 * @returns Converted hex string.
 *
 * @example
 * ```js
 * toHexString(16777215) // Returns '#ffffff'
 * toHexString(0, '0x') // Returns '#000000'
 * ```
 */
export function toHexString(val: number, prefix: HexStringPrefix = '#'): string {
  return shortToLongHex(`${prefix}${val.toString(16)}`)
}

/**
 * Converts a hex string to a hex number.
 *
 * @param val - Hex string.
 * @param prefix - Prefix to look out for.
 *
 * @returns Hex number.
 *
 * @example
 * ```js
 * toHexNumber('#000') // Returns 0
 * toHexNumber('#fff') // Returns 16777215
 * toHexNumber('0xfff', '0x') // Returns 16777215
 * ```
 */
export function toHexNumber(val: string, prefix: HexStringPrefix = '#'): number {
  const t1 = isShortHex(val, prefix) ? shortToLongHex(val, prefix) : val
  const t2 = t1.startsWith(prefix) ? t1.substring(prefix.length) : t1
  return parseInt(t2, 16)
}

/**
 * Determines if a hex string is in CSS shorthand notation.
 *
 * @param val - The hex string to test against.
 * @param prefix - Prefix of hex string.
 *
 * @returns `true` if the hex string is in shorthand notation, `false` otherwise.
 *
 * @example
 * ```js
 * isShortHex('#000') // Returns `true`
 * isShortHex('0x000', '0x') // Returns `true`
 * isShortHex('0x000000', '0x') // Returns `false`
 * isShortHex('#000', '0x') // Returns `false`
 * ```
 */
export function isShortHex(val: string, prefix: HexStringPrefix = '#'): boolean {
  if (!val.startsWith(prefix)) return false

  const t = val.substring(prefix.length)

  if (t.length === 3) return true
  return false
}

/**
 * Converts a shorthand hex string to a longhand hex string.
 *
 * @param val - Shorthand hex string.
 * @param prefix - Prefix of hex string.
 *
 * @returns Longhand hex string.
 *
 * @example
 * ```js
 * shortToLongHex('#fff') // Returns '#ffffff'
 * shortToLongHex('0x000', '0x') // Returns '0x000000'
 * ```
 */
export function shortToLongHex(val: string, prefix: HexStringPrefix = '#'): string {
  const t = val.startsWith(prefix) ? val.substring(prefix.length) : val

  if (isShortHex(val, prefix)) {
    return `${prefix}${t.replace(/(\w)(\w)(\w)/, '$1$1$2$2$3$3')}`
  }
  else {
    return t.padStart(6, '0')
  }
}

/**
 * Parses a number or string representing a number with units. The result is a tuple type with the
 * number and unit separated. If the `value` provided is a number, the default unit is `px`.
 *
 * @param value - String or number to parse.
 * @param defaultUnit - Default unit if the unit is absent.
 *
 * @returns Parsed number/unit tuple.
 *
 * @example
 * ```js
 * parseUnit('1px') // Returns [1, 'px']
 * parseUnit('1em', 'em') // Returns [1, 'em']
 * ```
 */
export function parseUnit(val: string | number, defaultUnit = 'px'): UnitTuple {
  const str = String(val)

  return [parseFloat(str), str.match(/[\d.\-+]*\s*(.*)/)?.[1] ?? defaultUnit]
}

/**
 * Converts any string, number, or array of either type to a valid CSS property.
 *
 * @param value - The value to convert. If it is a number, it will be suffixed with the provided
 *                unit. If it is an array, the returned CSS property will be a comma delimited
 *                string of all the values.
 * @param unit - The unit to append to number values.
 *
 * @returns A valid CSS property.
 *
 * @throws Invalid value provided.
 */
export function toCSSProperty(value: number | string | (number | string)[], unit?: string): string {
  if (typeof value === 'number') {
    return `${value}${unit || ''}`
  }
  else if (typeof value === 'string') {
    return value
  }
  else if (value instanceof Array) {
    return value.map(v => toCSSProperty(v, unit)).join(', ')
  }
  else {
    throw new Error('Unsupported value type')
  }
}
