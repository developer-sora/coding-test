let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().split("\r\n");

const cnt = input.shift();

const numArr = input[0].split(" ").map(Number);

const operatorArr = input[1].split(" ").map(Number);
