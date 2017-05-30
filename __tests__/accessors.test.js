import { first, firstK, firstV, fromIndex, get,last, lastK, lastV, rest, }
from 'src/accessors';

const qSet = new Set([ 1, 2, 3, 4, ]);
const qMap = new Map().set(8, 1).set(7, 2).set(6, 3).set(5, 4);
const qArr = [ 0, 11, 22, 33, 44, ];

describe('accessors', () => {
  describe('get', () => {
    it('retrieves the value of a given key in a collection', () => {
      expect(get(qArr)(2)).toBe(22);
      expect(get(qSet)(2)).toBe(2);
      expect(get(qMap)(6)).toBe(3);
    });
  });
  describe('fromIndex', () => {
    it('retrieves element at an index', () => {
      expect(fromIndex(qMap)(2)).toEqual([ 6, 3, ]);
    });
  });
  describe('first', () => {
    it('returns the first value of a collection', () => {
      expect(first(qSet)).toBe(1);
    });
  });
  describe('last', () => {
    it('returns the last value of a collection', () => {
      expect(last(qSet)).toBe(4);
    });
  });

  describe('lastK', () => {
    it('retrievs the last key of a collection', () => {
      expect(lastK(qMap)).toBe(5);
    });
  });
  describe('firstK', () => {
    it('retrieves the last key of a collection', () => {
      expect(firstK(qMap)).toBe(8);
    });
  });
  describe('lastV', () => {
    it('retrievs the last key of a collection', () => {
      expect(lastV(qMap)).toBe(4);
    });
  });
  describe('firstV', () => {
    it('retrieves the last key of a collection', () => {
      expect(firstV(qMap)).toBe(1);
    });
  });
  describe('rest', () => {
    it('returns all but the first element', () => {
      expect(rest(qSet).length).toEqual(3);
    });
  });
});
