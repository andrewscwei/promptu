const { css } = require(`styled-components`);
const { parseUnit } = require(`./utils`);

/**
 * Media breakpoint thresholds.
 */
const breakpoints = {
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

module.exports = {
  breakpoints,
  portrait(...args) {
    return css`
      @media (orientation: portrait) {
        ${css(...args)}
      }
    `;
  },
  landscape(...args) {
    return css`
      @media (orientation: landscape) {
        ${css(...args)}
      }
    `;
  },
  gtear(aspectRatio) {
    return (...args) => css`
      @media (min-aspect-ratio: ${aspectRatio}) {
        ${css(...args)}
      }
    `;
  },
  ltear(aspectRatio) {
    return (...args) => css`
      @media (max-aspect-ratio: ${aspectRatio}) {
        ${css(...args)}
      }
    `;
  },
  ar(aspectRatio) {
    return (...args) => css`
      @media (aspect-ratio: ${aspectRatio}) {
        ${css(...args)}
      }
    `;
  },
  gtw(minWidth) {
    const [val, unit] = parseUnit(minWidth);

    return (...args) => css`
      @media (min-width: ${val + 1}${unit}) {
        ${css(...args)}
      }
    `;
  },
  gtew(minWidth) {
    const [val, unit] = parseUnit(minWidth);

    return (...args) => css`
      @media (min-width: ${val}${unit}) {
        ${css(...args)}
      }
    `;
  },
  ltw(maxWidth) {
    const [val, unit] = parseUnit(maxWidth);

    return (...args) => css`
      @media (max-width: ${val - 1}${unit}) {
        ${css(...args)}
      }
    `;
  },
  ltew(maxWidth) {
    const [val, unit] = parseUnit(maxWidth);

    return (...args) => css`
      @media (max-width: ${val}${unit}) {
        ${css(...args)}
      }
    `;
  },
  clampw(minWidth, size2) {
    const [minVal, minUnit] = parseUnit(minWidth);
    const [maxVal, maxUnit] = parseUnit(size2);

    return (...args) => css`
      @media (min-width: ${minVal}${minUnit}) and (max-width: ${maxVal}${maxUnit}) {
        ${css(...args)}
      }
    `;
  },
  gth(minHeight) {
    const [val, unit] = parseUnit(minHeight);

    return (...args) => css`
      @media (min-height: ${val + 1}${unit}) {
        ${css(...args)}
      }
    `;
  },
  gteh(minHeight) {
    const [val, unit] = parseUnit(minHeight);

    return (...args) => css`
      @media (min-height: ${val}${unit}) {
        ${css(...args)}
      }
    `;
  },
  lth(maxHeight) {
    const [val, unit] = parseUnit(maxHeight);

    return (...args) => css`
      @media (max-height: ${val - 1}${unit}) {
        ${css(...args)}
      }
    `;
  },
  lteh(maxHeight) {
    const [val, unit] = parseUnit(maxHeight);

    return (...args) => css`
      @media (max-height: ${val}${unit}) {
        ${css(...args)}
      }
    `;
  },
  clamph(minHeight, maxHeight) {
    const [minVal, minUnit] = parseUnit(minHeight);
    const [maxVal, maxUnit] = parseUnit(maxHeight);

    return (...args) => css`
      @media (min-height: ${minVal}${minUnit}) and (max-height: ${maxVal}${maxUnit}) {
        ${css(...args)}
      }
    `;
  },
  mobile(...args) {
    return css`
      @media (min-width: ${breakpoints.mobile.min}px) and (max-width: ${breakpoints.mobile.max}px) {
        ${css(...args)}
      }
    `;
  },
  gtmobile(...args) {
    return css`
      @media (min-width: ${breakpoints.mobile.max + 1}px) {‚
        ${css(...args)}
      }
    `;
  },
  gtemobile(...args) {
    return css`
      @media (min-width: ${breakpoints.mobile.min}px) {
        ${css(...args)}
      }
    `;
  },
  tablet(...args) {
    return css`
      @media (min-width: ${breakpoints.tablet.min}px) and (max-width: ${breakpoints.tablet.max}px) {
        ${css(...args)}
      }
    `;
  },
  gttablet(...args) {
    return css`
      @media (min-width: ${breakpoints.tablet.max + 1}px) {
        ${css(...args)}
      }
    `;
  },
  gtetablet(...args) {
    return css`
      @media (min-width: ${breakpoints.tablet.min}px) {
        ${css(...args)}
      }
    `;
  },
  lttablet(...args) {
    return css`
      @media (max-width: ${breakpoints.tablet.min - 1}px) {
        ${css(...args)}
      }
    `;
  },
  ltetablet(...args) {
    return css`
      @media (max-width: ${breakpoints.tablet.max}px) {
        ${css(...args)}
      }
    `;
  },
  notebook(...args) {
    return css`
      @media (min-width: ${breakpoints.notebook.min}px) and (max-width: ${breakpoints.notebook.max}px) {
        ${css(...args)}
      }
    `;
  },
  gtnotebook(...args) {
    return css`
      @media (min-width: ${breakpoints.notebook.max + 1}px) {
        ${css(...args)}
      }
    `;
  },
  gtenotebook(...args) {
    return css`
      @media (min-width: ${breakpoints.notebook.min}px) {
        ${css(...args)}
      }
    `;
  },
  ltnotebook(...args) {
    return css`
      @media (max-width: ${breakpoints.notebook.min - 1}px) {
        ${css(...args)}
      }
    `;
  },
  ltenotebook(...args) {
    return css`
      @media (max-width: ${breakpoints.notebook.max}px) {
        ${css(...args)}
      }
    `;
  },
  desktop(...args) {
    return css`
      @media (min-width: ${breakpoints.desktop.min}px) and (max-width: ${breakpoints.desktop.max}px) {
        ${css(...args)}
      }
    `;
  },
  gtdesktop(...args) {
    return css`
      @media (min-width: ${breakpoints.desktop.max + 1}px) {
        ${css(...args)}
      }
    `;
  },
  gtedesktop(...args) {
    return css`
      @media (min-width: ${breakpoints.desktop.min}px) {
        ${css(...args)}
      }
    `;
  },
  ltdesktop(...args) {
    return css`
      @media (max-width: ${breakpoints.desktop.min - 1}px) {
        ${css(...args)}
      }
    `;
  },
  ltedesktop(...args) {
    return css`
      @media (max-width: ${breakpoints.desktop.max}px) {
        ${css(...args)}
      }
    `;
  },
  tv(...args) {
    return css`
      @media (min-width: ${breakpoints.tv.min}px) and (max-width: ${breakpoints.tv.max}px) {
        ${css(...args)}
      }
    `;
  },
  lttv(...args) {
    return css`
      @media (max-width: ${breakpoints.tv.min - 1}px) {
        ${css(...args)}
      }
    `;
  },
  ltetv(...args) {
    return css`
      @media (max-width: ${breakpoints.tv.max}px) {
        ${css(...args)}
      }
    `;
  },
};
