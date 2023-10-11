let fs = require("fs");
let [N, ...A] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));

N = N[0];
A = A[0];

let dp = new Array(N).fill(1);

for (let i = 1; i < N; i++) {
  const prev = A.slice(0, i);
  const temp = [];

  for (let j = 0; j < i; j++) {
    if (prev[j] < A[i]) {
      temp.push(dp[j]);
    }
  }

  if (temp.length !== 0) {
    dp[i] += Math.max(...temp);
  }
}

console.log(Math.max(...dp));
