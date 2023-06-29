let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().split(" ");

const n = input[0];
const k = input[1];

const arr = [];

for (let i = 1; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    arr.push(i);
    if (n / i !== i) arr.push(n / i); // 중복제거
  }
}

const sortedArr = arr.sort((a, b) => a - b);

console.log(sortedArr[k - 1] || 0);
