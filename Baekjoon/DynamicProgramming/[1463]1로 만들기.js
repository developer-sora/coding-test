let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().trim();

input = Number(input);

let memo = new Array(input + 1).fill(0);

for (let i = 2; i <= input; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    if (memo[i / 2] < memo[i / 3]) {
      memo[i] = 1 + memo[i / 2];
    } else {
      memo[i] = 1 + memo[i / 3];
    }
  } else if (i % 2 === 0) {
    if (memo[i - 1] < memo[i / 2]) {
      memo[i] = 1 + memo[i - 1];
    } else {
      memo[i] = 1 + memo[i / 2];
    }
  } else if (i % 3 === 0) {
    if (memo[i - 1] < memo[i / 3]) {
      memo[i] = 1 + memo[i - 1];
    } else {
      memo[i] = 1 + memo[i / 3];
    }
  } else {
    memo[i] = 1 + memo[i - 1];
  }
}

console.log(memo[input]);

// 다른 사람 풀이

/*
...

const DP = new Array(num + 1).fill(0);

for (let i = 2; i <= num; i++) {
    DP[i] = DP[i - 1] + 1;

    if (i % 2 === 0) {
      DP[i] = Math.min(DP[i], DP[i / 2] + 1);
    }

    if (i % 3 === 0) {
      DP[i] = Math.min(DP[i], DP[i / 3] + 1);	
    }
}
*/
