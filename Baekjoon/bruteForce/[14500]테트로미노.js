let fs = require("fs");
let [N, ...arr] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));

let M = N[1];
N = N[0];

let xy = [[0, 1], []];

for (let i = 0; i < arr.length; i++) {}
