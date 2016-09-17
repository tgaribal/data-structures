

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v) {
  this._counter++;
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    this._storage[index] = [];
  }
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index][i][1] = v;
    }
  }
  this._storage[index].push([k, v]);
  if (this._counter < this._limit * 0.75) {
    //console.log("limit breached", this._storage);
    this.resize(this._limit * 2);
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
  this._counter--;
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    
    if (this._storage[index][i][0] === k) {
      delete this._storage[index][i];
    }
  }
};

HashTable.prototype.resize = function(limit) {
  var oldStorage = this._storage;
  var newStorage = LimitedArray(limit);

  console.log(newStorage);

  for (var key in oldStorage) {
    //console.log(oldStorage[key][0][0]);
    for (var i = 0; i < oldStorage[key].length; i++) {
      var index = getIndexBelowMaxForKey(oldStorage[key][i][0], limit);
      if (newStorage[index] === undefined) {
        newStorage[index] = [];
      }
      for (var z = 0; z < newStorage[index].length; z++) {          
        if (newStorage[index][z][0] === oldStorage[key][i][0]) {
          newStorage[index][z][1] = oldStorage[key][i][1];
        }
      }      
    }
  }s
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


