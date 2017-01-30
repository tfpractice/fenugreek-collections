// requires [spread](spread.html)
import spread from './spread';

// **map** `:: Iterable<a>  -> (a->b) -> [b]`  
// returns an Iterable<a> of the return values of a 
// function called on each element of an iterable 
export const map = coll => fn => spread(coll).map(fn);

// **reduce** `:: Iterable<a>  -> ((a->b), b) -> b`  
// returns the accumulated value of a function
// called on each element of an iterable 
export const reduce = coll => (fn, init) => spread(coll).reduce(fn, init);

// **filter** `:: Iterable<a>  -> (a->bool) -> [a]`  
// returns the iterable's values which return true for a given function
export const filter = coll => fn => spread(coll).filter(fn);

// **every** `:: Iterable<a>  -> (a->bool) -> bool`  
// checks if every element of an iterable returns true for a given function
export const every = coll => fn => spread(coll).every(fn);

// **some** `:: Iterable<a>  -> (a->b) -> [b]`  
// checks if any element of an iterable returns true for a given function
export const some = coll => fn => spread(coll).some(fn);
