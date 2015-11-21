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
      link.previous = this.tail;
      this.tail.next = link;
      this.tail = link;
    }
    this.size++;
  };

  list.addToHead = function(value) {
    var link = Node(value);
    if (this.size === 0) {
      //create new node with value as the value
      //set head, tail to new node
      this.head = link;
      this.tail = link;
    }
    else {
      this.head.previous = link;
      link.next = this.head;
      this.head = link;
    }
    this.size++;
  };

  list.removeHead = function() {
    var header = this.head;
    if (this.size > 0) {
      this.head = this.head.next;
      if (this.head) this.head.previous = null;
      this.size--;
    }
    else throw new Error('empty');
    return header.value;
  };

  list.removeTail = function() {
    var tailer = this.tail;
    if (this.size > 0) {
      this.tail = this.tail.previous;
      if (this.tail) this.tail.next = null;
      this.size--;
    }
    else throw new Error('empty');
    return tailer.value;
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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
