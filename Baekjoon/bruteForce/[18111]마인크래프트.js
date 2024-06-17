// "땅의 높이는 256블록을 초과할 수 없으며"가 힌트!!
// 브루트포스로 0부터 256까지 모두 탐색해본다!

let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().split("\n");

let [N, M, B] = input.shift().split(" ").map(Number);

input = input.map((v) => v.split(" ").map(Number));

let answer = Infinity;
let height = -1;

for (let h = 0; h <= 256; h++) {
  let removeCnt = 0;
  let addCnt = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      let diff = input[i][j] - h;
      if (diff > 0) {
        // 현재 칸의 높이가 설정한 높이보다 크다면 더 블록을 제거해야 한다.
        removeCnt += diff; // 제거한 블럭수 추가
      } else {
        // 현재 칸의 높이가 설정한 높이보다 작다면 블록을 쌓아줘야 한다.
        addCnt += -diff; // 추가한 블럭수 추가
      }
    }
  }
  if (removeCnt + B >= addCnt) {
    // 제거된 블럭 + 인벤토리에 있는 블럭 수가 추가해야할 블럭보다 많다면
    let time = removeCnt * 2 + addCnt;
    // 같을 경우도 들어가있기 때문에 시간이 같은 경우 높은 땅이 들어감!!
    if (answer >= time) {
      answer = time;
      height = h;
    }
  }
}

console.log(answer, height);
