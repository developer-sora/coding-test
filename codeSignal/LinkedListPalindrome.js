class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function isPalindrome(head) {
  if (head.next === null) {
    return true;
  }
  let slow = head;
  let fast = head;
  const stack = [];

  while (fast !== null && fast.next !== null) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast !== null) {
    slow = slow.next;
  }

  while (slow !== null) {
    let prevVal = stack.pop();
    if (prevVal !== slow.val) {
      return false;
    }
    slow = slow.next;
  }

  return true;
}

module.exports = { ListNode, isPalindrome };
