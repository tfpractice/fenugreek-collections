import { spread, spreadKV, } from './spread';

export const asArray = coll => spread(coll);
export const asSet = coll => new Set(spread(coll));
export const asMap = coll => new Map(spreadKV(coll));

console.log('asArray(10)', asArray(10));

 // export default
