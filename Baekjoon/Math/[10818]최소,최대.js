const fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().split("\r\n");

const cnt = input.shift();
const n = input[0].split(" ").map(Number);

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < cnt; i++) {
  if (max < n[i]) {
    max = n[i];
  }
  if (min > n[i]) {
    min = n[i];
  }
}

console.log(min, max);
