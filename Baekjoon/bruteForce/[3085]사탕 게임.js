let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n");

const cnt = Number(input.shift());

let arr = new Array(cnt);

let sumArr = [];

for (let i = 0; i < cnt; i++) {
  arr[i] = input[i].split("");
}

let xy = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

let copiedArr = arr.map((v) => [...v]);
let visited = [];

const countSum = (arr) => {
  let rowAcc = 1;
  let colAcc = 1;
  let colMax = 1;
  let rowMax = 1;
  for (let i = 0; i < cnt - 1; i++) {
    rowAcc = 1;
    colAcc = 1;
    for (let j = 0; j < cnt - 1; j++) {
      if (arr[i][j] === arr[i][j + 1]) {
        rowAcc++;
      } else {
        if (rowMax < rowAcc) {
          rowMax = rowAcc;
        } else {
          rowAcc = 1;
        }
      }
      console.log(rowMax);
      if (arr[j][i] === arr[j + 1][i]) {
        colAcc++;
      } else {
        if (colMax < colAcc) {
          colMax = colAcc;
        } else {
          colAcc = 1;
        }
      }
    }
  }
  return Math.max(...[rowMax, colMax]);
};

for (let i = 0; i < cnt; i++) {
  for (let j = 0; j < cnt; j++) {
    for (let k = 0; k < 4; k++) {
      if (
        i + xy[k][0] === -1 ||
        j + xy[k][1] === -1 ||
        i + xy[k][0] === cnt ||
        j + xy[k][1] === cnt
      ) {
        continue;
      }
      copiedArr[i][j] = arr[i + xy[k][0]][j + xy[k][1]];
      copiedArr[i + xy[k][0]][j + xy[k][1]] = arr[i][j];
      sumArr.push(countSum(copiedArr));
      copiedArr = arr.map((v) => [...v]);
    }
    visited.push(String(i) + String(j));
  }
}

console.log(Math.max(...sumArr));
