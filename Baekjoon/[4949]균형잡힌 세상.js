let fs = require("fs");
let strs = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

strs.pop();
const answer = [];

for (const str of strs) {
  const stack = [];
  for (const char of str) {
    if (stack.at(-1) === "(" && char === ")") {
      stack.pop();
    } else if (stack.at(-1) === "[" && char === "]") {
      stack.pop();
    } else if (char === "(" || char === ")" || char === "[" || char === "]")
      stack.push(char);
  }
  if (stack.length === 0) {
    answer.push("yes");
  } else {
    answer.push("no");
  }
}

console.log(answer.join("\n"));
