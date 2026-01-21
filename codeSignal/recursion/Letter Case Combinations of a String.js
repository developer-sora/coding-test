function solution(s) {
  const result = [];
  // 65~90 대문자
  // 97~122 소문자

  function recursion(path, index) {
    if (index === s.length) {
      result.push(path);
      return;
    }

    const ch = s[index];
    const code = s[index].charCodeAt();

    if (code >= 65 && code <= 90) {
      recursion(path + ch.toLowerCase(), index + 1);
      recursion(path + ch, index + 1);
    } else if (code >= 97 && code <= 122) {
      recursion(path + ch, index + 1);
      recursion(path + ch.toUpperCase(), index + 1);
    } else {
      recursion(path + ch, index + 1);
    }
  }
  recursion("", 0);

  return result;
}

module.exports = { solution };
