class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function preorderTraversal(root) {
  const result = [];

  if (root === null) return result;

  function traverse(node) {
    result.push(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

  traverse(root);

  return result;
}

module.exports = { TreeNode, preorderTraversal };
