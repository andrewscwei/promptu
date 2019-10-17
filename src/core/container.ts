import { Alignment } from '../types';
import minify from '../utils/minify';

/**
 * ```css
 * {
 *   box-sizing: border-box;
 *   display: block;
 * }
 * ```
 */
export const box: string = minify(`
  box-sizing: border-box;
  display: block;
`);

/**
 * ```css
 * {
 *   box-sizing: border-box;
 *   display: inline-block;
 * }
 * ```
 */
export const ibox: string = minify(`
  box-sizing: border-box;
  display: inline-block;
`);

/**
 * ```css
 * {
 *   box-sizing: border-box;
 *   display: block;
 *   height: 100%;
 *   width: 100%;
 * }
 * ```
 */
export const filled: string = minify(`
  box-sizing: border-box;
  display: block;
  height: 100%;
  width: 100%;
`);

/**
 * ```css
 * {
 *   box-sizing: border-box;
 *   display: block;
 *   height: auto;
 *   min-height: 100%;
 *   overflow: hidden;
 *   width: 100%;
 * }
 * ```
 */
export const cover: string = minify(`
  box-sizing: border-box;
  display: block;
  height: auto;
  min-height: 100%;
  overflow: hidden;
  width: 100%;
`);

/**
 * Transforms an element to a flex box where the child elements are
 * horizontally aligned.
 *
 * @param alignment - Alignment style of child elements.
 *
 * @returns CSS string.
 *
 * @example
 * ```js
 * flexvh('tl') \\ Returns...
 * ```
 *
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row;
 *   flex-wrap: nowrap;
 *   justify-content: flex-start;
 * }
 * ```
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

  return minify(`
    ${t}
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  `);
}

/**
 * Transforms an element to a flex box where the child elements are reverse
 * horizontally aligned.
 *
 * @param alignment - Alignment style of child elements.
 *
 * @returns CSS string.
 *
 * @example
 * ```js
 * flexrh('tl') // Returns...
 * ```
 *
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: flex-end;
 * }
 * ```
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

  return minify(`
    ${t}
    box-sizing: border-box;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
  `);
}

/**
 * Transforms an element to a flex box where the child elements are vertically
 * aligned.
 *
 * @param alignment - Alignment style of child elements.
 *
 * @returns CSS string.
 *
 * @example
 * ```js
 * flexv('tl') \\ Returns...
 * ```
 *
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: flex-start;
 * }
 * ```
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

  return minify(`
    ${t}
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  `);
}

/**
 * Transforms an element to a flex box where the child elements are vertically
 * aligned.
 *
 * @param alignment - Alignment style of child elements.
 *
 * @returns CSS string.
 *
 * @example
 * ```js
 * flexrv('tl') // Returns...
 * ```
 *
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: flex-end;
 * }
 * ```
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

  return minify(`
    ${t}
    box-sizing: border-box;
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: nowrap;
  `);
}

/**
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row;
 *   flex-wrap: nowrap;
 *   justify-content: flex-start;
 * }
 * ```
 */
export const fhtl: string = flexh('tl');

/**
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row;
 *   flex-wrap: nowrap;
 *   justify-content: center;
 * }
 * ```
 */
export const fhtc: string = flexh('tc');

/**
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row;
 *   flex-wrap: nowrap;
 *   justify-content: flex-end;
 * }
 * ```
 */
export const fhtr: string = flexh('tr');

/**
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row;
 *   flex-wrap: nowrap;
 *   justify-content: space-between;
 * }
 * ```
 */
export const fhts: string = flexh('ts');

/**
 * ```css
 * {
 *   align-items: center;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row;
 *   flex-wrap: nowrap;
 *   justify-content: flex-start;
 * }
 * ```
 */
export const fhcl: string = flexh('cl');

/**
 * ```css
 * {
 *   align-items: center;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row;
 *   flex-wrap: nowrap;
 *   justify-content: center;
 * }
 * ```
 */
export const fhcc: string = flexh('cc');

/**
 * ```css
 * {
 *   align-items: center;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row;
 *   flex-wrap: nowrap;
 *   justify-content: flex-end;
 * }
 * ```
 */
export const fhcr: string = flexh('cr');

/**
 * ```css
 * {
 *   align-items: center;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row;
 *   flex-wrap: nowrap;
 *   justify-content: space-between;
 * }
 * ```
 */
export const fhcs: string = flexh('cs');

/**
 * ```css
 * {
 *   align-items: flex-end;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row;
 *   flex-wrap: nowrap;
 *   justify-content: flex-start;
 * }
 * ```
 */
export const fhbl: string = flexh('bl');

/**
 * ```css
 * {
 *   align-items: flex-end;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row;
 *   flex-wrap: nowrap;
 *   justify-content: center;
 * }
 * ```
 */
export const fhbc: string = flexh('bc');

/**
 * ```css
 * {
 *   align-items: flex-end;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row;
 *   flex-wrap: nowrap;
 *   justify-content: flex-end;
 * }
 * ```
 */
export const fhbr: string = flexh('br');

/**
 * ```css
 * {
 *   align-items: flex-end;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row;
 *   flex-wrap: nowrap;
 *   justify-content: space-between;
 * }
 * ```
 */
export const fhbs: string = flexh('bs');

/**
 * ```css
 * {
 *   align-items: stretch;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row;
 *   flex-wrap: nowrap;
 *   justify-content: flex-start;
 * }
 * ```
 */
export const fhsl: string = flexh('sl');

/**
 * ```css
 * {
 *   align-items: stretch;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row;
 *   flex-wrap: nowrap;
 *   justify-content: center;
 * }
 * ```
 */
export const fhsc: string = flexh('sc');

/**
 * ```css
 * {
 *   align-items: stretch;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row;
 *   flex-wrap: nowrap;
 *   justify-content: flex-end;
 * }
 * ```
 */
export const fhsr: string = flexh('sr');

/**
 * ```css
 * {
 *   align-items: stretch;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row;
 *   flex-wrap: nowrap;
 *   justify-content: space-between;
 * }
 * ```
 */
export const fhss: string = flexh('ss');

/**
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: flex-end;
 * }
 * ```
 */
export const frhtl: string = flexrh('tl');

/**
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: center;
 * }
 * ```
 */
export const frhtc: string = flexrh('tc');

/**
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: flex-start;
 * }
 * ```
 */
export const frhtr: string = flexrh('tr');

/**
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: space-between;
 * }
 * ```
 */
export const frhts: string = flexrh('ts');

/**
 * ```css
 * {
 *   align-items: center;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: flex-end;
 * }
 * ```
 */
export const frhcl: string = flexrh('cl');

/**
 * ```css
 * {
 *   align-items: center;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: center;
 * }
 * ```
 */
export const frhcc: string = flexrh('cc');

/**
 * ```css
 * {
 *   align-items: center;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: flex-start;
 * }
 * ```
 */
export const frhcr: string = flexrh('cr');

/**
 * ```css
 * {
 *   align-items: center;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: space-between;
 * }
 * ```
 */
export const frhcs: string = flexrh('cs');

/**
 * ```css
 * {
 *   align-items: flex-end;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: flex-end;
 * }
 * ```
 */
export const frhbl: string = flexrh('bl');

/**
 * ```css
 * {
 *   align-items: flex-end;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: center;
 * }
 * ```
 */
export const frhbc: string = flexrh('bc');

/**
 * ```css
 * {
 *   align-items: flex-end;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: flex-start;
 * }
 * ```
 */
export const frhbr: string = flexrh('br');

/**
 * ```css
 * {
 *   align-items: flex-end;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: space-between;
 * }
 * ```
 */
export const frhbs: string = flexrh('bs');

/**
 * ```css
 * {
 *   align-items: stretch;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: flex-end;
 * }
 * ```
 */
export const frhsl: string = flexrh('sl');

/**
 * ```css
 * {
 *   align-items: stretch;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: center;
 * }
 * ```
 */
export const frhsc: string = flexrh('sc');

/**
 * ```css
 * {
 *   align-items: stretch;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: flex-start;
 * }
 * ```
 */
export const frhsr: string = flexrh('sr');

/**
 * ```css
 * {
 *   align-items: stretch;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: row-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: space-between;
 * }
 * ```
 */
export const frhss: string = flexrh('ss');

/**
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column;
 *   flex-wrap: nowrap;
 *   justify-content: flex-start;
 * }
 * ````
 */
export const fvtl: string = flexv('tl');

/**
 * ```css
 * {
 *   align-items: center;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column;
 *   flex-wrap: nowrap;
 *   justify-content: flex-start;
 * }
 * ````
 */
export const fvtc: string = flexv('tc');

/**
 * ```css
 * {
 *   align-items: flex-end;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column;
 *   flex-wrap: nowrap;
 *   justify-content: flex-start;
 * }
 * ````
 */
export const fvtr: string = flexv('tr');

/**
 * ```css
 * {
 *   align-items: stretch;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column;
 *   flex-wrap: nowrap;
 *   justify-content: flex-start;
 * }
 * ````
 */
export const fvts: string = flexv('ts');

/**
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column;
 *   flex-wrap: nowrap;
 *   justify-content: center;
 * }
 * ````
 */
export const fvcl: string = flexv('cl');

/**
 * ```css
 * {
 *   align-items: center;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column;
 *   flex-wrap: nowrap;
 *   justify-content: center;
 * }
 * ````
 */
export const fvcc: string = flexv('cc');

/**
 * ```css
 * {
 *   align-items: flex-end;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column;
 *   flex-wrap: nowrap;
 *   justify-content: center;
 * }
 * ````
 */
export const fvcr: string = flexv('cr');

/**
 * ```css
 * {
 *   align-items: stretch;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column;
 *   flex-wrap: nowrap;
 *   justify-content: center;
 * }
 * ````
 */
export const fvcs: string = flexv('cs');

/**
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column;
 *   flex-wrap: nowrap;
 *   justify-content: flex-end;
 * }
 * ````
 */
export const fvbl: string = flexv('bl');

/**
 * ```css
 * {
 *   align-items: center;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column;
 *   flex-wrap: nowrap;
 *   justify-content: flex-end;
 * }
 * ````
 */
export const fvbc: string = flexv('bc');

/**
 * ```css
 * {
 *   align-items: flex-end;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column;
 *   flex-wrap: nowrap;
 *   justify-content: flex-end;
 * }
 * ````
 */
export const fvbr: string = flexv('br');

/**
 * ```css
 * {
 *   align-items: stretch;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column;
 *   flex-wrap: nowrap;
 *   justify-content: flex-end;
 * }
 * ````
 */
export const fvbs: string = flexv('bs');

/**
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column;
 *   flex-wrap: nowrap;
 *   justify-content: space-between;
 * }
 * ````
 */
export const fvsl: string = flexv('sl');

/**
 * ```css
 * {
 *   align-items: center;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column;
 *   flex-wrap: nowrap;
 *   justify-content: space-between;
 * }
 * ````
 */
export const fvsc: string = flexv('sc');

/**
 * ```css
 * {
 *   align-items: flex-end;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column;
 *   flex-wrap: nowrap;
 *   justify-content: space-between;
 * }
 * ````
 */
export const fvsr: string = flexv('sr');

/**
 * ```css
 * {
 *   align-items: stretch;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column;
 *   flex-wrap: nowrap;
 *   justify-content: space-between;
 * }
 * ````
 */
export const fvss: string = flexv('ss');

/**
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: flex-end;
 * }
 * ```
 */
export const frvtl: string = flexrv('tl');

/**
 * ```css
 * {
 *   align-items: center;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: flex-end;
 * }
 * ```
 */
export const frvtc: string = flexrv('tc');

/**
 * ```css
 * {
 *   align-items: flex-end;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: flex-end;
 * }
 * ```
 */
export const frvtr: string = flexrv('tr');

/**
 * ```css
 * {
 *   align-items: stretch;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: flex-end;
 * }
 * ```
 */
export const frvts: string = flexrv('ts');

/**
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: center;
 * }
 * ```
 */
export const frvcl: string = flexrv('cl');

/**
 * ```css
 * {
 *   align-items: center;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: center;
 * }
 * ```
 */
export const frvcc: string = flexrv('cc');

/**
 * ```css
 * {
 *   align-items: flex-end;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: center;
 * }
 * ```
 */
export const frvcr: string = flexrv('cr');

/**
 * ```css
 * {
 *   align-items: stretch;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: center;
 * }
 * ```
 */
export const frvcs: string = flexrv('cs');

/**
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: flex-start;
 * }
 * ```
 */
export const frvbl: string = flexrv('bl');

/**
 * ```css
 * {
 *   align-items: center;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: flex-start;
 * }
 * ```
 */
export const frvbc: string = flexrv('bc');

/**
 * ```css
 * {
 *   align-items: flex-end;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: flex-start;
 * }
 * ```
 */
export const frvbr: string = flexrv('br');

/**
 * ```css
 * {
 *   align-items: stretch;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: flex-start;
 * }
 * ```
 */
export const frvbs: string = flexrv('bs');

/**
 * ```css
 * {
 *   align-items: flex-start;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: space-between;
 * }
 * ```
 */
export const frvsl: string = flexrv('sl');

/**
 * ```css
 * {
 *   align-items: center;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: space-between;
 * }
 * ```
 */
export const frvsc: string = flexrv('sc');

/**
 * ```css
 * {
 *   align-items: flex-end;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: space-between;
 * }
 * ```
 */
export const frvsr: string = flexrv('sr');

/**
 * ```css
 * {
 *   align-items: stretch;
 *   box-sizing: border-box;
 *   display: flex;
 *   flex-direction: column-reverse;
 *   flex-wrap: nowrap;
 *   justify-content: space-between;
 * }
 * ```
 */
export const frvss: string = flexrv('ss');
