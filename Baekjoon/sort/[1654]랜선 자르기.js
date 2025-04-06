let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().split("\n");

const [K, N] = input.shift().split(" ").map(Number);

// 이분 탐색에선 정렬 필수
const arr = input.map(Number).sort((a, b) => a - b);

let max = Math.max(...arr);

let min = 1;

while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  let count = arr.reduce((acc, cur) => {
    return acc + Math.floor(cur / mid);
  }, 0);

  // N보다 크다면 더 길게 잘라야함, 최소 길이 늘림
  if (count >= N) {
    min = mid + 1;
  } else {
    // N보다 작은 경우 더 짧게 잘라야 함. 최대 길이 줄임
    max = mid - 1;
  }
}

console.log(max);
