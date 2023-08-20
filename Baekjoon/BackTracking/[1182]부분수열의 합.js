let fs = require("fs");
let [[N, S], [...arr]] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));

let count = 0;

let results = new Array(N).fill(0);

let sum = 0;

const dfs = (depth) => {
  if (depth === results.length) {
    sum = results.reduce((acc, cur) => acc + cur, 0);
    if (sum === S) count++;
  } else {
    results[depth] = arr[depth];
    dfs(depth + 1);
    results[depth] = 0;
    dfs(depth + 1);
  }
};

dfs(0);

count = S === 0 ? count - 1 : count;

console.log(count);
