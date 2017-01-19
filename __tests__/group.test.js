import 'jasmine-expect';
import { append, appendBin, flatten, flattenBin, flatTuple,
  flatTupleBin, triple, tuple, tupleBin, } from 'src/group';
const binarr = [ 1,2,3,4, ];

describe('groupings', () => {
  describe('append', () => {
    it('places an element at the end of a collection', () => {
      expect(append([ 1,2, ])(3)).toContain(3);
    });
  }); describe('appendBin', () => {
    it('places an element at the end of a collection', () => {
      expect(binarr.reduce(appendBin, [ 6,5, ])).toContain(3);
    });
  });
  describe('tuple(val)(key)', () => {
    it('returns a [key, val] array', () => {
      expect(tuple(0)('zero')).toBeArray();
    });
  });
  describe('tupleBin(val)(key)', () => {
    it('returns a [key, val] array', () => {
      expect(binarr.reduce(tupleBin,0)).toBeArray();
    });
  });
  describe('triple(val)(key)(key1)', () => {
    it('returns a [key0,key1,val] array', () => {
      expect(triple(1)('zero')('one')).toBeArray();
    });
  });
  describe('flatten', () => {
    it('combines two collections', () => {
      expect(flatten([ 1, 2, ])([ 3, 4, ])).toBeArray();
    });
  }); describe('flattenBin', () => {
    it('combines two collections', () => {
      expect(binarr.reduce(flattenBin,[ 1, 2, ])).toBeArray();
    });
  });
  describe('flatTuple(v0)([...elements])', () => {
    it('returns a [key0,...elements] array', () => {
      expect(flatTuple(0, 1)([ 'zero', 'one', ])).toBeArray();
    });
  });
});
