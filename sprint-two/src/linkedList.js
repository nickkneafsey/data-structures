var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.size = 0;

  list.addToTail = function(value) {
    var link = Node(value);
    if (this.size === 0) {
      //create new node with value as the value
      //set head, tail to new node
      this.head = link;
      this.tail = link;
    }
    else {
      this.tail.next = link;
      this.tail = link;
    }
    this.size++;
  };

  list.removeHead = function() {
    var header = this.head;
    if (this.size > 0) {
      this.head = this.head.next;
      this.size--;
    }
    return header.value;
  };

  list.contains = function(target) {
    var walker = this.head;
    while (walker !== null) {
      if (walker.value === target) return true;
      else {
        walker = walker.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
