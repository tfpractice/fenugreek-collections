// requires [spread](spread.html)
import spread, { spreadKV, } from './spread';

// **asArray** `:: iter -> array`  
// returns an array of the collections default iterator
export const asArray = c => spread(c);

// **asSet** `:: iter -> set`  
// returns an array of the collections default iterator
export const asSet = c => new Set(spread(c));

// **asMap** `:: iter -> map`  
// returns an array of the collections default iterator
export const asMap = c => new Map(spreadKV(c));
