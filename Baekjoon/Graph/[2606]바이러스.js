let fs = require("fs");
let [totalCom, totalLine, ...arr] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

let line = arr.map((v) => v.split(" ").map(Number));

let visited = Array.from({ length: +totalCom + 1 }, () => 0);

let queue = [];

let answer = 0;

function bfs(cnt) {
  queue.push(cnt);
  while (queue.length !== 0) {
    let curCom = queue.shift();
    for (let i = 0; i < line.length; i++) {
      if (line[i].includes(curCom)) {
        let temp = line[i].filter((v) => v !== curCom);
        if (visited[temp[0]] !== 1) {
          queue.push(temp[0]);
          visited[temp[0]] = 1;
          answer++;
        }
      }
    }
  }
}

bfs(1);

console.log(answer === 0 ? 0 : answer - 1);
