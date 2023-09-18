let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().trim();

input = Number(input);

let memo = new Array(input + 1).fill(0);

for (let i = 2; i <= input; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    if (memo[i / 2] < memo[i / 3]) {
      memo[i] = 1 + memo[i / 2];
    } else {
      memo[i] = 1 + memo[i / 3];
    }
  } else if (i % 2 === 0) {
    if (memo[i - 1] < memo[i / 2]) {
      memo[i] = 1 + memo[i - 1];
    } else {
      memo[i] = 1 + memo[i / 2];
    }
  } else if (i % 3 === 0) {
    if (memo[i - 1] < memo[i / 3]) {
      memo[i] = 1 + memo[i - 1];
    } else {
      memo[i] = 1 + memo[i / 3];
    }
  } else {
    memo[i] = 1 + memo[i - 1];
  }
}

console.log(memo[input]);
