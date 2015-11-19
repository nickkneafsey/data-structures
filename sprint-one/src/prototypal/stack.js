var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(stackMethods);
  storage.stackSize = 0;
  return storage;
};

var stackMethods = {};
stackMethods.push = function(value) {
  this[this.stackSize] = value;
  this.stackSize++;
};

stackMethods.pop = function() {
  var popped = this[this.stackSize - 1];
  delete this[this.stackSize - 1];
  this.stackSize --;
  if (this.stackSize < 0) this.stackSize = 0;
  return popped;
};

stackMethods.size = function() {
  return this.stackSize;
};



