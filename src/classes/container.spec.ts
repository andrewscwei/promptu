/* eslint-disable no-prototype-builtins */

import csstree from 'css-tree'
import { describe, it } from 'mocha'
import * as container from './container'

describe('classes/container', () => {
  for (const k in container) {
    if (!container.hasOwnProperty(k)) continue

    const p = (container as any)[k]

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
