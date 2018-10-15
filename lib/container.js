const { css } = require('styled-components');

/**
 * Normalizes an element container.
 */
exports.box = css`
  box-sizing: border-box;
  display: block;
`;

exports.filled = css`
  box-sizing: border-box;
  display: block;
  height: 100%;
  width: 100%;
`;

exports.cover = css`
  box-sizing: border-box;
  display: block;
  height: auto;
  min-height: 100%;
  overflow: hidden;
  width: 100%;
`;

exports.coverImage = css`
  box-sizing: border-box;
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

exports.coverVideo = css`
  box-sizing: border-box;
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

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
  case 'ts':
    t = css`
      align-items: flex-start;
      justify-content: space-between;
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
  case 'cs':
    t = css`
      align-items: center;
      justify-content: space-between;
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
  case 'bs':
    t = css`
      align-items: flex-end;
      justify-content: space-between;
    `;
    break;
  case 'sl':
    t = css`
      align-items: stretch;
      justify-content: flex-start;
    `;
    break;
  case 'sc':
    t = css`
      align-items: stretch;
      justify-content: center;
    `;
    break;
  case 'sr':
    t = css`
      align-items: stretch;
      justify-content: flex-end;
    `;
    break;
  case 'ss':
    t = css`
      align-items: stretch;
      justify-content: space-between;
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
  case 'ts':
    t = css`
      align-items: flex-start;
      justify-content: space-between;
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
  case 'cs':
    t = css`
      align-items: center;
      justify-content: space-between;
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
  case 'bs':
    t = css`
      align-items: flex-end;
      justify-content: space-between;
    `;
    break;
  case 'sl':
    t = css`
      align-items: stretch;
      justify-content: flex-end;
    `;
    break;
  case 'sc':
    t = css`
      align-items: stretch;
      justify-content: center;
    `;
    break;
  case 'sr':
    t = css`
      align-items: stretch;
      justify-content: flex-start;
    `;
    break;
  case 'ss':
    t = css`
      align-items: stretch;
      justify-content: space-between;
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
  case 'ts':
    t = css`
      align-items: stretch;
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
  case 'cs':
    t = css`
      align-items: stretch;
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
  case 'bs':
    t = css`
      align-items: stretch;
      justify-content: flex-end;
    `;
    break;
  case 'sl':
    t = css`
      align-items: flex-start;
      justify-content: space-between;
    `;
    break;
  case 'sc':
    t = css`
      align-items: center;
      justify-content: space-between;
    `;
    break;
  case 'sr':
    t = css`
      align-items: flex-end;
      justify-content: space-between;
    `;
    break;
  case 'ss':
    t = css`
      align-items: stretch;
      justify-content: space-between;
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
  case 'ts':
    t = css`
      align-items: stretch;
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
  case 'cs':
    t = css`
      align-items: stretch;
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
  case 'bs':
    t = css`
      align-items: stretch;
      justify-content: flex-start;
    `;
    break;
  case 'sl':
    t = css`
      align-items: flex-start;
      justify-content: space-between;
    `;
    break;
  case 'sc':
    t = css`
      align-items: center;
      justify-content: space-between;
    `;
    break;
  case 'sr':
    t = css`
      align-items: flex-end;
      justify-content: space-between;
    `;
    break;
  case 'ss':
    t = css`
      align-items: stretch;
      justify-content: space-between;
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

exports.fhts = exports.flexh('ts');

exports.fhcl = exports.flexh('cl');

exports.fhcc = exports.flexh('cc');

exports.fhcr = exports.flexh('cr');

exports.fhcs = exports.flexh('cs');

exports.fhbl = exports.flexh('bl');

exports.fhbc = exports.flexh('bc');

exports.fhbr = exports.flexh('br');

exports.fhbs = exports.flexh('bs');

exports.fhsl = exports.flexh('sl');

exports.fhsc = exports.flexh('sc');

exports.fhsr = exports.flexh('sr');

exports.fhss = exports.flexh('ss');

exports.frhtl = exports.flexrh('tl');

exports.frhtc = exports.flexrh('tc');

exports.frhtr = exports.flexrh('tr');

exports.frhts = exports.flexrh('ts');

exports.frhcl = exports.flexrh('cl');

exports.frhcc = exports.flexrh('cc');

exports.frhcr = exports.flexrh('cr');

exports.frhcs = exports.flexrh('cs');

exports.frhbl = exports.flexrh('bl');

exports.frhbc = exports.flexrh('bc');

exports.frhbr = exports.flexrh('br');

exports.frhbs = exports.flexrh('bs');

exports.frhsl = exports.flexrh('sl');

exports.frhsc = exports.flexrh('sc');

exports.frhsr = exports.flexrh('sr');

exports.frhss = exports.flexrh('ss');

exports.fvtl = exports.flexv('tl');

exports.fvtc = exports.flexv('tc');

exports.fvtr = exports.flexv('tr');

exports.fvts = exports.flexv('ts');

exports.fvcl = exports.flexv('cl');

exports.fvcc = exports.flexv('cc');

exports.fvcr = exports.flexv('cr');

exports.fvcs = exports.flexv('cs');

exports.fvbl = exports.flexv('bl');

exports.fvbc = exports.flexv('bc');

exports.fvbr = exports.flexv('br');

exports.fvbs = exports.flexv('bs');

exports.fvsl = exports.flexv('sl');

exports.fvsc = exports.flexv('sc');

exports.fvsr = exports.flexv('sr');

exports.fvss = exports.flexv('ss');

exports.frvtl = exports.flexrv('tl');

exports.frvtc = exports.flexrv('tc');

exports.frvtr = exports.flexrv('tr');

exports.frvts = exports.flexrv('ts');

exports.frvcl = exports.flexrv('cl');

exports.frvcc = exports.flexrv('cc');

exports.frvcr = exports.flexrv('cr');

exports.frvcs = exports.flexrv('cs');

exports.frvbl = exports.flexrv('bl');

exports.frvbc = exports.flexrv('bc');

exports.frvbr = exports.flexrv('br');

exports.frvbs = exports.flexrv('bs');

exports.frvsl = exports.flexrv('sl');

exports.frvsc = exports.flexrv('sc');

exports.frvsr = exports.flexrv('sr');

exports.frvss = exports.flexrv('ss');

/**
 * CSS mixin for a mask element.
 */
exports.mask = css`
  mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
  overflow: hidden;
`;
