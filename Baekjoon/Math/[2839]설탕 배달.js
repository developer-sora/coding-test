let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString();

input = Number(input);

if (input === 4 || input === 7) {
  console.log(-1);
  process.exit();
}

let arr = new Array(5001).fill(0);

arr[3] = 1;
arr[5] = 1;
arr[6] = 2;
arr[8] = 2;
arr[9] = 3;
arr[12] = 4;

let j = 5;

for (let i = 10; i <= input; i++) {
  if (i === 12) {
    j++;
    continue;
  }
  arr[i] = arr[5] + arr[j];
  j++;
}

console.log(arr[input]);

// 다른 사람 코드.. 하드코딩으로 짜지 말자 ㅠㅠ

let count = 0;

while (true) {
  if (input % 5 === 0) {
    console.log(input / 5 + count);
    break;
  }

  if (input < 0) {
    console.log(-1);
    break;
  }

  count++;
  input -= 3;
}
