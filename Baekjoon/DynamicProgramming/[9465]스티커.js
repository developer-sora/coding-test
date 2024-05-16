let fs = require("fs");
let [T, ...input] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\n");

T = +T;

let answer = [];

while (T !== 0) {
  T--;

  let n = +input.shift();

  let arr = [];

  arr.push(input.shift().split(" ").map(Number));
  arr.push(input.shift().split(" ").map(Number));

  let memo = [...arr];

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < 2; j++) {
      if (j === 0) {
        memo[j][i] = Math.max(memo[0][i - 1], memo[1][i - 1] + arr[j][i]);
      } else {
        memo[j][i] = Math.max(memo[1][i - 1], memo[0][i - 1] + arr[j][i]);
      }
    }
  }

  answer.push(Math.max(memo[0][n - 1], memo[1][n - 1]));
}

console.log(answer.join("\n"));
