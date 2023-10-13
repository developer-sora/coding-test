let fs = require("fs");
let [n, ...arr] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));

n = n[0];
arr = arr[0];

let dp = [...arr];

for (let i = 1; i < n; i++) {
  if (dp[i - 1] + arr[i] > dp[i]) {
    dp[i] = dp[i - 1] + arr[i];
  }
}

console.log(Math.max(...dp));
