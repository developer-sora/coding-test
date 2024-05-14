let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().split("\n");

let [N, M] = input.shift().split(" ").map(Number);

let arr = [];

arr[0] = Array.from({ length: N + 1 }).fill(0);

for (let i = 0; i < N; i++) {
  arr.push([0, ...input[i].split(" ").map(Number)]);
}

let memo = [...arr];

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    memo[i][j] =
      memo[i][j - 1] + memo[i - 1][j] + memo[i][j] - memo[i - 1][j - 1];
  }
}

let xyArr = [];

for (let i = N; i < input.length; i++) {
  let [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  xyArr.push({ x1, y1, x2, y2 });
}

let answer = [];

for (let i = 0; i < M; i++) {
  let sum = 0;
  sum =
    memo[xyArr[i].x2][xyArr[i].y2] -
    (memo[xyArr[i].x1 - 1][xyArr[i].y2] +
      memo[xyArr[i].x2][xyArr[i].y1 - 1] -
      memo[xyArr[i].x1 - 1][xyArr[i].y1 - 1]);
  answer.push(sum);
}

console.log(answer.join("\n"));
