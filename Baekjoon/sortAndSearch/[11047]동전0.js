let fs = require("fs");
let [temp, ...arr] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\n");

let [N, K] = temp.split(" ").map(Number);

arr = arr.map(Number);

let sum = 0;

let cnt = 0;

for (let i = N; i >= 0; i--) {
  if (K >= arr[i]) {
    cnt = Math.floor(K / arr[i]);
    K -= cnt * arr[i];
    sum += cnt;
  }
}

console.log(sum);
