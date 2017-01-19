import spread, { spreadKV, } from './spread';
import { addBin, addBinMap, } from './reducers';
import { hasK, hasKV, xhasK, xhasKV, } from './has';

export const inter = c0 => c1 => spread(c0).filter(hasK(c1));
export const diff = c0 => c1 => spread(c0).filter(xhasK(c1));
export const union = c0 => c1 => spread(c0).concat(diff(c1)(c0));

export const mapInter = c0 => c1 =>
  spread(c0).filter(hasKV(c1)).reduce(addBinMap, new Map);

export const mapDiff = c0 => c1 =>
  spread(c0).filter(xhasKV(c1)).reduce(addBinMap, new Map);

export const mapUnion = c0 => c1 =>
  spread(mapDiff(c1)(c0)).reduce(addBinMap, new Map(c0));

export const uniteMap = c0 => c1 =>
  spread(mapDiff(c1)(c0)).reduce(addBinMap, c0);
