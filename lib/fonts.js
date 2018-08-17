const { css } = `styled-components`;

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
    return 100;
  }
  else if (~basename.search(/light/i)) {
    return 300;
  }
  else if (~basename.search(/medium/i)) {
    return 500;
  }
  if (~basename.search(/semibold/i)) {
    return 600;
  }
  else if (~basename.search(/bold/i)) {
    return 700;
  }
  else if (~basename.search(/black/i)) {
    return 800;
  }
  else {
    return `normal`;
  }
}

module.exports = {
  fontFace: (family, src, style = `normal`, weight = `normal`) => {
    return css`
      font-family: ${family};
      src: url("${src}") format("${getFontFormatFromPath(src)}");
      font-style: ${style || getFontStyleFromPath(src)};
      font-weight: ${weight || getFontWeightFromPath(src)};
    `;
  },
};
