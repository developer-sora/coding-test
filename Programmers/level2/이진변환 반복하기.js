/* 
문제 설명
0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.

x의 모든 0을 제거합니다.
x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.

0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.
*/

// 내풀이

function solution(s) {
    let string = s;
    let sum = 0;
    let count = 0;
    let zeroCount = 0;
    while(string!=="1"){
      for(let i = 0; i < string.length; i++){
          if(string.charAt(i)==="0"){
              zeroCount++;
          }else{
              sum += 1;
          }
      }
        count++;
        string = sum.toString(2);
        sum=0;
    }
    return[count,zeroCount];
}

// 다른 사람 풀이

function solution(s) {
    var answer = [0,0];
    while(s.length > 1) {
        answer[0]++; // 횟수 count
        answer[1] += (s.match(/0/g)||[]).length;
        /* 
        match(정규식) -> 정규식과 매치되는 부분 검색
        /0/g -> 전체에서 0을 찾음
        ||[]을 하는 이유는 match되는 문자가 없을 때 null이 반환되는데 null.length가 되는 오류를 방지하려고 넣어줌
        */
        s = s.replace(/0/g, '').length.toString(2);
        /* 
        0문자열을 빈문자열로 바꾸고 숫자가 전부 1이니까 sum할 필요 없고 length를 구해서 2진수로 변환
        */
    }
    return answer;
}