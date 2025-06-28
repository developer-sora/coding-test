class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function postorderTraversal(root) {
  const answer = [];

  if (root === null) return answer;

  function traverse(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    answer.push(node.value);
  }

  traverse(root);

  return answer;
}

module.exports = { TreeNode, postorderTraversal };
