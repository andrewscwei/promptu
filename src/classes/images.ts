import format from '../utils/format'

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
export const cvi = format(`
  box-sizing: border-box;
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
`)

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
export const cvv = format(`
  box-sizing: border-box;
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
`)

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
export const mask: string = format(`
  mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
  overflow: hidden;
`)
