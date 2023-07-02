let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().split("\r\n");

const cnt = Number(input.shift());
let temp = [];
const numbers = [];

for (let i = 0; i < input.length; i++) {
  temp = input[i].split(" ").map(Number);
  temp.sort((a, b) => b - a);
  numbers.push(temp[2]);
}

console.log(numbers.join("\n"));
