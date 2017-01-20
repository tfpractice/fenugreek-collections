// **isIterable** `:: obj -> bool`  
// checks if an object is iterable
export const isIterable = o => !!o[Symbol.iterator];

// **iterify** `:: obj -> iterable`  
// returns the object or an array containging the object
export const iterify = o => isIterable(o) ? o : [ o, ];

// ** isRemovable **`:: obj -> bool`  
// checks if an object has the delete method
export const isRemovable = c => !!c.delete;

// ** isHasable **`:: obj -> bool`
// checks if an object has the 'has' method
export const isHasable = c => !!c.has;

// ** removify **`:: obj -> [map|set] ` 
// returns the object or an array containging the object
export const removify = c => isRemovable(c) ? c : new Set(iterify(c));

// ** hasify ** `:: obj -> [map|set] ` 
// returns the object or an array containging the object
export const hasify = c => isHasable(c) ? c : new Set(iterify(c));
