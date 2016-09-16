

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v) {
  this._counter++;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var buck = this._storage[index];
  if (this._storage[index] === undefined) {
    this._storage[index] = [];
  }
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index][i][1] = v;
    }
  }
  this._storage[index].push([k, v]);
  if (this._counter > this._limit * 0.75) {
    this.resize(this._limit * 2);
    console.log("oversized");
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i] === undefined) {
      return undefined;
    } else if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    
    if (this._storage[index][i][0] === k) {
      delete this._storage[index][i];
    }
  }
};

HashTable.prototype.resize = function(limit) {
  var newStorage = LimitedArray(limit);
  var oldStorage = this._storage;
  this._storage = newStorage;
  console.log(oldStorage);
  console.log(this._storage);

  for (var i = 0; i < oldStorage.length; i++) {
    if (oldStorage[i].length) {
      for (var j = 0; j < oldStorage[i].length; j++) {
        this._storage.insert(oldStorage[i][j][0], oldStorage[i][j][1]);
      }
    }
  }
  console.log(this._storage);
};




/*
 * Complexity: What is the time complexity of the above functions?
 */


