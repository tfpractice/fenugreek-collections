import spread, { spreadKV, } from './spread';

export const asArray = spread;
export const asSet = c => new Set(spread(c));
export const asMap = c => new Map(spreadKV(c));
