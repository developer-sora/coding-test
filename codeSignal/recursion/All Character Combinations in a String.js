function allCombinations(s) {
  const result = [];
  s = s.split("").sort();
  const used = Array(s.length).fill(false);

  function dfs(path) {
    if (path.length > 0) {
      const str = path.join("");
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    for (let i = 0; i < s.length; i++) {
      if (used[i]) continue;
      if (i > 0 && s[i] === s[i - 1] && used[i - 1]) continue;
      used[i] = true;
      path.push(s[i]);
      dfs(path);
      path.pop();
      used[i] = false;
    }
  }

  dfs([]);

  return result;
}

module.exports = { allCombinations };
