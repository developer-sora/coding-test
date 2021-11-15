/*
문제 설명
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

제한 조건
s는 길이 4 이상, 20이하인 문자열입니다.
*/

// 1트
function solution(phone_number) {
    
  var answer = '';
 for(let i = 0; i<phone_number.length; i++){
     if(i<phone_number.length-4){
         answer += '*';
     }else
     answer+=phone_number[i]
 }

 return answer;
}

// 2트
function solution(phone_number) {
  let number = phone_number.slice(-4);
   return '*'.repeat(phone_number.slice(0,-4).length)+number;
}

// 리팩토링
function solution(phone_number) {
return '*'.repeat(phone_number.length-4)+phone_number.slice(-4);
}