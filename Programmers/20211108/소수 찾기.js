/*
문제 설명
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

제한 조건
n은 2이상 1000000이하의 자연수입니다.
*/

// 효율성 실패 ㅠㅠ 에라토스테네스의 체 **

function solution(n) {
  //에라토스테네스의 체
  
  let arr = [];
  let answer = 0;
  
  for(let i = 2; i<=n; i++){
      arr[i] = i;
  }  // 2에서 n까지 배열에 넣기
  
  for(let i = 2; i <=n; i++){
      if(arr[i]===0){      // 배수일 경우 넘어가기
          continue;
      }
      for(let j = i+i; j <= n; j+=i){  // 배수일 경우 0 넣기
          arr[j]=0;
      }
      
  }
  for(let i = 2; i<=n; i++){
      if(arr[i]!==0) answer++;  // 배수가 아닌 수만 count
  }
  return answer;
  
}