import 'jasmine-expect';
import { eqLen,gtLen,isEmpty,len,ltLen,sameSize,single,xEmpty, } from 'src/length';

const four = [ 0,1,2,3, ];
const sFour = new Set(four);

describe('len', () => {
  it('returns the length of a collection', () => {
    expect(len(four)).toBe(4);
  });
});
describe('len', () => {
  it('description', () => {
    expect(len(sFour)).toEqual(4);
  });
});
describe('isEmpty', () => {
  it('description', () => {
    expect(isEmpty(four)).toEqual(false);
  });
});
describe('xEmpty', () => {
  it('description', () => {
    expect(xEmpty(four)).toEqual(true);
  });
});
describe('gtLen', () => {
  it('description', () => {
    expect(gtLen(3)(four)).toEqual(true);
  });
});
describe('eqLen', () => {
  it('description', () => {
    expect(eqLen(4)(four)).toEqual(true);
  });
});
describe('ltLen', () => {
  it('description', () => {
    expect(ltLen(7)(sFour)).toEqual(true);
  });
});
describe('single', () => {
  it('description', () => {
    expect(single(four)).toEqual(false);
  });
});
describe('sameSize', () => {
  it('description', () => {
    expect(sameSize(four)(sFour)).toEqual(true);
  });
});
