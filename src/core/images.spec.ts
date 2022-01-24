import csstree from 'css-tree'
import { describe, it } from 'mocha'
import { images } from '..'

describe('images', () => {
  for (const k in images) {
    if (!images.hasOwnProperty(k)) continue

    const p = (images as any)[k]

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
