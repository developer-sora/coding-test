let fs = require("fs");
let [k, ...arr] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => v.split(" "));

k = Number(k[0]);

arr = arr[0];

let result = [];

let visited = new Array(10).fill(false);

let answer = [];

function dfs(depth) {
  if (depth === k + 1) {
    answer.push(result.join(""));
    return;
  }

  for (let i = 0; i < 10; i++) {
    if (
      visited[i] ||
      (depth !== 0 &&
        arr[depth - 1] === "<" &&
        result[result.length - 1] > i) ||
      (depth !== 0 && arr[depth - 1] === ">" && result[result.length - 1] < i)
    ) {
      continue;
    }
    result.push(i);
    visited[i] = true;
    dfs(result.length);
    visited[i] = false;
    result.pop();
  }
}

dfs(0);

console.log(answer.pop());
console.log(answer[0]);
