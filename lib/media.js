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

exports.portrait = (content) => {
  return `
    @media (orientation: portrait) {
      ${content}
    }
  `;
};

exports.landscape = (content) => {
  return `
    @media (orientation: landscape) {
      ${content}
    }
  `;
};

exports.gtear = (aspectRatio) => {
  return (content) => `
    @media (min-aspect-ratio: ${aspectRatio}) {
      ${content}
    }
  `;
};

exports.ltear = (aspectRatio) => {
  return (content) => `
    @media (max-aspect-ratio: ${aspectRatio}) {
      ${content}
    }
  `;
};

exports.ar = (aspectRatio) => {
  return (content) => `
    @media (aspect-ratio: ${aspectRatio}) {
      ${content}
    }
  `;
};

exports.gtw = (minWidth) => {
  const [val, unit] = parseUnit(minWidth);

  return (content) => `
    @media (min-width: ${val + 1}${unit}) {
      ${content}
    }
  `;
};

exports.gtew = (minWidth) => {
  const [val, unit] = parseUnit(minWidth);

  return (content) => `
    @media (min-width: ${val}${unit}) {
      ${content}
    }
  `;
};

exports.ltw = (maxWidth) => {
  const [val, unit] = parseUnit(maxWidth);

  return (content) => `
    @media (max-width: ${val - 1}${unit}) {
      ${content}
    }
  `;
};

exports.ltew = (maxWidth) => {
  const [val, unit] = parseUnit(maxWidth);

  return (content) => `
    @media (max-width: ${val}${unit}) {
      ${content}
    }
  `;
};

exports.clampw = (minWidth, size2) => {
  const [minVal, minUnit] = parseUnit(minWidth);
  const [maxVal, maxUnit] = parseUnit(size2);

  return (content) => `
    @media (min-width: ${minVal}${minUnit}) and (max-width: ${maxVal}${maxUnit}) {
      ${content}
    }
  `;
};

exports.gth = (minHeight) => {
  const [val, unit] = parseUnit(minHeight);

  return (content) => `
    @media (min-height: ${val + 1}${unit}) {
      ${content}
    }
  `;
};

exports.gteh = (minHeight) => {
  const [val, unit] = parseUnit(minHeight);

  return (content) => `
    @media (min-height: ${val}${unit}) {
      ${content}
    }
  `;
};

exports.lth = (maxHeight) => {
  const [val, unit] = parseUnit(maxHeight);

  return (content) => `
    @media (max-height: ${val - 1}${unit}) {
      ${content}
    }
  `;
};

exports.lteh = (maxHeight) => {
  const [val, unit] = parseUnit(maxHeight);

  return (content) => `
    @media (max-height: ${val}${unit}) {
      ${content}
    }
  `;
};

exports.clamph = (minHeight, maxHeight) => {
  const [minVal, minUnit] = parseUnit(minHeight);
  const [maxVal, maxUnit] = parseUnit(maxHeight);

  return (content) => `
    @media (min-height: ${minVal}${minUnit}) and (max-height: ${maxVal}${maxUnit}) {
      ${content}
    }
  `;
};

exports.mobile = (content) => {
  return `
    @media (min-width: ${exports.breakpoints.mobile.min}px) and (max-width: ${exports.breakpoints.mobile.max}px) {
      ${content}
    }
  `;
};

exports.gtmobile = (content) => {
  return `
    @media (min-width: ${exports.breakpoints.mobile.max + 1}px) {
      ${content}
    }
  `;
};

exports.gtemobile = (content) => {
  return `
    @media (min-width: ${exports.breakpoints.mobile.min}px) {
      ${content}
    }
  `;
};

exports.tablet = (content) => {
  return `
    @media (min-width: ${exports.breakpoints.tablet.min}px) and (max-width: ${exports.breakpoints.tablet.max}px) {
      ${content}
    }
  `;
};

exports.gttablet = (content) => {
  return `
    @media (min-width: ${exports.breakpoints.tablet.max + 1}px) {
      ${content}
    }
  `;
};

exports.gtetablet = (content) => {
  return `
    @media (min-width: ${exports.breakpoints.tablet.min}px) {
      ${content}
    }
  `;
};

exports.lttablet = (content) => {
  return `
    @media (max-width: ${exports.breakpoints.tablet.min - 1}px) {
      ${content}
    }
  `;
};

exports.ltetablet = (content) => {
  return `
    @media (max-width: ${exports.breakpoints.tablet.max}px) {
      ${content}
    }
  `;
};

exports.notebook = (content) => {
  return `
    @media (min-width: ${exports.breakpoints.notebook.min}px) and (max-width: ${exports.breakpoints.notebook.max}px) {
      ${content}
    }
  `;
};

exports.gtnotebook = (content) => {
  return `
    @media (min-width: ${exports.breakpoints.notebook.max + 1}px) {
      ${content}
    }
  `;
};

exports.gtenotebook = (content) => {
  return `
    @media (min-width: ${exports.breakpoints.notebook.min}px) {
      ${content}
    }
  `;
};

exports.ltnotebook = (content) => {
  return `
    @media (max-width: ${exports.breakpoints.notebook.min - 1}px) {
      ${content}
    }
  `;
};

exports.ltenotebook = (content) => {
  return `
    @media (max-width: ${exports.breakpoints.notebook.max}px) {
      ${content}
    }
  `;
};

exports.desktop = (content) => {
  return `
    @media (min-width: ${exports.breakpoints.desktop.min}px) and (max-width: ${exports.breakpoints.desktop.max}px) {
      ${content}
    }
  `;
};

exports.gtdesktop = (content) => {
  return `
    @media (min-width: ${exports.breakpoints.desktop.max + 1}px) {
      ${content}
    }
  `;
};

exports.gtedesktop = (content) => {
  return `
    @media (min-width: ${exports.breakpoints.desktop.min}px) {
      ${content}
    }
  `;
};

exports.ltdesktop = (content) => {
  return `
    @media (max-width: ${exports.breakpoints.desktop.min - 1}px) {
      ${content}
    }
  `;
};

exports.ltedesktop = (content) => {
  return `
    @media (max-width: ${exports.breakpoints.desktop.max}px) {
      ${content}
    }
  `;
};

exports.tv = (content) => {
  return `
    @media (min-width: ${exports.breakpoints.tv.min}px) and (max-width: ${exports.breakpoints.tv.max}px) {
      ${content}
    }
  `;
};

exports.lttv = (content) => {
  return `
    @media (max-width: ${exports.breakpoints.tv.min - 1}px) {
      ${content}
    }
  `;
};

exports.ltetv = (content) => {
  return `
    @media (max-width: ${exports.breakpoints.tv.max}px) {
      ${content}
    }
  `;
};
