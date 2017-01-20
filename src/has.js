// requires [case](cast.html), [spread](spread.html), and [iterable](iterable.html)
import { asSet, } from './cast';
import { hasify, } from './iterable';
import spread, { spreadK, spreadV, } from './spread';

// **has** `:: iter[a] -> a -> bool`  
// checks if an iterable contains an element
export const has = coll => el => hasify(coll).has(el);

// **xhas** `:: iter[a] -> a -> bool`  
// checks if an iterable does not contain an element
export const xhas = coll => el => !has(coll)(el);

// **hasK** `:: iter[a] -> a -> bool`  
// checks if an iterables keys contains an element
export const hasK = coll => k => has(spreadK(coll))(k);

// **xhasK** `:: iter[a] -> a -> bool`  
// checks if an iterables keys does not contain an element
export const xhasK = coll => k => !hasK(coll)(k);

// **hasV** `:: iter[a] -> a -> bool`  
// checks if an iterables values contain an element
export const hasV = coll => v => has(spreadV(coll))(v);

// **xhasV** `:: iter[a] -> a -> bool`  
// checks if an iterables values does not contain an element
export const xhasV = coll => v => !hasV(coll)(v);

// **hasKV** `:: iter[a] -> [k,v] -> bool`  
// checks if an iterables keys contain the key of a [k,v] pair
export const hasKV = coll => ([ k, v, ]) => hasK(coll)(k);

// **xhasKV** `:: iter[a] -> [k,v] -> bool`  
// checks if an iterables keys do not contain the key of a [k,v] pair
export const xhasKV = coll => ([ k, v, ]) => !hasKV(coll)([ k, v, ]);
