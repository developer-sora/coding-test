/*
문제 설명
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

제한 사항
s는 길이 1 이상, 길이 8 이하인 문자열입니다.
*/

function solution(s) {
  return !isNaN(Number(s))&&!s.includes('e')&&s.length===4||s.length===6;  // e를 숫자로 인식해서 e예외처리..
}

// 정규식 풀이

function alpha_string46(s){
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}