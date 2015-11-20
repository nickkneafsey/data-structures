var BinarySearchTree = function(value) {
  //var bTree = Object.create(bstMethods)
  this.value = value;
  this.left = null;
  this.right = null; 
  //return bTree;
};
BinarySearchTree.prototype.insert = function(v){

  if (v < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(v);
    } else {
      this.left.insert(v);
    }
  } else {
    if (this.right === null){
      this.right = new BinarySearchTree(v);
    } else {
      this.right.insert(v);
    }
  }

};
BinarySearchTree.prototype.contains = function(v){
  if (v === this.value){
    return true;
  }
  if (v < this.value) {
    if (this.left === null){
      return false;
    } else {
      return this.left.contains(v)
    }
  } else {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(v);
    }
  }
};
BinarySearchTree.prototype.depthFirstLog = function(callBack){
  callBack(this.value);
  if (this.left !== null) this.left.depthFirstLog(callBack);
  if (this.right !== null) this.right.depthFirstLog(callBack);
};







/*
 * Complexity: What is the time complexity of the above functions?
 */
