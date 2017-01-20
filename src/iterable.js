// Iterable
// ----------

// Object -> Bool
// checks if an object is iterable
export const isIterable = o => !!o[Symbol.iterator];

// Object -> Iterable
// returns the object or an array containging the object
export const iterify = o => isIterable(o) ? o : [ o, ];

// Object -> Bool
// checks if an object has the delete method
export const isRemovable = c => !!c.delete;

// Object -> Bool
// checks if an object has the 'has' method
export const isHasable = c => !!c.has;

// Object -> [Map|Set]
// returns the object or an array containging the object
export const removify = c => isRemovable(c) ? c : new Set(iterify(c));

// Object -> [Map|Set]
// returns the object or an array containging the object
export const hasify = c => isHasable(c) ? c : new Set(iterify(c));
