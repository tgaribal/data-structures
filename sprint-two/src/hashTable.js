

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] !== undefined) { 
    
  }
  this._storage.set(index, v);
  console.log(this._storage);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function (value, i, arr) {
    if (index === i) {
      delete arr[i];
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


