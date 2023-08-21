let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n");

let N = Number(input.shift());

let arr = input.map((v) => v.split(""));

let rowSum = 0;
let colSum = 0;

let max = Number.MIN_SAFE_INTEGER;

const xy = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < xy.length; k++) {
      if (
        i + xy[k][0] === -1 ||
        i + xy[k][0] === N ||
        j + xy[k][1] === -1 ||
        j + xy[k][1] === N
      ) {
        continue;
      }
      let temp = arr[i][j];
      arr[i][j] = arr[i + xy[k][0]][j + xy[k][1]];
      arr[i + xy[k][0]][j + xy[k][1]] = temp;
      for (let l = 0; l < N; l++) {
        rowSum =
          arr[i + xy[k][0]][l] === arr[i + xy[k][0]][j + xy[k][1]]
            ? (rowSum += 1)
            : 0;
        colSum =
          arr[l][j + xy[k][1]] === arr[i + xy[k][0]][j + xy[k][1]]
            ? (colSum += 1)
            : 0;
        max = max < Math.max(rowSum, colSum) ? Math.max(rowSum, colSum) : max;
      }
      rowSum = 0;
      colSum = 0;
      arr[i + xy[k][0]][j + xy[k][1]] = arr[i][j];
      arr[i][j] = temp;
    }
  }
}

console.log(max);
