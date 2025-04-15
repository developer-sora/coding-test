let fs = require("fs");
let [N, ...arr] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\n");

arr = arr[0].split(" ").map(Number);

arr = arr.sort((a, b) => a - b);

let prev = arr[0];

let sum = prev;

for (let i = 1; i < N; i++) {
  prev += arr[i];
  sum += prev;
}

console.log(sum);
