let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().split("\r\n");

const cnt = input.shift();

const numbers = input[0].split(" ").map(Number);

let answer = 0;

const isPrime = (number) => {
  if (number === 1) return false;
  if (number === 2) return true;

  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

numbers.forEach((v) => {
  if (isPrime(v)) answer++;
});

console.log(answer);
