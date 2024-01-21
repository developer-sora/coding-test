let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

const answerArr = [];

let coordinate = [
  [-1, 1],
  [-1, 0],
  [-1, -1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

while (input.length > 1) {
  let [w, h] = input.shift().split(" ").map(Number);

  const arr = [];
  const visited = Array.from({ length: h }, () =>
    Array.from({ length: w }).fill(0)
  );
  const queue = [];
  let answer = 0;

  for (let i = 0; i < h; i++) {
    arr.push(input.shift().split(" ").map(Number));
  }

  const bfs = (x, y) => {
    if (arr[x][y] === 0 || visited[x][y] === 1) return;
    queue.push([x, y]);
    answer += 1;
    while (queue.length !== 0) {
      const [curX, curY] = queue.shift();
      for (let i = 0; i < coordinate.length; i++) {
        let tempX = curX + coordinate[i][0];
        let tempY = curY + coordinate[i][1];
        if (tempX < 0 || tempY < 0 || tempX >= h || tempY >= w) {
          continue;
        }
        if (visited[tempX][tempY] !== 1 && arr[tempX][tempY] === 1) {
          visited[tempX][tempY] = 1;
          queue.push([tempX, tempY]);
        }
      }
    }
  };

  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr[j].length; k++) {
      bfs(j, k);
    }
  }
  answerArr.push(answer);
}

console.log(answerArr.join("\n").trim());
