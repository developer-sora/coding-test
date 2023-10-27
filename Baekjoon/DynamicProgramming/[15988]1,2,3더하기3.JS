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

for (let i = 2; i < 1000000; i++) {
  let temp =
    (BigInt(memo[i]) + BigInt(memo[i - 1]) + BigInt(memo[i - 2])) % 1000000009n;
  memo.push(temp);
}

for (let i = 0; i < input.length; i++) {
  sumArr.push(memo[input[i] - 1]);
}

console.log(sumArr.join("\n"));
