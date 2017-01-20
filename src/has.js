import spread, { spreadK, spreadV, } from './spread';
import { asSet, } from './cast';
import { hasify, } from './iterable';
export const has = coll => el => hasify(coll).has(el);
export const xhas = coll => el => !has(coll)(el);

export const hasK = coll => k => has(spreadK(coll))(k);
export const xhasK = coll => k => !hasK(coll)(k);

export const hasV = coll => v => has(spreadV(coll))(v);
export const xhasV = coll => v => !hasV(coll)(v);

export const hasKV = coll => ([ k, v, ]) => hasK(coll)(k);
export const xhasKV = coll => ([ k, v, ]) => !hasKV(coll)([ k, v, ]);
