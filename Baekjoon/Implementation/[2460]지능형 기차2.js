let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().split("\r\n");

let currentPeople = 0;
let max = 0;

for (let i = 0; i < input.length; i++) {
  const [getOut, getIn] = input[i].split(" ").map(Number);
  currentPeople = currentPeople - getOut + getIn;
  if (max < currentPeople) {
    max = currentPeople;
  }
}

console.log(max);
