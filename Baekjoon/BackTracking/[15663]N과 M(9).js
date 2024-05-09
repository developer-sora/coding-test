let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const output = [];

let visited = Array.from({ length: N }).fill(0);
let answer = new Set(); // 중복 제거!!!!!!! set 사용

function dfs(cnt) {
  if (cnt === M) {
    answer.add(output.join(" "));
    return;
  }
  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = 1;
    output.push(arr[i]);
    dfs(output.length);
    output.pop();
    visited[i] = 0;
  }
}

dfs(0);

console.log([...answer].join("\n"));
