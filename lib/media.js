const { css } = require('styled-components');
const { parseUnit } = require('./utils');

/**
 * Media breakpoint thresholds.
 */
exports.breakpoints = {
  mobile: {
    min: 0,
    max: 639,
  },
  tablet: {
    min: 640,
    max: 1024,
  },
  notebook: {
    min: 1025,
    max: 1439,
  },
  desktop: {
    min: 1440,
    max: 1919,
  },
  tv: {
    min: 1920,
    max: 100000,
  },
};

exports.portrait = (...args) => {
  return css`
    @media (orientation: portrait) {
      ${css(...args)}
    }
  `;
};

exports.landscape = (...args) => {
  return css`
    @media (orientation: landscape) {
      ${css(...args)}
    }
  `;
};

exports.gtear = (aspectRatio) => {
  return (...args) => css`
    @media (min-aspect-ratio: ${aspectRatio}) {
      ${css(...args)}
    }
  `;
};

exports.ltear = (aspectRatio) => {
  return (...args) => css`
    @media (max-aspect-ratio: ${aspectRatio}) {
      ${css(...args)}
    }
  `;
};

exports.ar = (aspectRatio) => {
  return (...args) => css`
    @media (aspect-ratio: ${aspectRatio}) {
      ${css(...args)}
    }
  `;
};

exports.gtw = (minWidth) => {
  const [val, unit] = parseUnit(minWidth);

  return (...args) => css`
    @media (min-width: ${val + 1}${unit}) {
      ${css(...args)}
    }
  `;
};

exports.gtew = (minWidth) => {
  const [val, unit] = parseUnit(minWidth);

  return (...args) => css`
    @media (min-width: ${val}${unit}) {
      ${css(...args)}
    }
  `;
};

exports.ltw = (maxWidth) => {
  const [val, unit] = parseUnit(maxWidth);

  return (...args) => css`
    @media (max-width: ${val - 1}${unit}) {
      ${css(...args)}
    }
  `;
};

exports.ltew = (maxWidth) => {
  const [val, unit] = parseUnit(maxWidth);

  return (...args) => css`
    @media (max-width: ${val}${unit}) {
      ${css(...args)}
    }
  `;
};

exports.clampw = (minWidth, size2) => {
  const [minVal, minUnit] = parseUnit(minWidth);
  const [maxVal, maxUnit] = parseUnit(size2);

  return (...args) => css`
    @media (min-width: ${minVal}${minUnit}) and (max-width: ${maxVal}${maxUnit}) {
      ${css(...args)}
    }
  `;
};

exports.gth = (minHeight) => {
  const [val, unit] = parseUnit(minHeight);

  return (...args) => css`
    @media (min-height: ${val + 1}${unit}) {
      ${css(...args)}
    }
  `;
};

exports.gteh = (minHeight) => {
  const [val, unit] = parseUnit(minHeight);

  return (...args) => css`
    @media (min-height: ${val}${unit}) {
      ${css(...args)}
    }
  `;
};

exports.lth = (maxHeight) => {
  const [val, unit] = parseUnit(maxHeight);

  return (...args) => css`
    @media (max-height: ${val - 1}${unit}) {
      ${css(...args)}
    }
  `;
};

exports.lteh = (maxHeight) => {
  const [val, unit] = parseUnit(maxHeight);

  return (...args) => css`
    @media (max-height: ${val}${unit}) {
      ${css(...args)}
    }
  `;
};

exports.clamph = (minHeight, maxHeight) => {
  const [minVal, minUnit] = parseUnit(minHeight);
  const [maxVal, maxUnit] = parseUnit(maxHeight);

  return (...args) => css`
    @media (min-height: ${minVal}${minUnit}) and (max-height: ${maxVal}${maxUnit}) {
      ${css(...args)}
    }
  `;
};

exports.mobile = (...args) => {
  return css`
    @media (min-width: ${exports.breakpoints.mobile.min}px) and (max-width: ${exports.breakpoints.mobile.max}px) {
      ${css(...args)}
    }
  `;
};

exports.gtmobile = (...args) => {
  return css`
    @media (min-width: ${exports.breakpoints.mobile.max + 1}px) {
      ${css(...args)}
    }
  `;
};

exports.gtemobile = (...args) => {
  return css`
    @media (min-width: ${exports.breakpoints.mobile.min}px) {
      ${css(...args)}
    }
  `;
};

exports.tablet = (...args) => {
  return css`
    @media (min-width: ${exports.breakpoints.tablet.min}px) and (max-width: ${exports.breakpoints.tablet.max}px) {
      ${css(...args)}
    }
  `;
};

exports.gttablet = (...args) => {
  return css`
    @media (min-width: ${exports.breakpoints.tablet.max + 1}px) {
      ${css(...args)}
    }
  `;
};

exports.gtetablet = (...args) => {
  return css`
    @media (min-width: ${exports.breakpoints.tablet.min}px) {
      ${css(...args)}
    }
  `;
};

exports.lttablet = (...args) => {
  return css`
    @media (max-width: ${exports.breakpoints.tablet.min - 1}px) {
      ${css(...args)}
    }
  `;
};

exports.ltetablet = (...args) => {
  return css`
    @media (max-width: ${exports.breakpoints.tablet.max}px) {
      ${css(...args)}
    }
  `;
};

exports.notebook = (...args) => {
  return css`
    @media (min-width: ${exports.breakpoints.notebook.min}px) and (max-width: ${exports.breakpoints.notebook.max}px) {
      ${css(...args)}
    }
  `;
};

exports.gtnotebook = (...args) => {
  return css`
    @media (min-width: ${exports.breakpoints.notebook.max + 1}px) {
      ${css(...args)}
    }
  `;
};

exports.gtenotebook = (...args) => {
  return css`
    @media (min-width: ${exports.breakpoints.notebook.min}px) {
      ${css(...args)}
    }
  `;
};

exports.ltnotebook = (...args) => {
  return css`
    @media (max-width: ${exports.breakpoints.notebook.min - 1}px) {
      ${css(...args)}
    }
  `;
};

exports.ltenotebook = (...args) => {
  return css`
    @media (max-width: ${exports.breakpoints.notebook.max}px) {
      ${css(...args)}
    }
  `;
};

exports.desktop = (...args) => {
  return css`
    @media (min-width: ${exports.breakpoints.desktop.min}px) and (max-width: ${exports.breakpoints.desktop.max}px) {
      ${css(...args)}
    }
  `;
};

exports.gtdesktop = (...args) => {
  return css`
    @media (min-width: ${exports.breakpoints.desktop.max + 1}px) {
      ${css(...args)}
    }
  `;
};

exports.gtedesktop = (...args) => {
  return css`
    @media (min-width: ${exports.breakpoints.desktop.min}px) {
      ${css(...args)}
    }
  `;
};

exports.ltdesktop = (...args) => {
  return css`
    @media (max-width: ${exports.breakpoints.desktop.min - 1}px) {
      ${css(...args)}
    }
  `;
};

exports.ltedesktop = (...args) => {
  return css`
    @media (max-width: ${exports.breakpoints.desktop.max}px) {
      ${css(...args)}
    }
  `;
};

exports.tv = (...args) => {
  return css`
    @media (min-width: ${exports.breakpoints.tv.min}px) and (max-width: ${exports.breakpoints.tv.max}px) {
      ${css(...args)}
    }
  `;
};

exports.lttv = (...args) => {
  return css`
    @media (max-width: ${exports.breakpoints.tv.min - 1}px) {
      ${css(...args)}
    }
  `;
};

exports.ltetv = (...args) => {
  return css`
    @media (max-width: ${exports.breakpoints.tv.max}px) {
      ${css(...args)}
    }
  `;
};
