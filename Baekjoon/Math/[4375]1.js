let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\r\n")
  .map(Number);

const answer = [];

for (let i = 0; i < input.length; i++) {
  let ones = 1;
  let count = 1;
  while (ones % input[i] !== 0) {
    ones = (ones * 10 + 1) % input[i];
    count++;
  }
  answer.push(count);
}

console.log(answer.join("\n"));
