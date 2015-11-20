var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var val = this._storage.get(index);
  if (Array.isArray(val)){
    var found = false;
    val.forEach(function(item){
      if (item[0]===k){
        item[1]=v;
        found = true;
      }
    });
    if (!found){
      val.push([k,v]);
    }

  } else {
    val = [[k,v]];
    this._storage.set(index,val);
  }
  //this._storage.set(index, val);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var array =  this._storage.get(index);
  var returner;
  array.forEach(function(item) {
    if (item[0]===k){
      returner = item[1];
    }
  })
  return returner;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var array = this._storage.get(index);
  var winner = array.indexOf([k,this.retrieve(k)]);
  array.splice(winner, 1, [k,undefined]);
};




/*
 * Complexity: What is the time complexity of the above functions?
 */


