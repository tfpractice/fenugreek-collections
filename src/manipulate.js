// requires [spread](spread.html),[reducers](reducers.html), and [cast](cast.html)
import spread from './spread';
import { addBin, addBinMap, addBinSet, removeBin, removeBinTuple, }
 from './reducers';
import { asMap, asSet, } from './cast';

// **addMap** `:: Map[{k:v}] -> k -> v -> Map[{k:v}]`  
// adds an element to a Map;
export const addMap = c => k => v => asMap(c).set(k, v);

// **addMapTuple** `:: Map[{k:v}] -> (...{k:v}) -> Map[{k:v}]`  
// adds multiple [k,v] pairs to an iterable;
export const addMapTuple = c => (...tups) => tups.reduce(addBinMap, c);

// **addSet** `:: Set[a] -> (...a) -> Set[a]`  
// adds multiple elements to a Set;
export const addSet = c => (...els) => els.reduce(addBinSet, c);

// **removeSet** `:: Set[a] -> (...a) -> Set[a]`  
// removes multiple elements from a Set;
export const removeSet = c => (...els) => els.reduce(removeBin, asSet(c));

// **removeMap** `:: Map[{k:v}] -> (...k) -> Map[{k:v}]`  
// removes multiple keys from a Map;
export const removeMap = c => (...els) => els.reduce(removeBin, asMap(c));

// **removeMapTuple** `:: Map[{k:v}] -> (...{k:v}) -> Map[{k:v}]`  
// removes multiple [k,v] pairs from a Map;
export const removeMapTuple = c => (...tups) =>
  tups.reduce(removeBinTuple, asMap(c));

// **popElem** `:: iter[a] -> a -> iter[a]`  
// removes the last element from an iterable;
export const popElem = c => el => removeBin(c, el) && el;

// **popFirst** `:: iter[a] -> a -> iter[a]`  
// removes the first element from an iterable;
export const popFirst = c => popElem(c)(spread(c).shift());
