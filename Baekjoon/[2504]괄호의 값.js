let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString();

input = input.split("");

const stack = [];

let answer = 0;

let XYarr = [0, 0];

for (const bracket of input) {
  if (stack.length === 0) {
  }
  if (bracket === "(" || bracket === "[") {
    stack.push(bracket);
  }
  if (bracket === ")" && stack.at(-1) === "(") {
    stack.pop();
    XYarr[0]++;
  }
  if (bracket === "]" && stack.at(-1) === "[") {
    stack.pop();
    XYarr[1]++;
  }
}

console.log(XYarr, answer);
