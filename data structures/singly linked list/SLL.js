class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Push = takes in a value and adds a node to the end of the SinglyLinkedList.
  // Pop =  removes a node from the end of the SinglyLinkedList.

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      var newTail = current;
      var current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.kength--;
    if (this.length === 0) {
      this.head = null;
      this.tail = 0;
    }
    return current;
  }

  // Shifting = removing element from the front of Linked List
  // Unshifting = adding element in the beginning of Linked List

  shift() {
    if (!this.head) return undefined;
    var oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Get = returns the item from given position.
  // Set = changes the value with given value in parameter. Takes in two parameters, a position/index & value.

  get(i) {
    if (i < 0 || i >= this.length) return null;

    var counter = 0;
    var current = this.head;
    while (counter !== i) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(i, val) {
    var node = this.get(i);
    if (node) node.val = val;
    return true;
    return false;
  }

  // Insert = insert a node at a specified index in a SinglyLinkedList
  // Remove = removes a node from specific location.

  insert(i, val) {
    if (i < 0 || i > this.length) return false;
    if (i === 0) return !!this.unshift(val);
    if (i === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var prevNode = this.get(i - 1);
    var temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(i) {
    if (i < 0 || i > this.length) return undefined;
    if (i === this.length - 1) return this.pop();
    if (i === 0) return this.shift();

    var prevNode = this.get(i - 1);
    var removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }

  // Reverse = reverses a Linked List.

  reverse() {
    var node = this.head;
    this.head = this.tail;
    var tail = node;
    var next;
    var prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

var list = new SinglyLinkedList();
// list.push("Good")
// list.push("Morning")
// list.push("!")

list.push(10);
list.push(45);
list.push(21);
list.push(74);
