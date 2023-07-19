let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString();

let number = Number(input);

const memo = new Array(number + 1).fill(0);

for (let i = 1; i <= number; i++) {
  for (let j = 1; i * j <= number; j++) {
    memo[i * j] += i;
  }
  memo[i] += memo[i - 1];
}

console.log(memo.pop());
