import 'jasmine-expect';
import { isIterable, iterify, } from 'src/iterable';

describe('isIterable', () => {
  it('checks if an object has an iterator', () => {
    expect(isIterable([ 1,3,4, ])).toBeTrue();
  });
});
describe('iterify', () => {
  describe('when object is iterable', () => {
    it('returns the object', () => {
      expect(iterify([ 1,2, ])).toEqual([ 1,2, ]);
    });
  });

  describe('when object is non iterable', () => {
    it('returns an array containing the object', () => {
      expect(iterify(1)).toEqual([ 1, ]);
    });
  });
});
