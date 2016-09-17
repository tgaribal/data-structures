var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.parent = null;
  
  // your code here
  newTree.children = [];
    // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var wasFound = false;
  if (this.value === target) {
    return true;
  } 
  for (var i = 0; i < this.children.length; i++) {
    if (wasFound) {
      return true;
    } else {
      wasFound = this.children[i].contains(target);
    }
  } 
  return wasFound;
};

treeMethods.removeFromParent = function () {
  var index = this.parent.children.indexOf(this);
  console.log(index);
  this.parent.children.splice(index, 1);
  console.log(this.parent.children);
  this.parent = null;
  console.log(this.parent);
};

treeMethods.traverse = function (cb) {
  cb(this.value);
  if (this.children) {
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].traverse(cb);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
