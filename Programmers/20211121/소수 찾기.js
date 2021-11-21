/*
소수 찾기
문제 설명
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers는 길이 1 이상 7 이하인 문자열입니다.
numbers는 0~9까지 숫자만으로 이루어져 있습니다.
"013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
*/

function solution(numbers) {
  let count = 0;
  let arr = [];

  function isPrime(n){
      if(n < 2) return false;
      else if(n===2 || n === 3) return arr.push(n);
      for(let i = 2; i <= Math.sqrt(n); i++ ){
          if(n%i===0) return false;
      }
      return arr.push(n);
    }
// 소수 찾기

  const  mergeNumbers = (arr,str)=>{
      if(arr.length>0){
          for(let i = 0; i < arr.length; i++){
              let tmp = [...arr];
              tmp.splice(i,1);
              mergeNumbers(tmp,str+arr[i]);
          }
      }
      if(str.length>0){
        if(!arr.includes(+str)) isPrime(+str); 
      }
  }
  // 숫자 합치기
  mergeNumbers(numbers,"");
  
  return [...new Set(arr)].length;  // 중복 제거한 배열의 길이 리턴(소수의 개수)
      
  }