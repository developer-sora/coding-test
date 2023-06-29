let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().split("\r\n");

const cnt = input.shift();

for (let i = 0; i < cnt; i++) {
  const binary = Number(input[i]).toString(2).split("").reverse();
  let indexArr = [];
  for (let j = 0; j < binary.length; j++) {
    if (binary[j] === "1") {
      indexArr.push(j);
    }
  }
  console.log(indexArr.join(" "));
}
