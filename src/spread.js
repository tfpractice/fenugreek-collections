import { iterify, } from './iterable';

export const spread = (coll = []) => [ ...iterify(coll), ];
export const spreadK = (coll = []) => spread(iterify(coll).keys());
export const spreadV = (coll = []) => spread(iterify(coll).values());
export const spreadE = (coll = []) => spread(iterify(coll).entries());
export const spreadKV = (coll = []) => spread(iterify(coll).entries());

export default spread;
