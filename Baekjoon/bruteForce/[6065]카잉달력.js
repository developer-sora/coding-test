let fs = require("fs");
let [T, ...arr] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));

T = T[0];

let result = [];

let getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);

for (let i = 0; i < T; i++) {
  let flag = false;
  let a = 0;
  let b = 0;
  let x = arr[i][0] * a + arr[i][2];
  let y = arr[i][1] * b + arr[i][3];

  let LCM = (arr[i][0] * arr[i][1]) / getGCD(arr[i][0], arr[i][1]);

  while (x !== y) {
    if (x > LCM || y > LCM) {
      flag = true;
      break;
    }
    if (x < y) {
      a++;
      x = arr[i][0] * a + arr[i][2];
    } else {
      b++;
      y = arr[i][1] * b + arr[i][3];
    }
  }
  if (flag) result.push(-1);
  else result.push(x);
}

console.log(result.join("\n"));
