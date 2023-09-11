let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().trim();

input = Number(input);

let arr = Array.from(Array(input), (_, i) => i + 1);

let output = [];

let result = "";

function dfs(depth) {
  if (depth === input) {
    result += output.join(" ");
    result += "\n";
    return;
  }

  for (let i = 0; i < input; i++) {
    if (output.includes(arr[i])) {
      continue;
    }
    output.push(arr[i]);
    dfs(output.length);
    output.pop();
  }
}

dfs(0);

console.log(result.trim());
