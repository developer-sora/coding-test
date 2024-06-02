let fs = require("fs");
let [T, ...input] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

// 테스트 케이스
T = +T;

// 제거하는 함수
const D = (arr, isReversed) => {
  // 배열이 빈 경우 D가 두 번 실행되는 경우를 생각 못함. arr가 "error"로 들어와서 shift()가 기능을 못함
  // 이렇게 얼레벌레 작성하면 구멍 숭숭 코드가 됨..
  if (arr.length === 0 || arr === "error") {
    arr = "error";
  } else if (isReversed) {
    arr.pop();
  } else if (!isReversed) {
    arr.shift();
  }
  return arr;
};

let func, arrLen, arr;

let isReversed = false;

let result = "";

for (let i = 0; i < input.length; i++) {
  // 함수 커맨드 저장
  if (i % 3 === 0) {
    func = input[i].split("");
    // 배열 개수 저장
  } else if (i % 3 === 1) {
    arrLen = +input[i];
    // 배열 저장 및 함수 실행
  } else if (i % 3 === 2) {
    if (input[i].length === 2) {
      arr = [];
    } else {
      arr = input[i].slice(1, -1).split(",").map(Number);
    }
    isReversed = false;
    for (let i = 0; i < func.length; i++) {
      if (func[i] === "R") {
        isReversed = !isReversed;
      } else if (func[i] === "D") {
        arr = D(arr, isReversed);
      }
    }
    if (arr !== undefined) {
      if (arr !== "error") {
        if (isReversed) {
          arr.reverse();
        }
        result += `[${arr}]\n`;
      } else result += arr + "\n";
    }
  }
}

console.log(result.trim());

// 다른 사람 코드

/*
 *
const output = [];

for (let i = 0; i < input.length; i += 3) {
  const p = input[i];
  const n = +input[i + 1];
  const arr = JSON.parse(input[i + 2]);
  let isReversed = false;
  let isError = false;
  let startIndex = 0;
  let endIndex = n - 1;

  for (const command of p) {
    if (command === 'R') {
      isReversed = !isReversed;
    } else {
      if (startIndex > endIndex) {
        isError = true;
        break;
      }
      if (isReversed) {
        endIndex--;
      } else {
        startIndex++;
      }
    }
  }

  const outputArr = arr.slice(startIndex, endIndex + 1);
  output.push(
    isError
      ? 'error'
      : JSON.stringify(isReversed ? outputArr.reverse() : outputArr)
   );
}

console.log(output.join('\n'));

pop이랑 shift연산을 안했구나! index로만 처리했네.
생각은 했는데 귀찮아서(?) 안함(반성)
그리고 JSON.stringfy하는 방법도 있군
 */
