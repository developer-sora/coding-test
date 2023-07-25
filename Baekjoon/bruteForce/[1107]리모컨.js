let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n");

let currentChannel = 100;
let N = Number(input[0]);
let M = Number(input[1]);

if (M === 0) {
  count =
    Math.abs(currentChannel - N) < N.length
      ? Math.abs(currentChannel - N)
      : String(N).length;
  console.log(count);
  process.exit();
}

if (M === 10) {
  console.log(Math.abs(currentChannel - N));
  process.exit();
}

let broken = input[2].split(" ");

let min = Math.abs(100 - N);

for (let i = 0; i <= 999900; i++) {
  let check = true;
  let cur = i + "";
  for (let j = 0; j < cur.length; j++) {
    if (broken.includes(cur[j])) {
      check = false;
      break;
    }
  }
  if (check) {
    min =
      min > Math.abs(Number(cur) - N) + cur.length
        ? Math.abs(Number(cur) - N) + cur.length
        : min;
  }
}
console.log(min);
