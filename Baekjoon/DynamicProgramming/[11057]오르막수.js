let input = require("fs").readFileSync("example.txt").toString();
const N = parseInt(input);

let dp = Array.from({ length: 10 }, (_, i) => ++i);

let count = N - 1;

while (count !== 0) {
  count--;
  for (let i = 1; i < 10; i++) {
    dp[i] = dp[i - 1] + dp[i];
    dp[i] = dp[i] % 10007;
  }
}

console.log(dp.at(-1));
