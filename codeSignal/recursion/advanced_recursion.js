function permuteUnique(nums) {
  const result = [];
  nums = nums.sort((a, b) => a - b); // 정렬을 해야 14번째 줄에서 중복이면 건너뛴다는 판단이 가능함
  const visited = Array.from({ length: nums.length }).fill(false);

  function backtrack(arr) {
    // 종료 조건
    if (arr.length === nums.length) {
      // 복사해서 저장함. arr그대로 넣으면 참조를 넣는거라 마지막에 빈배열이 들어가게 됨
      result.push([...arr]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;

      // 똑같은 숫자인데 앞에 있는 애가 안나왔으면 스킵
      if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue;

      visited[i] = true;
      arr.push(nums[i]);
      backtrack(arr);
      arr.pop();
      visited[i] = false;
    }
  }

  backtrack([]);

  console.log(result);
  return result;
}

permuteUnique([1, 2, 2]);

module.exports = { permuteUnique };
