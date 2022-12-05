const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const N = input.shift();
const arr = input.map((item) => item.split("").map(Number));

let visited = arr;
let answer = [];

function BFS(x,y) {
  let count = 1;
  let queue = [];
  let x = [-1, 0, 1, 0];
  let y = [0, 1, 0, -1];
  queue.push([x, y]);
  visited[x][y]=0;

  while (queue.length > 0) {
      let [a, b] = queue.shift();
      for (let j = 0; j < 4; j++) {
        let nx = a + x[j];
        let ny = b + y[j];
        if (nx >= 0 && nx < N && ny >= 0 && ny < N && visited[nx][ny] === 1) {
          count++;
          visited[nx][ny] = 0;
          queue.push([nx, ny]);
      }
    }
  }
  sum++;
  answer.push(count);
}

for(let i = 0; i < N; i++){
    for(let j = 0; j < N; j++){
        if(visited[i][j]===1){
            BFS(i,j);
        }
    }
}

console.log(sum,answer);
