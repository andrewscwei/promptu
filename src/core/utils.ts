/**
 * Converts a hex number/stringvalue representing a color to a RGB tuple.
 *
 * @param val - Hex number/string value representing a color.
 * @param prefix - Output string prefix.
 *
 * @return RGB tuple.
 *
 * @example
 * ```js
 * toRGBTuple('#fff') // Returns '[255, 255, 255]'
 * toRGBTuple('0x000', '0x') // Returns '[0, 0, 0]'
 * ```
 */
export function toRGBTuple(val: string | number, prefix = '#'): [number, number, number] {
  const t = typeof val === 'string' ? toHexNumber(val, prefix) : val
  const r = (t & 0xFF0000) >> 16
  const g = (t & 0xFF00) >> 8
  const b = (t & 0xFF)

  return [r, g, b]
}

/**
 * Converts a hex number/stringvalue representing a color to a RGB string.
 *
 * @param val - Hex number/string value representing a color.
 * @param prefix - Output string prefix.
 *
 * @return RGB string.
 *
 * @example
 * ```js
 * toRGBString('#fff') // Returns '255,255,255'
 * toRGBString('0x000', '0x') // Returns '0,0,0'
 * ```
 */
export function toRGBString(val: string | number, prefix = '#'): string {
  const t = toRGBTuple(val, prefix)
  return t.join(',')
}

/**
 * Converts a hex number value to a hex string with customizable prefix.
 *
 * @param val - Hex number value.
 * @param prefix - Output string prefix.
 *
 * @return Converted hex string.
 *
 * @example
 * ```js
 * toHexString(16777215) // Returns '#ffffff'
 * toHexString(0, '0x') // Returns '#000000'
 * ```
 */
export function toHexString(val: number, prefix = '#'): string {
  return shortToLongHex(`${prefix}${val.toString(16)}`)
}

/**
 * Converts a hex string to a hex number.
 *
 * @param val - Hex string.
 * @param prefix - Prefix to look out for.
 *
 * @return Hex number.
 *
 * @example
 * ```js
 * toHexNumber('#000') // Returns 0
 * toHexNumber('#fff') // Returns 16777215
 * toHexNumber('0xfff', '0x') // Returns 16777215
 * ```
 */
export function toHexNumber(val: string, prefix = '#'): number {
  const t1 = isShortHex(val, prefix) ? shortToLongHex(val, prefix) : val
  const t2 = t1.startsWith(prefix) ? t1.substring(prefix.length) : t1
  return parseInt(t2, 16)
}

/**
 * Determines if a hex string is in CSS shorthand notation.
 *
 * @param val - The hex string to test against.
 * @param prefix - Prefix to look out for.
 *
 * @return `true` if the hex string is in shorthand notation, `false` otherwise.
 *
 * @example
 * ```js
 * isShortHex('#000') // Returns `true`
 * isShortHex('0x000', '0x') // Returns `true`
 * isShortHex('0x000000', '0x') // Returns `false`
 * isShortHex('#000', '0x') // Returns `false`
 * ```
 */
export function isShortHex(val: string, prefix = '#'): boolean {
  if (!val.startsWith(prefix)) return false

  const t = val.substring(prefix.length)

  if (t.length === 3) return true
  return false
}

/**
 * Converts a shorthand hex value to a longhand hex value.
 *
 * @param val - Shorthand hex value.
 * @param prefix - Prefix to look out for.
 *
 * @return Longhand hex value.
 *
 * @example
 * ```js
 * shortToLongHex('#fff') // Returns '#ffffff'
 * shortToLongHex('0x000', '0x') // Returns '0x000000'
 * ```
 */
export function shortToLongHex(val: string, prefix = '#'): string {
  const t = val.startsWith(prefix) ? val.substring(prefix.length) : val

  if (isShortHex(val, prefix)) {
    return `${prefix}${t.replace(/(\w)(\w)(\w)/, '$1$1$2$2$3$3')}`
  }
  else {
    return t.padStart(6, '0')
  }
}

/**
 * Parses a number or string representing a number with unit and returns a
 * tuple with the number value and string unit. If a number is provided, the
 * default unit is `px`.
 *
 * @param value - String or number to parse.
 * @param defaultUnit - Default unit if the unit is absent.
 *
 * @return Parsed value-unit tuple.
 *
 * @example
 * ```js
 * parseUnit('1px') // Returns [1, 'px']
 * parseUnit('1em', 'em') // Returns [1, 'em']
 * ```
 */
export function parseUnit(val: string | number, defaultUnit = 'px'): [number, string] {
  const str = String(val)

  return [parseFloat(str), str.match(/[\d.\-+]*\s*(.*)/)?.[1] ?? defaultUnit]
}

/**
 * Converts a value to a valid CSS property.
 *
 * @param value - The value to convert. If it is a number, it will be suffixed
 *                with the provided unit. If it is an array, the output CSS
 *                property will be a comma delimited string of all the values.
 * @param unit - The unit to append to the number value(s).
 *
 * @return CSS string.
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
