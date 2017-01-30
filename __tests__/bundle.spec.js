import * as coll from 'dist/bundle.es6';
describe('bundle', () => {
  it('is a collection of named functions', () => {
    // expect(coll).toMatchObject(
    expect.objectContaining({
      spread: expect.any(Function),
      has: expect.any(Function),
    });
  });
});
