
// 1트
function solution(x) {
  var sum = x.toString().split('').reduce((sum,cur) => (sum+Number(cur)),0);
  
  return !(x%sum);
}

// 2트
function solution(x) {
  var sum = String(x).split('').map(Number).reduce((acc,cur)=>acc+cur);
  return !(x % sum);
}