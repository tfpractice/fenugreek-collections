// requires [cast](cast.html), and [spread](spread.html)
import { asMap, } from './cast';
import spread, { spreadK, spreadKV, spreadV, } from './spread';

// **get** `:: iter[{k:v}] -> k -> v`  
// retrieves a value stored at a key from a collection
export const get = c => k => asMap(c).get(k);

// **fromIndex** `:: [a] -> number -> a`  
// returns the value stored at an array position
export const fromIndex = (c = new Set) => i => spread(c).slice(i, i + 1).shift();

// **first** `:: iter[a] -> a`  
// returns the first element of an iterable
export const first = (c = []) => spread(c).shift();

// **last** `:: iter[a] -> a`  
// returns the last element of an iterable
export const last = (c = []) => spread(c).pop();

// **firstK** `:: iter[{k:v}] -> k`  
// returns the first key of an iterable
export const firstK = (c = []) => first(spreadK(c));

// **lastK** `:: iter[{k:v}] -> k`  
// returns the last key of an iterable
export const lastK = (c = []) => last(spreadK(c));

// **firstV** `:: iter[a] -> a`  
// returns the first value of an iterable
export const firstV = (c = []) => first(spreadV(c));

// **lastV** `:: iter[a] -> a -> [a]`  
// returns the last value of an iterable
export const lastV = (c = []) => last(spreadV(c));
