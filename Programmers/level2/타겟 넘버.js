function solution(numbers, target) {
  let answer = 0;
  const output = [];

  function dfs(numbers, idx, curX) {
    if (idx === numbers.length) {
      if (curX === target) {
        answer++;
      }
      return;
    }
    dfs(numbers, idx + 1, curX + numbers[idx]);
    dfs(numbers, idx + 1, curX - numbers[idx]);
  }

  dfs(numbers, 0, 0);

  return answer;
}
