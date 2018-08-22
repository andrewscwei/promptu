/**
 * Converts a hex number value representing a color to a RGB tuple.
 *
 * @param {number} val - Hex number value representing a color.
 *
 * @return {[number, number, number]} RGB tuple.
 */
exports.toRGB = (val) => {
  const r = (val & 0xFF0000) >> 16;
  const g = (val & 0xFF00) >> 8;
  const b = (val & 0xFF);
  return [r, g, b];
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
  const t = val.startsWith(prefix) ? val.substring(prefix.length) : val;
  return parseInt(t, 16);
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
