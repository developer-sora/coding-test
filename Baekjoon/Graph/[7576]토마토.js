let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().split("\n");

let [M, N] = input.shift().split(" ").map(Number);

let arr = [];

input.forEach((v) => arr.push(v.split(" ").map(Number)));

let visited = Array.from(Array(N), () => Array(M).fill(0));

const directionX = [-1, 0, 1, 0];
const directionY = [0, 1, 0, -1];

const queue = [];

let day = 0;

let pointer = 0;

function bfs() {
  while (queue.length !== 0) {
    if (pointer + 1 > queue.length) {
      return;
    }
    let { x: curX, y: curY, cnt: curCnt } = queue[pointer++];
    day = Math.max(day, curCnt);
    for (let i = 0; i < 4; i++) {
      let nextX = curX + directionX[i];
      let nextY = curY + directionY[i];
      if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= M) continue;
      if (arr[nextX][nextY] === 0) {
        arr[nextX][nextY] = 1;
        queue.push({ x: nextX, y: nextY, cnt: curCnt + 1 });
        visited[nextX][nextY] = 1;
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] <= 0) continue;
    queue.push({ x: i, y: j, cnt: 0 });
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    bfs();
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 0) {
      console.log(-1);
      process.exit();
    }
  }
}

console.log(day);
