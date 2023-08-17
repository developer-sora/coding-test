let fs = require("fs");
let [n, ...arr] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));

n = n[0];

// n = 1500000;

// let arr = [];

// for (let i = 0; i < n; i++) {
//   arr.push([2, 10]);
// }

let dp = new Array(n).fill(0);

let temp = 0;

let startIndex = 0;
let lastIndex = 0;

let max = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
  const [duration, profit] = arr[i];
  if (i + duration > n) continue;
  if (temp > 0 && i >= startIndex && i <= lastIndex) {
    dp[i] = Math.max(temp + profit, dp[i]);
  }
  dp[i] = Math.max(dp[i], profit);
  if (
    i + duration < n &&
    duration < arr[i + duration][0] &&
    i + duration + arr[i + duration][0] - 1 < n
  ) {
    temp = dp[i];
    startIndex = i + duration + 1;
    lastIndex = i + duration + arr[i + duration][0] - 1;
  }
  if (i + duration < n && i + duration + arr[i + duration][0] <= n) {
    console.log(i, i + duration);
    dp[i + duration] = Math.max(dp[i + duration], dp[i] + arr[i + duration][1]);
  }
  max = max < dp[i] ? dp[i] : max;
}

console.log(max);
