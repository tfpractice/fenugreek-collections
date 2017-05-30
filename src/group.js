// requires [iterify](iterable.html)
import { iterify, } from './iterable';
import { first, rest, } from './accessors';

// **tuple** `:: a -> a -> [a]`  
// returns a [val, key] Iterable<a>
export const tuple = val => key => [ key, val, ];

// **tupleBin** `:: (a, a) -> [a]`  
// returns a [val, key] Iterable<a>
export const tupleBin = (v, k) => tuple(v)(k);

// **triple** `:: a -> a -> a -> [a]`  
// returns a [val, key0, key1] Iterable<a>
export const triple = val => key0 => key1 => [ key0, key1, val, ];

// **flatten** `:: Iterable<a> -> Iterable<a> -> [a]`  
// returns an Iterable<a> of the contents of two iterables
export const flatten = c0 => c1 =>
[ ...iterify(c0), ...iterify(c1), ];

// **flattenBin** `:: (Iterable<a>, Iterable<a>) -> [a]`  
// returns an Iterable<a> of the contents of two iterables
export const flattenBin = (c0, c1) => flatten(c0)(c1);

// **flatTuple** `:: a -> [a] -> [a]`  
// concatenates an object and an iterable
export const flatTuple = c0 => c1 => [ c0, ...iterify(c1), ];

// **flatTupleBin** `:: (Iterable<a>, [a]) -> [a]`  
// concatenates an object and an iterable
export const flatTupleBin = (c0, c1) => flatTuple(c0)(c1);

// **append** `:: Iterable<a> -> a -> [a]`  
// concatenates an iterable and an object
export const append = coll => val => [ ...iterify(coll), val, ];

// **appendBin** `:: (Iterable<a>,a) -> [a]`  
// concatenates an iterable and an object
export const appendBin = (c, v) => append(c)(v);

export const turn = coll => append(rest(coll))(first(coll));
