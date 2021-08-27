/*문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

제한 조건
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다. */

function solution(s, n) {
  var num = 0;
  var ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) === 32) {
      num = 32; // 공백 처리
    } else if (
      (s.charCodeAt(i) + n > 90 && s.charCodeAt(i) < 97) || // 대문자일 때 Z 넘어가면 처리
      s.charCodeAt(i) + n > 122 // 소문자일 때 z 넘어가면 처리
    ) {
      num = s.charCodeAt(i) - 26 + n;
    } else num = s.charCodeAt(i) + n; // 그외 모든 문자 처리
    ans += String.fromCharCode(num);
  }
  return ans;
}

// 다른사람 풀이

function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    } // 공백처리
    var textArr = upper.includes(text) ? upper : lower; //
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index = index - textArr.length;
    answer += textArr[index];
  }
  return answer;
}
