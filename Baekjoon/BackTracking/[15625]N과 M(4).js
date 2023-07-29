let fs = require("fs");
let [N, M] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let numArr = [];
let result = "";

function dfs(cnt) {
  if (cnt === M) {
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] > numArr[i + 1]) {
        return;
      }
    }
    if (numArr.reduce((acc, cur) => acc + cur, 0) === N * M) {
      result += `${numArr.join(" ")}`;
      return;
    }
    result += `${numArr.join(" ")}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {
    numArr.push(i + 1);
    dfs(numArr.length);
    numArr.pop();
  }
}

dfs(0);

console.log(result);
