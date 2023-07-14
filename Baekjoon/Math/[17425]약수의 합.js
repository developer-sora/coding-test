let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\r\n")
  .map(Number);

let cnt = input.shift();

let max = Math.max(...input);

const memo = new Array(max).fill(0);

let sum = 0;

function isPrime(N) {
  if (N < 2) return false;
  if (N === 2) return true;

  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) return false;
  }
  return true;
}

function g(N) {
  let sum = 0;
  if (isPrime(N)) {
    sum += 1 + N;
  }
  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
    }
  }
}

g(1);

// 1 1 2 1 3 1 2 4 1 5 1 2 3 6 1 7 1 2 4 8 1 3 9 1 2 5 10

// 1 2 3 4 6 12 1 2 7 14 1 2 3 4 6 8 12 24

// 1 4 8 15 21 33 41 56 69 87
