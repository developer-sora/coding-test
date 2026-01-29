function solution(words) {
  const result = [];

  function dfs(path, index) {
    if (path.length === words.length) {
      result.push(path);
      return;
    }
    for (let i = 0; i < words[index].length; i++) {
      dfs(path + words[index][i], index + 1);
    }
  }

  dfs("", 0);
  return result.sort();
}

module.exports = { solution };
