var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    }
    
  };

  list.removeHead = function() {
    var currentValue = this.head.value;
    this.head = (this.head.next);
    return currentValue;
  };

  list.contains = function(target) {
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      } 
      currentNode = currentNode.next;
    } 
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//  var LinkedList = function() {
//   var list = {};
//   list.head = null;
//   list.tail = null;

//   list.addToTail = function(value) {
//     var node = Node(value);
//     if (!this.head) {
//       this.head = node;
//     }
//     if (this.tail) {
//       this.tail.next = node.value;
//     }
//     this.tail = node;
//   };

//   list.removeHead = function() {
//     var currentValue = this.head.value;
//     this.head.value = (this.head.next);
//     return currentValue;
//   };

//   list.contains = function(target) {
//     var currentNode = this.head;
//     var nextNode = currentNode.next;
//     // while (currentNode.next !== null) {
//     if (currentNode.value === target) {
//       return true;
//     } else if (currentNode.next === null) {
//       return false;
//       currentNode = nextNode;
//     }
//   };

//   return list;
// };

// var Node = function(value) {
//   var node = {};

//   node.value = value;
//   node.next = null;

//   return node;
// };
