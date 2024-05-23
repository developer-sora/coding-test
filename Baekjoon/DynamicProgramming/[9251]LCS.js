let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

let first = input[0];
let second = input[1];
let max = 0;

let dp = Array.from({ length: first.length + 1 }, () =>
  Array.from({ length: second.length + 1 }).fill(0)
);

for (let i = 1; i <= first.length; i++) {
  for (let j = 1; j <= second.length; j++) {
    if (second[j - 1] === first[i - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
    max = Math.max(max, dp[i][j]);
  }
}

console.log(max);
