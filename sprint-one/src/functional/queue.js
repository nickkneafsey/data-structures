var Queue = function() {
  var someInstance = {};
  var queCount = 0;
  var startCount = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var key = startCount + queCount;
    storage[key] = value;
    queCount++;

  };

  someInstance.dequeue = function() {
    var dq = storage[startCount];
    //delete storage[startCount];
    queCount--;
    if (queCount < 0) queCount = 0;
    startCount++;
    return dq;  
  };

  someInstance.size = function() {
    return queCount;
  };

  return someInstance;
};
