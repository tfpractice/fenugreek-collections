import spread from './spread';
import { addBin, addBinMap, addBinSet, removeBin, removeBinTuple, }
 from './reducers';

export const addMap = c => k => v => new Map(c).set(k, v);
export const addMapTuple = c => (...tups) => tups.reduce(addBinMap, c);
export const addSet = c => (...els) => els.reduce(addBinSet, c);

export const removeSet = c => (...els) => els.reduce(removeBin, new Set(c));
export const removeMap = c => (...els) => els.reduce(removeBin, new Map(c));
export const removeMapTuple = c => (...tups) =>
  tups.reduce(removeBinTuple, new Map(c));

export const popElem = c => el => removeBin(c, el) && el;
export const popFirst = c => popElem(c)(spread(c).shift());
