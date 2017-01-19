export const isIterable = o => !!o[Symbol.iterator];
export const iterify = o => isIterable(o) ? o : [ o, ];
export const isRemovable = c => !!c.delete;
export const isHasable = c => !!c.has;
export const removify = c => isRemovable(c) ? c : new Set(iterify(c));
export const hasify = c => isHasable(c) ? c : new Set(iterify(c));
