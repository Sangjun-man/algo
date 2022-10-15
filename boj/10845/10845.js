const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./test";

const input = fs.readFileSync(filePath).toString().split("\n");

const N = input.shift();

class Node {
  value = 0;
  prev = null;
  next = null;
  constructor(x, pNode = null, nNode = null) {
    this.value = x;
    this.prev = pNode;
    this.next = nNode;
  }
  setPrev(Node) {
    prev = Node;
  }
  setNext(Node) {
    next = Node;
  }
}

class Queue {
  f = null;
  b = null;
  s = 0;

  push(x) {
    const xNode = new Node(x);
    if (!this.s) {
      this.f = xNode;
      this.b = xNode;
      this.s += 1;
      return;
    }
    this.b.next = xNode;
    xNode.prev = this.b;
    this.b = xNode;
    this.s += 1;
  }
  size() {
    return this.s;
  }
  empty() {
    return this.s ? 0 : 1;
  }
  front() {
    return this.s ? this.f.value : -1;
  }
  back() {
    return this.s ? this.b.value : -1;
  }
  pop() {
    if (!this.s) return -1;
    const fValue = this.f.value;
    if (this.s == 1) {
      this.f = null;
      this.b = null;
    } else {
      this.f = this.f.next;
      this.f.prev = null;
    }
    this.s -= 1;
    return fValue;
  }
}

const queue = new Queue();
const answer = [];
for (let i = 0; i < N; i++) {
  let command = input[i];
  const [type, num] = command.split(" ");
  switch (type) {
    case "push": {
      queue.push(parseInt(num));
      continue;
    }
    default: {
      answer.push(queue[type]());
      continue;
    }
  }
}

console.log(answer.join("\n"));
