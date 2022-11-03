const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./test";
const input = fs.readFileSync(filePath).toString().split("\n");

const Case = parseInt(input.shift());
// let print = new Array(Case).fill();
// for (let i = 0; i < Case; i++) {
//   print[i] = [[], []];
// }

// for (let i = 0; i < Case * 2; i++) {
//   const p = Math.floor(i / 2);
//   const p2 = i % 2;
//   const splited = input[i].split(" ").map(Number);
//   print[p][p2] = splited;
// }

//left<right
class Node {
  v = 0;
  prev = null;
  next = null;
  check = false;
  constructor(x) {
    this.v = x;
  }
}
class Queue {
  f = null;
  b = null;
  s = 0;
  priority = [];
  pindex = 0;

  psort(v) {
    for (let i = 0; i - 1 < this.s; i++) {
      if (this.priority[i] <= v) {
        this.priority = [
          ...this.priority.slice(0, i),
          v,
          ...this.priority.slice(i, this.s),
        ];
        return;
      }
    }
    this.priority.push(v);
    // this.priority.sort((a, b) => b - a);
  }

  push(node) {
    if (!this.s) {
      this.f = node;
      this.b = node;
      this.priority.push(node.v);
    } else {
      this.b.next = node;
      node.prev = this.b;
      this.b = node;
      this.psort(node.v);
    }
    this.s++;
    return;
  }
  pop() {
    if (!this.s) return;
    const node = this.f;
    if (this.s == 1) {
      this.b = null;
      this.f = null;
      this.s = 0;
    } else {
      this.f = this.f.next;
      this.f.prev = null;
      this.s--;
    }
    return node;
  }

  get getPriority() {
    return this.priority[this.pindex];
  }
}

for (let i = 0; i < Case * 2; i += 2) {
  let list = [];

  const [N, M] = input[i].split(" ").map(Number);
  const DocList = input[i + 1].split(" ").map(Number);
  const queue = new Queue();
  let answer;
  for (let j = 0; j < DocList.length; j++) {
    const v = DocList[j];
    const node = new Node(v);
    if (j == M) {
      node.check = true;
    }
    queue.push(node);
  }

  while (!answer) {
    const node = queue.pop();
    const priority = queue.getPriority;

    if (priority == node.v) {
      list.push(node.v);
      if (node.check) {
        break;
      }
      queue.pindex++;
    } else {
      queue.push(node);
    }
  }
  console.log(list.length);
}
