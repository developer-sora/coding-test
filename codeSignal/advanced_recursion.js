function permuteUnique(nums) {
  const result = [];
  nums = nums.sort((a, b) => a - b);
  const visited = Array.from({ length: nums.length }).fill(false);

  function backtrack(arr) {
    if (arr.length === nums.length) {
      result.push([...arr]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;

      if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue;

      visited[i] = true;
      arr.push(nums[i]);
      backtrack(arr);
      arr.pop();
      visited[i] = false;
    }
  }

  backtrack([]);

  return result;
}

permuteUnique([1, 2, 2]);

module.exports = { permuteUnique };
