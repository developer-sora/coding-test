let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const output = [];
let result = "";

function dfs(cnt) {
  if (cnt === M) {
    result += `${output.join(" ")}\n`;
    return;
  }
  for (let i = 0; i < N; i++) {
    if (output[output.length - 1] > arr[i]) {
      continue;
    }
    output.push(arr[i]);
    dfs(output.length);
    output.pop();
  }
}

dfs(0);

console.log(result.trim());
