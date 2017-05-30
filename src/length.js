import { spread, } from './spread';

export const len = coll => spread(coll).length;

export const isEmpty = coll => len(coll) === 0;

export const xEmpty = coll => !isEmpty(coll);

export const gtLen = (lim = 0) => coll => len(coll) > lim;

export const eqLen = (lim = 0) => coll => len(coll) === lim;

export const ltLen = (lim = 0) => coll => len(coll) < lim;

export const single = coll => eqLen(1)(coll);

export const sameSize = a => b => len(a) === len(b);
