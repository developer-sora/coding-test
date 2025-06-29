/* 이진 검색 트리
   부모 노드의 왼쪽에 있는 노드는 부모보다 작고
   오른쪽에 있는 노드는 부모보다 크다.

   삽입 - O(log n) / 최악 O(n) (트리가 한쪽으로 치우친 경우)
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
  // 노드 삽입
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
  // 노드 찾기
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
  // 너비 우선 탐색
  BFS() {
    const result = [];
    const queue = [];
    let node = this.root;
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      result.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }
  // DFS 전위 순회
  DFSPreOrder() {
    const result = [];
    function traverse(node) {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }
  // DFS 후위 순회
  DFSPostOreder() {
    const result = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    }
    traverse(this.root);
    return result;
  }
  // DFS 중위 순회
  DFSInOrder() {
    const result = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.DFSInOrder());
