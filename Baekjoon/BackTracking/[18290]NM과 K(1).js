let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n");

const [N, M, K] = input[0].split(" ").map(Number);

const arr = new Array(N);

let max = Number.MIN_SAFE_INTEGER;

let count = 0;

for (let i = 0; i < N; i++) {
  arr[i] = input[i + 1].split(" ").map(Number);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {}
}

console.log(max);
