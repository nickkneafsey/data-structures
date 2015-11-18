var Stack = function() {
  var someInstance = {};
  var stackSize = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[stackSize]= value ;
    stackSize ++;
  };

  someInstance.pop = function() {
    var popped = storage[stackSize - 1];
    stackSize --;
    return popped;
  };

  someInstance.size = function() {
    if (stackSize < 0) {stackSize = 0;}
    return stackSize;
  };

  return someInstance;
};
