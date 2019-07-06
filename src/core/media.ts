import { parseUnit } from './utils';

/**
 * Default media breakpoint thresholds.
 *
 * ```js
 * {
 *   mobile: {
 *     min: 0,
 *     max: 639,
 *   },
 *   tablet: {
 *     min: 640,
 *     max: 1024,
 *   },
 *   notebook: {
 *     min: 1025,
 *     max: 1439,
 *   },
 *   desktop: {
 *     min: 1440,
 *     max: 1919,
 *   },
 *   tv: {
 *     min: 1920,
 *     max: 100000,
 *   },
 * }
 * ```
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

/**
 * Media query portrait breakpoint.
 *
 * ```(orientation: portrait)```
 */
export const portrait: string = '(orientation: portrait)';

/**
 * Media query landscape breakpoint.
 *
 * ```(orientation: landscape)```
 */
export const landscape: string = '(orientation: landscape)';

/**
 * Media query greater-than-or-equal-to aspect ratio breakpoint.
 *
 * @param aspectRatio - Aspect ratio.
 *
 * @returns ```(min-aspect-ratio: ${aspectRatio})```
 */
export const gtear = (aspectRatio: string | number): string => `(min-aspect-ratio: ${aspectRatio})`;

/**
 * Media query less-than-or-equal-to aspect ratio breakpoint.
 *
 * @param aspectRatio - Aspect ratio.
 *
 * @returns ```(max-aspect-ratio: ${aspectRatio})```
 */
export const ltear = (aspectRatio: string | number): string => `(max-aspect-ratio: ${aspectRatio})`;

/**
 * Media query exact aspect ratio breakpoint.
 *
 * @param aspectRatio - Aspect ratio.
 *
 * @returns ```(aspect-ratio: ${aspectRatio})```
 */
export const ar = (aspectRatio: string | number): string => `(aspect-ratio: ${aspectRatio})`;

/**
 * Media query greater-than width breakpoint.
 *
 * @param width - Width (in pixels).
 *
 * @returns ```(min-width: ${width + 1)```
 */
export function gtw(width: string | number): string {
  const [val, unit] = parseUnit(width);
  return `(min-width: ${val + 1}${unit})`;
}

/**
 * Media query greater-than-or-equal-to width breakpoint.
 *
 * @param width - Width (in pixels).
 *
 * @returns ```(min-width: ${width)```
 */
export function gtew(minWidth: string | number): string {
  const [val, unit] = parseUnit(minWidth);
  return `(min-width: ${val}${unit})`;
}

/**
 * Media query less-than width breakpoint.
 *
 * @param width - Width (in pixels).
 *
 * @returns ```(mmax-width: ${width - 1)```
 */
export function ltw(width: string | number): string {
  const [val, unit] = parseUnit(width);
  return `(max-width: ${val - 1}${unit})`;
}

/**
 * Media query less-than-or-equal-to width breakpoint.
 *
 * @param width - Width (in pixels).
 *
 * @returns ```(max-width: ${width)```
 */
export function ltew(maxWidth: string | number): string {
  const [val, unit] = parseUnit(maxWidth);
  return `(max-width: ${val}${unit})`;
}

/**
 * Media query clamped width (inclusive) breakpoint.
 *
 * @param minWidth - Minimum width (in pixels).
 * @param maxWidth - Maximum width (in pixels).
 *
 * @returns ```(min-width: minWidth) and (max-width: ${maxWidth})```
 */
export function cw(minWidth: string | number, maxWidth: string | number): string {
  const [minVal, minUnit] = parseUnit(minWidth);
  const [maxVal, maxUnit] = parseUnit(maxWidth);
  return `(min-width: ${minVal}${minUnit}) and (max-width: ${maxVal}${maxUnit})`;
}

/**
 * Media query greater-than height breakpoint.
 *
 * @param height - Height (in pixels).
 *
 * @returns ```(min-height: ${height + 1)```
 */
export function gth(height: string | number): string {
  const [val, unit] = parseUnit(height);
  return `(min-height: ${val + 1}${unit})`;
}

/**
 * Media query greater-than-or-equal-to height breakpoint.
 *
 * @param height - Height (in pixels).
 *
 * @returns ```(min-height: ${height)```
 */
export function gteh(height: string | number): string {
  const [val, unit] = parseUnit(height);
  return `(min-height: ${val}${unit})`;
}

/**
 * Media query less-than height breakpoint.
 *
 * @param height - Height (in pixels).
 *
 * @returns ```(mmax-height: ${height - 1)```
 */
export function lth(height: string | number): string {
  const [val, unit] = parseUnit(height);
  return `(max-height: ${val - 1}${unit})`;
}

/**
 * Media query less-than-or-equal-to height breakpoint.
 *
 * @param height - Height (in pixels).
 *
 * @returns ```(max-height: ${height)```
 */
export function lteh(height: string | number): string {
  const [val, unit] = parseUnit(height);
  return `(max-height: ${val}${unit})`;
}

/**
 * Media query clamped height (inclusive) breakpoint.
 *
 * @param minHeight - Minimum height (in pixels).
 * @param maxHeight - Maximum height (in pixels).
 *
 * @returns ```(min-height: minHeight) and (max-height: ${maxHeight})```
 */
export function ch(minHeight: string | number, maxHeight: string | number): string {
  const [minVal, minUnit] = parseUnit(minHeight);
  const [maxVal, maxUnit] = parseUnit(maxHeight);
  return `(min-height: ${minVal}${minUnit}) and (max-height: ${maxVal}${maxUnit})`;
}

/**
 * ```(min-width: 0px) and (max-width: 639px)```
 */
export const mobile: string = `(min-width: ${breakpoints.mobile.min}px) and (max-width: ${breakpoints.mobile.max}px)`;

/**
 * ```(min-width: 640px)```
 */
export const gtmobile: string = `(min-width: ${breakpoints.mobile.max + 1}px)`;

/**
 * ```(min-width: 0px)```
 */
export const gtemobile: string = `(min-width: ${breakpoints.mobile.min}px)`;

/**
 * ```(min-width: 640px) and (max-width: 1024px)```
 */
export const tablet: string = `(min-width: ${breakpoints.tablet.min}px) and (max-width: ${breakpoints.tablet.max}px)`;

/**
 * ```(min-width: 1025px)```
 */
export const gttablet: string = `(min-width: ${breakpoints.tablet.max + 1}px)`;

/**
 * ```(min-width: 640px)```
 */
export const gtetablet: string = `(min-width: ${breakpoints.tablet.min}px)`;

/**
 * ```(max-width: 639px)```
 */
export const lttablet: string = `(max-width: ${breakpoints.tablet.min - 1}px)`;

/**
 * ```(max-width: 1024px)```
 */
export const ltetablet: string = `(max-width: ${breakpoints.tablet.max}px)`;

/**
 * ```(min-width: 1025px) and (max-width: 1439px)```
 */
export const notebook: string = `(min-width: ${breakpoints.notebook.min}px) and (max-width: ${breakpoints.notebook.max}px)`;

/**
 * ```(min-width: 1440px)```
 */
export const gtnotebook: string = `(min-width: ${breakpoints.notebook.max + 1}px)`;

/**
 * ```(min-width: 1025px)```
 */
export const gtenotebook: string = `(min-width: ${breakpoints.notebook.min}px)`;

/**
 * ```(max-width: 1438px)```
 */
export const ltnotebook: string = `(max-width: ${breakpoints.notebook.min - 1}px)`;

/**
 * ```(max-width: 1439px)```
 */
export const ltenotebook: string = `(max-width: ${breakpoints.notebook.max}px)`;

/**
 * ```(min-width: 1440px) and (max-width: 1919px)```
 */
export const desktop: string = `(min-width: ${breakpoints.desktop.min}px) and (max-width: ${breakpoints.desktop.max}px)`;

/**
 * ```(min-width: 1920px)```
 */
export const gtdesktop: string = `(min-width: ${breakpoints.desktop.max + 1}px)`;

/**
 * ```(min-width: 1440px)```
 */
export const gtedesktop: string = `(min-width: ${breakpoints.desktop.min}px)`;

/**
 * ```(max-width: 1439px)```
 */
export const ltdesktop: string = `(max-width: ${breakpoints.desktop.min - 1}px)`;

/**
 * ```(max-width: 1440px)```
 */
export const ltedesktop: string = `(max-width: ${breakpoints.desktop.max}px)`;

/**
 * ```(min-width: 1920px) and (max-width: 100000px)```
 */
export const tv: string = `(min-width: ${breakpoints.tv.min}px) and (max-width: ${breakpoints.tv.max}px)`;

/**
 * ```(max-width: 1919px)```
 */
export const lttv: string = `(max-width: ${breakpoints.tv.min - 1}px)`;

/**
 * ```(max-width: 100000px)```
 */
export const ltetv: string = `(max-width: ${breakpoints.tv.max}px)`;
