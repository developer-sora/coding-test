// 1번째 수와 2번째 수의 최소공배수를 구하고, 구한 최소공배수와 3번째 수의 최소공배수를 구하는 방식

// 최대공약수 구하는 함수
function getGcd(a, b) {
  if (b === 0) return a;
  return getGcd(b, a % b);
}

// 최소공배수 = 두 수의 곱/두 수의 최대공약수
function solution(arr) {
  return arr.reduce((a, b) => (a * b) / getGcd(a, b));
}

/*
ex) 2,6,8,14

2*6/2 = 6
6*8/2 = 24
24*14/2 = 168

답 : 168
*/
