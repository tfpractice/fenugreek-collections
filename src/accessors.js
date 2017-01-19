import spread, { spreadK, spreadKV, spreadV, } from './spread';
import { asMap, } from './cast';

export const get = c => k => asMap(c).get(k);
export const first = (c = []) => spread(c).shift();
export const last = (c = []) => spread(c).pop();
export const firstK = (c = []) => first(spreadK(c));
export const lastK = (c = []) => last(spreadK(c));
export const firstV = (c = []) => first(spreadV(c));
export const lastV = (c = []) => last(spreadV(c));
export const fromIndex = (c = new Set) => i => spread(c).slice(i, i + 1).shift();
