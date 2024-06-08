function solution(queue1, queue2) {
  let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
  let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
  let answer = 0;
  let len = queue1.length;

  let queue1_index = 0;
  let queue2_index = 0;

  while (sum1 !== sum2) {
    if (answer > len * 3 - 3) {
      answer = -1;
      break;
    }
    if (sum1 > sum2) {
      queue2.push(queue1[queue1_index]);
      sum1 -= queue1[queue1_index];
      sum2 += queue1[queue1_index];
      queue1_index++;
      answer++;
    } else if (sum1 < sum2) {
      queue1.push(queue2[queue2_index]);
      sum2 -= queue2[queue2_index];
      sum1 += queue2[queue2_index];
      queue2_index++;
      answer++;
    }
  }
  return answer;
}

// 다른 사람 풀이

function solution(queue1, queue2) {
  let sumQ1 = sum(queue1),
    sumQ2 = sum(queue2);

  let pointer1 = 0,
    pointer2 = queue1.length;

  const target = (sumQ1 + sumQ2) / 2;

  // 큐 두개를 합치는 방법이 있군..!
  const queue = [...queue1, ...queue2];

  // 탈출 조건
  const end = queue1.length * 3;

  for (let count = 0; count < end; count++) {
    if (sumQ1 === target) {
      return count;
    }

    if (sumQ1 > target) {
      sumQ1 -= queue[pointer1++];
    } else {
      sumQ1 += queue[pointer2++];
    }
  }

  return -1;
}

const sum = (arr) => arr.reduce((acc, v) => acc + v, 0);
