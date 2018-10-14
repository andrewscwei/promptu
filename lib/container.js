const { css } = require('styled-components');

/**
 * Normalizes an element container.
 */
exports.box = () => {
  return css`
    box-sizing: border-box;
    display: block;
  `;
};

exports.filled = () => {
  return css`
    box-sizing: border-box;
    display: block;
    height: 100%;
    width: 100%;
  `;
};

exports.cover = () => {
  return css`
    box-sizing: border-box;
    display: block;
    height: auto;
    min-height: 100%;
    overflow: hidden;
    width: 100%;
  `;
};

exports.coverImage = () => {
  return css`
    box-sizing: border-box;
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
  `;
};

exports.coverVideo = () => {
  return css`
    box-sizing: border-box;
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
  `;
};

/**
 * Transforms an element to a flex box where the child elements are
 * horizontally aligned.
 *
 * @param alignment Alignment style of child elements.
 */
exports.flexh = (alignment = 'cc') => {
  let t;

  switch (alignment) {
  case 'tl':
    t = css`
      align-items: flex-start;
      justify-content: flex-start;
    `;
    break;
  case 'tc':
    t = css`
      align-items: flex-start;
      justify-content: center;
    `;
    break;
  case 'tr':
    t = css`
      align-items: flex-start;
      justify-content: flex-end;
    `;
    break;
  case 'cl':
    t = css`
      align-items: center;
      justify-content: flex-start;
    `;
    break;
  case 'cr':
    t = css`
      align-items: center;
      justify-content: flex-end;
    `;
    break;
  case 'bl':
    t = css`
      align-items: flex-end;
      justify-content: flex-start;
    `;
    break;
  case 'bc':
    t = css`
      align-items: flex-end;
      justify-content: center;
    `;
    break;
  case 'br':
    t = css`
      align-items: flex-end;
      justify-content: flex-end;
    `;
    break;
  default:
    t = css`
      align-items: center;
      justify-content: center;
    `;
  }

  return css`
    ${t}
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  `;
};

/**
 * Transforms an element to a flex box where the child elements are reverse
 * horizontally aligned.
 *
 * @param alignment Alignment style of child elements.
 */
exports.flexrh = (alignment = 'cc') => {
  let t;

  switch (alignment) {
  case 'tl':
    t = css`
      align-items: flex-start;
      justify-content: flex-end;
    `;
    break;
  case 'tc':
    t = css`
      align-items: flex-start;
      justify-content: center;
    `;
    break;
  case 'tr':
    t = css`
      align-items: flex-start;
      justify-content: flex-start;
    `;
    break;
  case 'cl':
    t = css`
      align-items: center;
      justify-content: flex-end;
    `;
    break;
  case 'cr':
    t = css`
      align-items: center;
      justify-content: flex-start;
    `;
    break;
  case 'bl':
    t = css`
      align-items: flex-end;
      justify-content: flex-end;
    `;
    break;
  case 'bc':
    t = css`
      align-items: flex-end;
      justify-content: center;
    `;
    break;
  case 'br':
    t = css`
      align-items: flex-end;
      justify-content: flex-start;
    `;
    break;
  default:
    t = css`
      align-items: center;
      justify-content: center;
    `;
  }

  return css`
    ${t}
    box-sizing: border-box;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
  `;
};

/**
 * Transforms an element to a flex box where the child elements are vertically
 * aligned.
 *
 * @param alignment Alignment style of child elements.
 */
exports.flexv = (alignment = 'cc') => {
  let t;

  switch (alignment) {
  case 'tl':
    t = css`
      align-items: flex-start;
      justify-content: flex-start;
    `;
    break;
  case 'tc':
    t = css`
      align-items: center;
      justify-content: flex-start;
    `;
    break;
  case 'tr':
    t = css`
      align-items: flex-end;
      justify-content: flex-start;
    `;
    break;
  case 'cl':
    t = css`
      align-items: flex-start;
      justify-content: center;
    `;
    break;
  case 'cr':
    t = css`
      align-items: flex-end;
      justify-content: center;
    `;
    break;
  case 'bl':
    t = css`
      align-items: flex-start;
      justify-content: flex-end;
    `;
    break;
  case 'bc':
    t = css`
      align-items: center;
      justify-content: flex-end;
    `;
    break;
  case 'br':
    t = css`
      align-items: flex-end;
      justify-content: flex-end;
    `;
    break;
  default:
    t = css`
      align-items: center;
      justify-content: center;
    `;
  }

  return css`
    ${t}
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  `;
};

/**
 * Transforms an element to a flex box where the child elements are vertically
 * aligned.
 *
 * @param alignment Alignment style of child elements.
 */
exports.flexrv = (alignment = 'cc') => {
  let t;

  switch (alignment) {
  case 'tl':
    t = css`
      align-items: flex-start;
      justify-content: flex-end;
    `;
    break;
  case 'tc':
    t = css`
      align-items: center;
      justify-content: flex-end;
    `;
    break;
  case 'tr':
    t = css`
      align-items: flex-end;
      justify-content: flex-end;
    `;
    break;
  case 'cl':
    t = css`
      align-items: flex-start;
      justify-content: center;
    `;
    break;
  case 'cr':
    t = css`
      align-items: flex-end;
      justify-content: center;
    `;
    break;
  case 'bl':
    t = css`
      align-items: flex-start;
      justify-content: flex-start;
    `;
    break;
  case 'bc':
    t = css`
      align-items: center;
      justify-content: flex-start;
    `;
    break;
  case 'br':
    t = css`
      align-items: flex-end;
      justify-content: flex-start;
    `;
    break;
  default:
    t = css`
      align-items: center;
      justify-content: center;
    `;
  }

  return css`
    ${t}
    box-sizing: border-box;
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: nowrap;
  `;
};

exports.fhtl = exports.flexh('tl');

exports.fhtc = exports.flexh('tc');

exports.fhtr = exports.flexh('tr');

exports.fhcl = exports.flexh('cl');

exports.fhcc = exports.flexh('cc');

exports.fhcr = exports.flexh('cr');

exports.fhbl = exports.flexh('bl');

exports.fhbc = exports.flexh('bc');

exports.fhbr = exports.flexh('br');

exports.fvtl = exports.flexv('tl');

exports.fvtc = exports.flexv('tc');

exports.fvtr = exports.flexv('tr');

exports.fvcl = exports.flexv('cl');

exports.fvcc = exports.flexv('cc');

exports.fvcr = exports.flexv('cr');

exports.fvbl = exports.flexv('bl');

exports.fvbc = exports.flexv('bc');

exports.fvbr = exports.flexv('br');

/**
 * CSS mixin for a mask element.
 *
 * @return {string} CSS rules for a mask element.
 */
exports.mask = () => {
  return css`
    mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
    overflow: hidden;
  `;
};
