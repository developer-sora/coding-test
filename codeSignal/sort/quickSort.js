// 항상 처음 값을 피벗으로 사용
function quicksortCustom(arr, left = 0, right = arr.length) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quicksortCustom(arr, left, pivotIndex);
    quicksortCustom(arr, pivotIndex + 1, right);
  }

  return arr;
}

function pivot(arr, start = 0, end = arr.length) {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
    }
  }

  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];

  return swapIdx;
}

module.exports = { quicksortCustom };

// 중간 값을 피벗으로 사용
function quicksortCustom(arr, left = 0, right = arr.length) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quicksortCustom(arr, left, pivotIndex);
    quicksortCustom(arr, pivotIndex + 1, right);
  }

  return arr;
}

function pivot(arr, start = 0, end = arr.length) {
  let mid = Math.floor((start + end) / 2);
  let pivot = arr[mid];
  let swapIdx = start;

  // 피벗을 맨 앞에 위치시킴
  [arr[start], arr[mid]] = [arr[mid], arr[start]];

  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
    }
  }

  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];

  return swapIdx;
}
