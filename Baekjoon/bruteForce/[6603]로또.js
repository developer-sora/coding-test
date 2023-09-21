let fs = require("fs");
let arr = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));

arr.pop();

let result = "";

let output = [];

function dfs(depth, arr, visited) {
  if (depth === 6) {
    result += output.join(" ");
    result += "\n";
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (visited[i] || output[output.length - 1] > arr[i]) continue;
    visited[i] = true;
    output.push(arr[i]);
    dfs(depth + 1, arr, visited);
    output.pop();
    visited[i] = false;
  }
}

for (let i = 0; i < arr.length; i++) {
  let [k, ...S] = arr[i];
  let visited = new Array(k).fill(false);
  dfs(0, S, visited);
  result += `\n`;
}

console.log(result.trim());
