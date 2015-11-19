var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);
  storage.startNum = 0;
  storage.queSize = 0;
  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var key = this.startNum + this.queSize;
  this[key] = value;
  this.queSize++;
};

queueMethods.dequeue = function() {
  var dq = this[this.startNum];
  this.startNum++;
  this.queSize--;
  if (this.queSize<0) this.queSize=0;
  return dq;
};

queueMethods.size = function() {
  return this.queSize;
};


