

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.indexStorage = {};
  this.realIndex = {};
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (this.indexStorage[index]!==undefined && this.indexStorage[index][0]!== k){
    while (this.indexStorage[index]){
      index++;
    }
  }
  this._storage[index]=v;
  this.realIndex[k]=index;
  this.indexStorage[index]=[k, v];
};

HashTable.prototype.retrieve = function(k) {
  var realIndex =  this.realIndex[k];
  return this._storage[realIndex];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage[index];
};




/*
 * Complexity: What is the time complexity of the above functions?
 */


