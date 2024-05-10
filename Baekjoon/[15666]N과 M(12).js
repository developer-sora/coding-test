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

const answer = new Set();

function dfs(cnt) {
  if (cnt === M) {
    answer.add(output.join(" "));
    return;
  }
  for (let i = 0; i < N; i++) {
    if (output.at(-1) > arr[i]) continue;
    output.push(arr[i]);
    dfs(output.length);
    output.pop();
  }
}

dfs(0);

console.log([...answer].join("\n"));
