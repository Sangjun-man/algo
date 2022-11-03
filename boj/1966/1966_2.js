const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./test";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((str) => str.split(" ").map(Number));

const Case = input.shift();

class Node {
  constructor(v, check) {
    this.v = v;
    this.prev = null;
    this.next = null;
    this.check = check;
  }
}

class Queue {
  constructor() {
    this.s = 0;
    this.f = null;
    this.b = null;
    this.maxP = 0;
  }
  init(node) {
    this.f = node;
    this.b = node;
  }
  push(node) {
    if (this.s == 0) {
      this.init(node);
    } else {
      this.b.next = node;
      node.prev = this.b;
      this.b = node;
    }
    if (this.maxP < node.v) this.maxP = node.v;
    this.s += 1;
  }
  pop() {
    if (this.s == 0) return;
    const node = this.f;
    this.f = this.f.next;
    if (this.f?.prev) this.f.prev = null;
    this.s -= 1;
    return node;
  }
  front() {
    if (this.s == 0) return;
    return this.f;
  }
  size() {
    return this.s;
  }
}

for (let i = 0; i < Case * 2; i += 2) {
  let q = new Queue();
  let sequence = 0;
  const [N, M] = input[i];
  const Docs = input[i + 1];

  for (let j = 0; j < Docs.length; j++) {
    const v = Docs[j];
    const check = M == j;
    const node = new Node(v, check);
    q.push(node);
  }
  let x = 10;
  while (q.size() > 0 && x > 0) {
    x--;
    const popNode = q.pop();
    console.log(q.s, popNode);
    if (popNode.v < q.maxP) {
      q.push(popNode);
      console.log("다시 push", q.f, q.b);
    } else {
      sequence += 1;
      if (popNode.check) break;
    }
    console.log("sequence", sequence);
  }
  console.log("sequence", sequence);
}
