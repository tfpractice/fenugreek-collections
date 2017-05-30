import 'jasmine-expect';
import { addBin,addBinMap, addBinSet, removeBin, removeBinArray, removeBinTuple, }
 from 'src/reducers';
import { spreadK, } from 'src/spread';

const cSet = new Set([ 1, 2, 3, 4, ]);
const cMap = new Map().set(8, 1).set(7, 2).set(6, 3).set(5, 4);
const cArr = [ 0, 11, 22, 33, 44, ];

describe('addBinSet(val)', () => {
  describe('addBin', () => {
    it('adds an element to a collection', () => {
      expect(addBin(cSet, 9)).toContain(9);
    });
  });
  it('appends a value to a set', () => {
    expect(addBinSet(cSet, 9)).toContain(9);
  });
});
describe('addBinMap(tuple)', () => {
  it('appends a [k,v] tuple to a map', () => {
    expect(spreadK(addBinMap(cMap, [ 22, 33, ]))).toContain(22);
  });
});
describe('removeBin', () => {
  it('returns a collection without the element', () => {
    expect(removeBin(cSet, 2)).not.toContain(2);
    expect(removeBin(cMap, 22)).not.toContain(22);
  });
});

describe('removeBinArray(val)', () => {
  it('removeBins a value from a set', () => {
    expect(removeBinArray(cSet, 9)).not.toContain(9);
  });
});
describe('removeBinTuple(tuple)', () => {
  it('removeBins a [k,v] tuple from a map', () => {
    expect(spreadK(removeBinTuple(cMap, [ 8, 1, ]))).not.toContain(8);
  });
});
