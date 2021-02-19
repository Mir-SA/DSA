class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (val === current.val) return this;
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val) {
    if (!this.root) return null;
    var current = this.root,
      found = false;

    while (current && !found) {
      if (val < current.val) current = current.left;
      else if (val > current.val) current = current.right;
      else return current;
    }
    return "Not Found";
  }

  BFS() {
    var node = this.root,
      data = [],
      queue = [];

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    let data = [];

    function helper(node) {
      data.push(node.val);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    }

    helper(this.root);
    return data;
  }

  DFSPostOrder() {
    let data = [];

    function helper(node) {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      data.push(node.val);
    }

    helper(this.root);
    return data;
  }

  DFSInOrder() {
    let data = [];

    function helper(node) {
      node.left && helper(node.left);
      data.push(node.val);
      node.right && helper(node.right);
    }

    helper(this.root);
    return data;
  }
}

var tree = new BST();
// tree.root = new Node(10)
// tree.root.right = new Node(16)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(8)
tree.insert(10);
tree.insert(2);
tree.insert(5);
tree.insert(8);
tree.insert(14);
tree.insert(11);
tree.insert(18);

//                  10
//           2             14
//        N    5       11      18
//           N   8
