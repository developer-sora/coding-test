let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().split("\r\n");

const [N, M] = input[0].split(" ").map(Number);

const numbers = input[1].split(" ").map(Number);

const answer = [];

let cumsum = new Array(numbers.length + 1).fill(0);

for (let i = 0; i < numbers.length; i++) {
  cumsum[i + 1] = cumsum[i] + arr[i];
}

for (let index = 2; index < input.length; index++) {
  let [i, j] = input[index].split(" ").map(Number);
  answer.push(cumsum[j] - cumsum[i - 1]);
}

console.log(answer.join("\n"));
