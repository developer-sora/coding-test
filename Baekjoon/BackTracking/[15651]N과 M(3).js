let fs = require("fs");
let [N, M] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split(" ")
  .map(Number);

const output = [];
let result = "";

function dfs(cnt) {
  if (cnt === M) {
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {
    output.push(i + 1);
    dfs(output.length);
    output.pop();
  }
}

dfs(0);

console.log(result.trim());
