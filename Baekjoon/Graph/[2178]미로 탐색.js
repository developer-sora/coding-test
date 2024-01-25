let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input.shift().split(" ").map(Number);

let visited = Array.from({ length: N + 1 }, () =>
  Array.from({ length: M + 1 }).fill(false)
);

let maze = [Array.from({ length: M }, () => 0)];

for (let i = 0; i < input.length; i++) {
  maze.push([0, ...input[i].split("").map(Number)]);
}

let coordinateX = [0, -1, 0, 1];
let coordinateY = [-1, 0, 1, 0];

let queue = [{ cnt: 1, x: 1, y: 1 }];
visited[1][1] = 1;

function bfs() {
  while (queue.length !== 0) {
    let { cnt, x: curX, y: curY } = queue.shift();
    if (curX === N && curY === M) {
      console.log(cnt);
      return;
    }
    for (let i = 0; i < 4; i++) {
      let nextX = curX + coordinateX[i];
      let nextY = curY + coordinateY[i];
      if (nextX > N || nextY > M) continue;
      if (maze[nextX][nextY] === 1 && !visited[nextX][nextY]) {
        queue.push({ cnt: cnt + 1, x: nextX, y: nextY });
        visited[nextX][nextY] = true;
      }
    }
  }
}

bfs();
