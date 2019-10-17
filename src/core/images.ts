import minify from '../utils/minify';

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
  return minify(`
    background-image: url('${src}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `);
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
export const cvbg = coverBackground;

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
  return minify(`
    background-image: url('${src}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  `);
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
export const cnbg = containedBackground;

/**
 * ```css
 * {
 *   box-sizing: border-box;
 *   display: block;
 *   height: 100%;
 *   object-fit: cover;
 *   width: 100%;
 * }
 * ```
 */
export const coverImage: string = minify(`
  box-sizing: border-box;
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
`);

/**
 * ```css
 * {
 *   box-sizing: border-box;
 *   display: block;
 *   height: 100%;
 *   object-fit: cover;
 *   width: 100%;
 * }
 * ```
 */
export const cvi = coverImage;

/**
 * ```css
 * {
 *   box-sizing: border-box;
 *   display: block;
 *   height: 100%;
 *   object-fit: cover;
 *   width: 100%;
 * }
 * ```
 */
export const coverVideo: string = minify(`
  box-sizing: border-box;
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
`);

/**
 * ```css
 * {
 *   box-sizing: border-box;
 *   display: block;
 *   height: 100%;
 *   object-fit: cover;
 *   width: 100%;
 * }
 * ```
 */
export const cvv = coverVideo;

/**
 * CSS mixin for a mask element.
 *
 * ```css
 * {
 *   mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
 *   overflow: hidden;
 * }
 * ```
 */
export const mask: string = minify(`
  mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
  overflow: hidden;
`);
