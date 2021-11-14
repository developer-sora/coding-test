// 1트

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

// 2트
function solution(n, m) {
  let a = Math.max(n,m);
  let b = Math.min(n,m);
  let tmp=0;
  while(b>0){
      tmp = a%b; // 나머지 저장
      a = b;   // a에 b값 넣기
      b = tmp; // b는 나머지        
  }
  return [a,(n*m)/a];
  
}

// 다른사람 풀이
function gcdlcm(a, b) {
  var r;
  for(var ab= a*b; r = a % b; a = b, b = r){}
  return [b, ab/b];
}

// for문을 이렇게 사용할 수 있구나...