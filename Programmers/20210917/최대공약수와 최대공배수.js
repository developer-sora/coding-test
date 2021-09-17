/*문제 설명
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

제한 사항
두 수는 1이상 1000000이하의 자연수입니다. */

// 내 풀이
function solution(n, m) {
  var answer = [];
  var max = 1;
  var array = [];

  for(let i = n; i > 0; i--){
      if(Number.isInteger(n/i))
      array.push(n/i);
  }

   for(let j = m; j > 0; j--){
      if(Number.isInteger(m/j)){
          if(array.includes(m/j)){
             if(max<=m/j){
                 max=m/j;
             }
          }
      }
   }
  answer.push(max); // 최대공약수
  answer.push((n*m)/max) // 최소공배수
  return answer;
}

// 다른 사람 풀이 (유클리드 호제법) 1. 재귀 호출

function solution(n, m){
  const greatest = (a, b)=>{
    if(b === 0) return a
    return greatest(b, a % b);
  }

  const least = (a,b)=>(a*b)/greatest(a,b);
  return [greatest(n,m), least(n,m)];

}

// 다른 사람 풀이 2. while문

function solution(n,m){
  let a = n;
  let b = m;

while(m>0){
  var tmp = n;
  n = m;
  m = tmp%m;
}

return [n, (a*b)/n];
}