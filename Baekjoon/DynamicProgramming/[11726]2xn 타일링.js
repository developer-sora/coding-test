let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().trim();

input = Number(input);

const dp = new Array(input + 2).fill(0);

dp[1] = 1;

let temp = 0;

for (let i = 2; i <= input + 1; i++) {
  temp = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
  dp[i] = temp % 10007n;
}

console.log(dp[input + 1] + "");
