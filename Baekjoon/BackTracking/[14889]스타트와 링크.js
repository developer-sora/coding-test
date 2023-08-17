let fs = require("fs");
let [n, ...arr] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));

n = n[0];

let min = Number.MAX_SAFE_INTEGER;

function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
}

const members = Array(n)
  .fill()
  .map((_, i) => i);

const result = getCombinations(members, n / 2);

let sum = 0;

for (let i = 0; i < result.length / 2; i++) {
  let j = result.length - 1 - i;
  const start = getCombinations(result[i], 2);
  const link = getCombinations(result[j], 2);
  let startStats = 0;
  let linkStats = 0;
  for (let k = 0; k < start.length; k++) {
    startStats += arr[start[k][0]][start[k][1]] + arr[start[k][1]][start[k][0]];
    linkStats += arr[link[k][0]][link[k][1]] + arr[link[k][1]][link[k][0]];
  }
  sum = Math.abs(startStats - linkStats);

  min = min > sum ? sum : min;
}

console.log(min);
