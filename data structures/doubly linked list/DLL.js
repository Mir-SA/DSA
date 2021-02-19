class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var currentTail = this.tail;

    if (this.length === 1) this.head = this.tail = null;
    else {
      this.tail = currentTail.prev;
      this.tail.next = null;
    }

    this.length--;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;

    if (this.length === 1) this.head = this.tail = null;
    else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) this.head = this.tail = newNode;
    else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(i) {
    if (i < 0 || i >= this.length) return null;
    const middle = Math.floor(this.length / 2);
    var count, current;

    if (i <= middle) {
      count = 0;
      current = this.head;
      while (count != i) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count != i) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(i, val) {
    var getNode = this.get(i);

    if (!getNode) return false;

    getNode.val = val;

    return true;
  }

  insert(i, val) {
    if (i < 0 || i > this.length) return false;
    if (i === 0) return !!this.unshift(val);
    if (i === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var prevNode = this.get(i - 1);
    var nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(i) {
    if (i < 0 || i >= this.length) return undefined;
    if (i === 0) return this.shift();
    if (i === this.length - 1) return this.pop();

    var getNode = this.get(i);
    var prevNode = getNode.prev;
    var nextNode = getNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    getNode.prev = getNode.next = null;
    this.length--;
    return getNode;
  }
}

list = new DoublyLinkedList();

list.push("Chintu");
list.push("Pintu");
list.push("Tintu");
