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
    return true;
  } 
  if (this.left && val < this.value) {
    return this.left.contains(val);
  } else if (this.right) {
    return this.right.contains(val);
  } else {
    return false;
  }
};

binarySearchTreeMethods.depthFirstLog = function (cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

binarySearchTreeMethods.breadthFirstLog = function (cb) {
  cb(this.value);
  if (this.left) {
    cb(this.left.value);
  }
  if (this.right) {
    cb(this.right.value);
  }

};
 
/*
 * Complexity: What is the time complexity of the above functions?
 */
