function generateParentheses(n) {
  const result = [];

  function dfs(current, open, close) {
    if (current.length === n * 2) {
      result.push(current);
      return;
    }
    if (open < n) {
      dfs(current + "(", open + 1, close);
    }

    if (close < open) {
      dfs(current + ")", open, close + 1);
    }
  }

  dfs("", 0, 0);

  return n === 0 ? [] : result;
}

module.exports = { generateParentheses };
