import { filtBy, mapTo,some, } from './array';
import { has, } from './has';
import { append, } from './group';

export const identity = x => x;

const id = identity;
const { assign, } = Object;

export const matches = (mFn = id) => a => b => mFn(a) === mFn(b);

export const matchBin = (mFn = id) => (a,b) => matches(mFn)(a)(b);

export const xMatches = (mFn = id) => a => b => !matches(mFn)(a)(b);

export const xMatchBin = (mFn = id) => (a,b) => !matches(mFn)(a)(b);

export const mergeMatch = (mFn = id) => b => a => 
  matches(mFn)(a)(b) ? assign({},a,b) : a;
  
export const swapMatch = (mFn = id) => b => a => matches(mFn)(a)(b) ? b : a;

export const matchMap = (mFn = id) => coll => mapTo(mFn)(coll);

export const hasMatch = (mFn = id) => a => coll => has(matchMap(mFn)(coll))(mFn(a));

export const xHasMatch = (mFn = id) => a => coll => !hasMatch(mFn)(a)(coll); 

export const addUniq = (mFn = id) => a => coll => 
  some(coll)(matches(mFn)(a)) ? coll : append(coll)(a);

export const dropMatch = (mFn = id) => a => coll =>
  filtBy(xMatches(mFn)(a))(coll);

export const replaceMatch = (mFn = id) => a => coll =>
  mapTo(swapMatch(mFn)(a))(coll);

export const updateMatch = (mFn = id) => a => coll =>
  mapTo(mergeMatch(mFn)(a))(coll);
