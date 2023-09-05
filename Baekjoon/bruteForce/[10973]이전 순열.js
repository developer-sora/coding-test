let fs = require("fs");
let [N, ...arr] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));

N = N[0];

arr = arr[0];

let tempArr = [];
let index = 0;
let temp = 0;

if (arr[N - 1] < arr[N - 2]) {
  console.log([...arr.slice(0, -2), arr[N - 1], arr[N - 2]].join(" "));
  process.exit();
}

for (let i = N - 1; i >= 0; i--) {
  if (arr[i] < arr[i - 1]) {
    tempArr = arr.slice(i - 1).sort((a, b) => b - a);
    index = tempArr.indexOf(arr[i - 1]);
    temp = tempArr[index + 1];
    tempArr[index + 1] = 0;
    tempArr.sort((a, b) => b - a).pop();
    console.log([...arr.slice(0, i - 1), temp, ...tempArr].join(" "));
    return;
  }
}

console.log(-1);
