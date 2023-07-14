let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().split("\r\n");

const cnt = input.shift();

const numArr = input[0].split(" ").map(Number);

const operatorArr = input[1].split(" ").map(Number);

let max = -Infinity;
let min = Infinity;

function operation(num1, num2, operator) {
  switch (operator) {
    case 0:
      return num1 + num2;
    case 1:
      return num1 - num2;
    case 2:
      return num1 * num2;
    case 3:
      return num1 < 0 ? Math.floor(-num1 / num2) : Math.floor(num1 / num2);
  }
}

function dfs(index, result, operators) {
  if (index === numArr.length) {
    max = Math.max(max, result);
    min = Math.min(min, result);
  }

  for (let i = 0; i < 4; i++) {
    if (operators[i] > 0) {
      const newOpers = [...operators];
      newOpers[i] -= 1;
      console.log(index, result, numArr[index], i, newOpers);
      dfs(index + 1, operation(result, numArr[index], i), newOpers);
    }
  }
}

dfs(1, numArr[0], operatorArr);
console.log(max, min);
