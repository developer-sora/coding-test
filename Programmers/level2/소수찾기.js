function solution(numbers) {
  let count = 0;
  let Arr = [];

  // 소수 찾는 함수
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  // 경우의 수
  const mergeNumbers = (arr, str) => {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        let tmp = [...arr];
        tmp.splice(i, 1);
        mergeNumbers(tmp, str + arr[i]);
      }
    }
    if (str.length > 0) {
      if (!Arr.includes(+str)) Arr.push(+str);
    }
  };

  mergeNumbers(numbers, "");

  for (let i = 0; i < Arr.length; i++) {
    if (isPrime(Arr[i])) count++;
  }

  return count;
}
