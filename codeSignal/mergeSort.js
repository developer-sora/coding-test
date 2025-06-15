function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  const arr = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) {
    arr.push(...arr1.slice(i));
  }

  if (j < arr2.length) {
    arr.push(...arr2.slice(j));
  }

  return arr;
}

module.exports = { mergeSort };
