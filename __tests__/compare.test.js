import 'jasmine-expect';
import spread,{ spreadK, spreadKV, spreadV, } from 'src/spread';
import { diff, inter, mapDiff, mapInter, mapUnion, union, uniteMap, } from 'src/compare';

const set0 = new Set([ 1, 2, 3, ]);
const set1 = new Set([ 2, 3, 4, ]);
const m0 = new Map().set(8, 1).set(7, 2).set(6, 3).set(5, 4);
const m1 = new Map().set(8, 2).set(7, 23).set(9, 10).set(11, 12);

describe('comparisons', () => {
  describe('inter', () => {
    it('returns an array of all shared elements ', () => {
      expect(inter(set0)(set1)).toBeArray();
      expect(inter(set0)(set1)).toContain(2, 3);
    });
  });
  describe('diff', () => {
    it('returns elements in first set absent fom the second ', () => {
      expect(diff(set0)(set1)).toBeArray();
      expect(diff(set0)(set1)).toContain(1, 4);
    });
  });
  describe('union', () => {
    it('combines elements of both sets ', () => {
      expect(union(set0)(set1)).toBeArray();
      expect(union(set0)(set1)).toContain(1, 2, 3, 4);
    });
  });
  describe('mapInter', () => {
    it('returns an array of all shared elements ', () => {
      expect((mapInter(m0)(m1)) instanceof Map).toBeTrue();
      expect(spread(mapInter(m0)(m1))).toContainEqual([ 7, 2, ]);
    });
  });
  describe('mapDiff', () => {
    it('returns elements in first map absent fom the second ', () => {
      expect((mapDiff(m0)(m1)) instanceof Map).toBeTrue();
      expect(spread(mapDiff(m0)(m1))).toContainEqual([ 5, 4, ]);
    });
  });
  describe('mapUnion', () => {
    it('combines elements of both maps ', () => {
      expect((mapUnion(m0)(m1)) instanceof Map).toBeTrue();
      expect(spread(mapUnion(m0)(m1))).toContainEqual([ 7, 2, ]);
    });
  });
  describe('uniteMap', () => {
    it('adds all elements of the second collection to the first', () => {
      expect(spread(uniteMap(m0)(m1))).toContainEqual([ 11, 12, ]);
    });
  });
});
