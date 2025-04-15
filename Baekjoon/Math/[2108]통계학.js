let fs = require("fs");
let [N, ...input] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const nums = input.sort((a, b) => a - b);

const mean = Math.round(nums.reduce((acc, cur) => acc + cur, 0) / N);
const median = nums[Math.floor(nums.length / 2)];

const map = new Map();

for (let num of nums) {
  map.set(num, (map.get(num) || 0) + 1);
}

const sortedMap = [...map.entries()].sort((a, b) => {
  if (b[1] !== a[1]) {
    return b[1] - a[1];
  } else {
    return a[0] - b[0];
  }
});

const mode = getMode(sortedMap);

function getMode(sortedMap) {
  if (sortedMap.length === 1) return sortedMap[0][0];
  if (sortedMap[0][1] === sortedMap[1][1]) return sortedMap[1][0];
  return sortedMap[0][0];
}

const range = nums.at(-1) - nums[0];

console.log(mean.toString());
console.log(median);
console.log(mode);
console.log(range);
