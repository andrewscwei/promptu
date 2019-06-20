import { Alignment } from '../types';

/**
 * Normalizes an element container.
 */
export const box: string = `
  box-sizing: border-box;
  display: block;
`;

export const filled: string = `
  box-sizing: border-box;
  display: block;
  height: 100%;
  width: 100%;
`;

export const cover: string = `
  box-sizing: border-box;
  display: block;
  height: auto;
  min-height: 100%;
  overflow: hidden;
  width: 100%;
`;

export const coverImage: string = `
  box-sizing: border-box;
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const coverVideo: string = `
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
 * @param alignment - Alignment style of child elements.
 */
export function flexh(alignment: Alignment = 'cc'): string {
  let t;

  switch (alignment) {
  case 'tl':
    t = `
      align-items: flex-start;
      justify-content: flex-start;
    `;
    break;
  case 'tc':
    t = `
      align-items: flex-start;
      justify-content: center;
    `;
    break;
  case 'tr':
    t = `
      align-items: flex-start;
      justify-content: flex-end;
    `;
    break;
  case 'ts':
    t = `
      align-items: flex-start;
      justify-content: space-between;
    `;
    break;
  case 'cl':
    t = `
      align-items: center;
      justify-content: flex-start;
    `;
    break;
  case 'cr':
    t = `
      align-items: center;
      justify-content: flex-end;
    `;
    break;
  case 'cs':
    t = `
      align-items: center;
      justify-content: space-between;
    `;
    break;
  case 'bl':
    t = `
      align-items: flex-end;
      justify-content: flex-start;
    `;
    break;
  case 'bc':
    t = `
      align-items: flex-end;
      justify-content: center;
    `;
    break;
  case 'br':
    t = `
      align-items: flex-end;
      justify-content: flex-end;
    `;
    break;
  case 'bs':
    t = `
      align-items: flex-end;
      justify-content: space-between;
    `;
    break;
  case 'sl':
    t = `
      align-items: stretch;
      justify-content: flex-start;
    `;
    break;
  case 'sc':
    t = `
      align-items: stretch;
      justify-content: center;
    `;
    break;
  case 'sr':
    t = `
      align-items: stretch;
      justify-content: flex-end;
    `;
    break;
  case 'ss':
    t = `
      align-items: stretch;
      justify-content: space-between;
    `;
    break;
  default:
    t = `
      align-items: center;
      justify-content: center;
    `;
  }

  return `
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
 * @param alignment - Alignment style of child elements.
 */
export function flexrh(alignment: Alignment = 'cc'): string {
  let t;

  switch (alignment) {
  case 'tl':
    t = `
      align-items: flex-start;
      justify-content: flex-end;
    `;
    break;
  case 'tc':
    t = `
      align-items: flex-start;
      justify-content: center;
    `;
    break;
  case 'tr':
    t = `
      align-items: flex-start;
      justify-content: flex-start;
    `;
    break;
  case 'ts':
    t = `
      align-items: flex-start;
      justify-content: space-between;
    `;
    break;
  case 'cl':
    t = `
      align-items: center;
      justify-content: flex-end;
    `;
    break;
  case 'cr':
    t = `
      align-items: center;
      justify-content: flex-start;
    `;
    break;
  case 'cs':
    t = `
      align-items: center;
      justify-content: space-between;
    `;
    break;
  case 'bl':
    t = `
      align-items: flex-end;
      justify-content: flex-end;
    `;
    break;
  case 'bc':
    t = `
      align-items: flex-end;
      justify-content: center;
    `;
    break;
  case 'br':
    t = `
      align-items: flex-end;
      justify-content: flex-start;
    `;
    break;
  case 'bs':
    t = `
      align-items: flex-end;
      justify-content: space-between;
    `;
    break;
  case 'sl':
    t = `
      align-items: stretch;
      justify-content: flex-end;
    `;
    break;
  case 'sc':
    t = `
      align-items: stretch;
      justify-content: center;
    `;
    break;
  case 'sr':
    t = `
      align-items: stretch;
      justify-content: flex-start;
    `;
    break;
  case 'ss':
    t = `
      align-items: stretch;
      justify-content: space-between;
    `;
    break;
  default:
    t = `
      align-items: center;
      justify-content: center;
    `;
  }

  return `
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
 * @param alignment - Alignment style of child elements.
 */
export function flexv(alignment: Alignment = 'cc'): string {
  let t;

  switch (alignment) {
  case 'tl':
    t = `
      align-items: flex-start;
      justify-content: flex-start;
    `;
    break;
  case 'tc':
    t = `
      align-items: center;
      justify-content: flex-start;
    `;
    break;
  case 'tr':
    t = `
      align-items: flex-end;
      justify-content: flex-start;
    `;
    break;
  case 'ts':
    t = `
      align-items: stretch;
      justify-content: flex-start;
    `;
    break;
  case 'cl':
    t = `
      align-items: flex-start;
      justify-content: center;
    `;
    break;
  case 'cr':
    t = `
      align-items: flex-end;
      justify-content: center;
    `;
    break;
  case 'cs':
    t = `
      align-items: stretch;
      justify-content: center;
    `;
    break;
  case 'bl':
    t = `
      align-items: flex-start;
      justify-content: flex-end;
    `;
    break;
  case 'bc':
    t = `
      align-items: center;
      justify-content: flex-end;
    `;
    break;
  case 'br':
    t = `
      align-items: flex-end;
      justify-content: flex-end;
    `;
    break;
  case 'bs':
    t = `
      align-items: stretch;
      justify-content: flex-end;
    `;
    break;
  case 'sl':
    t = `
      align-items: flex-start;
      justify-content: space-between;
    `;
    break;
  case 'sc':
    t = `
      align-items: center;
      justify-content: space-between;
    `;
    break;
  case 'sr':
    t = `
      align-items: flex-end;
      justify-content: space-between;
    `;
    break;
  case 'ss':
    t = `
      align-items: stretch;
      justify-content: space-between;
    `;
    break;
  default:
    t = `
      align-items: center;
      justify-content: center;
    `;
  }

  return `
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
 * @param alignment - Alignment style of child elements.
 */
export function flexrv(alignment: Alignment = 'cc'): string {
  let t;

  switch (alignment) {
  case 'tl':
    t = `
      align-items: flex-start;
      justify-content: flex-end;
    `;
    break;
  case 'tc':
    t = `
      align-items: center;
      justify-content: flex-end;
    `;
    break;
  case 'tr':
    t = `
      align-items: flex-end;
      justify-content: flex-end;
    `;
    break;
  case 'ts':
    t = `
      align-items: stretch;
      justify-content: flex-end;
    `;
    break;
  case 'cl':
    t = `
      align-items: flex-start;
      justify-content: center;
    `;
    break;
  case 'cr':
    t = `
      align-items: flex-end;
      justify-content: center;
    `;
    break;
  case 'cs':
    t = `
      align-items: stretch;
      justify-content: center;
    `;
    break;
  case 'bl':
    t = `
      align-items: flex-start;
      justify-content: flex-start;
    `;
    break;
  case 'bc':
    t = `
      align-items: center;
      justify-content: flex-start;
    `;
    break;
  case 'br':
    t = `
      align-items: flex-end;
      justify-content: flex-start;
    `;
    break;
  case 'bs':
    t = `
      align-items: stretch;
      justify-content: flex-start;
    `;
    break;
  case 'sl':
    t = `
      align-items: flex-start;
      justify-content: space-between;
    `;
    break;
  case 'sc':
    t = `
      align-items: center;
      justify-content: space-between;
    `;
    break;
  case 'sr':
    t = `
      align-items: flex-end;
      justify-content: space-between;
    `;
    break;
  case 'ss':
    t = `
      align-items: stretch;
      justify-content: space-between;
    `;
    break;
  default:
    t = `
      align-items: center;
      justify-content: center;
    `;
  }

  return `
    ${t}
    box-sizing: border-box;
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: nowrap;
  `;
};

export const fhtl: string = flexh('tl');
export const fhtc: string = flexh('tc');
export const fhtr: string = flexh('tr');
export const fhts: string = flexh('ts');
export const fhcl: string = flexh('cl');
export const fhcc: string = flexh('cc');
export const fhcr: string = flexh('cr');
export const fhcs: string = flexh('cs');
export const fhbl: string = flexh('bl');
export const fhbc: string = flexh('bc');
export const fhbr: string = flexh('br');
export const fhbs: string = flexh('bs');
export const fhsl: string = flexh('sl');
export const fhsc: string = flexh('sc');
export const fhsr: string = flexh('sr');
export const fhss: string = flexh('ss');
export const frhtl: string = flexrh('tl');
export const frhtc: string = flexrh('tc');
export const frhtr: string = flexrh('tr');
export const frhts: string = flexrh('ts');
export const frhcl: string = flexrh('cl');
export const frhcc: string = flexrh('cc');
export const frhcr: string = flexrh('cr');
export const frhcs: string = flexrh('cs');
export const frhbl: string = flexrh('bl');
export const frhbc: string = flexrh('bc');
export const frhbr: string = flexrh('br');
export const frhbs: string = flexrh('bs');
export const frhsl: string = flexrh('sl');
export const frhsc: string = flexrh('sc');
export const frhsr: string = flexrh('sr');
export const frhss: string = flexrh('ss');
export const fvtl: string = flexv('tl');
export const fvtc: string = flexv('tc');
export const fvtr: string = flexv('tr');
export const fvts: string = flexv('ts');
export const fvcl: string = flexv('cl');
export const fvcc: string = flexv('cc');
export const fvcr: string = flexv('cr');
export const fvcs: string = flexv('cs');
export const fvbl: string = flexv('bl');
export const fvbc: string = flexv('bc');
export const fvbr: string = flexv('br');
export const fvbs: string = flexv('bs');
export const fvsl: string = flexv('sl');
export const fvsc: string = flexv('sc');
export const fvsr: string = flexv('sr');
export const fvss: string = flexv('ss');
export const frvtl: string = flexrv('tl');
export const frvtc: string = flexrv('tc');
export const frvtr: string = flexrv('tr');
export const frvts: string = flexrv('ts');
export const frvcl: string = flexrv('cl');
export const frvcc: string = flexrv('cc');
export const frvcr: string = flexrv('cr');
export const frvcs: string = flexrv('cs');
export const frvbl: string = flexrv('bl');
export const frvbc: string = flexrv('bc');
export const frvbr: string = flexrv('br');
export const frvbs: string = flexrv('bs');
export const frvsl: string = flexrv('sl');
export const frvsc: string = flexrv('sc');
export const frvsr: string = flexrv('sr');
export const frvss: string = flexrv('ss');

/**
 * CSS mixin for a mask element.
 */
export const mask: string = `
  mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
  overflow: hidden;
`;
