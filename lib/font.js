const { css } = require(`styled-components`);

const fontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

function getFontFormatFromPath(path) {
  const ext = path.split(`.`).pop();

  if (!ext) return `opentype`;

  if (ext.startsWith(`eot`)) {
    return `eot`;
  }
  else if (ext.startsWith(`woff2`)) {
    return `woff2`;
  }
  else if (ext.startsWith(`woff`)) {
    return `woff`;
  }
  else if (ext.startsWith(`ttf`)) {
    return `truetype`;
  }
  else if (ext.startsWith(`otf`)) {
    return `opentype`;
  }
  else if (ext.startsWith(`svg`)) {
    return `svg`;
  }

  return `opentype`;
}

function getFontStyleFromPath(path) {
  const basename = path.split(`/`).pop();

  if (!basename) return `normal`;

  if (~basename.search(/italic/i)) {
    return `italic`;
  }
  else if (~basename.search(/oblique/i)) {
    return `oblique`;
  }
  else {
    return `normal`;
  }
}

function getFontWeightFromPath(path) {
  const basename = path.split(`/`).pop();

  if (!basename) return `normal`;

  if (~basename.search(/thin/i)) {
    return fontWeights.thin;
  }
  else if (~basename.search(/extralight/i)) {
    return fontWeights.extraLight;
  }
  else if (~basename.search(/light/i)) {
    return fontWeights.light;
  }
  else if (~basename.search(/regular/i) || ~basename.search(/normal/i)) {
    return fontWeights.normal;
  }
  else if (~basename.search(/medium/i)) {
    return fontWeights.medium;
  }
  else if (~basename.search(/semibold/i)) {
    return fontWeights.semiBold;
  }
  else if (~basename.search(/extrabold/i)) {
    return fontWeights.extraBold;
  }
  else if (~basename.search(/bold/i)) {
    return fontWeights.bold;
  }
  else if (~basename.search(/black/i)) {
    return fontWeights.black;
  }
  else {
    return fontWeights.normal;
  }
}

module.exports = {
  face: (family, src, weight = fontWeights.normal, style = `normal`) => {
    return css`
      @font-face {
        font-family: ${family};
        src: url("${src}") format("${getFontFormatFromPath(src)}");
        font-style: ${style || getFontStyleFromPath(src)};
        font-weight: ${weight || getFontWeightFromPath(src)};
      }
    `;
  },
  weights: fontWeights,
  set: (family, size = `1.6rem`, weight = fontWeights.normal, style = `normal`, lineHeight = `normal`, letterSpacing = `normal`) => {
    return css`
      font-family: ${family || `sans-serif`};
      font-size: ${typeof size === `number` ? `${size}rem` : size};
      font-style: ${style};
      font-weight: ${typeof weight === `number` ? weight : (fontWeights[weight] || weight)};
      line-height: ${typeof lineHeight === `number` ? `${lineHeight}rem` : lineHeight};
      letter-spacing: ${typeof letterSpacing === `number` ? `${letterSpacing}rem` : letterSpacing};
    `;
  },
};
