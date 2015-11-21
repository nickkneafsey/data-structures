var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var contain = false;
  if (this.value === target) contain = true;
  for (var i=0; i<this.children.length; i++) {
    contain = contain || this.children[i].contains(target);
  }
  return contain; 
};

treeMethods.removeFromParent = function() {
  var index = this.parent.children.indexOf(this);
  this.parent.children.splice(index, 1);
  this.parent = null;
};

treeMethods.traverse = function(callBack) {
  if (this.value) callBack(this.value);
  for (var i=0; i<this.children.length; i++) {
    this.children[i].traverse(callBack);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
