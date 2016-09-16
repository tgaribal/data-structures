var BinarySearchTree = function(value) {
  var bsTree = Object.create(binarySearchTreeMethods);
  bsTree.value = value;
  bsTree.left = null;
  bsTree.right = null;

  return bsTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function (v) {
  var node = BinarySearchTree(v);
  if (node.value < this.value) {
    if (!this.left) {
      this.left = node;
    } else {
      this.left.insert(v);
    }
  } else {
    if (!this.right) {
      this.right = node;
    } else {
      this.right.insert(v);
    }
  }
};

binarySearchTreeMethods.contains = function (val) {
  if (this.value === val) {
    console.log('true');
    return true;
  } 
  if (this.left && val < this.value) {
    return this.left.contains(val);
  } else if (this.right) {
    console.log('right');
    return this.right.contains(val);
  } else {
    return false;
  }
  //return false;
};

 // var wasFound = false;
 //  if (this.value === val) {
 //    return true;
 //  } else {
 //    if (val < this.value) {
 //      if (wasFound) {
 //        return true;
 //      }
 //      wasFound = this.left.contains(val);
 //    } else {
 //      if (wasFound) {
 //        return true;
 //      }
 //      wasFound = this.right.contains(val);
 //    }
 //  }
 //  //console.log("false");
 //  return wasFound;

binarySearchTreeMethods.depthFirstLog = function () {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
