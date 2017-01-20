// requires [spread](spread.html),[iterable](iterable.html),[cast](cast.html), and [group](group.html)
import spread from './spread';
import { removify, } from './iterable';
import { asMap, asSet, } from './cast';
import { append, } from './group';

// **addBin** `:: [a] -> a -> [a]`  
// adds an element to a collection;
export const addBin = (c, el) => append(c)(el);

// **addBinSet** `:: a -> a -> Set[a]`  
// adds an element to a Set;
export const addBinSet = (c, el) => new Set(append(c)(el));

// **addBinMap** `:: a -> a -> Map[a]`  
// adds an element to a Map;
export const addBinMap = (c, el) => new Map(append(c)(el));

// **removeBin** `:: iter[a] -> a -> iter[a]`  
// removes an element from a collection;
export const removeBin = (c, el) => removify(c).delete(el) ? c : c;

// **removeBinArray** `:: iter[a] -> a -> [a]`  
// returns a [val, key] arrayimport spread from './spread';
export const removeBinArray = (c, el) => spread(removeBin(asSet(c), el));

// **removeBinTuple** `:: a -> a -> [a]`  
// returns a [val, key] arrayimport spread from './spread';
export const removeBinTuple = (c, [ k, v, ]) => removeBin(asMap(c), k);
