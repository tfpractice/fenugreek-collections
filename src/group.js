// requires [iterify](iterable.html)
import { iterify, } from './iterable';

// **tuple** `:: a -> a -> [a]`  
// returns a [val, key] array
export const tuple = val => key => [ key, val, ];

// **tupleBin** `:: (a, a) -> [a]`  
// returns a [val, key] array
export const tupleBin = (v, k) => tuple(v)(k);

// **triple** `:: a -> a -> a -> [a]`  
// returns a [val, key0, key1] array
export const triple = val => key0 => key1 => [ key0, key1, val, ];

// **flatten** `:: iter -> iter -> [a]`  
// returns an array of the contents of two iterables
export const flatten = c0 => c1 =>
[ ...iterify(c0), ...iterify(c1), ];

// **flattenBin** `:: (iter, iter) -> [a]`  
// returns an array of the contents of two iterables
export const flattenBin = (c0, c1) => flatten(c0)(c1);

// **flatTuple** `:: a -> [a] -> [a]`  
// concatenates an object and an iterable
export const flatTuple = c0 => c1 => [ c0, ...iterify(c1), ];

// **flatTupleBin** `:: (iter, [a]) -> [a]`  
// concatenates an object and an iterable
export const flatTupleBin = (c0, c1) => flatTuple(c0)(c1);

// **append** `:: iter -> a -> [a]`  
// concatenates an iterable and an object
export const append = iter => val => [ ...iterify(iter), val, ];

// **appendBin** `:: (iter,a) -> [a]`  
// concatenates an iterable and an object
export const appendBin = (c, v) => append(c)(v);
