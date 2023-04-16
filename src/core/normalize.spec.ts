import csstree from 'css-tree'
import { describe, it } from 'mocha'
import { normalize } from '..'

describe('core/normalize', () => {
  it('has valid syntax', () => {
    csstree.parse(normalize(), {
      onParseError: err => {
        throw err
      },
    })
  })
})
