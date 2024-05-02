let fs = require("fs");
let [T, ...input] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\n");

let direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

while (input.length > 1) {
  let [M, N, K] = input.shift().split(" ").map(Number);

  let arr = Array.from(Array(M), () => Array(N).fill(0));
  let visited = Array.from(Array(M), () => Array(N).fill(0));

  for (let i = 0; i < K; i++) {
    let [x, y] = input.shift().split(" ").map(Number);
    arr[x][y] = 1;
  }
  const queue = [];

  let answer = 0;

  const bfs = (x, y) => {
    if (arr[x][y] === 0 || visited[x][y] === 1) return;
    queue.push([x, y]);
    answer += 1;

    while (queue.length !== 0) {
      const [curX, curY] = queue.shift();
      for (let i = 0; i < 4; i++) {
        let movedX = curX + direction[i][0];
        let movedY = curY + direction[i][1];
        if (movedX < 0 || movedY < 0 || movedX >= M || movedY >= N) {
          continue;
        }
        if (arr[movedX][movedY] === 1 && visited[movedX][movedY] !== 1) {
          visited[movedX][movedY] = 1;
          queue.push([movedX, movedY]);
        }
      }
    }
  };

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      bfs(i, j);
    }
  }

  console.log(answer);
}
