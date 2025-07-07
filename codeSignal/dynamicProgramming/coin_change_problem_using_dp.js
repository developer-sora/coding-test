function coinChange(coins, amount) {
  const ways = Array.from({ length: amount + 1 }).fill(0);
  ways[0] = 1;

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      // 'i'원을 만들기 위한 조합은 'i - coin'원을 만들수 있는 모든 경우에 coin을 하나 더 붙이면 만들어짐
      ways[i] += ways[i - coin];
    }
  }

  return ways[amount];
}

module.exports = { coinChange };
