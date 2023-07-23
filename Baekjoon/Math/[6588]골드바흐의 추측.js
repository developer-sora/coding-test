let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map(Number);

input.pop();

let answer = [];

const arr = new Array(1000001).fill(true);

for (let i = 2; i * i <= 1000001; i++) {
  if (arr[i]) {
    for (let j = i * i; j <= 1000001; j += i) arr[j] = false;
  } else {
    continue;
  }
}

for (let i = 0; i < input.length; i++) {
  for (let j = 3; j < input[i]; j += 2) {
    if (arr[j] && arr[input[i] - j]) {
      answer.push(`${input[i]} = ${j} + ${input[i] - j}`);
      break;
    }
  }
}

console.log(answer.join("\n"));
