var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  var child = Tree(value);
  this.children.push(child);  // fix me
};

treeMethods.contains = function(target) {
  var contain = false;
  if (this.value === target) contain = true;
  for (var i=0; i<this.children.length; i++) {
    contain = contain || this.children[i].contains(target);
  }
  return contain; 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
