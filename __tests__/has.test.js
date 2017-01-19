import 'jasmine-expect';
import { has, hasK, hasKV, xhasK, xhasKV, } from 'src/has';

const qSet = new Set([ 1, 2, 3, 4, ]);
const qMap = new Map().set(8, 1).set(7, 2).set(6, 3).set(5, 4);
const qArr = [ 0, 11, 22, 33, 44, ];

describe('hasK(default)', () => {
  it('checks a map for a key', () => {
    expect(hasK(qMap)(6)).toBeTrue();
  });
});
describe('xhasK', () => {
  it('checks a collection for a key', () => {
    expect(xhasK(qMap)(6)).toBeFalse();
  });
});
describe('hasKV', () => {
  it('checks a collection for a tuples key', () => {
    const first = [ ...qMap, ][0];

    expect(hasKV(qMap)(first)).toBeTrue();
  });
});
describe('xhasKV', () => {
  it('checks a collection for an entry', () => {
    const first = [ ...qMap, ][0];

    expect(xhasKV(qMap)(first)).toBeFalse();
  });
});
