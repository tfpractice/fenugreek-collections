import 'jasmine-expect';
import { every, filter, map, reduce, some, } from 'src/array';

const nums = [ 1,2,3,4,5, ];
const logAndSum = (p, n) => { console.log('p,v', p,n); return p + n; };

describe('every', () => {
  it('checks if every element returns true for the callback', () => {
    expect(every(nums)(Number.isInteger)).toBeTrue();
  });
});

describe('filter', () => {
  it('returns the eleements of the colection which  return true for the callback ', () => {
    expect(filter(nums)(n => n % 2 === 0)).toBeArray();
  });
});
describe('map', () => {
  it('returns a new array of the elements mapped to a function', () => {
    expect(map(nums)(v => v * 2)).toContain(10);
  });
});

describe('reduce', () => {
  it('reduces the elements in an array to a single value determined by the callback', () => {
    expect(reduce(nums)((acc, v) => acc + v,0)).toEqual(15);
  });
});
