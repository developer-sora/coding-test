let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString();

input = Number(input);

let count = 0;

let arr = new Array(1000000).fill(0);

let temp = input;

let max = [];

for (let i = 1; i <= input; i++) {
  if (temp % 3 === 0) {
    temp = temp / 3;
  }
  if (arr[temp] !== 0) {
  }
}

console.log(count);
