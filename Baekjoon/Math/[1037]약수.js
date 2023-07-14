let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().split("\r\n");

const cnt = Number(input.shift());

const numbers = input[0].split(" ").map(Number);

let max = -Infinity;
let min = Infinity;

for (let i = 0; i < numbers.length; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
  if (min > numbers[i]) {
    min = numbers[i];
  }
}

let answer = cnt === 1 ? numbers[0] * numbers[0] : min * max;

console.log(answer);

//1   2 3 4 6 8 12  24
