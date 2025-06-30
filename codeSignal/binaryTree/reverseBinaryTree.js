class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function reverseTree(root) {
  if (root === null) return null;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  reverseTree(root.left);
  reverseTree(root.right);

  return root;
}

module.exports = { TreeNode, reverseTree };
