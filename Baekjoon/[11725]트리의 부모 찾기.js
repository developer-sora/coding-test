const fs = require("fs");
const input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const graph = {};

const parents = Array.from({ length: N + 1 }).fill(0);

const visited = Array.from({ length: N + 1 }).fill(false);

for (let i = 1; i <= N; i++) {
  graph[i] = [];
}

input.forEach((line) => {
  const [u, v] = line.split(" ");
  graph[u].push(v);
  graph[v].push(u);
});

const dfs = (node) => {
  visited[node] = true;
  for (const next of graph[node]) {
    if (!visited[next]) {
      parents[next] = node;
      dfs(next);
    }
  }
};

dfs("1");

console.log(parents);
