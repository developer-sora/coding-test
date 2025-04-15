const fs = require("fs");
const input = fs.readFileSync("./Baekjoon/input.txt").toString().split("\n");

const [n, m] = input.shift().split(" ").map(Number);

let startX, startY;

const map = input.map((value) => value.split(" "));

const dist = Array.from({ length: n }, () =>
  Array.from({ length: m }).fill(-1)
);

for (let y = 0; y < n; y++) {
  for (let x = 0; x < m; x++) {
    if (map[y][x] === "2") {
      dist[y][x] = 0;
      startX = x;
      startY = y;
    }
    if (map[y][x] === "0") {
      dist[y][x] = 0;
    }
  }
}

const queue = [{ curX: startX, curY: startY }];

let coordinateX = [0, -1, 0, 1];
let coordinateY = [-1, 0, 1, 0];

while (queue.length !== 0) {
  const { curX, curY } = queue.shift();

  for (let i = 0; i < 4; i++) {
    const nextX = curX + coordinateX[i];
    const nextY = curY + coordinateY[i];

    if (
      nextX >= 0 &&
      nextY >= 0 &&
      nextY < n &&
      nextX < m &&
      dist[nextY][nextX] === -1 &&
      map[nextY][nextX] === "1"
    ) {
      dist[nextY][nextX] = dist[curY][curX] + 1;
      queue.push({ curX: nextX, curY: nextY });
    }
  }
}

dist.forEach((value) => console.log(value.join(" ")));
