class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // push - takes in a node and puts it at the top of the stack.

  push(val) {
    var newNode = new Node(val);
    if (!this.size) this.first = this.last = newNode;
    else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  // pop - removes the node at the top of the stack and returns the value of that node.

  pop() {
    if (!this.size) return null;
    var temp = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

var stack = new Stack();
