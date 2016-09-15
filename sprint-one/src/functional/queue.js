var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    if (counter > 0) {
      counter--;
    }
    var dequeud = storage[0];
    for (var key in storage) {
      storage[key] = storage[(Number(key) + 1).toString()];
    }
    return dequeud;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
