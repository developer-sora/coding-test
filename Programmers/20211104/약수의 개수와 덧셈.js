/*
문제 설명
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ left ≤ right ≤ 1,000
*/

function solution(left, right) {
  let count = 0;
  let sum = 0
  for(let i = left; i <= right; i++){
      count=0;
      for(let j = 1; j <=i; j++){
      if(i%j===0) count++;
      }
      if(count%2===0) sum += i;
      else sum-=i;
  }
  return sum;
  
}

// 다른 사람 풀이 : 제곱근이 정수면 약수의 개수가 홀수, 아니면 짝수

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
      if (Number.isInteger(Math.sqrt(i))) {
          answer -= i;
      } else {
          answer += i;
      }
  }
  return answer;
}