let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().trim();

input = Number(input);

let dp = new Array(input + 1).fill(1);

for (let i = 2; i <= input; i++) {
  let prev = BigInt(dp[i - 1]);
  if (i % 2 === 0) {
    dp[i] = prev + prev + 1n;
  } else {
    dp[i] = prev + prev - 1n;
  }
  dp[i] = BigInt(dp[i]) % 10007n;
}

console.log(dp[input] + "");
