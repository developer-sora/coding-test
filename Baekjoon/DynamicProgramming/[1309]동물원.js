let input = require("fs").readFileSync("example.txt").toString();
const N = parseInt(input);

let dp = Array.from({ length: N }, () => 3);

dp[1] = 7;

for (let i = 2; i < N; i++) {
  dp[i] = dp[i - 2] + dp[i - 1] * 2;
  dp[i] = dp[i] % 9901;
}

console.log(dp[N-1]);
