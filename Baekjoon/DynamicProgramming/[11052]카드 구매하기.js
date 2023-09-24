let fs = require("fs");
let [N, ...P] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));

N = N[0];
P = P[0];

P.unshift(0);

let dp = new Array(N + 1).fill(0);

dp[1] = P[1];

for (let i = 2; i <= N; i++) {
  dp[i] = P[i];
  for (let j = 1; j <= i / 2; j++) {
    dp[i] = Math.max(dp[i], dp[j] + dp[i - j]);
  }
}

console.log(dp[N]);
