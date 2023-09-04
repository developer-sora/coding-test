let fs = require("fs");
let [N, ...arr] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));

N = N[0];

arr = arr[0];

let result = [];

if (arr.at(-2) < arr.at(-1)) {
  result = arr.slice(0, -2).concat([arr.at(-1), arr.at(-2)]);
  console.log(result.join(" "));
  process.exit();
}

for (let i = N - 2; i > 0; i--) {
  if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
    let tempArr1 = arr.slice(0, i - N - 1);
    let tempArr2;
    if (arr[i - 1] > arr[i + 1]) {
      tempArr2 = [arr[i - 1], ...arr.slice(i + 1)];
      result = tempArr1.concat(arr[i]).concat(tempArr2.sort((a, b) => a - b));
      console.log(result.join(" "));
      process.exit();
    } else {
      tempArr2 = arr.slice(i - 1);
      let first = arr[i - 1];
      let second;
      let flag = false;
      let temp = 0;
      while (!flag) {
        first++;
        for (let j = 1; j < tempArr2.length; j++) {
          if (tempArr2[j] === first) {
            flag = true;
            second = j;
            break;
          }
        }
      }
      temp = tempArr2[second];
      tempArr2.splice(second, 1);
      result = [...tempArr1, temp, ...tempArr2.sort((a, b) => a - b)];
      console.log(result.join(" "));
      process.exit();
    }
  }
}

console.log(-1);
