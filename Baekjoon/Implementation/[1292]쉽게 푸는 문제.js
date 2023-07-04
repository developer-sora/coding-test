const fs = require("fs");
const [start, end] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split(" ")
  .map(Number);

let arr = new Array(end).fill(0);
let num = 1;
let cnt = num;

for (let i = 0; i < arr.length; i++) {
  arr[i] = num;
  cnt--;
  if (cnt === 0) {
    num++;
    cnt = num;
  }
}

const answer = arr.slice(start - 1).reduce((pre, cur) => pre + cur, 0);

console.log(answer);
/*
1 2 3 4 5 6 7 
1 2 2 3 3 3 4
*/
