import minify from '../utils/minify';
import { toCSSProperty } from './utils';

/**
 * Applies CSS transition rules.
 *
 * @param property - Value for `transition-property`.
 * @param duration - Value for `transition-duration`.
 * @param timingFunction - Value for `transition-timing-function`.
 * @param delay - Value for `transition-delay`.
 *
 * @return CSS string.
 */
export function transition(property: string | string[], duration: number | string | (number | string)[], timingFunction: string | string[] = 'linear', delay: number | string | (number | string)[] = 0): string {
  return minify(`
    transition-property: ${toCSSProperty(property)};
    transition-duration: ${toCSSProperty(duration, 'ms')};
    transition-timing-function: ${toCSSProperty(timingFunction)};
    transition-delay: ${toCSSProperty(delay, 'ms')};
    will-change: ${toCSSProperty(property)};
  `);
}
