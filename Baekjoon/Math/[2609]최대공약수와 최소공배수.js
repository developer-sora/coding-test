const fs = require("fs");
const input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split(" ")
  .map(Number);

let GCD;
let LCM;
let r = Number.MAX_SAFE_INTEGER;
let [n, m] = input;

while (r !== 0) {
  r = n % m;
  n = m;
  m = r;
}

GCD = n;
LCM = (input[0] * input[1]) / n;

console.log(GCD);
console.log(LCM);
