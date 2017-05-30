import 'jasmine-expect';
import { every, everyPass, filtBy, filter, map, mapTo, reduce, reduceBy, some, somePass, } from 'src/array';

const nums = [ 1, 2, 3, 4, 5, ];
const sum = (p, n) => p + n;

describe('every', () => {
  it('checks if every element returns true for the callback', () => {
    expect(every(nums)(Number.isInteger)).toBeTrue();
  });
});

describe('everyPass', () => {
  it('checks if every element returns true for the callback', () => {
    expect(everyPass(Number.isInteger)(nums)).toBeTrue();
  });
});

describe('filter', () => {
  it('returns the eleements of the colection which  return true for the callback ', () => {
    expect(filter(nums)(n => n % 2 === 0)).toBeArray();
  });
});

describe('filtBy', () => {
  it('returns the eleements of the colection which  return true for the callback ', () => {
    expect(filtBy(n => n % 2 === 0)(nums)).toBeArray();
  });
});
describe('map', () => {
  it('returns a new array of the elements mapped to a function', () => {
    expect(map(nums)(v => v * 2)).toContain(10);
  });
});
describe('mapTo', () => {
  it('returns a new array of the elements mapped to a function', () => {
    expect(mapTo(v => v * 2)(nums)).toContain(10);
  });
});

describe('reduce', () => {
  it('reduces the elements in an array to a single value determined by the callback', () => {
    expect(reduce(nums)(sum, 0)).toEqual(15);
  });
});

describe('reduceBy', () => {
  it('reduces the elements in an array to a single value determined by the callback', () => {
    expect(reduceBy(sum,0)(nums)).toEqual(15);
  });
});
