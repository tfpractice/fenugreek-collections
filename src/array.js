import spread from './spread';

export const map = coll => fn => spread(coll).map(fn);
export const reduce = coll => (fn, init) => spread(coll).reduce(fn, init);
export const filter = coll => fn => spread(coll).filter(fn);
export const every = coll => fn => spread(coll).every(fn);
export const some = coll => fn => spread(coll).some(fn);
