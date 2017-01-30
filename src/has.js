// requires [spread](spread.html), and [iterable](iterable.html)
import { hasify, } from './iterable';
import spread, { spreadK, spreadV, } from './spread';

// **has** `:: Iterable<a> -> a -> bool`  
// checks if an iterable contains an element
export const has = coll => el => hasify(coll).has(el);

// **xhas** `:: Iterable<a> -> a -> bool`  
// checks if an iterable does not contain an element
export const xhas = coll => el => !has(coll)(el);

// **hasK** `:: Iterable<a> -> a -> bool`  
// checks if an iterables keys contains an element
export const hasK = coll => k => has(spreadK(coll))(k);

// **xhasK** `:: Iterable<a> -> a -> bool`  
// checks if an iterables keys does not contain an element
export const xhasK = coll => k => !hasK(coll)(k);

// **hasV** `:: Iterable<a> -> a -> bool`  
// checks if an iterables values contain an element
export const hasV = coll => v => has(spreadV(coll))(v);

// **xhasV** `:: Iterable<a> -> a -> bool`  
// checks if an iterables values does not contain an element
export const xhasV = coll => v => !hasV(coll)(v);

// **hasKV** `:: Iterable<a> -> [k,v] -> bool`  
// checks if an iterables keys contain the key of a [k,v] pair
export const hasKV = coll => ([ k, v, ]) => hasK(coll)(k);

// **xhasKV** `:: Iterable<a> -> [k,v] -> bool`  
// checks if an iterables keys do not contain the key of a [k,v] pair
export const xhasKV = coll => ([ k, v, ]) => !hasKV(coll)([ k, v, ]);
