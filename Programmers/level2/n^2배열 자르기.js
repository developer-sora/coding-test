function solution(n, left, right) {
  let answer = [];

  let [startX, startY] = [Math.floor(left / n), left % n];

  let [x, y] = [startX, startY];

  while (left <= right) {
    left++;
    if (y === n) {
      y = 0;
      x++;
    }
    if (x < y) {
      answer.push(y + 1);
    } else if (x > y) {
      answer.push(x + 1);
    } else {
      answer.push(x + 1);
    }
    y++;
  }
  return answer;
}
