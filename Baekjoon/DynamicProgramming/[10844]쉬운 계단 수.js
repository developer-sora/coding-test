let fs = require("fs");
let N = fs.readFileSync("./Baekjoon/input.txt").toString();

N = Number(N);

let dp = Array.from(Array(101), () => Array(10).fill(0));

for (let i = 1; i <= 9; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i < 101; i++) {
  dp[i][0] = dp[i - 1][1];
  for (let j = 1; j < 9; j++) {
    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1];
    dp[i][j] = dp[i][j] % 1000000000;
  }
  dp[i][9] = dp[i - 1][8];
}

let sum = 0;

for (let i = 0; i < 10; i++) {
  sum += dp[N][i];
  sum = sum % 1000000000;
}

console.log(sum);
