let fs = require("fs");
let [N, ...input] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

N = +N;

let arr = [];

let visited = Array.from(Array(N), () => Array(N).fill(0));

const directionX = [-1, 0, 1, 0];
const directionY = [0, 1, 0, -1];

input.forEach((v) => arr.push(v.split("").map(Number)));

let queue = [];

let answer = [];

let max = 1;

function bfs(x, y) {
  if (input[x][y] == 0 || visited[x][y] == 1) {
    return;
  }
  let cnt = 1;
  queue.push({ x, y, cnt });
  visited[x][y] = 1;
  while (queue.length !== 0) {
    let { x: curX, y: curY } = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nextX = curX + directionX[i];
      let nextY = curY + directionY[i];
      if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= N) continue;
      if (input[nextX][nextY] == 1 && visited[nextX][nextY] != 1) {
        queue.push({ x: nextX, y: nextY, cnt: ++cnt });
        visited[nextX][nextY] = 1;
      }
    }
  }
  max = cnt;
  answer.push(max);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    bfs(i, j);
  }
}

answer.sort((a, b) => a - b);

console.log(answer.length);
answer.length && console.log(answer.join("\n"));
