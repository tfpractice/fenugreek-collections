import 'jasmine-expect';
import { spread, spreadE, spreadK, spreadKV, spreadV, } from 'src/spread';

const cSet = new Set([ 1, 2, 3, 4, ]);
const cMap = new Map().set(8, 1).set(7, 2).set(6, 3).set(5, 4);
const cArr = [ 0, 11, 22, 33, 44, ];

describe('spread', () => {
  it('converts a collection to an array via default iterator', () => {
    expect(spread(cSet)).toBeArray();
  });
});
describe('spreadK', () => {
  it('returns an array of collection keys', () => {
    expect(spreadK(cMap)).toContain(8);
  });
});
describe('spreadV', () => {
  it('returns an array of collection values', () => {
    expect(spreadV(cMap)).toContain(1);
  });
});
describe('spreadKV/spreadE', () => {
  it('returns an array of key values pairs', () => {
    expect(spreadKV(cArr)).toContainEqual([ 0, 0, ]);
  });
});
