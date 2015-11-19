var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queSize = 0;
  this.startNum = 0;
};

Queue.prototype.enqueue = function (value) {
  var key = this.queSize + this.startNum;
  this[key] = value;
  this.queSize ++;
};
Queue.prototype.dequeue = function () {
  var dq = this[this.startNum];
  delete this[this.startNum];
  this.startNum ++;
  this.queSize --;
  if (this.queSize < 0) this.queSize = 0;
  return dq;
};
Queue.prototype.size = function () {
  return this.queSize;
};


