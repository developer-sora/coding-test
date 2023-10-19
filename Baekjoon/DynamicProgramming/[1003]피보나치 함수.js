let fs = require("fs");
let [T, ...N] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map(Number);

let dp = new Array(41).fill([0, 0]);

let answer = "";

dp[0] = [1, 0];
dp[1] = [0, 1];

for (let i = 2; i <= 40; i++) {
  dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
}

N.forEach((v) => {
  answer += dp[v].join(" ");
  answer += "\n";
});

console.log(answer.trim());
