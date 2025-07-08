/* 
양의 정수 n이 주어졌을 때,
n을 완전제곱수들의 합으로 표현하는 최소 개수를 구하시오.
*/

function solution(n) {
  const memo = {};
  memo[0] = 0;

  for (let i = 1; i <= n; i++) {
    memo[i] = i; // 1로만 더했을 때 개수(i)로 초기화
    // j는 i보다 작은 완전제곱수의 제곱근(ex: i = 13 일때 j*j = 1,4,9 즉 j = 1,2,3)
    for (let j = 1; j * j <= i; j++) {
      // 하나의 완전 제곱수 j*j(+1 부분)와 나머지 숫자(i - j*j)를 만들기 위한 최소 개수를 더한 값과 memo[i]를 비교
      memo[i] = Math.min(memo[i], memo[i - j * j] + 1);
    }
  }

  return memo[n];
}

solution(13);

module.exports = { solution };
