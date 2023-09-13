let fs = require("fs");
let [N, ...arr] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));

N = N[0];

let min = Number.MAX_SAFE_INTEGER;

let visited = new Array(N).fill(false);

let output = [];

let sum = 0;

let flag = false;

function dfs(cnt) {
  if (cnt === N) {
    sum = 0;
    flag = false;
    for (let j = 0; j < N; j++) {
      if (arr[output[j]][output[j + 1]] === 0) flag = true;
      if (j === N - 1) {
        if (arr[output[j]][output[0]] === 0) flag = true;
        sum += arr[output[j]][output[0]];
      } else {
        sum += arr[output[j]][output[j + 1]];
      }
    }
    if (!flag) {
      if (min > sum) min = sum;
    }
    return;
  }
  for (let i = 0; i < N; i++) {
    if (visited[i]) {
      continue;
    }
    output.push(i);
    visited[i] = true;
    dfs(output.length);
    output.pop();
    visited[i] = false;
  }
}

dfs(0);

console.log(min);

// 다른 사람 풀이

/*
...위와 동일

function dfs(depth, start, cost){
  if(depth === n-1 && arr[start][0] !==0){
    min = Math.min(min, cost + arr[start][0]);
    return;
  }

  for(let i = 0; i < n; i++){
    if(!visited[i] && arr[start][i] !==0 ){
      visited[i] = true;
      dfs(depth + 1, i, cost + arr[start][i]);
      visitied[i] = false;
    }
  }
}

visited[0] = true;   // 첫번째 도시에서 출발
dfs(0, 0, 0);

console.log(min);

*/
