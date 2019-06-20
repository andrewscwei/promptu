import { Alignment } from '../types';

export function abs(alignment: Alignment = 'cc'): string {
  let t;

  switch (alignment) {
  case 'tl':
    t = `
      bottom: unset;
      left: 0;
      margin: 0;
      right: unset;
      top: 0;
    `;
    break;
  case 'tc':
    t = `
      bottom: unset;
      left: 0;
      margin: 0 auto;
      right: 0;
      top: 0;
    `;
    break;
  case 'tr':
    t = `
      bottom: unset;
      left: unset;
      margin: 0;
      right: 0;
      top: 0;
    `;
    break;
  case 'cl':
    t = `
      bottom: 0;
      left: 0;
      margin: auto 0;
      right: unset;
      top: 0;
    `;
    break;
  case 'cr':
    t = `
      bottom: 0;
      left: unset;
      margin: auto 0;
      right: 0;
      top: 0;
    `;
    break;
  case 'bl':
    t = `
      bottom: 0;
      left: 0;
      margin: 0;
      right: unset;
      top: unset;
    `;
    break;
  case 'bc':
    t = `
      bottom: 0;
      left: 0;
      margin: 0 auto;
      right: 0;
      top: unset;
    `;
    break;
  case 'br':
    t = `
      bottom: 0;
      left: unset;
      margin: 0;
      right: 0;
      top: unset;
    `;
    break;
  default:
    t = `
      bottom: 0;
      left: 0;
      margin: auto;
      right: 0;
      top: 0;
    `;
  }

  return `
    ${t}
    position: absolute;
  `;
}

export function fixed(alignment: Alignment = 'cc'): string {
  let t;

  switch (alignment) {
  case 'tl':
    t = `
      bottom: unset;
      left: 0;
      margin: 0;
      right: unset;
      top: 0;
    `;
    break;
  case 'tc':
    t = `
      bottom: unset;
      left: 0;
      margin: 0 auto;
      right: 0;
      top: 0;
    `;
    break;
  case 'tr':
    t = `
      bottom: unset;
      left: unset;
      margin: 0;
      right: 0;
      top: 0;
    `;
    break;
  case 'cl':
    t = `
      bottom: 0;
      left: 0;
      margin: auto 0;
      right: unset;
      top: 0;
    `;
    break;
  case 'cr':
    t = `
      bottom: 0;
      left: unset;
      margin: auto 0;
      right: 0;
      top: 0;
    `;
    break;
  case 'bl':
    t = `
      bottom: 0;
      left: 0;
      margin: 0;
      right: unset;
      top: unset;
    `;
    break;
  case 'bc':
    t = `
      bottom: 0;
      left: 0;
      margin: 0 auto;
      right: 0;
      top: unset;
    `;
    break;
  case 'br':
    t = `
      bottom: 0;
      left: unset;
      margin: 0;
      right: 0;
      top: unset;
    `;
    break;
  default:
    t = `
      bottom: 0;
      left: 0;
      margin: auto;
      right: 0;
      top: 0;
    `;
  }

  return `
    ${t}
    position: fixed;
  `;
}

export const tl = abs('tl');
export const tc = abs('tc');
export const tr = abs('tr');
export const cl = abs('cl');
export const cc = abs('cc');
export const cr = abs('cr');
export const bl = abs('bl');
export const bc = abs('bc');
export const br = abs('br');
export const ftl = fixed('tl');
export const ftc = fixed('tc');
export const ftr = fixed('tr');
export const fcl = fixed('cl');
export const fcc = fixed('cc');
export const fcr = fixed('cr');
export const fbl = fixed('bl');
export const fbc = fixed('bc');
export const fbr = fixed('br');
