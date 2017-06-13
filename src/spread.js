// requires [iterify](iterable.html)
import { iterify, } from './iterable';

// **spread** `:: Iterable<a> -> Iterable<a>`
// returns an Iterable<a> of the collections default iterator
export const spread = (coll = []) => [ ...iterify(coll), ];

// **spreadK** `:: Iterable<a> -> Iterable<a>`
// returns an Iterable<a> of the collections keys
export const spreadK = (coll = []) => spread(iterify(coll).keys());

// **spreadV** `:: Iterable<a> -> Iterable<a>`
// returns an Iterable<a> of the collections values
export const spreadV = (coll = []) => spread(iterify(coll).values());

// **spreadE** `:: Iterable<a> -> Iterable<a>`
// returns an Iterable<a> of the collections entries
export const spreadE = (coll = []) => spread(iterify(coll).entries());

// **spreadKV** `:: Iterable<a> -> Iterable<a>`
// returns an Iterable<a> of the collections entries
export const spreadKV = spreadE;

// export default spread;
