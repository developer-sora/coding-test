let [N, ...arr] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let dp = new Array(N + 3).fill(0);

arr.unshift(0, 0, 0);

let answer = 0;

for (let i = 3; i < N + 3; i++) {
  dp[i] = Math.max(arr[i] + dp[i - 2], arr[i] + arr[i - 1] + dp[i - 3]);
  dp[i] = Math.max(dp[i - 1], dp[i]);
}

console.log(answer);
