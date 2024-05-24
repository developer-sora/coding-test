let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);

input = input.map((v) => v.split(" ").map(Number));

let max = 0;

let dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: K + 1 }).fill(0)
);

for (let i = 1; i <= N; i++) {
  let [w, v] = input[i - 1];
  for (let j = 1; j <= K; j++) {
    if (j >= w) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w] + v);
    } else {
      dp[i][j] = dp[i - 1][j];
    }
    max = Math.max(max, dp[i][j]);
  }
}

console.log(max);
