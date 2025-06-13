const fs = require("fs");
const input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

let count = 0;

const graph = {};

for (let i = 1; i <= N; i++) {
  graph[i] = [];
}

input.forEach((value) => {
  const [u, v] = value.split(" ");
  graph[u].push(v);
  graph[v].push(u);
});

const visited = Array.from({ length: N + 1 }).fill(false);

const dfs = (node) => {
  visited[node] = true;

  for (const next of graph[node]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
};

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i);
    count++;
  }
}

console.log(count);
