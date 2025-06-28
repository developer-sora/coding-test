class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

// 사이클이 있다면 리스트는 무한 루프 처럼 돌아감 (이전 노드를 참고하기 때문)
// 그래서 한 번에 한 칸씩 이동하는 slow와 두 칸씩 이동하는 fast를 움직이게 하면 fast는 언젠가 slow를 따라잡음
// 사이클이 없으면 fast는 null에 도달, false 리턴
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
}

module.exports = { ListNode, hasCycle };
