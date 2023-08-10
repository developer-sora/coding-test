let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map(Number);

const arr = [];

const count = input.shift();

let answer = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== 0) {
    arr.push(input[i]);
  } else {
    arr.pop();
  }
}

answer = arr.reduce((acc, cur) => acc + cur, 0);

console.log(answer);
