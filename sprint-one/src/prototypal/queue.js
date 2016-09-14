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
  
}


