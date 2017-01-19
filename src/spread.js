import { iterify, } from './iterable';

const spread = (coll = []) => [ ...iterify(coll), ];

export const spreadK = (coll = []) => spread(iterify(coll).keys());
export const spreadV = (coll = []) => spread(iterify(coll).values());
export const spreadE = (coll = []) => spread(iterify(coll).entries());
export const spreadKV = spreadE;
export default spread;
