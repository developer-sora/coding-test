let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map(Number);

input.shift();

let sumArr = [];

let memo = [1, 2, 4];

for (let i = 2; i < 10; i++) {
  memo.push(memo[i] + memo[i - 1] + memo[i - 2]);
}

console.log(memo);

for (let i = 0; i < input.length; i++) {
  sumArr.push(memo[input[i] - 1]);
}

console.log(sumArr.join("\n"));
