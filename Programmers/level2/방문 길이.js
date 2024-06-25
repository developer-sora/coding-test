function solution(dirs) {
  let answer = 0;
  let visited = [];
  let go = "";
  let back = "";
  let cur_position = [5, 5];
  const direction = {
    U: [-1, 0],
    D: [1, 0],
    R: [0, 1],
    L: [0, -1],
  };

  for (const dir of dirs) {
    let [curX, curY] = cur_position;
    let [nextX, nextY] = [curX + direction[dir][0], curY + direction[dir][1]];
    if (nextX < 0 || nextY < 0 || nextX > 10 || nextY > 10) {
      continue;
    }
    go = [curX, curY] + "=>" + [nextX, nextY];
    back = [nextX, nextY] + "=>" + [curX, curY];
    if (!visited.includes(go) && !visited.includes(back)) {
      visited.push(go, back);
      answer++;
    }
    cur_position = [nextX, nextY];
  }

  return answer;
}

/* 어려운 부분 
   처음 걸어본 길을 체크하는게 어려웠음.
   처음에 그냥 좌표를 visited로 체크했더니 처음 가는 길인데도 이미 좌표를 통과한 적이 있어서 카운팅이 되지 않았음.
   그래서 {start:boolean,end:boolean}라는 객체를 넣어서 초기화를 했더니 
   위로갔다가 다시 아래로 가는 경우 출발지점과 도착지점은 서로 다르지만 이미 걸어본 길이라 카운팅이 안되야 하는데 카운팅이 되는 문제 발생.
   그래서 예전에 했던 풀이를 봤더니 go,back이라는 변수를 선언해서 출발->도착, 도착->출발 경우를 visited배열에 저장해서
   visited에 해당 go,back이 없으면 카운팅하는 방식으로 해결.
*/

// 다른 사람 풀이

function solution(dirs) {
  const firstPathMap = new Map();
  let now = [0, 0];
  let moved;
  for (let dir of dirs) {
    moved = move(now, dir);
    if (moved[0] < -5 || moved[0] > 5 || moved[1] < -5 || moved[1] > 5) {
      continue;
    }
    firstPathMap.set(generateKey(now, moved), true);
    now = moved;
  }

  return firstPathMap.size;
}

function move(now, dir) {
  switch (dir) {
    case "L":
      return [now[0] - 1, now[1]];
    case "R":
      return [now[0] + 1, now[1]];
    case "U":
      return [now[0], now[1] + 1];
    case "D":
      return [now[0], now[1] - 1];
  }
}

function generateKey(now, moved) {
  return `${Math.min(now[0], moved[0])},${Math.max(
    now[0],
    moved[0]
  )},${Math.min(now[1], moved[1])},${Math.max(now[1], moved[1])}`;
}
