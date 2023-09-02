let fs = require("fs");
let [N, ...arr] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\r\n");

N = Number(N);

let stack = [];

let count = 0;

let flag = false;

for (let i = 0; i < N; i++) {
  stack = [];
  flag = false;
  for (let j = 0; j < arr[i].length; j++) {
    if (
      stack.length !== 0 &&
      stack.includes(arr[i][j]) &&
      stack[stack.length - 1] !== arr[i][j]
    ) {
      flag = true;
      continue;
    }
    stack.push(arr[i][j]);
  }
  if (!flag) {
    count++;
  }
}

console.log(count);
