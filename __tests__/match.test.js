import 'jasmine-expect';
import { addUniq, dropMatch, hasMatch,identity,matchBin,matches,
matchMap, mergeMatch, replaceMatch,
swapMatch,
updateMatch,
xHasMatch,
xMatchBin,
xMatches, } from 'src/match';

const getID = ({ id, }) => id;
const makeID = id => ({ id, });
const id3 = makeID(3);
const id4 = makeID(4);
const id5 = makeID(5);
const id6 = makeID(6);
const arr35 = [ id3,id4,id5, ];
const num3 = { num: 3, id: 3, };
const num4 = { num: 4, id: 4, };

describe('identity', () => {
  it('returns the object it was given', () => {
    expect(identity(4)).toEqual(4);
  });
});
describe('matches', () => {
  it('compares objects to a match function', () => {
    expect(matches(getID)(id3)(id3)).toBeTrue();
  });
});
describe('matchBin', () => {
  it('compares objects to a match function', () => {
    expect(matchBin(getID)(id3,id3)).toBeTrue();
  });
});
describe('xMatches', () => {
  it('checks for non equality between two objects given a match function', () => {
    expect(xMatches(getID)(id3)(id4)).toBeTrue();
  });
});
describe('xMatchBin', () => {
  it('checks for non equality between two objects given a match function', () => {
    expect(xMatchBin(getID)(id3,id4)).toBeTrue();
  });
});
describe('matchMap', () => {
  it('maps an collection to the values returned by the matchfun', () => {
    expect(matchMap(getID)(arr35)).toEqual([ 3,4,5, ]);  
  });
});
describe('hasMatch', () => {
  it('checks if a collection contatins a matching element', () => {
    expect(hasMatch(getID)(id3)(arr35)).toBeTrue();
  });
});
describe('hasMatch', () => {
  it('checks if a collection contatins a matching element', () => {
    expect(hasMatch(getID)(id3)(arr35)).toBeTrue();
  });
});
describe('xHasMatch', () => {
  it('checks if a collection lacks a matching element', () => {
    expect(xHasMatch(getID)(id6)(arr35)).toBeTrue();
  });
});

describe('mergeMatch', () => {
  it('description', () => {
    expect(mergeMatch(getID)(id3)(num3).num).toEqual(3);
  });
});

describe('swapMatch', () => {
  it('description', () => {
    expect(swapMatch(getID)(num3)(id3).num).toEqual(3);
  });
});

describe('addUniq', () => {
  it('description', () => {
    expect(addUniq(getID)(num3)(arr35).length).toEqual(3);
    expect(addUniq(getID)(num3)(arr35)).not.toContain(num3);
  });
});

describe('dropMatch', () => {
  it('description', () => {
    expect(dropMatch(getID)(num3)(arr35)).not.toContain(id3);
  });
});

describe('replaceMatch', () => {
  it('description', () => {
    expect(replaceMatch(getID)(num3)(arr35)).toContain(num3);
  });
});

describe('updateMatch', () => {
  it('description', () => {
    expect(updateMatch(getID)(num3)(arr35)).not.toContain(num3);
    expect(hasMatch(getID)(num3)(updateMatch(getID)(num3)(arr35))).toBeTrue();
  });
});
