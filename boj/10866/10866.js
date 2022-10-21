const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./test";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();

class Node {
  constructor(v) {
    this.next = null;
    this.prev = null;
    this.v = v;
  }
}

class Deck {
  constructor() {
    this.s = 0;
    this.f = null;
    this.b = null;
  }

  init(node) {
    this.f = node;
    this.b = node;
  }
  push_front(v) {
    const node = new Node(v);
    if (this.s === 0) {
      this.init(node);
    }
    node.next = this.f;
    this.f.prev = node;
    this.f = node;
    this.s += 1;
  }
  push_back(v) {
    const node = new Node(v);
    if (this.s === 0) {
      this.init(node);
    }
    node.prev = this.b;
    this.b.next = node;
    this.b = node;
    this.s += 1;
  }
  pop_front() {
    if (this.s === 0) return -1;
    const f_v = this.f.v;
    this.f = this.f.next;
    if (this.f?.prev) this.f.prev = null;
    this.s -= 1;
    return f_v;
  }
  pop_back() {
    if (this.s === 0) return -1;
    const b_v = this.b.v;
    this.b = this.b.prev;
    if (this.b?.next) this.b.next = null;
    this.s -= 1;
    return b_v;
  }
  size() {
    return this.s;
  }
  empty() {
    return this.s === 0 ? 1 : 0;
  }
  front() {
    if (this.s === 0) return -1;
    return this.f.v;
  }
  back() {
    if (this.s === 0) return -1;
    return this.b.v;
  }
}

const deck = new Deck();
const answer = [];
function switching(type, n) {
  switch (type) {
    case "push_back": {
      return deck.push_back(n);
    }
    case "push_front": {
      return deck.push_front(n);
    }
    case "pop_front": {
      return deck.pop_front();
    }
    case "pop_back": {
      return deck.pop_back();
    }
    case "front": {
      return deck.front();
    }
    case "back": {
      return deck.back();
    }
    case "empty": {
      return deck.empty();
    }
    case "size": {
      return deck.size();
    }
  }
}

for (let i = 0; i < N; i++) {
  const [type, n] = input[i].split(" ");
  const result = switching(type, n);
  //   console.log(i, type, n, result);
  if (result !== undefined) {
    answer.push(result);
  }
}

console.log(answer.join("\n"));
