let fs = require("fs");
let [T, ...arr] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map(Number);

const MOD = 1000000009;

const SIZE = 100001;

let dp = Array.from(Array(SIZE), () => Array(4).fill(0));

dp[1] = [0, 1, 0, 0];
dp[2] = [0, 0, 1, 0];
dp[3] = [0, 1, 1, 1];

for (let i = 4; i < SIZE; i++) {
  dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % MOD;
  dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % MOD;
  dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % MOD;
}

let result = "";

for (let i = 0; i < T; i++) {
  result += ((dp[arr[i]][1] + dp[arr[i]][2] + dp[arr[i]][3]) % MOD) + "\n";
}

console.log(result.trim());
