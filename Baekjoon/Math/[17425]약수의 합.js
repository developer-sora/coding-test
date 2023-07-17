let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\r\n")
  .map(Number);

let cnt = Number(input.shift());

let arr = new Array(1000001).fill(0);
let memo = new Array(1000001).fill(0);

const answer = [];

for (let i = 1; i < 1000001; i++) {
  for (let j = 1; i * j < 1000001; j++) {
    arr[i * j] += i;
  }
  memo[i] = memo[i - 1] + arr[i];
}

for (let i = 0; i < input.length; i++) {
  answer.push(memo[input[i]]);
}

console.log(answer.join("\n"));

/**
 * 1  4  8  15 ...
 *       2  2*5  2*2*2*3  1 2 4 8
 * 1  1 2  1 3  1 2 4
 * 1 2 3 4
 *  4면 15
 */
