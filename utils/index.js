exports.toRGB = (val) => {
  const r = (val & 0xFF0000) >> 16;
  const g = (val & 0xFF00) >> 8;
  const b = (val & 0xFF);
  return [r, g, b];
};

exports.toHexString = (val, prefix = `#`) => {
  return `${prefix}${val.toString(16)}`;
};