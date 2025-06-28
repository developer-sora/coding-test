/* 이진 검색 트리
   부모 노드의 왼쪽에 있는 노드는 부모보다 작고
   오른쪽에 있는 노드는 부모보다 크다.

   삽입 - O(log n) / 최악 O(n) (한쪽으로 치우친 경우)
   탐색 - O(log n) / 최악 O(n)
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let curNode = this.root;

    while (curNode) {
      if (curNode.value === value) return undefined;
      if (curNode.value < value) {
        if (!curNode.right) {
          curNode.right = node;
          break;
        }
        curNode = curNode.right;
      } else {
        if (!curNode.left) {
          curNode.left = node;
          break;
        }
        curNode = curNode.left;
      }
    }
    return this;
  }

  find(value) {
    if (!this.root) {
      return false;
    }

    let curNode = this.root;

    while (true) {
      if (curNode.value === value) return true;
      if (curNode.value < value) {
        if (!curNode.right) {
          return false;
        }
        curNode = curNode.right;
      } else {
        if (!curNode.left) {
          return false;
        }
        curNode = curNode.left;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(7);
tree.insert(11);
console.log(tree.find(7));
