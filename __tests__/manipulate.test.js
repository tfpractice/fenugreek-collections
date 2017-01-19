import 'jasmine-expect';
import { addMap, addSet, popFirst, removeMap, removeSet, } from 'src/manipulate';
import { spread, spreadK, spreadKV, spreadV, } from 'src/spread';

const cSet = new Set([ 1, 2, 3, 4, ]);
const cMap = new Map().set(8, 1).set(7, 2).set(6, 3).set(5, 4);
const cArr = [ 0, 11, 22, 33, 44, ];

describe('addSet(val)', () => {
  it('adds a value to a set', () => {
    expect(addSet(cSet)(9)).toContain(9);
  });
});
describe('addMap(tuple)', () => {
  it('appends a [k,v] tuple to a map', () => {
    expect(spreadK(addMap(cMap)(22)(33))).toContain(22);
  });
});

describe('removeSet(val)', () => {
  it('removes a value to a set', () => {
    expect(removeSet(cSet)(9)).not.toContain(9);
  });
});
describe('removeMap(tuple)', () => {
  it('appends a [k,v] tuple to a map', () => {
    expect(spreadK(removeMap(cMap)(8, 1, 7))).not.toContain(7);
  });
});
describe('popFirst', () => {
  it('deletes the first key in a map/set', () => {
    const copy = new Set(cSet);
    const first = popFirst(copy);

    expect(first).toBe(1);
    expect(cSet.has(first)).toBeTrue();
    expect(copy.has(first)).toBeFalse();
  });
});
