let [N, ...arr] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .flatMap((arr) => arr.split(" "))
  .map(Number);

let dp = new Array(arr.length).fill(0);

dp[0] = arr[0];
dp[1] = arr[0] + arr[1];
dp[2] = arr[0] + arr[2];

let count = 2;

let cur = 3;

for (let i = 3; i < arr.length; i++) {
  if (i === cur) {
    dp[i] = dp[i - count] + arr[i];
    cur += count + 1;
  } else if (i === cur - 1) {
    dp[i] = dp[i - count - 1] + arr[i];
    count++;
  } else {
    dp[i] = Math.max(dp[i - count], dp[i - count - 1]) + arr[i];
  }
}

console.log(Math.max(...dp));
