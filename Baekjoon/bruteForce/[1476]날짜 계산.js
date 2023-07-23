let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [E, S, M] = input;

let year = 1;

while (true) {
  if ((year - E) % 15 === 0 && (year - S) % 28 === 0 && (year - M) % 19 === 0) {
    console.log(count);
    process.exit();
  } else {
    year++;
  }
}
