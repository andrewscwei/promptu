import { parseUnit } from './utils';

/**
 * Media breakpoint thresholds.
 */
export const breakpoints = {
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

export const portrait: string = '(orientation: portrait)';

export const landscape: string = '(orientation: landscape)';

export const gtear = (aspectRatio: string | number): string => `(min-aspect-ratio: ${aspectRatio})`;

export const ltear = (aspectRatio: string | number): string => `(max-aspect-ratio: ${aspectRatio})`;

export const ar = (aspectRatio: string | number): string => `(aspect-ratio: ${aspectRatio})`;

export function gtw(minWidth: string | number): string {
  const [val, unit] = parseUnit(minWidth);
  return `(min-width: ${val + 1}${unit})`;
};

export function gtew(minWidth: string | number): string {
  const [val, unit] = parseUnit(minWidth);
  return `(min-width: ${val}${unit})`;
};

export function ltw(maxWidth: string | number): string {
  const [val, unit] = parseUnit(maxWidth);
  return `(max-width: ${val - 1}${unit})`;
};

export function ltew(maxWidth: string | number): string {
  const [val, unit] = parseUnit(maxWidth);
  return `(max-width: ${val}${unit})`;
};

export function cw(minWidth: string | number, maxWidth: string | number): string {
  const [minVal, minUnit] = parseUnit(minWidth);
  const [maxVal, maxUnit] = parseUnit(maxWidth);
  return `(min-width: ${minVal}${minUnit}) and (max-width: ${maxVal}${maxUnit})`;
};

export function gth(minHeight: string | number): string {
  const [val, unit] = parseUnit(minHeight);
  return `(min-height: ${val + 1}${unit})`;
};

export function gteh(minHeight: string | number): string {
  const [val, unit] = parseUnit(minHeight);
  return `(min-height: ${val}${unit})`;
};

export function lth(maxHeight: string | number): string {
  const [val, unit] = parseUnit(maxHeight);
  return `(max-height: ${val - 1}${unit})`;
};

export function lteh(maxHeight: string | number): string {
  const [val, unit] = parseUnit(maxHeight);
  return `(max-height: ${val}${unit})`;
};

export function ch(minHeight: string | number, maxHeight: string | number): string {
  const [minVal, minUnit] = parseUnit(minHeight);
  const [maxVal, maxUnit] = parseUnit(maxHeight);
  return `(min-height: ${minVal}${minUnit}) and (max-height: ${maxVal}${maxUnit})`;
};

export const mobile: string = `(min-width: ${breakpoints.mobile.min}px) and (max-width: ${breakpoints.mobile.max}px)`;
export const gtmobile: string = `(min-width: ${breakpoints.mobile.max + 1}px)`;
export const gtemobile: string = `(min-width: ${breakpoints.mobile.min}px)`;
export const tablet: string = `(min-width: ${breakpoints.tablet.min}px) and (max-width: ${breakpoints.tablet.max}px)`;
export const gttablet: string = `(min-width: ${breakpoints.tablet.max + 1}px)`;
export const gtetablet: string = `(min-width: ${breakpoints.tablet.min}px)`;
export const lttablet: string = `(max-width: ${breakpoints.tablet.min - 1}px)`;
export const ltetablet: string = `(max-width: ${breakpoints.tablet.max}px)`;
export const notebook: string = `(min-width: ${breakpoints.notebook.min}px) and (max-width: ${breakpoints.notebook.max}px)`;
export const gtnotebook: string = `(min-width: ${breakpoints.notebook.max + 1}px)`;
export const gtenotebook: string = `(min-width: ${breakpoints.notebook.min}px)`;
export const ltnotebook: string = `(max-width: ${breakpoints.notebook.min - 1}px)`;
export const ltenotebook: string = `(max-width: ${breakpoints.notebook.max}px)`;
export const desktop: string = `(min-width: ${breakpoints.desktop.min}px) and (max-width: ${breakpoints.desktop.max}px)`;
export const gtdesktop: string = `(min-width: ${breakpoints.desktop.max + 1}px)`;
export const gtedesktop: string = `(min-width: ${breakpoints.desktop.min}px)`;
export const ltdesktop: string = `(max-width: ${breakpoints.desktop.min - 1}px)`;
export const ltedesktop: string = `(max-width: ${breakpoints.desktop.max}px)`;
export const tv: string = `(min-width: ${breakpoints.tv.min}px) and (max-width: ${breakpoints.tv.max}px)`;
export const lttv: string = `(max-width: ${breakpoints.tv.min - 1}px)`;
export const ltetv: string = `(max-width: ${breakpoints.tv.max}px)`;
