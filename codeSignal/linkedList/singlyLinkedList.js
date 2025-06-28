class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 가장 마지막에 요소 넣기
  push(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  // 가장 마지막 요소 제거
  pop() {
    if (this.head === null) {
      return;
    }

    let current = this.head;
    let prev = current;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  // 가장 앞에 요소 제거
  shift() {
    if (this.head === null) {
      return;
    }

    let shiftHead = this.head;
    this.head = shiftHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return shiftHead;
  }

  // 가장 앞에 요소 넣기
  unshift(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // 주어진 인덱스에 맞는 노드 반환
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // 주어진 인덱스의 노드 수정
  set(index, val) {
    let current = this.get(index);
    if (current === null) return false;
    current.val = val;
    return true;
  }

  // 주어진 인덱스의 위치에 노드 삽입
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }

    let prev = this.get(index - 1);
    let cur = prev.next;
    const newNode = new Node(val);

    prev.next = newNode;
    newNode.next = cur;
    this.length++;

    return true;
  }

  // 주어진 인덱스에 있는 노드 제거
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      return this.shift();
    }

    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  // 노드의 순서 뒤집기
  reverse() {
    if (this.length === 0) return this;

    let curNode = this.head;
    this.head = this.tail;
    this.tail = curNode;
    let prevNode = null;
    let nextNode;

    while (nextNode !== null) {
      nextNode = curNode.next;
      curNode.next = prevNode;
      prevNode = curNode;
      curNode = nextNode;
    }

    return this;
  }
}

const temp = new SinglyLinkedList();

temp.push("HELLO");
temp.push("HI");
temp.push("ABC");

console.log(temp.reverse());
