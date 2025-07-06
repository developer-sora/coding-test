function minSteps(n) {
  const memo = {};
  memo[0] = 0;
  memo[1] = 1;
  memo[2] = 2;

  for (let i = 3; i <= n; i++) {
    if (i % 2 === 1) memo[i] = memo[i - 1] + 1;
    else memo[i] = memo[i / 2] + 1;
  }

  return memo[n];
}

module.exports = { minSteps };
