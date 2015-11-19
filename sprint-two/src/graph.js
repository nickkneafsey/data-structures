

// ------------------------
// Instantiate a new graph
var Graph = function() {

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //var x = GraphNode(node);
  this[node] = {value: node};
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.hasOwnProperty(node);
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this[node]) delete this[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (!this[fromNode].hasOwnProperty(toNode)) return false;
  return (this[fromNode][toNode] && this[toNode][fromNode]);

};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[toNode][fromNode]=true;
  this[fromNode][toNode]=true;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this[toNode][fromNode];
  delete this[fromNode][toNode];

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var item in this){
     if (this[item].value!== undefined){    
      cb(this[item].value);
     }
  }

};


// var GraphNode = function (value) {
//   this.value = value;
//   //
// };
/*
 * Complexity: What is the time complexity of the above functions?
 */


