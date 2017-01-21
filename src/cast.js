// requires [spread](spread.html)
import spread, { spreadKV, } from './spread';

// **asArray** `:: iter[a] -> [a]`  
// returns an array of the collections default iterator
export const asArray = c => spread(c);

// **asSet** `:: iter[a] -> Set[a]`  
// returns an array of the collections default iterator
export const asSet = c => new Set(spread(c));

// **asMap** `:: iter[a] -> Map[a]`  
// returns an array of the collections default iterator
export const asMap = c => new Map(spreadKV(c));
