let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input.shift().split(" ").map(Number);

input = input.map((v) => v.split(" ").map(Number));

let chickenLocation = [];
let homeLocation = [];
let visited = Array.from({ length: N }, () =>
  Array.from({ length: N }).fill(0)
);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (input[i][j] === 2) {
      chickenLocation.push([i, j]);
    } else if (input[i][j] === 1) {
      homeLocation.push([i, j]);
    }
  }
}

const output = [];

let chosenChicken = [];

// 치킨집 M개의 조합
function dfs(idx, cnt) {
  if (cnt === M) {
    let temp = [...output];
    chosenChicken.push(temp);
    return;
  }
  for (let i = idx; i < chickenLocation.length; i++) {
    let [x, y] = chickenLocation[i];
    if (visited[x][y]) continue;
    output.push(chickenLocation[i]);
    visited[x][y] = 1;
    dfs(i + 1, output.length);
    visited[x][y] = 0;
    output.pop();
  }
}

dfs(0);

let answer = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < chosenChicken.length; i++) {
  let sum = 0;
  for (let j = 0; j < homeLocation.length; j++) {
    let dist = Number.MAX_SAFE_INTEGER;
    for (let k = 0; k < chosenChicken[i].length; k++) {
      let [chickenX, chickenY] = chosenChicken[i][k];
      let [homeX, homeY] = homeLocation[j];
      dist = Math.min(
        dist,
        Math.abs(homeX - chickenX) + Math.abs(homeY - chickenY)
      );
    }
    sum += dist;
  }
  answer = Math.min(answer, sum);
}

console.log(answer);
