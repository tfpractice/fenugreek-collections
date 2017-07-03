// requires [has](has.html), [spread](spread.html), and [reducers](reducers.html)
import { spread, spreadKV, } from './spread';
import { addBin, addBinMap, } from './reducers';
import { hasK, hasKV, xhasK, xhasKV, } from './has';

// **inter** `:: Iterable<a> -> Iterable<a> -> [a]`
// returns elements shared between two iterables;
export const inter = c0 => c1 => spread(c0).filter(hasK(c1));

// **diff** `:: Iterable<a> -> Iterable<a> -> [a]`
// returns elements of the first iterable absent from the second iterable
export const diff = c0 => c1 => spread(c0).filter(xhasK(c1));

// **union** `:: Iterable<a> -> Iterable<a> -> [a]`
// returns elements of both iterables
export const union = c0 => c1 => spread(c0).concat(diff(c1)(c0));

// **mapInter** `:: Map[{k:v}] -> Map[{k:v}] -> Map[{k:v}]`
// returns elements shared between two maps;
export const mapInter = c0 => c1 =>
  spread(c0).filter(hasKV(c1)).reduce(addBinMap, new Map());

// **mapDiff** `:: Map[{k:v}] -> Map[{k:v}] -> Map[{k:v}]`
// returns elements of the first map absent from the second map
export const mapDiff = c0 => c1 =>
  spread(c0).filter(xhasKV(c1)).reduce(addBinMap, new Map());

// **mapUnion** `:: Map[{k:v}] -> Map[{k:v}] -> Map[{k:v}]`
// returns elements of both maps
export const mapUnion = c0 => c1 =>
  spread(mapDiff(c1)(c0)).reduce(addBinMap, new Map(c0));

// **mapUnion** `:: Map[{k:v}] -> Map[{k:v}] -> Map[{k:v}]`
// returns elements of both maps
export const uniteMap = c0 => c1 =>
  spread(mapDiff(c1)(c0)).reduce(addBinMap, c0);
