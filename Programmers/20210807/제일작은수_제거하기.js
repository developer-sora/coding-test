/* 문제 설명
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 
단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

제한 조건
- arr은 길이 1 이상인 배열입니다.
- 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.*/

function solution(arr) {
  const arr2 = [...arr]; // 배열 복사
  const min = arr2.sort((a, b) => a - b).shift(); // 복사한 배열을 정렬, 제일 앞에있는 수 제거한 값 return (shift())
  const answer = arr.filter((v = v !== min)); // 가장 작은 수를 제거한 새로운 배열 answer에 저장

  return answer.length > 0 ? answer : [-1]; // answer의 길이가 0이상이면 answer배열 리턴, 아니면 -1 리턴
}

// 다른 사람 풀이(시간 단축)

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length < 1 ? [-1] : arr;
}
