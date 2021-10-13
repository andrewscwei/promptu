/**
 * Selects the element on hover when the HTML tag doesn't have the `touch`
 * class.
 *
 * ```css
 * html:not(.touch) &:hover
 * ```
 */
export const hoverWithoutTouch = 'html:not(.touch) &:hover'

/**
 * Selects the element on hover when the HTML tag doesn't have the `touch`
 * class.
 *
 * ```css
 * html:not(.touch) &:hover
 * ```
 */
export const hwot = hoverWithoutTouch

/**
 * Selects every immediate child except for the last child.
 *
 * ```css
 * > *:not(:last-child)
 * ```
 */
export const eachButLastChild = '> *:not(:last-child)'

/**
 * Selects every immediate child except for the last child.
 *
 * ```css
 * > *:not(:last-child)
 * ```
 */
export const eblc = eachButLastChild

/**
 * Selects every immediate child except for the first child.
 *
 * ```css
 * > *:not(:first-child)
 * ```
 */
export const eachButFirstChild = '> *:not(:first-child)'

/**
 * Selects every immediate child except for the first child.
 *
 * ```css
 * > *:not(:first-child)
 * ```
 */
export const ebfc = eachButFirstChild

/**
 * ```css
 * ul
 * ```
 */
export const ul1 = 'ul'

/**
 * ```css
 * ul ul, ol ul
 * ```
 */
export const ul2 = 'ul ul, ol ul'

/**
 * ```css
 * ul ul ul, ul ol ul, ol ul ul, ol ol ul
 * ```
 */
export const ul3 = 'ul ul ul, ul ol ul, ol ul ul, ol ol ul'

/**
 * ```css
 * ol
 * ```
 */
export const ol1 = 'ol'

/**
 * ```css
 * ul ol, ol ol
 * ```
 */
export const ol2 = 'ul ol, ol ol'

/**
 * ```css
 * ul ul ol, ul ol ol, ol ul ol, ol ol ol
 * ```
 */
export const ol3 = 'ul ul ol, ul ol ol, ol ul ol, ol ol ol'

/**
 * ```css
 * p + ul, p + ol
 * ```
 */
export const p2l = 'p + ul, p + ol, ul + ul, ul + ol, ol + ul, ol + ol'

/**
 * ```css
 * p + p, ul + p, ol + p
 * ```
 */
export const p2p = 'p + p, ul + p, ol + p'

/**
 * ```css
 * h1 + *
 * ```
 */
export const h12a = 'h1 + *'

/**
 * ```css
 * h2 + *
 * ```
 */
export const h22a = 'h2 + *'

/**
 * ```css
 * h3 + *
 * ```
 */
export const h32a = 'h3 + *'

/**
 * ```css
 * h4 + *
 * ```
 */
export const h42a = 'h4 + *'

/**
 * ```css
 * h5 + *
 * ```
 */
export const h52a = 'h5 + *'

/**
 * ```css
 * h6 + *
 * ```
 */
export const h62a = 'h6 + *'

/**
 * ```css
 * h1 + *, h2 + *, h3 + *, h4 + *, h5 + * , h6 + *
 * ```
 */
export const h2a = `${h12a}, ${h22a}, ${h32a}, ${h42a}, ${h52a}, ${h62a}`

/**
 * ```css
 * * + h1
 * ```
 */
export const a2h1 = '* + h1'

/**
 * ```css
 * * + h2
 * ```
 */
export const a2h2 = '* + h2'

/**
 * ```css
 * * + h3
 * ```
 */
export const a2h3 = '* + h3'

/**
 * ```css
 * * + h4
 * ```
 */
export const a2h4 = '* + h4'

/**
 * ```css
 * * + h5
 * ```
 */
export const a2h5 = '* + h5'

/**
 * ```css
 * * + h6
 * ```
 */
export const a2h6 = '* + h6'

/**
 * ```css
 * * + h1, * + h2, * + h3, * + h4, * + h5, * + h6
 * ```
 */
export const a2h = `${a2h1}, ${a2h2}, ${a2h3}, ${a2h4}, ${a2h5}, ${a2h6}`

/**
 * ```css
 * h1, h2, h3, h4, h5, h6
 * ```
 */
export const h = 'h1, h2, h3, h4, h5, h6'
