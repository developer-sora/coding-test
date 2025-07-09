/*
이 함수는 Breadth-First Search (BFS) 알고리즘을 이용해서
start 도시부터 destination 도시까지 가는 **최단 거리(이동 횟수)**를 구해야 한다.
*/

function shortestDistance(roads, start, destination) {
  // 시작 지점에서 start
  const queue = [[start, 0]];
  const visited = new Set();

  while (queue.length) {
    const [node, dist] = queue.shift();

    if (visited.has(node)) continue;
    visited.add(node);

    if (node === destination) {
      return dist;
    }

    if (!roads[node]) continue;

    for (const neighbor of roads[node]) {
      queue.push([neighbor, dist + 1]);
    }
  }
  return null;
}

module.exports = { shortestDistance };
