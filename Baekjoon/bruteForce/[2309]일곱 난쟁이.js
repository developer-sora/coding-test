let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\r\n")
  .map(Number);

let copiedArr = [...input];
let flag = false;
const total = input.reduce((prev, cur) => prev + cur, 0);

for (let i = 0; i < input.length; i++) {
  if (flag) {
    break;
  }
  for (let j = 0; j < input.length; j++) {
    if (i === j) continue;
    if (copiedArr[i] + copiedArr[j] === total - 100) {
      copiedArr[i] = 0;
      copiedArr[j] = 0;
      flag = true;
      break;
    }
  }
}

const sortedArr = copiedArr.sort((a, b) => a - b);

for (let i = 2; i < sortedArr.length; i++) {
  console.log(sortedArr[i]);
}
