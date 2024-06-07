function solution(m, musicinfos) {
  let answer = "(None)";

  // 음표 대치
  let replaceWordTemp = {
    C: "1",
    "C#": "2",
    D: "3",
    "D#": "4",
    E: "5",
    F: "6",
    "F#": "7",
    G: "8",
    "G#": "9",
    A: "A",
    "A#": "B",
    B: "C",
  };

  // 음표 대치 함수
  function replaceWord(word) {
    return replaceWordTemp[word];
  }

  let replace_m = "";
  let play_time_max = 0;

  // 네오가 기억한 멜로디 대치
  for (let i = 0; i < m.length; i++) {
    if (m[i + 1] === "#") {
      replace_m += replaceWord(m[i] + m[i + 1]);
      i++;
    } else {
      replace_m += replaceWord(m[i]);
    }
  }

  for (let i = 0; i < musicinfos.length; i++) {
    let [start_time, finish_time, title, sheet] = musicinfos[i].split(",");
    let [start_time_hour, start_time_minute] = start_time
      .split(":")
      .map(Number);
    let [finish_time_hour, finish_time_minute] = finish_time
      .split(":")
      .map(Number);
    start_time = start_time_hour * 60 + start_time_minute;
    finish_time = finish_time_hour * 60 + finish_time_minute;
    // 재생시간
    let play_time = finish_time - start_time;
    let index = 0;
    let replace_sheet = "";

    // 재생시간만큼 음 반복시키기
    for (let i = 0; i < play_time; i++) {
      // 한곡이 완주되면 처음부터 반복해서 재생
      if (index === sheet.length) index = 0;
      if (sheet[index + 1] === "#") {
        replace_sheet += replaceWord(sheet[index++] + sheet[index++]);
      } else {
        replace_sheet += replaceWord(sheet[index++]);
      }
    }

    // 만약 해당 곡에 네오가 기억한 멜로디가 포함되면
    if (replace_sheet.includes(replace_m)) {
      // 재생 시간이 더 긴 경우, 재생 시간이 같으면 이전 곡
      if (play_time_max < play_time) {
        play_time_max = play_time;
        // 해당 곡의 제목을 answer에 넣음
        answer = title;
      }
    }
  }

  return answer;
}

// 다른 사람 풀이. javascript 함수를 잘 쓰는군..!!
const solution = (m, musicInfos) => {
  let answer = "";

  musicInfos = musicInfos.map((e) => {
    let eArr = e.split(",");

    // 시간계산하는거!!
    let timeDiff =
      (new Date(`1970-01-01 ${eArr[1]}:00`) -
        new Date(`1970-01-01 ${eArr[0]}:00`)) /
      60000;

    // #달린거는 소문자로 표기!
    let melody = eArr[3].replace(/[A-Z]#/g, (m) => m[0].toLowerCase());

    // 멜로디 반복
    melody = melody
      .repeat(Math.ceil(timeDiff / melody.length))
      .substr(0, timeDiff); // 재생 시간이 곡보다 짧은 경우 자르는 용도

    return `${timeDiff},${eArr[2]},${melody}`;
  });

  // 재생시간이 긴 순대로 정렬
  musicInfos.sort((a, b) => b.split(",")[0] - a.split(",")[0]);

  // melody에 m이 들어간 배열만 반환
  answer = musicInfos.filter(
    (e) =>
      e
        .split(",")[2]
        .indexOf(m.replace(/[A-Z]#/g, (m) => m[0].toLowerCase())) != -1
  );

  return answer.length == 0 ? "(None)" : answer[0].split(",")[1];
};
