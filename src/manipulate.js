import spread from './spread';
import { addBin, addBinMap, addBinSet, removeBin, removeBinTuple, }
 from './reducers';
import { asMap, asSet, } from './cast';

export const addMap = c => k => v => asMap(c).set(k, v);
export const addMapTuple = c => (...tups) => tups.reduce(addBinMap, c);
export const addSet = c => (...els) => els.reduce(addBinSet, c);

export const removeSet = c => (...els) => els.reduce(removeBin, asSet(c));
export const removeMap = c => (...els) => els.reduce(removeBin, asMap(c));
export const removeMapTuple = c => (...tups) =>
  tups.reduce(removeBinTuple, asMap(c));

export const popElem = c => el => removeBin(c, el) && el;
export const popFirst = c => popElem(c)(spread(c).shift());
