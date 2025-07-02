class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function isBinarySearchTree(root) {
  let prev = null;

  function traverse(node) {
    if (!node) return true;

    if (!traverse(node.left)) return false;

    if (prev !== null && prev >= node.value) return false;
    prev = node.value;

    return traverse(node.right);
  }

  return traverse(root);
}

const root = new TreeNode(
  10,
  new TreeNode(5),
  new TreeNode(15, new TreeNode(6), new TreeNode(20))
);

console.log(isBinarySearchTree(root));
