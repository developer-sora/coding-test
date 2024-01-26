let fs = require("fs");
let [N, ...arr] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

N = Number(N);

let area = [];

let max = 1;

for (let i = 0; i < N; i++) {
  let tempArr = arr[i].split(" ").map(Number);
  area.push(tempArr);
  max = Math.max(max, ...tempArr);
}

let coordinateX = [0, -1, 0, 1];
let coordinateY = [-1, 0, 1, 0];

let visited = Array.from({ length: N }, () =>
  Array.from({ length: N }).fill(0)
);

let height = 0;

let cnt = 0;

let queue = [];

let answer = 0;

function bfs(x, y, curHeight) {
  queue.push({ curX: x, curY: y });
  cnt++;
  while (queue.length !== 0) {
    let { curX, curY } = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nextX = curX + coordinateX[i];
      let nextY = curY + coordinateY[i];
      if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= N) continue;
      if (area[nextX][nextY] > curHeight && visited[nextX][nextY] !== 1) {
        queue.push({ curX: nextX, curY: nextY });
        visited[nextX][nextY] = 1;
      }
    }
  }
}

while (height < max) {
  cnt = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (area[i][j] > height && visited[i][j] !== 1) {
        bfs(i, j, height);
      }
    }
  }
  visited = Array.from({ length: N }, () => Array.from({ length: N }).fill(0));
  answer = Math.max(answer, cnt);
  height = height + 1;
}

console.log(answer);
