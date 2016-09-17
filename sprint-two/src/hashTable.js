

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v) {
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
  this._counter++;

  //resize test to double space and rehash
  if (this._counter > this._limit * 0.75) {
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
  //resize test to halve space and rehash
  if (this._counter < this._limit * 0.25) {
    this.resize(this._limit / 2);
  }
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {

    if (this._storage[index][i][0] === k) {
      delete this._storage[index][i];
      this._counter--;
    }
  }

};

HashTable.prototype.resize = function(limit) {
  var oldStorage = this._storage;
  this._limit = limit;
  this._counter = 0;
  this._storage = [];

  for (var key in oldStorage) {
    for (var i = 0; i < oldStorage[key].length; i++) {
      if (oldStorage[key][i]) {
        var tuple = oldStorage[key][i];
        var index = getIndexBelowMaxForKey(oldStorage[key][i][0], limit);
        if (this._storage[index] === undefined) {
          this._storage[index] = [];
        }
        this._storage[index].push([tuple[0], tuple[1]]);
        this._counter++;
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */