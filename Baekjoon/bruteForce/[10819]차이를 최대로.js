let fs = require("fs");
let [N, ...arr] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));

N = N[0];
arr = arr[0];

let max = 0;

let output = [];

let visited = new Array(N).fill(0);

let result = 0;

function dfs(cnt) {
  if (cnt === N) {
    for (let j = 0; j < output.length - 1; j++) {
      result += Math.abs(output[j] - output[j + 1]);
    }
    if (max < result) max = result;
    result = 0;
    return;
  }
  for (let i = 0; i < N; i++) {
    if (visited[i]) {
      continue;
    }
    output.push(arr[i]);
    visited[i] = 1;
    dfs(output.length);
    output.pop();
    visited[i] = 0;
  }
}

dfs(0);

console.log(max);
