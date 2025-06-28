class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function rotateRight(head, k) {
  if (!head || !head.next || k === 0) return head;

  // 전체 길이 계산 및 tail 노드 찾기
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  // k가 길이보다 길면 나머지 처리
  k = k % length;
  if (k === 0) return head;

  // 회전할 노드의 바로 전 노드(새로운 tail) 찾기
  let newTail = head;
  for (let i = 0; i < length - k - 1; i++) {
    newTail = newTail.next;
  }

  // 회전할 노드를 찾아서 newHead로 설정하고
  const newHead = newTail.next;
  // 새로운 tail로 만들기 위해 newTail.next에 null을 넣고
  newTail.next = null;
  // 회전할 노드의 마지막 노드(기존 tail 노드)에 뒤에 꼬리가 잘린 head를 넣어주면 끝
  tail.next = head;

  return newHead;
}

module.exports = { rotateRight };
