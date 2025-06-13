function selectionSort(arr) {
  const answer = [];
  const visited = Array.from({ length: arr.length }).fill(false);

  while (answer.length < arr.length) {
    let min = Number.MAX_SAFE_INTEGER;
    let minIndex = 0;
    for (let i = 0; i < arr.length; i++) {
      if (min > arr[i] && !visited[i]) {
        min = arr[i];
        minIndex = i;
      }
    }
    answer.push(min);
    visited[minIndex] = true;
  }
  return answer;
}

module.exports = { selectionSort };
