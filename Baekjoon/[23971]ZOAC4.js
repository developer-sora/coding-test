let fs = require("fs");
let [H, W, N, M] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split(" ")
  .map(Number);

let count = 0;

for (let i = 0; i < H; i += N + 1) {
  for (let j = 0; j < W; j += M + 1) {
    count++;
  }
}

console.log(count);
