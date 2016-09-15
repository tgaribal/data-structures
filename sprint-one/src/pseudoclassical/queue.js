var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.storage = {};
};


Queue.prototype.size = function () {
  return this.counter;
};
Queue.prototype.enqueue = function (value) {
  this.storage[this.counter] = value;
  this.counter++;
};
Queue.prototype.dequeue = function () { 
  if (this.counter > 0) {
    this.counter--;
  }
  var dequeued = this.storage[0];
  for (key in this.storage) {
    this.storage[key] = this.storage[(Number(key) + 1).toString()];
  }
  return dequeued;
};

