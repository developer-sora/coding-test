let fs = require("fs");
let [N, ...cost] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));

N = N[0];

let dp = Array.from({ length: N }, () => [Infinity, Infinity, Infinity]);

console.log(dp);

dp[0] = cost[0];

for (let i = 1; i < N; i++) {
  dp[i][0] = Math.min(dp[i - 1][1] + cost[i][0], dp[i - 1][2] + cost[i][0]);
  dp[i][1] = Math.min(dp[i - 1][0] + cost[i][1], dp[i - 1][2] + cost[i][1]);
  dp[i][2] = Math.min(dp[i - 1][0] + cost[i][2], dp[i - 1][1] + cost[i][2]);
  console.log("인덱스: " + i + "\n" + "dp배열: ");
  console.log(dp);
}

console.log(Math.min(...dp[N - 1]));
