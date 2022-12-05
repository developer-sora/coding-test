//https://school.programmers.co.kr/learn/courses/30/lessons/42587#

function solution(priorities, location) {
  let copy = [...priorities];
  const size = priorities.length;
  let max = Math.max(...priorities);
  let count = 0;
  let visited = [];

  while (copy.length > 0) {
    for (let i = 0; i < size; i++) {
      if (priorities[i] < max) {
        copy.push(copy.shift());
      } else {
        if (!visited.includes(i)) {
          count++;
          copy.shift();
          max = Math.max(...copy);
          if (location === i) return count;
        }
        visited.push(i);
      }
    }
  }
}

// 다른 사람 풀이

function solution(priorities, location) {
  var arr = priorities.map((priority, index) => {
    return {
      index: index,
      priority: priority,
    };
  });

  var queue = [];

  while (arr.length > 0) {
    var firstEle = arr.shift();
    var hasHighPriority = arr.some((ele) => ele.priority > firstEle.priority);
    if (hasHighPriority) {
      arr.push(firstEle);
    } else {
      queue.push(firstEle);
    }
  }

  return queue.findIndex((queueEle) => queueEle.index === location) + 1;
}
