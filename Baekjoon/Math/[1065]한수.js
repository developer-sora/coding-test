let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().trim();

if (input < 100) {
  console.log(input);
  process.exit();
}

if (input === 1000) {
  console.log(144);
  process.exit();
}

let cnt = 99;

cnt += (input[0] - 1) * 5;

for (let i = input[0] * 100; i <= input; i++) {
  let temp = i + "";
  console.log(temp, temp[1] - temp[0], temp[2] - temp[1]);
  if (temp[1] - temp[0] === temp[2] - temp[1]) {
    cnt++;
  }
}

console.log(cnt);
