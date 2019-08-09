/**
 * Selects the element on hover when the HTML tag doesn't have the `touch`
 * class.
 */
export const hoverWithoutTouch = 'html:not(.touch) &:hover';

/**
 * Selects the element on hover when the HTML tag doesn't have the `touch`
 * class.
 */
export const hwot = hoverWithoutTouch;

/**
 * Selects every immediate child except for the last child.
 */
export const eachButLastChild = '> *:not(:last-child)';

/**
 * Selects every immediate child except for the last child.
 */
export const eblc = eachButLastChild;

/**
 * Selects every immediate child except for the first child.
 */
export const eachButFirstChild = '> *:not(:first-child)';

/**
 * Selects every immediate child except for the first child.
 */
export const ebfc = eachButFirstChild;
