var HashTable = function() {
  this._limit = 8;
  this.size = 0;
  this.originalLimit = 8;

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
  this.size ++;
  //this._storage.set(index, val);
  if ((this.size / this._limit)*100 >75){
    this.resize("bigger");
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var array =  this._storage.get(index);
  var returner;
  array.forEach(function(item) {
    if (item[0]===k){
      returner = item[1];
    }
  });
  return returner;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var array = this._storage.get(index);
  var winner = array.indexOf([k,this.retrieve(k)]);
  array.splice(winner, 1, [k,undefined]);
  this.size --;

  if (((this.size / this._limit)*100 < 25) && (this._limit > this.originalLimit)){
    this.resize("smaller");
  }
};

HashTable.prototype.resize = function(biggerOrSmaller) {
  var arrayOfkeys = [];
  var testArray = [];
  //console.log(this._storage);
  this._storage.each(function(x){
    //testArray.push(x);
    if (x !== undefined){
      if (x.length >1){
        x.forEach(function(item){
          arrayOfkeys.push(item);
        });
      }
      
    }
  });

  for (var i=0; i<arrayOfkeys.length; i++){
    this.remove(arrayOfkeys[i][0]);
  }
  
  if (biggerOrSmaller==="bigger") this._limit *= 2;
  if (biggerOrSmaller === "smaller") this._limit /= 2;

  this._storage = LimitedArray(this._limit);

  for (var i=0; i<arrayOfkeys.length; i++){
    this.insert(arrayOfkeys[i][0], arrayOfkeys[i][1]);
  }
  //console.log(arrayOfkeys)
}



/*
 * Complexity: What is the time complexity of the above functions?
 */


