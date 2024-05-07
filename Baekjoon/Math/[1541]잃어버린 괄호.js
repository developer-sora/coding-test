let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().trim();

// let copy = "(";

// let flag = 0;

// for (let i = 0; i < input.length; i++) {
//   if (input[i] === "+" || input[i] === "-") {
//     copy += Number(input.substring(flag, i));
//     let temp = i + 1;
//     flag = temp;
//   }
//   if (input[i] === "-") {
//     copy += ")-(";
//   }
//   if (input[i] === "+") {
//     copy += "+";
//   }
// }

// copy += Number(input.substring(flag, input.length)) + ")";

// console.log(eval(copy));

// 다른사람 풀이 eval 함수 안쓰는 법!!!

input = input.split("-").map((item) => {
  let newItem = item.split("+");
  return newItem.reduce((a, b) => Number(a) + Number(b), 0);
});

console.log(input.reduce((a, b) => a - b));
