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

let numArr = [...Array(10).keys()];

function dfs(depth) {
  if (depth === k + 1) {
    console.log(result);
    return;
  }

  for (let i = 0; i < 10; i++) {
    if (result.includes(numArr[i])) {
      continue;
    }
    if (result.length === 0) {
      result.push(numArr[i]);
    }
    if (arr[depth] === ">" && result[result.length - 1] < numArr[i]) {
      result.pop();
      result.push(numArr[i]);
      continue;
    }
    if (arr[depth] === "<") result.push(numArr[i]);
    dfs(result.length);
    result.pop();
  }
}

dfs(0);
