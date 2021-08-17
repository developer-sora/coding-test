/*
문제 설명
함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

제한 조건
n은 1이상 8000000000 이하인 자연수입니다.
*/

function solution(n) {
  let arr = String(n)
    .split("")
    .sort((a, b) => b - a);
  let answer = "";
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  } // 배열을 문자열로
  return Number(answer);
}

// 다른 사람 풀이
function solution(n) {
  const newN = n + ""; // string 변환
  const newArr = newN
    .split("") // 자르기
    .sort() // 정렬
    .reverse() // 내림차순으로 정렬
    .join(""); // 배열을 문자열로 합침

  return +newArr; // 문자를 숫자로 바꾸기
}
