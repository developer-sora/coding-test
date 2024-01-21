let fs = require("fs");
let input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin")
    : fs.readFileSync("./Baekjoon/input.txt")
)
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);

const arr = input.map((v) => v.split(" ").map(Number));

const dfsArr = [];

const graph = Array.from({ length: N + 1 }, () => []);

const bfsArr = [];

let visited = Array.from({ length: N + 1 }, () => 0);

const queue = [];

for (let [a, b] of arr) {
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i < graph.length; i++) {
  graph[i].sort((a, b) => a - b);
}

function dfs(cnt) {
  if (dfsArr.length >= N) return;
  dfsArr.push(cnt);
  visited[cnt] = 1;
  for (let next of graph[cnt]) {
    if (!visited[next]) {
      visited[next] = 1;
      dfs(next);
    }
  }
}

dfs(V);

visited = visited.map(() => 0);

function bfs() {
  queue.push(V);
  visited[V] = 1;
  while (queue.length !== 0) {
    const now = queue.shift();
    bfsArr.push(now);
    for (let next of graph[now]) {
      if (!visited[next]) {
        queue.push(next);
        visited[next] = 1;
      }
    }
  }
}

bfs();

console.log(dfsArr.join(" "));
console.log(bfsArr.join(" "));
