/**
 * Converts a hex number/stringvalue representing a color to a RGB tuple.
 *
 * @param {number|string} val - Hex number/string value representing a color.
 * @param {string} [prefix='#'] - Output string prefix.
 *
 * @return {[number, number, number]} RGB tuple.
 */
exports.toRGBTuple = (val, prefix = `#`) => {
  const t = typeof val === `string` ? exports.toHexNumber(val, prefix) : val;
  const r = (t & 0xFF0000) >> 16;
  const g = (t & 0xFF00) >> 8;
  const b = (t & 0xFF);
  return [r, g, b];
};

/**
 * Converts a hex number/stringvalue representing a color to a RGB string.
 *
 * @param {number|string} val - Hex number/string value representing a color.
 * @param {string} [prefix='#'] - Output string prefix.
 *
 * @return {string} RGB string.
 */
exports.toRGBString = (val, prefix = `#`) => {
  const t = exports.toRGBTuple(val, prefix);
  return t.join(`,`);
};

/**
 * Converts a hex number value to a hex string with customizable prefix.
 *
 * @param {number} val - Hex number value.
 * @param {string} [prefix='#'] - Output string prefix.
 *
 * @return {string} Converted hex string.
 */
exports.toHexString = (val, prefix = `#`) => {
  return `${prefix}${val.toString(16)}`;
};

/**
 * Converts a hex string to a hex number.
 *
 * @param {string} val - Hex string.
 * @param {string} [prefix='#'] - Prefix to look out for.
 *
 * @return {number} Hex number.
 */
exports.toHexNumber = (val, prefix = `#`) => {
  const t1 = exports.isShortHex(val, prefix) ? exports.shortToLongHex(val, prefix) : val;
  const t2 = t1.startsWith(prefix) ? t1.substring(prefix.length) : t1;
  return parseInt(t2, 16);
};

/**
 * Determines if a hex string is in CSS shorthand notation.
 *
 * @param {string} val - The hex string to test against.
 * @param {string} [prefix='#'] - Prefix to look out for.
 *
 * @return {boolean} `true` if the hex string is in shorthand notation, `false`
 *                   otherwise.
 */
exports.isShortHex = (val, prefix = `#`) => {
  const t = val.startsWith(prefix) ? val.substring(prefix.length) : val;
  if (t.length === 3) return true;
  return false;
};

/**
 * Converts a shorthand hex value to a longhand hex value.
 *
 * @param {string} val - Shorthand hex value.
 * @param {string} [prefix='#'] - Prefix to look out for.
 *
 * @return {string} Longhand hex value.
 */
exports.shortToLongHex = (val, prefix = `#`) => {
  if (!exports.isShortHex(val, prefix)) return val;
  const t = val.startsWith(prefix) ? val.substring(prefix.length) : val;
  return `${prefix}${t.replace(/(\w)(\w)(\w)/, `$1$1$2$2$3$3`)}`;
};

/**
 * Parses a number or string representing a number with unit and returns a
 * tuple with the number value and string unit. If a number is provided, the
 * default unit is `px`.
 *
 * @param {number|string} value - String or number to parse.
 * @param {string} [defaultUnit='px'] - Default unit if the unit is absent.
 *
 * @return {[number, string]} - Parsed value-unit tuple.
 */
exports.parseUnit = (value, defaultUnit = `px`) => {
  const str = String(value);
  return [parseFloat(str, 10), str.match(/[\d.\-\+]*\s*(.*)/)[1] || defaultUnit];
};
