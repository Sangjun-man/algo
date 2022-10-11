const fs = require("fs");
const inputData = fs.readFileSync("./test").toString().trim();

const input = parseInt(inputData);

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkdedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(node) {
    const newNode = node;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length += 1;
    }
  }
  shift() {
    const shiftNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return shiftNode;
  }
}
const card = new LinkdedList();
for (let i = 1; i <= input; i++) {
  const newNode = new Node(i);
  card.push(newNode);
}
while (card.length > 1) {
  card.shift();
  const first = card.shift();
  card.push(first);
}

console.log(card.head.value);
