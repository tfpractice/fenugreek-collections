export const isIterable = o => !!o[Symbol.iterator];
export const iterify = o => isIterable(o) ? o : [ o, ];
