function solution(X, Y) {
  const Arr = [];
  const XArr = X.split("");
  const YArr = Y.split("");
  let Xcount = 0;
  let Ycount = 0;
  for (let i = 0; i <= 9; i++) {
    if (X.includes(i + "") && Y.includes(i + "")) {
      Xcount = 0;
      Ycount = 0;
      for (let j = 0; j < XArr.length; j++) {
        if (XArr[j] === i + "") Xcount++;
      }
      for (let k = 0; k < YArr.length; k++) {
        if (YArr[k] === i + "") Ycount++;
      }
      if (Xcount === 1 || Ycount === 1) {
        Arr.push(i + "");
      } else if (Xcount > 1 && Ycount > 1) {
        let min = Math.min(Xcount, Ycount);
        for (let x = 0; x < min; x++) {
          Arr.push(i + "");
        }
      }
    }
  }
  const answer = Arr.length ? Arr.sort((a, b) => b - a).join("") : "-1";
  return answer[0] === "0" ? "0" : answer;
}

// 다른 사람 풀이

const solution = (x, y) => {
  let result = "";
  const map = new Map();
  for (let i = 0; i < y.length; i++) {
    map.set(y[i], (map.get(y[i]) || 0) + 1);
    // map.set(key, value);
    // map.get(key) => key에 해당하는 값 반환, 없으면 undefined
  }

  for (let i = 0; i < x.length; i++) {
    if (map.get(x[i]) >= 1) {
      map.set(x[i], (map.get(x[i]) || 0) - 1);
      result += x[i];
    }
  }

  if (result.length < 1) return "-1";
  return +result === 0
    ? "0"
    : result
        .split("")
        .sort((a, b) => b - a)
        .join("");
};
