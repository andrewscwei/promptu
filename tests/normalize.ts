import csstree from 'css-tree';
import { describe, it } from 'mocha';
import { normalize } from '../src';

describe('normalize', () => {
  it('has valid syntax', () => {
    csstree.parse(normalize(), {
      onParseError: err => {
        throw err;
      },
    });
  });
});
