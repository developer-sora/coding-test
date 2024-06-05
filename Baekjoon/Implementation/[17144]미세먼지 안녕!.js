let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

let [R, C, T] = input.shift().split(" ").map(Number);
input = input.map((v) => v.split(" ").map(Number));
let answer = 0;
let topCleanerRow = 0;
let bottomCleanerRow = 0;
let flag = false;
const directionX = [0, -1, 0, 1];
const directionY = [1, 0, -1, 0];

// 공기청정기 위치 찾기
for (let row = 0; row < R; row++) {
  for (let col = 0; col < C; col++) {
    if (flag) break;
    if (input[row][col] === -1) {
      topCleanerRow = row;
      bottomCleanerRow = row + 1;
      flag = true;
    }
  }
}

// 미세먼지 확산
function spread() {
  let spreadList = [];
  for (let row = 0; row < R; row++) {
    for (let col = 0; col < C; col++) {
      if (input[row][col] > 0) {
        const value = Math.floor(input[row][col] / 5);
        for (let i = 0; i < 4; i++) {
          const [curRow, curCol] = [row + directionX[i], col + directionY[i]];
          if (
            curRow < 0 ||
            curCol < 0 ||
            curRow >= R ||
            curCol >= C ||
            input[curRow][curCol] === -1
          )
            continue;
          spreadList.push([curRow, curCol, value]);
          input[row][col] -= value;
        }
      }
    }
  }
  for (let spread of spreadList) {
    const [row, col, value] = spread;
    input[row][col] += value;
  }
}

// 위쪽 공기청정기 순환 (반시계방향)
function cleanTop(cleanerRow) {
  for (let row = cleanerRow - 2; row >= 0; row--) {
    input[row + 1][0] = input[row][0];
  }

  for (let col = 1; col < C; col++) {
    input[0][col - 1] = input[0][col];
  }

  for (let row = 1; row <= cleanerRow; row++) {
    input[row - 1][C - 1] = input[row][C - 1];
  }

  for (let col = C - 2; col > 0; col--) {
    input[cleanerRow][col + 1] = input[cleanerRow][col];
  }

  input[cleanerRow][1] = 0;
}

// 아래쪽 공기청정기 순환 (시계방향)
function cleanBottom(cleanerRow) {
  for (let row = cleanerRow + 2; row < R; row++) {
    input[row - 1][0] = input[row][0];
  }

  for (let col = 1; col < C; col++) {
    input[R - 1][col - 1] = input[R - 1][col];
  }

  for (let row = R - 2; row >= cleanerRow; row--) {
    input[row + 1][C - 1] = input[row][C - 1];
  }

  for (let col = C - 2; col > 0; col--) {
    input[cleanerRow][col + 1] = input[cleanerRow][col];
  }

  input[cleanerRow][1] = 0;
}

function countDust() {
  for (let row = 0; row < R; row++) {
    for (let col = 0; col < C; col++) {
      if (input[row][col] > 0) answer += input[row][col];
    }
  }
}

while (T--) {
  spread();
  cleanTop(topCleanerRow);
  cleanBottom(bottomCleanerRow);
}

countDust();

console.log(answer);
