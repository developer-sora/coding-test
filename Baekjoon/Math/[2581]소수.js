let fs = require("fs");
let [m, n] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\r\n")
  .map(Number);

const isPrime = (num) => {
  if (num === 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

let total = 0;
let min = 0;

for (let i = m; i <= n; i++) {
  if (isPrime(i)) {
    total += i;
    if (min === 0) {
      min = i;
    }
  }
}

console.log(min === 0 ? -1 : total + "\n" + min);
