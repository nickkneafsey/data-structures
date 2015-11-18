var Queue = function() {
  var someInstance = {};
  var queueSize = 0;
  var queueStart = 0
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var key = queueSize + queueStart;
    storage[key] = value;
    queueSize ++;

  };

  someInstance.dequeue = function() {
    var dq = storage[queueStart];
    queueSize --;
    queueStart ++;
    return dq;
  };

  someInstance.size = function() {
    if (queueSize < 0) {queueSize = 0;}
    return queueSize;
  };

  return someInstance;
};
