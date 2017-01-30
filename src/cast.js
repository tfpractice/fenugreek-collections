// requires [spread](spread.html)
import { spread,  spreadKV, } from './spread';

// **asArray** `:: Iterable<a> -> [a]`  
// returns an Iterable<a> of the collections default iterator
export const asArray = c => spread(c);

// **asSet** `:: Iterable<a> -> Set[a]`  
// returns an Iterable<a> of the collections default iterator
export const asSet = c => new Set(spread(c));

// **asMap** `:: Iterable<a> -> Map[a]`  
// returns an Iterable<a> of the collections default iterator
export const asMap = c => new Map(spreadKV(c));
