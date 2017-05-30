import { spread, } from './spread';

// **len** `:: Iterable<a>  -> Int`  
// returns the length of an iterablerns the length of an iterable
export const len = coll => spread(coll).length;

// **isEmpty** `:: Iterable<a>  -> bool`  
// checks if the collection is empty
export const isEmpty = coll => len(coll) === 0;

// **xEmpty** `:: Iterable<a>  -> bool`  
// checks if the collection is non empty
export const xEmpty = coll => !isEmpty(coll);

// **gtLen** `:: Int-> Iterable<a>  -> bool`  
// checks if the length of the collection in greater than a limt
export const gtLen = (lim = 0) => coll => len(coll) > lim;

// **eqLen** `::Int-> Iterable<a>  -> bool`  
// checks if the length of the collection in equal to a limt
export const eqLen = (lim = 0) => coll => len(coll) === lim;

// **ltLen** `:: Int-> Iterable<a>  -> bool`  
// checks if the length of the collection in less than a limt
export const ltLen = (lim = 0) => coll => len(coll) < lim;

// **single** `:: Iterable<a>  -> bool`  
// checks if the array has only a single element
export const single = coll => eqLen(1)(coll);

// **sameSize** `:: Iterable<a>  ->  Iterable<a>  -> bool`   
// checks length of two collections for equality
export const sameSize = a => b => len(a) === len(b);
