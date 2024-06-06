let fs = require("fs");
let [n, ...arr] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const stack = [];

let answer = "";

let number = 1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= stack.at(-1) || stack.length === 0) {
    while (number <= arr[i]) {
      stack.push(number++);
      answer += "+\n";
    }
    if (stack.at(-1) === arr[i]) {
      stack.pop();
      answer += "-\n";
    }
  }
}

console.log(stack.length === 0 ? answer : "NO");
