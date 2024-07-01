function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);

  let answer = Number.MAX_SAFE_INTEGER;

  for (const [v1, v2] of wires) {
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  const bfs = (start, except) => {
    let count = 0;
    const queue = [start];
    let visited = Array.from({ length: n + 1 }, () => false);
    visited[start] = true;
    while (queue.length !== 0) {
      const index = queue.shift();
      graph[index].forEach((v) => {
        if (v !== except && !visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      });
      count++;
    }
    return count;
  };

  wires.forEach(([v1, v2]) => {
    answer = Math.min(answer, Math.abs(bfs(v1, v2) - bfs(v2, v1)));
  });

  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
