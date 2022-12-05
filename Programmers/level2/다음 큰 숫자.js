function solution(n) {
  let temp = n.toString(2).split("");
  let count = 0;
  let count2 = 0;
  let sum = n;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "1") count++;
  }
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    sum++;
    arr = sum.toString(2).split("");
    count2 = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === "1") {
        count2++;
      }
    }
    if (count2 !== 0 && count === count2) return sum;
  }
}

// 다른 사람 풀이

function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}

/* 
string 안에 같은 숫자나 단어 개수 찾기
string.match(/찾고싶은단어/g).length

찾을 때 까지 재귀!! for문 xxx
*/
