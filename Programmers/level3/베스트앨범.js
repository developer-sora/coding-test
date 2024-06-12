function solution(genres, plays) {
  const map = new Map();
  const answer = [];

  // map에 총 재생시간(all_plays)이랑 재생횟수 배열(plays_arr) 저장
  for (let i = 0; i < genres.length; i++) {
    let plays_arr = map.get(genres[i])?.plays_arr || [];
    plays_arr.push(plays[i]);
    map.set(genres[i], {
      all_plays: (map.get(genres[i])?.all_plays || 0) + plays[i],
      plays_arr,
    });
  }

  // map을 총 재생시간이 긴 순서대로 정렬시킴
  let mapToArray = Array.from(map);
  let sortedArray = mapToArray.sort((a, b) => b[1].all_plays - a[1].all_plays);
  let arrayToMap = new Map(sortedArray);

  // 재생횟수 배열을 재생횟수가 긴 순서대로 정렬시켜서 index를 찾음(고유번호), 같은 재생횟수일 경우 index가 겹칠수 있으니 index에 0넣어줌.
  for (const value of arrayToMap.values()) {
    const sorted_plays_arr = value.plays_arr.sort((a, b) => b - a);
    answer.push(plays.indexOf(sorted_plays_arr[0]));
    plays[plays.indexOf(sorted_plays_arr[0])] = 0;
    if (plays.indexOf(sorted_plays_arr[1]) !== -1) {
      answer.push(plays.indexOf(sorted_plays_arr[1]));
      plays[plays.indexOf(sorted_plays_arr[1])] = 0;
    }
  }

  return answer;
}

// 다른 사람 풀이

function solution(genres, plays) {
  var dic = {};

  genres.forEach((genre, i) => {
    dic[genre] = dic[genre] ? dic[genre] + plays[i] : plays[i];
  });

  var dupDic = {};

  return genres
    .map((genre, i) => ({ genre, count: plays[i], index: i }))
    .sort((a, b) => {
      if (a.genre !== b.genre) return dic[b.genre] - dic[a.genre]; // 장르가 다르면 재생횟수 많은 순서대로 정렬
      if (a.count !== b.count) return b.count - a.count; // 재생횟수가 다르면 재생횟수 많은 순서 대로 정렬?
      return a.index - b.index; // 고유번호 낮은 순서대로 정렬
    })
    .filter((t) => {
      if (dupDic[t.genre] >= 2) return false;
      dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1;
      return true;
    })
    .map((t) => t.index);
}
