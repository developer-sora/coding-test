class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function secondMinimumInTree(root) {
  // 공간 복잡도가 O(1)이라 변수로 저장
  let firstMin = Number.MAX_SAFE_INTEGER;
  let secondMin = Number.MAX_SAFE_INTEGER;

  // 트리 전체를 순회해야 해서 임의로 후위순회로 탐색.
  function postOrderTraversal(node) {
    if (node.left) postOrderTraversal(node.left);
    if (node.right) postOrderTraversal(node.right);

    if (node.value < firstMin) {
      // 현재 노드가 첫 번째로 값보다 작으면
      secondMin = firstMin; // 두 번째로 작은 값은 첫 번째로 작은 값이 되고
      firstMin = node.value; // 첫 번째로 작은 값이 현재 노드의 값이 됨
    } else if (node.value < secondMin && node.value > firstMin) {
      // 현재 노드가 두 번째로 작은 값보다는 작고 첫 번째로 작은 값보다 큰 경우 두 번째로 작은 값은 현재 노드의 값이 됨
      secondMin = node.value;
    }
  }

  postOrderTraversal(root);

  // 두 번째로 작은 값이 초기값인 경우, 노드가 하나 뿐인 경우이거나 모든 값이 같을 경우라 null 리턴
  if (secondMin === Number.MAX_SAFE_INTEGER) return null;

  return secondMin;
}

module.exports = { secondMinimumInTree, TreeNode };
