let fs = require("fs");
let [word, bomb] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

const stack = [];

const bombLen = bomb.length;

for (let i = 0; i < word.length; i++) {
  stack.push(word[i]);
  // 현재 단어가 폭탄 단어의 마지막 단어라면
  if (word[i] === bomb.at(-1)) {
    // 폭탄 단어를 뒤에서부터 반복시킴
    for (let j = bombLen - 1; j >= 0; j--) {
      // 만약 폭탄 단어와 다른 단어가 있다면 반복문 탈출(폭탄 단어 아님)
      if (bomb[j] !== stack[stack.length + j - bombLen]) {
        break;
      }
      // 만약 반복문의 j가 0까지 갔다면, 즉 폭탄 단어라면
      if (j === 0) {
        let cnt = bombLen;
        // 폭탄 단어의 문자 수 만큼 stack에서 pop시킴
        while (cnt--) {
          stack.pop();
        }
      }
    }
  }
}

console.log(stack.length === 0 ? "FRULA" : stack.join(""));
