const fs = require("fs");
const input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split(" ")
  .map(Number);

let greatest;
let least;
let r = Number.MAX_SAFE_INTEGER;
let [n, m] = input;

while (r !== 0) {
  r = n % m;
  n = m;
  m = r;
}

greatest = n;
least = (input[0] * input[1]) / n;

console.log(greatest);
console.log(least);
