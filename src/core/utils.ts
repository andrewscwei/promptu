/**
 * Converts a hex number/stringvalue representing a color to a RGB tuple.
 *
 * @param val - Hex number/string value representing a color.
 * @param prefix - Output string prefix.
 *
 * @return RGB tuple.
 */
export function toRGBTuple(val: string | number, prefix: string = '#'): [number, number, number] {
  const t = typeof val === 'string' ? toHexNumber(val, prefix) : val;
  const r = (t & 0xFF0000) >> 16;
  const g = (t & 0xFF00) >> 8;
  const b = (t & 0xFF);

  return [r, g, b];
}

/**
 * Converts a hex number/stringvalue representing a color to a RGB string.
 *
 * @param val - Hex number/string value representing a color.
 * @param prefix - Output string prefix.
 *
 * @return RGB string.
 */
export function toRGBString(val: string | number, prefix: string = '#'): string {
  const t = toRGBTuple(val, prefix);
  return t.join(',');
}

/**
 * Converts a hex number value to a hex string with customizable prefix.
 *
 * @param val - Hex number value.
 * @param prefix - Output string prefix.
 *
 * @return Converted hex string.
 */
export function toHexString(val: number, prefix: string = '#'): string {
  return `${prefix}${val.toString(16)}`;
}

/**
 * Converts a hex string to a hex number.
 *
 * @param val - Hex string.
 * @param prefix - Prefix to look out for.
 *
 * @return Hex number.
 */
export function toHexNumber(val: string, prefix: string = '#'): number {
  const t1 = isShortHex(val, prefix) ? shortToLongHex(val, prefix) : val;
  const t2 = t1.startsWith(prefix) ? t1.substring(prefix.length) : t1;
  return parseInt(t2, 16);
}

/**
 * Determines if a hex string is in CSS shorthand notation.
 *
 * @param val - The hex string to test against.
 * @param prefix - Prefix to look out for.
 *
 * @return `true` if the hex string is in shorthand notation, `false` otherwise.
 */
export function isShortHex(val: string, prefix: string = '#'): boolean {
  const t = val.startsWith(prefix) ? val.substring(prefix.length) : val;
  if (t.length === 3) return true;
  return false;
}

/**
 * Converts a shorthand hex value to a longhand hex value.
 *
 * @param val - Shorthand hex value.
 * @param prefix - Prefix to look out for.
 *
 * @return Longhand hex value.
 */
export function shortToLongHex(val: string, prefix: string = '#'): string {
  if (!isShortHex(val, prefix)) return val;
  const t = val.startsWith(prefix) ? val.substring(prefix.length) : val;
  return `${prefix}${t.replace(/(\w)(\w)(\w)/, '$1$1$2$2$3$3')}`;
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
 */
export function parseUnit(val: string | number, defaultUnit: string = 'px'): [number, string] {
  const str = String(val);

  return [parseFloat(str), str.match(/[\d.\-+]*\s*(.*)/)![1] || defaultUnit];
}
