import spread from './spread';
import { append, flatten, flatTuple, triple, tuple, } from './group';
import { asMap,asSet, } from './cast';
import { removify, } from './iterable';
export const addBin = (c, el) => append(c)(el);
export const addBinSet = (c, el) => new Set(append(c)(el));
export const addBinMap = (c, el) => new Map(append(c)(el));

export const removeBin = (c, el) => removify(c).delete(el) ? c : c;
export const removeBinArray = (c, el) => spread(removeBin(asSet(c), el));
export const removeBinTuple = (c, [ k, v, ]) => removeBin(asMap(c), k);
