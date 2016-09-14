var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    counter: 0,
    storage: {}
  };
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  size: function () {
    return this.counter;
  },
  enqueue: function (value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  dequeue: function () {
    if (this.counter > 0) {
      this.counter--;
    }
    var dequeued = this.storage[0];
    for (var key in this.storage) {
      this.storage[key] = this.storage[(Number(key) + 1).toString()];
    }
    delete this.storage[this.counter];
    return dequeued;
  }
};


