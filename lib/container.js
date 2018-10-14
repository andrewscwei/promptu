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
    height: 100%;
    object-fit: cover;
    width: 100%;
  `;
};

exports.coverVideo = () => {
  return css`
    height: auto;
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: auto;
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

exports.mask = () => {
  return css`
    mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
    overflow: hidden;
  `;
};
