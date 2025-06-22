class ListNode {
  constructor(value = 0, next = null) {
    this.value = value; // Holds the value or data of the node
    this.next = next; // Points to the next node in the linked list; default is null
  }
}

function swapLinkedListNodes(head, start, end) {
  if (start === end) return head;

  let { startPrevNode, endPrevNode } = getPrevNodes(head, start, end);
  let startNode = startPrevNode === null ? head : startPrevNode.next;
  let startNextNode = startNode.next;
  let endNode = endPrevNode.next;
  let endNextNode = endNode.next;

  if (startPrevNode === null) {
    head = endNode;
  } else {
    startPrevNode.next = endNode;
  }

  endNode.next = startNextNode;
  endPrevNode.next = startNode;
  startNode.next = endNextNode;

  return head;
}

function getPrevNodes(head, start, end) {
  let currentNode = head;
  let curIndex = 0;
  let startPrevNode = null;
  let endPrevNode = null;

  while (currentNode) {
    if (curIndex === start - 1) startPrevNode = currentNode;
    if (curIndex === end - 1) {
      endPrevNode = currentNode;
      break;
    }
    currentNode = currentNode.next;
    curIndex++;
  }

  return { startPrevNode, endPrevNode };
}

module.exports = { swapLinkedListNodes, ListNode };
