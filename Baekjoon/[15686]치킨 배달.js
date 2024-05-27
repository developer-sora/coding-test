let fs = require("fs");
let input = fs.readFileSync("./Baekjoon/input.txt").toString().split("\n");

let [N, M] = input.shift().split(" ").map(Number);

input = input.map((v) => v.split(" ").map(Number));
