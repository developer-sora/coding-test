const fs = require("fs");
const [N, ...arr] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\n")
  .map(Number);

class Heap {
  constructor() {
    this.heap = [];
  }
  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIdx = Math.floor((index - 1) / 2);
    while (parentIdx >= 0 && this.heap[parentIdx] > this.heap[index]) {
      this.swap(index, parentIdx);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }
  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
  poll() {
    if (this.heap.length === 0) {
      return 0;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const rootNode = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return rootNode;
  }
  bubbleDown() {
    let index = 0;
    let leftChildIdx = index * 2 + 1;
    let rightChildIdx = index * 2 + 2;
    while (
      (this.heap[leftChildIdx] && this.heap[leftChildIdx] < this.heap[index]) ||
      (this.heap[rightChildIdx] && this.heap[rightChildIdx] < this.heap[index])
    ) {
      let smallerIdx = leftChildIdx;
      if (
        this.heap[rightChildIdx] &&
        this.heap[leftChildIdx] > this.heap[rightChildIdx]
      ) {
        smallerIdx = rightChildIdx;
      }
      this.swap(index, smallerIdx);
      index = smallerIdx;
      leftChildIdx = index * 2 + 1;
      rightChildIdx = index * 2 + 2;
    }
  }
}

const heap = new Heap();
const answer = [];

for (const num of arr) {
  if (num === 0) {
    answer.push(heap.poll());
  } else {
    heap.add(num);
  }
}

console.log(answer.join("\n"));
