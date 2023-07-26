let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().trim();

let answer = 0;

let arr = [0, 9];

for (let i = 2; i <= 9; i++) {
  arr.push(arr[i - 1] + i * (9 * 10 ** (i - 1)));
}

if (input.length === 1) {
  console.log(input);
  process.exit();
} else {
  answer =
    arr[input.length - 1] +
    input.length * (Number(input) + 1 - 10 ** (input.length - 1));
}

console.log(answer);
