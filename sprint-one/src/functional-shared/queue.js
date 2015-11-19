var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.queSize = 0;
  storage.startNumber = 0;
  extend(storage, queueMethods);
  return storage;
};


var queueMethods = {};

queueMethods.enqueue = function (value) {
  var key =  this.queSize + this.startNumber;
  this[key] = value;
  this.queSize ++;
};

queueMethods.dequeue = function () {
  
  var dq = this[this.startNumber];
  if (this.queSize!==0) delete this[this.startNumber];
  this.startNumber++;
  if (this.queSize<=1) this.queSize = 0;
  else this.queSize--;
  return dq;
};

queueMethods.size = function () {
  return this.queSize;
};

var extend = function (to, from) {
  // body...
  for (var key in from) {
    to[key]=from[key];
  }
};
