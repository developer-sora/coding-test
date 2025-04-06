let fs = require("fs");
let [N, ...arr] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\n");

const answer = [];

for (let i = 0; i < N; i++) {
  const stack = [];
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === "(") stack.push(arr[i][j]);
    if (arr[i][j] === ")") {
      if (stack.at(-1) === "(") stack.pop();
      else stack.push(arr[i][j]);
    }
  }
  if (stack.length === 0) {
    answer.push("YES");
  } else {
    answer.push("NO");
  }
}

console.log(answer.join("\n"));
