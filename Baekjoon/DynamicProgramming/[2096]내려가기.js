let fs = require("fs");
let [N, ...arr] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\n");

N = +N;

arr = arr.map((v) => v.split(" ").map(Number));

let memo1 = [];

let memo2 = Array.from({ length: 3 }).fill(0);

memo1 = arr[0];

let answer = "";

for (let i = 1; i < N; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 0) {
      memo2[j] = Math.max(memo1[j], memo1[j + 1]) + arr[i][j];
    } else if (j === 1) {
      memo2[j] = Math.max(memo1[j - 1], memo1[j], memo1[j + 1]) + arr[i][j];
    } else {
      memo2[j] = Math.max(memo1[j], memo1[j - 1]) + arr[i][j];
    }
  }
  memo1 = memo2;
  memo2 = [0, 0, 0];
}

answer += Math.max(...memo1) + " ";

memo1 = arr[0];

for (let i = 1; i < N; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 0) {
      memo2[j] = Math.min(memo1[j], memo1[j + 1]) + arr[i][j];
    } else if (j === 1) {
      memo2[j] = Math.min(memo1[j - 1], memo1[j], memo1[j + 1]) + arr[i][j];
    } else {
      memo2[j] = Math.min(memo1[j], memo1[j - 1]) + arr[i][j];
    }
  }
  memo1 = memo2;
  memo2 = [0, 0, 0];
}

answer += Math.min(...memo1);

console.log(answer);
