import 'jasmine-expect';

import { asArray, asMap, asSet, } from 'src/cast';
const qSet = new Set([ 1, 2, 3, 4, ]);
const qMap = new Map().set(8, 1).set(7, 2).set(6, 3).set(5, 4);
const qArr = [ 0, 11, 22, 33, 44, ];

describe('cast', () => {
  describe('asArray', () => {
    it('returns an array representation of a collection', () => {
      expect(asArray(qMap)).toBeArray();
    });
  });
  describe('asMap', () => {
    it('returns an array representation of a collection', () => {
      expect(asMap(qSet) instanceof Map).toBeTrue();
    });
  }); describe('asSet', () => {
    it('returns an array representation of a collection', () => {
      expect(asSet(qArr) instanceof Set).toBeTrue();
    });
  });
});
