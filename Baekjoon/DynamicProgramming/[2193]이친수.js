let fs = require("fs");
let N = fs.readFileSync("./Baekjoon/input.txt").toString();

N = Number(N);

let dp = Array.from(Array(91), () => Array(2).fill(0));

dp[1][1] = 1;

dp[2][0] = 1;

dp[3] = [1, 1];

for (let i = 3; i < 90; i++) {
  dp[i + 1][0] = BigInt(dp[i][1]) + BigInt(dp[i][0]);
  dp[i + 1][1] = BigInt(dp[i][0]);
}

console.log(dp[N][0] + dp[N][1] + "");
