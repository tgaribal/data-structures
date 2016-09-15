

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes.indexOf(node) !== -1) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.nodes.indexOf(node);
  if (index !== -1) {
    this.nodes.splice(index, 1);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var test = [fromNode, toNode].sort();
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i][0] === test[0] && this.edges[i][1] === test[1]) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var edge = [fromNode, toNode].sort();
  this.edges.push(edge);
  console.log(this.edges);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var test = [fromNode, toNode].sort();
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i][0] === test[0] && this.edges[i][1] === test[1]) {
      this.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

