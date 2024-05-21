let fs = require("fs");
let [N, M, ...input] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

N = +N;
M = +M;

let [start, end] = input.pop().split(" ").map(Number);

input = input.map((v) => v.split(" ").map(Number));

let graph = Array.from({ length: N + 1 }, () => []);

for (let [a, b, c] of input) {
  graph[a].push({ node: b, cost: c });
}

let dist = Array.from({ length: N + 1 }).fill(Infinity);

let visited = Array.from({ length: N + 1 }).fill(false);

function findSmallestNode() {
  let min_dist = Infinity;
  let min_node = 0;
  for (let i = 1; i <= N; i++) {
    if (!visited[i] && dist[i] < min_dist) {
      min_dist = dist[i];
      min_node = i;
    }
  }
  return min_node;
}

function dijkstra() {
  dist[start] = 0;
  visited[start] = true;

  graph[start].forEach((next) => {
    dist[next.node] = Math.min(dist[next.node], next.cost);
  });

  for (let i = 1; i <= N; i++) {
    let now_node = findSmallestNode();
    visited[now_node] = true;

    graph[now_node].forEach((next) => {
      const acc = dist[now_node] + next.cost;
      if (acc < dist[next.node] && !visited[next.node]) {
        dist[next.node] = acc;
      }
    });
  }
}

dijkstra();

console.log(dist[end]);
