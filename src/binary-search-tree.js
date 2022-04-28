const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.roote = null;
  }

  root() {
    //  throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.roote) {
      return null
    }
    return this.roote
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let newNode = new Node(data)
    function addNode(currentNode, newNode) {

      if (newNode.data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode
        } else {
          addNode(currentNode.left, newNode)
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode
        } else {
          addNode(currentNode.right, newNode)
        }
      }
    }
    if (this.roote === null) {
      this.roote = newNode
    }
    else {
      addNode(this.roote, newNode)
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    function findNode(node, data) {
      if (!node) {
        return false
      }
      console.log(node.data === data, node)
      if (node.data === data) {
        return true
      }
      if (node.left && data < node.data) {
        return findNode(node.left, data)
      }
      if (node.right && data > node.data) {
        return findNode(node.right, data)
      }
      return false
    }
    return findNode(this.roote, data)
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    function findNode(node, data) {
      if (!node) {
        return null
      }
      if (node.data === data) {
        return node
      }
      if (data < node.data) {
        return findNode(node.left, data)
      }
      if (data > node.data) {
        return findNode(node.right, data)
      } else {

      }
      return null
    }
    return findNode(this.roote, data)
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    function removeNode(node, data) {
      if (!node) {
        return null
      }

      if (node.left && data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      }
      if (node.right && data > node.data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minDataRight = node.right;

        while (minDataRight.left) {
          minDataRight = minDataRight.left;
        }
        node.data = minDataRight.data;
        node.right = removeNode(node.right, minDataRight.data);
        return node;
      }
    }
    this.roote = removeNode(this.roote, data)
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.roote) {
      return;
    }

    let node = this.roote;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.roote) {
      return;
    }

    let node = this.roote;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};