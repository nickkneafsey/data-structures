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

BinarySearchTree.prototype.breadthFirstLog =  function(callBack){
  var arr = [this];
  while (arr.length > 0){
    if (arr[0].left) {
      arr.push(arr[0].left)
    }
    if (arr[0].right) {
      arr.push(arr[0].right)
    }
    callBack(arr[0].value);
    arr.shift();
  }
}





/*
 * Complexity: What is the time complexity of the above functions?
 */
