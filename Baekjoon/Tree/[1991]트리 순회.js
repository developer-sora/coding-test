let fs = require("fs");
let [N, ...arr] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\n");

N = +N;

const tree = {};

for (let i = 0; i < N; i++) {
  let [node, left, right] = arr[i].split(" ");
  tree[node] = [left, right];
}

let result = "";

function preOrder(node) {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  result += node;
  preOrder(lt);
  preOrder(rt);
}

function inOrder(node) {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  inOrder(lt);
  result += node;
  inOrder(rt);
}

function postOrder(node) {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  postOrder(lt);
  postOrder(rt);
  result += node;
}

preOrder("A");
result += "\n";
inOrder("A");
result += "\n";
postOrder("A");
console.log(result);
