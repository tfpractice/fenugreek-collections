// requires [iterify](iterable.html)
import { iterify, } from './iterable';

// **spread** `:: iter -> array`  
// returns an array of the collections default iterator
const spread = (coll = []) => [ ...iterify(coll), ];

// **spreadK** `:: iter -> array`  
// returns an array of the collections keys
export const spreadK = (coll = []) => spread(iterify(coll).keys());

// **spreadV** `:: iter -> array`  
// returns an array of the collections values
export const spreadV = (coll = []) => spread(iterify(coll).values());

// **spreadE** `:: iter -> array`  
// returns an array of the collections entries
export const spreadE = (coll = []) => spread(iterify(coll).entries());

// **spreadKV** `:: iter -> array`  
// returns an array of the collections entries
export const spreadKV = spreadE;

export default spread;
