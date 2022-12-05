function solution(progresses, speeds) {
  const arr = [];
  const answer = [];
  let count = 0;
  let temp = 0;

  for (let i = 0; i < progresses.length; i++) {
    temp = progresses[i];
    while (temp < 100) {
      temp += speeds[i];
      count++;
    }
    arr.push(count);
    count = 0;
  }

  temp = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (temp < arr[i]) {
      temp = arr[i];
      answer.push(count);
      count = 1;
    } else {
      count++;
    }
  }
  answer.push(count);
  return answer;
}

// 다른 사람 풀이

function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}
