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

// 모범답안

function selectionSort(arr) {
  const n = arr.length;
  for(let i = 0; i < n - 1; i++){
    let minIndex = i;
    for(let j = i + 1; j < n; j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j;
      }
    }
    [arr[i],arr[minIndex]] = [arr[minIndex], arr[i]]; 
  }

  return arr;
}

module.exports = { selectionSort };