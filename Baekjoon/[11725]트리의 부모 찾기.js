let fs = require("fs");
let [N, ...input] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\n");

N = +N;
input = input.map((v) => v.split(" ").map(Number));

let graph = Array.from({ length: N + 1 }, () => []);
let visited = Array.from({ length: N + 1 }, () => []);
let answer = Array.from({ length: N + 1 }, () => []);
let queue = [];

for (let [a, b] of input) {
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 0; i < graph[1].length; i++) {
  queue.push({ prevNode: 1, curNode: graph[1][i] });
}

visited[1] = 1;

function bfs() {
  while (queue.length !== 0) {
    const { prevNode, curNode } = queue.shift();
    visited[curNode] = 1;
    for (let next of graph[curNode]) {
      if (visited[next] === 1) {
        answer[curNode] = prevNode;
      } else {
        queue.push({ prevNode: curNode, curNode: next });
        visited[next] = 1;
      }
    }
  }
}

bfs();

console.log(answer.slice(2).join("\n"));
