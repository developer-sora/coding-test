class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function removeDuplicates(head) {
  const visited = [];

  let prevNode = null;
  let curNode = head;

  while (curNode) {
    if (visited.includes(curNode.val)) {
      prevNode.next = curNode.next;
      curNode = curNode.next;
    } else {
      visited.push(curNode.val);
      prevNode = curNode;
      curNode = curNode.next;
    }
  }
  return head;
}

module.exports = { ListNode, removeDuplicates };
