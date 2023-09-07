let fs = require("fs");
let input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\r\n");

let [L, C] = input[0].split(" ").map(Number);

let [...word] = input[1].split(" ");

word.sort();

let output = [];

let result = "";

let regex = /^(?=.*?[^aeiou].*?[^aeiou])(?=.*?[aeiou]).{3,}$/;

function dfs(dept) {
  if (dept === L) {
    if (!regex.test(output.join(""))) {
      return;
    }
    result += output.join("");
    result += "\n";
    return;
  }
  for (let i = 0; i < C; i++) {
    if (
      output.includes(word[i]) ||
      (output.length !== 0 &&
        output[output.length - 1].charCodeAt() > word[i].charCodeAt())
    ) {
      continue;
    }
    output.push(word[i]);
    dfs(output.length);
    output.pop();
  }
}

dfs(0);

console.log(result.trim());

// 다른 사람 코드

/*
const [L, C] = input.shift().split(' ').map(Number);
const alphabet = input.shift().split(' ').sort();
const vowel = ['a', 'e', 'i', 'o', 'u'];
const answer = [];

function backtracking(str, startIndex) {
  if (str.length === L) {
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowel.includes(str[i])) cnt++;      모음이 있으면 cnt++
    }
    if (cnt > 0 && L - cnt > 1) {             모음이 하나 이상이고 자음이 2개 이상 (전체 길이에서 모음 개수 뺀 글자수가 2개 이상)
      answer.push(str);
    }
    return;
  } else {
    for (let i = startIndex; i < C; i++) {
      backtracking(str + alphabet[i], i + 1);  
    }
  }
}

backtracking('', 0);

console.log(answer.join('\n'));
*/
