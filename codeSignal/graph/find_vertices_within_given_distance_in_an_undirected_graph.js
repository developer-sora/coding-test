function findVerticesWithinDistance(graph, start, distance) {
  const visited = new Set();
  const result = [];
  const queue = [[start, 0]];

  while (queue.length) {
    const [curNode, dist] = queue.shift();

    if (dist > distance) continue;
    if (visited.has(curNode)) continue;

    visited.add(curNode);
    result.push(curNode);

    if (!graph[curNode]) continue;

    for (const node of graph[curNode]) {
      queue.push([node, dist + 1]);
    }
  }

  return result.sort((a, b) => a - b);
}

module.exports = { findVerticesWithinDistance };
