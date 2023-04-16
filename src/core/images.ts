import format from '../utils/format'

/**
 * ```css
 * {
 *   background-image: url(`src`);
 *   background-position: center;
 *   background-repeat: no-repeat;
 *   background-size: cover;
 * }
 * ```
 */
export function coverBackground(src: string): string {
  return format(`
    background-image: url('${src}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `)
}

/**
 * ```css
 * {
 *   background-image: url(`src`);
 *   background-position: center;
 *   background-repeat: no-repeat;
 *   background-size: cover;
 * }
 * ```
 */
export const cvbg = coverBackground

/**
 * ```css
 * {
 *   background-image: url(`src`);
 *   background-position: center;
 *   background-repeat: no-repeat;
 *   background-size: contain;
 * }
 * ```
 */
export function containedBackground(src: string): string {
  return format(`
    background-image: url('${src}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  `)
}

/**
 * ```css
 * {
 *   background-image: url(`src`);
 *   background-position: center;
 *   background-repeat: no-repeat;
 *   background-size: contain;
 * }
 * ```
 */
export const cnbg = containedBackground
