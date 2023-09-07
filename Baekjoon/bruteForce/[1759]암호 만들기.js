let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n");

let [L, C] = input[0].split(" ").map(Number);

let [...word] = input[1].split(" ");

word.sort();

let output = [];

let result = "";

let regex = /^(?=.*?[^aeiou].*?[^aeiou])(?=.*?[aeiou]).{3,}$/;

function dfs(dept) {
  if (dept === L) {
    if (!regex.test(output.join(""))) {
      return;
    }
    result += output.join("");
    result += "\n";
    return;
  }
  for (let i = 0; i < C; i++) {
    if (
      output.includes(word[i]) ||
      (output.length !== 0 &&
        output[output.length - 1].charCodeAt() > word[i].charCodeAt())
    ) {
      continue;
    }
    output.push(word[i]);
    dfs(output.length);
    output.pop();
  }
}

dfs(0);

console.log(result.trim());
