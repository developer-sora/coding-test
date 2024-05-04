let fs = require("fs");
let [N, ...input] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\n");

let arr = [];

let sum = 1;

input.forEach((v) => arr.push(v.split(" ").map(Number)));

arr.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let temp = arr[0][1];

for (let j = 1; j < N; j++) {
  if (temp <= arr[j][0]) {
    temp = arr[j][1];
    sum += 1;
  }
}

console.log(sum);
