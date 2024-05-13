let fs = require("fs");
let [A, B, C] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split(" ")
  .map(BigInt); // BigInt로 형변환 해준다.

function power(base, exponent) {
  if (exponent === 1n) {
    // BigInt라서 BigInt로 비교
    return base % C;
  } else if (exponent % 2n === 0n) {
    // BigInt로 연산
    let byTwo = power(base, exponent / 2n) % C;
    return (byTwo * byTwo) % C;
  } else {
    let byTwoPlusOne = power(base, (exponent - 1n) / 2n) % C;
    return (((byTwoPlusOne * byTwoPlusOne) % C) * base) % C;
  }
}

console.log(power(A, B).toString());
// 숫자에 붙은 n을 떼줘야 해서 toString()을 해준다!
