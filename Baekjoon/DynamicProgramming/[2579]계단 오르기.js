let fs = require("fs");
let [N, ...input] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\n")
  .map(Number);

let dp = new Array(N);

dp[0] = input[0];
dp[1] = dp[0] + input[1];
dp[2] = Math.max(input[0], input[1]) + input[2];

for (let i = 3; i < N; i++) {
  dp[i] = Math.max(dp[i - 3] + input[i - 1], dp[i - 2]) + input[i];
}

console.log(dp[N - 1]);
