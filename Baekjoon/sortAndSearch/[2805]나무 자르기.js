const fs = require("fs");
const input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const woods = input.shift().split(" ").map(Number);

let start = 0;
let end = Math.max(...woods);
let answer = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let total = 0;

  for (const wood of woods) {
    if (wood > mid) {
      total += wood - mid;
    }
  }

  // total===M일때 바로 리턴하면 안됨! 최댓값을 구하는 거라 total===M인 더 큰 값이 있을 수 있음
  if (total >= M) {
    answer = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(answer);
