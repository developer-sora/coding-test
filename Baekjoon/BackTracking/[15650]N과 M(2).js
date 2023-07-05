let fs = require("fs");
let [N, M] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split(" ")
  .map(Number);

const numArr = [];

for (let i = 1; i <= N; i++) {
  numArr.push(i);
}

const getPermutations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const permutations = getPermutations(rest, selectNumber - 1);
    const attatched = permutations.map((el) => [fixed, ...el]);
    results.push(...attatched);
  });

  return results;
};

const answer = getPermutations(numArr, M);

for (let i = 0; i < answer.length; i++) {
  console.log(answer[i].join(" "));
}
