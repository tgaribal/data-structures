var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.counter = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.counter;
};

queueMethods.enqueue = function (value) {
  this.storage[this.counter] = value;
  this.counter++;
};

queueMethods.dequeue = function () {
  if (this.counter > 0) {
    this.counter--;
  }
  var dequeued = this.storage[0];
  for (var key in this.storage) {
    this.storage[key] = this.storage[(Number(key) + 1).toString()];    
  }
  return dequeued;
};


