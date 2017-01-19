import { iterify, } from './iterable';
export const tuple = val => key => [ key, val, ];
export const tupleBin = (v,k) => tuple(v,k);

export const triple = val => key0 => key1 => [ key0, key1, val, ];

export const flatten = (c0 = []) => (c1 = []) =>
[ ...iterify(c0), ...iterify(c1), ];
export const flattenBin = (c0,c1) => flatten(c0,c1);

export const flatTuple = (c0 = []) => (c1 = []) => [ c0, ...iterify(c1), ];
export const flatTupleBin = (c0,c1) => flatTuple(c0,c1);

export const append = coll => val => [ ...iterify(coll), val, ];
export const appendBin = (c,v) => append(c,v);
