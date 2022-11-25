/* eslint-disable no-prototype-builtins */

import csstree from 'css-tree'
import { describe, it } from 'mocha'
import { align } from '..'

describe('align', () => {
  for (const k in align) {
    if (!align.hasOwnProperty(k)) continue

    const p = (align as any)[k]

    if (typeof p === 'string') {
      it(k, () => {
        csstree.parse(`div {${p}}`, {
          positions: true,
          onParseError: err => {
            throw err
          },
        })
      })
    }
  }
})
