let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let [r, c, d] = input.shift().split(" ").map(Number);

let arr = input.map((v) => v.split(" ").map(Number));

let cleaned = Array.from({ length: N }, () =>
  Array.from({ length: M }).fill(0)
);

let directionX = [-1, 0, 1, 0];
let directionY = [0, 1, 0, -1];

let sum = 0;

let x = r;
let y = c;
let dir = d;

let temp = 0;

while (true) {
  // 1
  let cnt = 0;
  if (!cleaned[x][y]) {
    cleaned[x][y] = 1;
    sum++;
  }

  for (let i = 0; i < 4; i++) {
    let nextX = x + directionX[i];
    let nextY = y + directionY[i];
    if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= M) continue;
    if (!cleaned[nextX][nextY] && !arr[nextX][nextY]) {
      dir = dir === 0 ? 3 : dir - 1;
      nextX = x + directionX[dir];
      nextY = y + directionY[dir];
      if (!cleaned[nextX][nextY] && !arr[nextX][nextY]) {
        x = nextX;
        y = nextY;
        break;
      }
    } else {
      cnt++;
    }
  }

  if (cnt === 4) {
    let nextX = x - directionX[dir];
    let nextY = y - directionY[dir];
    if (nextX >= 0 && nextY >= 0 && nextX < N && nextY < M) {
      if (arr[nextX][nextY] === 1) break;
      if (arr[nextX][nextY] === 0) {
        x = nextX;
        y = nextY;
      }
    }
  }
}

console.log(sum);
